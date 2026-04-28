#!/usr/bin/env node
const fs = require('fs-extra');
const yaml = require('js-yaml');
const glob = require('glob');
const path = require('path');
const { resolve: resolvePath, writeFile, root } = require('../utils');
const { toVue2, toVue3 } = require('./intact2vue');
const intact2react = require('./intact2react');

const DEST = resolvePath('./docs/structured');

// ─── YAML Front Matter ───────────────────────────────────────────────
function parseYaml(content) {
    let metadata = {};
    const body = content.replace(
        /---\s*[\n\r]+\s*((?:.|\n|\r)*?)[\n\r]+---/,
        (_, matched) => {
            metadata = yaml.load(matched) || {};
            return '';
        }
    );
    return { metadata, body };
}

// ─── Section Types ───────────────────────────────────────────────────
const SECTION_MAP = {
    '属性': 'props',
    '扩展点': 'slots',
    '事件': 'events',
    '方法': 'methods',
    '静态方法': 'staticMethods',
};

// ─── Table Parsing ───────────────────────────────────────────────────
function isMarkdownTableRow(line) {
    return /^\|.+\|?\s*$/.test(line);
}

function isMarkdownTableSeparator(line) {
    return /^\|[\s\-:\|]+\|?\s*$/.test(line) && /---/.test(line);
}

function parseMarkdownTables(text) {
    const tables = [];
    const lines = text.split('\n');
    let i = 0;

    while (i < lines.length) {
        // Look for a table row (starts with |, has content, ends with | optionally followed by whitespace)
        const line = lines[i].trimEnd();
        const matches = isMarkdownTableRow(line);
        if (matches) {
            const nextLine = i + 1 < lines.length ? lines[i + 1].trimEnd() : '';
            // Separator: starts/ends with |, contains only pipes/dashes/colons/spaces, and has ---
            const isSeparator = isMarkdownTableSeparator(nextLine);
            if (isSeparator) {
                const tableBlock = [line, nextLine];
                i += 2;
                // Collect body rows (trim trailing whitespace)
                while (i < lines.length) {
                    const bodyLine = lines[i].trimEnd();
                    if (isMarkdownTableRow(bodyLine)) {
                        tableBlock.push(bodyLine);
                        i++;
                    } else {
                        break;
                    }
                }
                if (tableBlock.length >= 3) {
                    tables.push(tableBlock);
                }
                continue;
            }
        }
        i++;
    }

    return tables.map(parseTableBlock);
}

function parseTableBlock(block) {
    const header = parseRow(block[0]);
    const rows = block.slice(2).map(parseRow);

    return {
        header,
        rows,
        raw: block.join('\n'),
    };
}

function parseRow(line) {
    // Protect escaped pipes before splitting by column delimiter
    // Replace \| and &#124; with a placeholder, then restore after split
    const PLACEHOLDER = '\x00KPCPIPE\x00';
    const protected_ = line
        .replace(/\\\|/g, PLACEHOLDER)
        .replace(/&#124;/g, PLACEHOLDER);

    const cells = protected_
        .replace(/^[\s]*\|/, '')
        .replace(/\|[\s]*$/, '')
        .split('|')
        .map(cell => cell.trim())
        .map(cell => cell.replace(/\x00KPCPIPE\x00/g, '|'))
        .map(cleanCell);

    return cells;
}

function cleanCell(text) {
    return text
        .replace(/&#124;/g, '|')
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<code>(.*?)<\/code>/g, '$1')
        .replace(/`(.*?)`/g, '$1')
        .replace(/\\(.)/g, '$1')
        .trim();
}

function removeMarkdownTables(text) {
    const lines = text.split('\n');
    const kept = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i].trimEnd();
        const nextLine = i + 1 < lines.length ? lines[i + 1].trimEnd() : '';
        const isTableStart = isMarkdownTableRow(line);
        const isSeparator = isMarkdownTableSeparator(nextLine);

        if (isTableStart && isSeparator) {
            i += 2;
            while (i < lines.length && isMarkdownTableRow(lines[i].trimEnd())) {
                i++;
            }
            continue;
        }

        kept.push(lines[i]);
        i++;
    }

    return kept.join('\n');
}

