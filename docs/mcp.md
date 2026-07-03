---
title: MCP Server
order: 1.41
sidebar: doc
category: AI
---

# MCP Server

`king-design-ai-cli` 内置 King Design MCP Server，Agent 可以通过 MCP tools 查询组件列表、组件 API、完整文档、示例代码、设计说明和 LLM 上下文。

## 启动

```shell
king-design-ai mcp
```

如果不想全局安装，也可以直接通过 `npx` 启动：

```shell
npx -y king-design-ai-cli mcp
```

## MCP 配置

支持 MCP 的客户端通常可以使用下面的配置：

```json
{
  "mcpServers": {
    "king-design": {
      "command": "npx",
      "args": ["-y", "king-design-ai-cli", "mcp"]
    }
  }
}
```

如果已经全局安装 `king-design-ai-cli`，也可以使用：

```json
{
  "mcpServers": {
    "king-design": {
      "command": "king-design-ai",
      "args": ["mcp"]
    }
  }
}
```

## 自动配置

可以使用 setup 命令为常见客户端写入配置：

```shell
king-design-ai setup --client cursor --mode mcp
king-design-ai setup --client vscode --mode mcp
king-design-ai setup --client claude --mode mcp
king-design-ai setup --client codex --mode mcp
king-design-ai setup --client opencode --mode mcp
```

执行前预览将要写入的内容：

```shell
king-design-ai setup --client cursor --mode mcp --dry-run
```

OpenCode 会写入项目根目录的 `opencode.json`：

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "king-design": {
      "type": "local",
      "command": ["npx", "-y", "king-design-ai-cli", "mcp"],
      "enabled": true
    }
  }
}
```

## Tools

| Tool | 说明 |
| --- | --- |
| `king_design_list` | 获取组件列表，可按框架过滤 |
| `king_design_info` | 查询组件元信息、API、框架可用性 |
| `king_design_doc` | 输出组件完整文档 |
| `king_design_demo` | 查询组件 demo，可指定 demo 名和框架 |
| `king_design_md` | 输出设计和主题相关说明 |
| `king_design_llms` | 输出 compact 或 full 版本的 LLM 上下文 |

## Prompts

| Prompt | 适用场景 |
| --- | --- |
| `king-design-expert` | 编写或修改 King Design 组件代码前查询组件约束 |
| `king-design-page-generator` | 根据需求生成 King Design 页面 |
| `king-design-framework-migrator` | 在 Intact、React、Vue 之间迁移示例和写法 |

## 示例请求

让 Agent 生成 React 页面前，可以要求它先调用：

```text
使用 king_design_info 查询 Form、Input、Button 的 React API，再使用 king_design_demo 查询相关示例，最后生成页面代码。
```

如果需要迁移框架：

```text
使用 king_design_demo 查询 Table 的 intact 和 react 示例，对比事件、插槽和属性写法后迁移代码。
```
