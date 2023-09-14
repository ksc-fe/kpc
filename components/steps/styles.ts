import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    gap: '10px',
    get titleColor() { return theme.color.title },
    get desColor() { return theme.color.lightBlack },
    get markColor() { return theme.color.placeholder },
    markBgColor: '#fff',

    default: {
        get height() { return theme.default.height }, 
        get bgColor() { return theme.color.bg },
        get markborder() { return `1px solid ${theme.color.placeholder}` },
        markWidth: '16px',
        padding: '16px',
    },

    // done
    done: {
        get markColor() { return theme.color.primary }, 
        get markBorderColor() { return theme.color.primary },
        markBgColor: '#fff',
        get mainColor() { return theme.color.primary },
    },

    // active
    active: {
        markColor: '#fff',
        get markBorderColor() { return theme.color.primary }, 
        get markBgColor() { return theme.color.primary },
        get mainColor() { return theme.color.primary }, 
    },

    // error
    error: {
        get markColor() { return theme.color.danger }, 
        get markBorderColor() { return theme.color.danger }, 
        markBgColor: '#fff',
        get mainColor() { return theme.color.danger }, 
    },

    // line
    line: {
        get markborder() { return `2px solid ${theme.color.placeholder}` },
        markWidth: '32px',
        markFontSize: '18px',
        get lineColor() { return theme.color.border},
        lineWidth: '2px',
        titleGap: '16px',
        descGap: '4px',
        contentWidth: '200px',
    },

    // simple
    simple: {
        markWidth: '12px',
        get markBgColor() { return theme.color.placeholder },
        get doneMarkBgColor() { return theme.color.primary },
        get errorMarkBgColor() { return theme.color.danger },
    },

    // vertical
    vertical: {
        line: {
            minHeight: '100px',
            padding: '16px',
        },
        simple: {
            titleGap: '8px',
        }
    }
};

let steps: typeof defaults;
setDefault(() => {
    steps = deepDefaults(theme, {steps: defaults}).steps;
});

const stepStatus = ['done', 'active', 'error'] as const; 

export function makeStepsStyles() {
    return css`
        display: flex;

        ${makeCommonStyles()};

        &.k-default {
            ${makeDefaultStyles()};
        }
            
        &.k-line,
        &.k-line-compact,
        &.k-simple {
            ${makeLineStyles()};
        }

        &.k-line-compact {
            ${makeLineCompactStyles()};
        }

        &.k-simple {
            ${makeSimpleStyles()};
        }

        // clickable
        &.k-clickable {
            .k-done {
                cursor: pointer;
            }
        }

        ${makeVerticalStyles()};
    `;
}

function makeDefaultStyles() {
    const defaults = steps.default;

    return css`
        text-align: center;
        height: ${defaults.height}; 
        background: ${defaults.bgColor};

        .k-step-wrapper {
            ${center()};
            height: 100%;
            padding: 0 ${defaults.padding};
        }
        .k-step-mark {
            width: ${defaults.markWidth};
            height: ${defaults.markWidth}; 
            margin-right: ${steps.gap};
        }
        .k-step-main {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
        }
        .k-step-title {
            padding-right: ${steps.gap};
        }

        // tail
        .k-step:last-of-type {
            .k-step-tail {
                display: none;
            }
        } 
        &:not(.k-vertical) {
            ${makeArrow(false)};
        }
    `
}