function normalizeTextBlock(text) {
    return text
        .replace(/\n{3,}/g, '\n\n')
        .trim();
}

function normalizePlaceholder(value) {
    if (value == null) return '';
    const text = String(value).trim();
    if (text === '-' || text === '—') return '';
    return text;
}

// ─── Section-based table collection ─────────────────────────────────
function mapTableRows(header, rows) {
    return rows.map(row => {
        const obj = {};
        header.forEach((col, idx) => {
            obj[col] = row[idx] !== undefined ? row[idx] : '';
        });
        return obj;
    });
}

function isCompatibleTable(type, table) {
    const headers = new Set(table.header);
    switch (type) {
        case 'props':
            return headers.has('属性');
        case 'events':
            return headers.has('事件名') || headers.has('事件');
        case 'methods':
        case 'staticMethods':
            return headers.has('方法名') || headers.has('方法') || headers.has('静态方法名');
        case 'slots':
            return headers.has('名称');
        default:
            return false;
    }
}

// ─── Split by Headings ──────────────────────────────────────────────
function splitByHeadings(body) {
    const sections = []; // { level, title, subTitle, content }
    const lines = body.split('\n');
    let currentSection = null;
    let currentSubSection = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const h1Match = line.match(/^#\s+(.+)/);
        const h2Match = line.match(/^##\s+(.+)/);

        if (h1Match) {
            // Finalize previous section
            if (currentSection) {
                finalizeSubSection(currentSection, currentSubSection);
                sections.push(currentSection);
            }
            const title = h1Match[1].trim();
            currentSection = {
                level: 1,
                title,
                type: SECTION_MAP[title] || 'unknown',
                subComponents: [],
            };
            // Start a default sub-section (for content without ## headings)
            currentSubSection = { name: '', content: [] };
        } else if (h2Match) {
            // Finalize previous sub-section (including default one)
            if (currentSubSection) {
                finalizeSubSection(currentSection, currentSubSection);
            }
            const title = h2Match[1].trim();
            currentSubSection = { name: title, content: [] };
        } else if (currentSection && currentSubSection) {
            currentSubSection.content.push(line);
        }
    }

    // Finalize last
    if (currentSection) {
        finalizeSubSection(currentSection, currentSubSection);
        sections.push(currentSection);
    }

    return sections;
}

function finalizeSubSection(section, subSection) {
    if (subSection) {
        const text = subSection.content.join('\n').trim();
        const tables = parseMarkdownTables(text);
        const content = normalizeTextBlock(removeMarkdownTables(text));
        if (tables.length > 0 || subSection.name !== '' || content) {
            section.subComponents.push({
                name: subSection.name,
                tables,
                content,
            });
        }
    }
}

// ─── Extract Code Blocks ────────────────────────────────────────────
function extractCodeBlocks(text) {
    const blocks = [];
    const regex = /```(\S*)\s*\n([\s\S]*?)```/g;
    let match;
    while ((match = regex.exec(text)) !== null) {
        const language = match[1].trim();
        let code = match[2];
        let filename = null;
        let ignored = false;
        let example = false;

        // Check for @code annotation (skip this block)
        if (code.match(/^\/\/ @code/)) {
            ignored = true;
            code = code.replace(/^\/\/ @code\n?/, '');
        } else if (code.match(/^\/\/ @file ([^\s]+)/)) {
            const fileMatch = code.match(/^\/\/ @file ([^\s]+)/);
            filename = fileMatch[1];
            code = code.substring(code.indexOf('\n') + 1);
        }

        // Check example language (example-ts, example-vdt, etc.)
        const exampleReg = /^example-?/;
        if (exampleReg.test(language)) {
            example = true;
        }

        blocks.push({
            language,
            code: code.trim(),
            filename,
            ignored,
            example,
        });
    }
    return blocks;
}

// ─── Process Component Doc (index.md) ───────────────────────────────
function parseComponentDoc(mdPath) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const { metadata, body } = parseYaml(content);

    const sections = splitByHeadings(body);

    // Derive default subComponent name from folder name (PascalCase)
    const dirname = path.basename(path.dirname(path.relative(root, mdPath)));
    const defaultName = dirname.charAt(0).toUpperCase() + dirname.slice(1);

    const result = {
        title: metadata.title || '',
        category: metadata.category || '',
        order: metadata.order || 0,
        subComponents: [],
    };

    for (const section of sections) {
        const type = section.type;
        if (type === 'unknown') continue;

        for (const sub of section.subComponents) {
            const name = sub.name || defaultName;
            let target = result.subComponents.find(s => s.name === name);
            if (!target) {
                target = { name };
                result.subComponents.push(target);
            }

            if (!target[type]) {
                target[type] = [];
            }

            const markdownParts = [];
            if (sub.content) {
                markdownParts.push(sub.content);
            }

            for (const table of sub.tables) {
                if (!isCompatibleTable(type, table)) {
                    markdownParts.push(table.raw);
                    continue;
                }

                const mappedRows = mapTableRows(table.header, table.rows);
                for (const row of mappedRows) {
                    // Normalize keys
                    const normalized = normalizeRow(type, row);
                    if (normalized) {
                        target[type].push(normalized);
                    }
                }
            }

            if (markdownParts.length) {
                const markdownKey = `${type}Markdown`;
                const markdown = normalizeTextBlock(markdownParts.join('\n\n'));
                target[markdownKey] = target[markdownKey]
                    ? `${target[markdownKey]}\n\n${markdown}`
                    : markdown;
            }
        }
    }

    return result;
}

