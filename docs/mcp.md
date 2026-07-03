---
title: MCP Server
order: 1.41
sidebar: doc
category: AI
---

# MCP Server

`kpc-ai-cli` 内置 KPC MCP Server，Agent 可以通过 MCP tools 查询组件列表、组件 API、完整文档、示例代码、设计说明和 LLM 上下文。

## 启动

```shell
kpc-ai mcp
```

如果不想全局安装，也可以直接通过 `npx` 启动：

```shell
npx -y kpc-ai-cli mcp
```

## MCP 配置

支持 MCP 的客户端通常可以使用下面的配置：

```json
{
  "mcpServers": {
    "kpc": {
      "command": "npx",
      "args": ["-y", "kpc-ai-cli", "mcp"]
    }
  }
}
```

如果已经全局安装 `kpc-ai-cli`，也可以使用：

```json
{
  "mcpServers": {
    "kpc": {
      "command": "kpc-ai",
      "args": ["mcp"]
    }
  }
}
```

## 自动配置

可以使用 setup 命令为常见客户端写入配置：

```shell
kpc-ai setup --client cursor --mode mcp
kpc-ai setup --client vscode --mode mcp
kpc-ai setup --client claude --mode mcp
kpc-ai setup --client codex --mode mcp
```

执行前预览将要写入的内容：

```shell
kpc-ai setup --client cursor --mode mcp --dry-run
```

## Tools

| Tool | 说明 |
| --- | --- |
| `kpc_list` | 获取组件列表，可按框架过滤 |
| `kpc_info` | 查询组件元信息、API、框架可用性 |
| `kpc_doc` | 输出组件完整文档 |
| `kpc_demo` | 查询组件 demo，可指定 demo 名和框架 |
| `kpc_design_md` | 输出设计和主题相关说明 |
| `kpc_llms` | 输出 compact 或 full 版本的 LLM 上下文 |

## Prompts

| Prompt | 适用场景 |
| --- | --- |
| `kpc-expert` | 编写或修改 KPC 组件代码前查询组件约束 |
| `kpc-page-generator` | 根据需求生成 KPC 页面 |
| `kpc-framework-migrator` | 在 Intact、React、Vue、Angular 之间迁移示例和写法 |

## 示例请求

让 Agent 生成 React 页面前，可以要求它先调用：

```text
使用 kpc_info 查询 Form、Input、Button 的 React API，再使用 kpc_demo 查询相关示例，最后生成页面代码。
```

如果需要迁移框架：

```text
使用 kpc_demo 查询 Table 的 intact 和 react 示例，对比事件、插槽和属性写法后迁移代码。
```
