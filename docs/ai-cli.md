---
title: AI CLI
order: 1.4
sidebar: doc
category: AI
---

# King Design AI CLI

`king-design-ai-cli` 是面向 King Design 的 AI 辅助开发工具。它会将 King Design 组件文档、API、示例、设计说明整理成离线知识库，并同时提供命令行、MCP Server、Agent Skill 和 `llms.txt` 文档入口。

当你使用 Cursor、Claude Code、VS Code、Codex 或其他支持 MCP 的 Agent 编写 King Design 代码时，可以先让 Agent 查询组件 API 和对应框架示例，再生成业务代码。

## 安装

```shell
npm install -g king-design-ai-cli
```

也可以通过 `npx` 临时运行：

```shell
npx -y king-design-ai-cli list
```

## 支持的框架

| 参数 | 包名 | 说明 |
| --- | --- | --- |
| `intact` | `@king-design/intact` | Intact 版本 |
| `react` | `@king-design/react` | React 版本 |
| `vue` | `@king-design/vue` | Vue 3 版本 |
| `vue-legacy` | `@king-design/vue-legacy` | Vue 2 版本 |

## 常用命令

列出组件：

```shell
king-design-ai list
king-design-ai list --framework react
```

查询组件 API：

```shell
king-design-ai info Button --framework react
king-design-ai info Table --framework vue --detail
```

输出组件完整文档：

```shell
king-design-ai doc Form --framework react --format markdown
```

查询示例代码：

```shell
king-design-ai demo Button basic --framework react --format markdown
king-design-ai demo Table --framework vue
```

输出设计和 LLM 上下文：

```shell
king-design-ai design.md
king-design-ai llms
king-design-ai llms --full
```

## 输出格式

所有查询命令都支持以下通用参数：

```shell
--format text|json|markdown
--lang zh|en
```

其中 `json` 适合 Agent 和脚本消费，`markdown` 适合复制到需求文档或 LLM 上下文中。

## 本地源码数据

工具默认使用随包发布的离线数据。若你正在本地开发组件文档，可以在 `king-design-ai-cli` 仓库中从本地源码重新抽取数据：

```shell
npm run extract -- --king-design-dir ../kpc
npm run build
```

也可以显式指定源码路径：

```shell
npm run extract -- --king-design-dir /path/to/kpc
```

## 与 Agent 配合使用

推荐在项目中通过 setup 命令写入 MCP 或 Skill 配置：

```shell
king-design-ai setup --client cursor --mode both
king-design-ai setup --client claude --mode both
king-design-ai setup --client vscode --mode mcp
king-design-ai setup --client codex --mode both
king-design-ai setup --client opencode --mode mcp
```

写入前可以先预览：

```shell
king-design-ai setup --client cursor --mode both --dry-run
```

检查当前项目是否已配置：

```shell
king-design-ai setup --client cursor --check
```