function normalizeRow(type, row) {
    switch (type) {
        case 'props':
            return {
                name: row['属性'] || '',
                description: row['说明'] || '',
                type: row['类型'] || '',
                default: row['默认值'] || '',
            };
        case 'events':
            return {
                name: row['事件名'] || row['事件'] || '',
                description: row['说明'] || '',
                params: normalizePlaceholder(row['参数']),
            };
        case 'methods':
            return {
                name: row['方法名'] || row['方法'] || '',
                description: row['说明'] || '',
                params: normalizePlaceholder(row['参数']),
                returns: normalizePlaceholder(row['返回值']),
            };
        case 'staticMethods':
            return {
                name: row['方法名'] || row['方法'] || row['静态方法名'] || '',
                description: row['说明'] || '',
                params: normalizePlaceholder(row['参数']),
                returns: normalizePlaceholder(row['返回值']),
            };
        case 'slots':
            const slot = {
                name: row['名称'] || '',
                description: row['说明'] || '',
            };
            const params = normalizePlaceholder(row['参数']);
            if (params) {
                slot.params = params;
            }
            return slot;
        default:
            return null;
    }
}

// ─── Process Demo File (demos/*.md) ─────────────────────────────────
function parseDemoFile(mdPath, componentId) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const { metadata, body } = parseYaml(content);

    const codeBlocks = extractCodeBlocks(body);
    const description = extractDescription(body);

    // Separate code blocks by type
    let vdtCode = '';
    let tsCode = '';
    let stylCode = '';
    let hasVue = false;
    let hasVue3 = false;
    let hasReact = false;
    let hasStylus = false;

    // Snippet map (like parse.js's codeSnippetMap)
    const snippets = {
        vueScript: null,
        vueTemplate: null,
        vueNextTemplate: null,
        vueData: null,
        vueMethods: null,
        reactMethods: null,
        tsHead: null,
    };

    // Manual overrides
    let manualVue = [];  // hand-written vue blocks
    let manualVue3 = []; // hand-written vue3 blocks
    let manualReact = []; // hand-written react blocks

    for (const block of codeBlocks) {
        if (block.ignored) continue;
        if (block.example) continue;

        const { language, code } = block;

        if (language === 'vdt') {
            vdtCode = code;
        } else if (language === 'ts' && !block.filename) {
            tsCode = code;
        } else if (language === 'styl') {
            stylCode = code;
            hasStylus = true;
        } else if (language === 'vue') {
            hasVue = true;
            manualVue.push(code);
        } else if (language === 'vue3') {
            hasVue3 = true;
            manualVue3.push(code);
        } else if (language === 'tsx' || language === 'react') {
            hasReact = true;
            manualReact.push(code);
        }

        // Snippet languages
        const snippetKeys = {
            'vue-script': 'vueScript',
            'vue-template': 'vueTemplate',
            'vue-next-template': 'vueNextTemplate',
            'vue-data': 'vueData',
            'vue-methods': 'vueMethods',
            'react-methods': 'reactMethods',
            'ts-head': 'tsHead',
        };
        if (snippetKeys[language]) {
            snippets[snippetKeys[language]] = code;
        }
    }

    // Auto-generate minimal TS if missing (same logic as parse.js)
    if (!tsCode && vdtCode) {
        tsCode = [
            `import {Component} from 'intact';`,
            `import template from './index.vdt';`,
            hasStylus ? `import './index.styl'; \n` : '',
            `export default class extends Component {`,
            `    static template = template;`,
            `}`,
        ].join('\n');
    }

    // Compile codes
    let vue2Compiled = '';
    let vue3Compiled = '';
    let reactCompiled = '';

    try {
        if (!hasVue && vdtCode && tsCode) {
            vue2Compiled = toVue2(
                vdtCode, tsCode,
                snippets.vueScript, snippets.vueTemplate,
                snippets.vueMethods, snippets.vueData,
                snippets.tsHead, hasStylus
            );
        } else if (hasVue) {
            vue2Compiled = manualVue.join('\n');
        }

        if (hasVue3) {
            vue3Compiled = manualVue3.join('\n');
        } else if (vdtCode && tsCode) {
            vue3Compiled = toVue3(
                vdtCode, tsCode,
                snippets.vueScript, snippets.vueTemplate,
                snippets.vueMethods, snippets.vueData,
                snippets.tsHead, hasStylus
            );
        } else if (hasVue) {
            vue3Compiled = manualVue.join('\n');
        }

        if (!hasReact && vdtCode && tsCode) {
            reactCompiled = intact2react(
                vdtCode, tsCode,
                snippets.reactMethods, snippets.tsHead, hasStylus
            );
        } else if (hasReact) {
            reactCompiled = manualReact.join('\n');
        }
    } catch (e) {
        console.error(`  [!] Error compiling codes for: ${mdPath}`);
        console.error(`      ${e.message}`);
    }

    return {
        title: metadata.title || '',
        order: metadata.order || 0,
        description,
        codes: {
            vdt: vdtCode,
            ts: tsCode,
            styl: stylCode,
            vue2: vue2Compiled,
            vue3: vue3Compiled,
            react: reactCompiled,
        },
    };
}

