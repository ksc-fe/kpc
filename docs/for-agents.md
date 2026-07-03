---
title: Agent 使用指南
order: 1.42
sidebar: doc
category: AI
---

# Agent 使用指南

在使用 AI Agent 生成 KPC 代码时，建议先让 Agent 查询 KPC 官方组件知识，再开始写代码。这样可以减少组件名、属性、事件、插槽、框架差异写错的情况。

## 推荐工作流

1. 确认目标框架，例如 `react`、`vue`、`vue-legacy`、`intact` 或 `angular`。
2. 使用 `kpc_list` 或 `kpc-ai list` 确认组件是否存在。
3. 使用 `kpc_info` 或 `kpc-ai info` 查询组件 API。
4. 使用 `kpc_demo` 或 `kpc-ai demo` 查询相近示例。
5. 生成代码时遵守当前项目的框架、主题和已有组件写法。

## 可直接使用的提示词

```text
这个项目使用 KPC / King Design。写组件代码前，请先通过 KPC MCP Server 或 kpc-ai 查询相关组件 API 和目标框架 demo，再生成代码。
```

React 项目：

```text
请使用 KPC React 版本。先查询相关组件的 react API 和 demo，注意 import 来自 @king-design/react，事件使用 React 写法。
```

Vue 3 项目：

```text
请使用 KPC Vue 3 版本。先查询相关组件的 vue API 和 demo，注意 v-model、事件和插槽写法。
```

Vue 2 项目：

```text
请使用 KPC Vue 2 版本。先查询 vue-legacy 目标的组件示例，不要混用 Vue 3 写法。
```

Intact 项目：

```text
请使用 KPC Intact 版本。先查询 intact 目标的组件 API 和 demo，保持 Intact 模板、事件和组件命名方式。
```

## 命令行查询示例

```shell
kpc-ai info Button --framework react --format json
kpc-ai demo Button basic --framework react --format markdown
kpc-ai info Form --framework vue --detail
kpc-ai doc Table --framework intact --format markdown
```

## 适合放进项目规则的说明

可以把下面内容加入项目的 Agent 规则文件，例如 `.cursor/rules/kpc.md`、`AGENTS.md` 或 Claude Code 项目说明：

```md
本项目使用 KPC / King Design。

- 生成 KPC 代码前，优先使用 KPC MCP Server 或 `kpc-ai` 查询组件 API 和 demo。
- 组件库版本以当前项目依赖为准，不要混用不同框架写法。
- React 使用 `@king-design/react`。
- Vue 3 使用 `@king-design/vue`。
- Vue 2 使用 `@king-design/vue-legacy`。
- Intact 使用 `@king-design/intact`。
- 需要示例时优先查询 `kpc_demo`，需要完整文档时查询 `kpc_doc`。
```

也可以通过 setup 命令自动写入常见客户端配置：

```shell
kpc-ai setup --client cursor --mode both
kpc-ai setup --client codex --mode both
kpc-ai setup --client claude --mode both
```

## 注意事项

- Agent 生成代码前，应先确认目标框架。
- 组件名查询大小写不敏感，拼写不准确时工具会给出相近组件提示。
- 如果某个 demo 暂时无法转换到目标框架，工具会返回 warning；可以查询其他框架示例作为参考。
- `--format json` 更适合 Agent 自动读取，`--format markdown` 更适合人工查看和复制。