function makeArrow(isVertical: boolean) {
    const defaults = steps.default; 
    const offset = `calc(-1 * (${defaults.height} / 2 + ${steps.gap}))`;
    const size = `calc(${defaults.height} / 2 + ${steps.gap})`;

    return css`
        .k-step-tail {
            position: absolute;
            ${!isVertical 
                ? `
                    top: 0;
                    right: ${offset};
                    width: ${size};
                    height: ${defaults.height};
                `
                : `
                    left: 0;
                    bottom: ${offset};
                    height: ${size};
                    width: ${defaults.height};
                `
            }
            overflow: hidden;
            z-index: 1;
            &:after, &:before {
                content: '';
                border-width: calc(${defaults.height} / 2 + ${steps.gap});
                border-style: solid;
                border-color: transparent;
                position: absolute;
                ${isVertical ? 'left' : 'top'}: calc(-1 * ${steps.gap});
            }
            &:after {
                border-${isVertical ? 'top' : 'left'}-color: ${defaults.bgColor};
                ${isVertical ? 'top' : 'left'}: calc(-1 * ${steps.gap});
            }
            &:before {
                border-${isVertical ? 'top' : 'left'}-color: #fff;
                ${isVertical ? 'top' : 'left'}: 0;
            }
        }
        .k-step:not(:first-of-type) {
            padding-${isVertical ? 'top' : 'left'}: calc(${defaults.height} / 2 + ${steps.gap});
        }
    `
}

function makeLineStyles() {
    const line = steps.line;
    const top = `calc(${line.markWidth} / 2 - ${line.lineWidth} / 2)`;

    return css`
        .k-step {
            display: flex;
        }
        .k-step-wrapper {
            display: inline-block;
            text-align: center;
            position: relative;
            width: ${line.contentWidth};
        }
        .k-step:last-of-type {
            flex: 0 0 auto;
        }
        .k-step-mark {
            border: ${line.markborder};
            width: ${line.markWidth};
            height: ${line.markWidth};
            position: relative;
            z-index: 1;
            &, .k-icon {
                font-size: ${line.markFontSize};
            }
        }
        .k-step-main {
            padding-top: ${line.titleGap};
        }
        .k-step-title {
            font-size: 14px;
            color: ${theme.color.text};
        }
        .k-step-content {
            margin-top: ${line.descGap};
            color: ${theme.color.placeholder};
        }
        
        // draw connected line
        .k-step-wrapper {
            &:before,
            &:after {
                content: '';
                display: block;
                height: ${line.lineWidth};
                background: ${line.lineColor};
                width: 50%;
                position: absolute;
                top: ${top};
            }
            &:after {
                right: 0;
            }
        }
        .k-step {
            &:first-of-type .k-step-wrapper:before,
            &:last-of-type .k-step-wrapper:after {
                background: transparent;
            }
        }
        .k-step-tail {
            flex: 1;
            height: ${line.lineWidth};
            background: ${line.lineColor};
            margin-top: ${top};
        }
        
        // status
        .k-step {
            &.k-done {
                .k-step-tail,
                &:not(:last-of-type) .k-step-wrapper:after,
                &:not(:first-of-type) .k-step-wrapper:before {
                    background: ${theme.color.primary};
                }
            }
            &:not(:first-of-type).k-active {
                .k-step-wrapper:before {
                    background: ${theme.color.primary};
                }
            }
            &.k-active .k-step-title {
                color: ${theme.color.primary};
            }
            &.k-error .k-step-title {
                color: ${theme.color.danger};
            }
        }
    `;
}

function makeLineCompactStyles() {
    const line = steps.line;

    return css`
        .k-step-wrapper {
            display: inline-flex;
            text-align: left;
            width: auto;
            &:before, &:after {
                display: none;
            }
        }
        .k-step-main {
            flex: 1;
            padding: 0 0 0 ${line.titleGap};
        }
        .k-step-content {
            margin: 0;
        }
        .k-step-tail {
            margin-right: ${line.titleGap};
        }
        .k-step-title {
            display: flex;
            align-items: center;
            height: ${line.markWidth};
            &:after {
                content: '';
                display: block;
                flex: 1;
                height: ${line.lineWidth};
                background: ${line.lineColor};
                margin-left: ${line.titleGap};
            }
        }
        .k-step:last-of-type .k-step-title:after {
            display: none;
        }
        // status
        .k-step {
            &.k-done {
                .k-step-title:after {
                    background: ${theme.color.primary};
                }
            }
        }
    `;
}