function extractDescription(body) {
    const lines = body.split('\n');
    const kept = [];
    let inFence = false;
    let fenceQuoted = false;

    for (const line of lines) {
        const fenceMatch = line.match(/^(>\s*)?```/);
        if (fenceMatch) {
            const isQuoted = !!fenceMatch[1];
            if (!inFence) {
                inFence = true;
                fenceQuoted = isQuoted;
            } else if (fenceQuoted === isQuoted) {
                inFence = false;
                fenceQuoted = false;
            }
            continue;
        }

        if (!inFence) {
            kept.push(line);
        }
    }

    let result = removeMarkdownTables(kept.join('\n'));
    let resultLines = result.split('\n');

    while (resultLines.length && /^>\s*$/.test(resultLines[0])) {
        resultLines.shift();
    }
    while (resultLines.length && /^>\s*$/.test(resultLines[resultLines.length - 1])) {
        resultLines.pop();
    }

    resultLines = resultLines.filter((line, index) => {
        if (!/^>\s*$/.test(line)) return true;
        const prev = resultLines[index - 1] || '';
        const next = resultLines[index + 1] || '';
        return prev.trim().startsWith('>') && next.trim().startsWith('>');
    });

    return normalizeTextBlock(resultLines.join('\n'));
}

// ─── Process Docs File (docs/*.md) ──────────────────────────────────
function parseGuideDoc(mdPath) {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const { metadata } = parseYaml(content);

    return {
        title: metadata.title || '',
        order: metadata.order || 0,
        sidebar: metadata.sidebar || '',
        disabled: metadata.disabled || false,
    };
}

// ─── Main ───────────────────────────────────────────────────────────
function main() {
    console.log('[structured-parse] Start parsing documentation...');

    const globPattern = resolvePath('./@(components)/**/*.md');
    const files = glob.sync(globPattern);

    const componentFiles = [];
    const demoFilesMap = {}; // componentId -> [demo paths]
    const docFiles = [];

    for (const file of files) {
        const relative = path.relative(root, file);

        if (relative.startsWith('docs/')) {
            docFiles.push({ path: file, relative });
        } else if (relative.startsWith('components/')) {
            if (/\/demos\//.test(relative)) {
                // Extract component id from path: components/button/demos/basic.md -> button
                const parts = relative.split('/');
                const compIdx = parts.indexOf('components');
                const compId = parts[compIdx + 1];
                if (!demoFilesMap[compId]) {
                    demoFilesMap[compId] = [];
                }
                demoFilesMap[compId].push(file);
            } else {
                componentFiles.push({ path: file, relative });
            }
        }
    }

    const components = {};
    for (const { path: mdPath, relative } of componentFiles) {
        const relativePath = path.relative(root, mdPath);
        let basename = path.basename(relativePath, '.md');
        const dirname = path.basename(path.dirname(relativePath));
        if (basename === 'index') {
            basename = dirname;
        }
        const componentId = basename;

        console.log(`  [parser] ${relativePath} -> ${componentId}`);

        const doc = parseComponentDoc(mdPath);

        // Parse demos
        const demos = [];
        const demoPaths = demoFilesMap[componentId] || [];
        for (const demoPath of demoPaths) {
            const demo = parseDemoFile(demoPath, componentId);
            demos.push(demo);
        }
        // Sort demos by order
        demos.sort((a, b) => a.order - b.order);

        components[componentId] = {
            title: doc.title,
            category: doc.category,
            order: doc.order,
            subComponents: doc.subComponents,
            demos,
        };
    }

    const docs = {};
    for (const { path: mdPath, relative } of docFiles) {
        const relativePath = path.relative(root, mdPath);
        const basename = path.basename(relativePath, '.md');

        console.log(`  [parser] ${relativePath} -> ${basename}`);

        docs[basename] = parseGuideDoc(mdPath);
    }

    // ─── Output ──────────────────────────────────────────────────────
    fs.ensureDirSync(DEST);

    const componentsOutput = { components, docs: Object.keys(docs).length ? docs : undefined };
    const componentsPath = path.join(DEST, 'components.json');
    writeFile(componentsPath, JSON.stringify(componentsOutput, null, 2))
        .then(() => {
            console.log(`  [output] Written: ${componentsPath}`);
            console.log(`  [output] Components: ${Object.keys(components).length}`);
            console.log(`  [output] Docs: ${Object.keys(docs).length}`);

            let totalDemos = 0;
            for (const key of Object.keys(components)) {
                totalDemos += components[key].demos.length;
            }
            console.log(`  [output] Demos: ${totalDemos}`);
            console.log('[structured-parse] Done!');
        })
        .catch(err => {
            console.error('[structured-parse] Error writing output:', err);
            process.exit(1);
        });
}

main();
