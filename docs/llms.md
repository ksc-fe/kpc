---
title: LLMs 文档
order: 1.43
sidebar: doc
category: AI
---

# LLMs 文档

`king-design-ai-cli` 会从本仓库源码中抽取离线知识文件，供 LLM、Agent、搜索索引或其他自动化工具使用。

## 文件说明

| 文件 | 说明 |
| --- | --- |
| `data/king-design.json` | 结构化组件知识库，包含组件元信息、API、demo 和框架说明 |
| `data/design.md` | 设计、主题和使用规范说明 |
| `data/llms.txt` | 精简版 LLM 上下文，适合快速注入 |
| `data/llms-full.txt` | 完整版 LLM 上下文，适合深度问答和代码生成 |

普通用户通常不需要直接读取这些文件，可以通过 CLI 或 MCP 获取对应内容。

## CLI 输出

输出精简版上下文：

```shell
king-design-ai llms
```

输出完整上下文：

```shell
king-design-ai llms --full
```

输出设计说明：

```shell
king-design-ai design.md
```

## MCP 输出

MCP Server 提供两个相关工具：

| Tool | 说明 |
| --- | --- |
| `king_design_llms` | 返回精简或完整 LLM 上下文 |
| `king_design_md` | 返回设计和主题说明 |

可以让 Agent 在开始复杂任务前先读取这些内容：

```text
请先读取 King Design 的 llms 上下文和 design.md，再根据当前项目框架生成页面代码。
```

## 从源码重新生成

如果你正在维护组件文档或本地组件文档发生变化，可以从本地仓库重新生成数据：

```shell
npm run extract -- --king-design-dir ../kpc
```

生成结果会更新：

```text
data/king-design.json
data/design.md
data/llms.txt
data/llms-full.txt
```

发布 `king-design-ai-cli` npm 包时，这些数据会随包一起发布。用户安装后无需再拉取源码。

## 适用场景

- 在 Agent 中注入 King Design 组件知识。
- 为内部问答系统建立 King Design 文档索引。
- 生成跨框架组件示例。
- 在迁移代码时对比 Intact、React、Vue 的组件写法。