function makeSimpleStyles() {
    const simple = steps.simple;
    const top = `calc(${simple.markWidth} / 2 - ${steps.line.lineWidth} / 2)`;

    return css`
        .k-step-mark {
            width: ${simple.markWidth};
            height: ${simple.markWidth};
            background: ${simple.markBgColor};
        } 
        .k-step-wrapper {
            font-size: 0; // eliminate the gap
            &:before,
            &:after {
                top: ${top};
            }
        }
        .k-step-main {
            font-size: ${theme.default.fontSize};
        }
        .k-step-tail {
            margin-top: ${top};
        }
        .k-step {
            &.k-done {
                .k-step-mark {
                    background: ${simple.doneMarkBgColor};
                }
            }
            &.k-error {
                .k-step-mark {
                    background: ${simple.errorMarkBgColor};
                }
            }
        }
    `;
}

function center(flex: 'flex' | 'inline-flex' = 'flex') {
    return css`
        display: ${flex};
        align-items: center;
        justify-content: center;
    `;
}

export function makeCommonStyles() {
    return css`
        .k-step {
            position: relative; 
            flex: 1;

            // status 
            ${stepStatus.map(status => {
                const styles = steps[status];
                return css`
                    &.k-${status} {
                        .k-step-mark {
                            color: ${styles.markColor};
                            border-color: ${styles.markBorderColor};
                            background: ${styles.markBgColor};
                        }
                        .k-step-main {
                            color: ${styles.mainColor};
                        }
                    }
                `
            })} 
        }
        .k-step-mark {
            ${center('inline-flex')};
            border: ${steps.default.markborder};
            border-radius: 50%;
            vertical-align: top;
            color: ${steps.markColor};
            background: ${steps.markBgColor};
        }
    `;
}

export function makeVerticalStyles() {
    const verticalLine = steps.vertical.line;

    return css`
        &.k-vertical {
            &.k-default {
                height: auto;
                width: ${steps.default.height};
                writing-mode: vertical-rl;
                letter-spacing: 1px;
                .k-step-wrapper {
                    width: 100%;
                    padding: ${steps.default.padding} 0;
                }
                .k-step-mark {
                    margin-right: 0;
                    margin-bottom: ${steps.gap};
                }
                .k-step-title {
                    padding-right: 0;
                    padding-bottom: ${steps.gap};
                }

                ${makeArrow(true)};
            }

            &.k-line,
            &.k-line-compact,
            &.k-simple {
                flex-direction: column;
                .k-step {
                    flex: none;
                    min-height: ${verticalLine.minHeight};
                }
                .k-step-wrapper {
                    display: flex;
                    width: auto;
                    text-align: left;
                }
                .k-step-main {
                    flex: 1;
                    padding: 0 0 ${verticalLine.padding} ${verticalLine.padding};
                }
                .k-step-title {
                    display: flex;
                    align-items: center;
                    height: ${steps.line.markWidth};
                    &:after {
                        display: none;
                    }
                }
                
                // connected line
                .k-step-wrapper {
                    &:before, &:after {
                        display: none;
                    }
                }
                .k-step-tail {
                    position: absolute;
                    left: calc(${steps.line.markWidth} / 2 - ${steps.line.lineWidth} / 2);
                    height: 100%;
                    width: ${steps.line.lineWidth};
                    background: ${steps.line.lineColor};
                }
                .k-step:last-of-type {
                    .k-step-tail {
                        display: none;
                    }
                }
            }
            &.k-simple {
                .k-step-tail {
                    left: calc(${steps.simple.markWidth} / 2 - ${steps.line.lineWidth} / 2);
                }
                .k-step-title {
                    height: ${steps.simple.markWidth};
                    margin-bottom: ${steps.vertical.simple.titleGap};
                }
            }
        }
    `
}
