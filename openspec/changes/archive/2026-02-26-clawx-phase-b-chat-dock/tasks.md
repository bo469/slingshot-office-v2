## 1. 依赖安装与类型补充

- [x] 1.1 安装 `react-markdown` 和 `remark-gfm` 依赖：`pnpm add react-markdown remark-gfm`
- [x] 1.2 安装 `react-textarea-autosize` 依赖：`pnpm add react-textarea-autosize`
- [x] 1.3 在 `src/gateway/adapter-types.ts` 中补充 streaming 事件类型定义：`ChatStreamEvent`（含 `stream.start`、`stream.delta`、`stream.end` 三种 type）

## 2. 消息工具库（message-utils）

- [x] 2.1 创建 `src/lib/message-utils.ts`：实现 `generateMessageId()` 函数——生成 `"msg-{timestamp}-{random}"` 格式的唯一 ID
- [x] 2.2 实现 `mergeDelta(existingContent, deltaText)` 函数——拼接 streaming delta 文本
- [x] 2.3 实现 `updateToolCall(toolCalls, toolCallId, patch)` 函数——更新或追加 ToolCallInfo
- [x] 2.4 实现 `truncateText(text, maxLength)` 函数——超长文本截断加省略号
- [x] 2.5 实现 `createBatchScheduler(flushFn, options)` 函数——50ms 批处理合并高频更新，100ms 超时强制刷新
- [x] 2.6 编写 `src/lib/__tests__/message-utils.test.ts` 单元测试：覆盖上述所有函数的正常和边界场景

## 3. Chat Dock Store 完整实现

- [x] 3.1 扩展 `ChatDockState` 接口：新增 `sessions`、`error`、`activeRunId`、`streamingMessage`、`targetAgentId` 等字段，新增 `loadSessions()`、`newSession()`、`initEventListeners()`、`setTargetAgent()` actions
- [x] 3.2 实现 `sendMessage(text)` action：创建 optimistic user message → 设置 isStreaming → 调用 adapter.chatSend → 错误回滚
- [x] 3.3 实现事件监听逻辑 `initEventListeners()`：注册 chat 事件处理（state: delta/final/error/aborted），使用 Gateway 真实的事件格式
- [x] 3.4 实现 `abort()` action：调用 adapter.chatAbort(sessionKey) → 设置 isStreaming false
- [x] 3.5 实现 `loadSessions()` action：调用 adapter.sessionsList() 获取会话列表
- [x] 3.6 实现 `switchSession(key)` action：更新 currentSessionKey → 清空 messages → 调用 adapter.chatHistory(key) 加载历史消息
- [x] 3.7 实现 `newSession()` action：设置 currentSessionKey 为新生成的 key → 清空 messages
- [x] 3.8 基于 Gateway 真实事件格式实现 handleChatEvent：处理 delta（累积式 message）、final（完成）、error、aborted 四种状态
- [x] 3.9 实现 `setTargetAgent(agentId)` action：切换目标 Agent 时清空消息并重新加载对应会话

## 4. MockAdapter Chat Streaming 实现

- [x] 4.1 实现 `MockAdapter.chatSend()` 的 streaming 模拟：通过 setTimeout 序列发射 delta → delta → final 事件（匹配 Gateway 真实格式）
- [x] 4.2 实现 `MockAdapter.chatAbort()` 的中止逻辑：取消剩余 setTimeout 定时器，发射 aborted 事件
- [x] 4.3 完善 `MockAdapter.chatHistory()` 返回数据：包含含 Markdown 格式的模拟消息

## 5. Chat 组件实现——ChatDockBar

- [x] 5.1 创建 `src/components/chat/ChatDockBar.tsx`：底部固定输入条组件，默认始终显示，包含 Agent 选择器区域、输入框、附件按钮、发送/停止按钮、展开/收起按钮
- [x] 5.2 实现输入交互：Enter 发送、Shift+Enter 换行、IME compositionstart/compositionend 防误发、空内容 disabled
- [x] 5.3 实现输入框自适应高度：使用 `react-textarea-autosize`，最大 4 行
- [x] 5.4 实现发送/停止按钮切换：根据 `isStreaming` 状态渲染 Send 或 Stop 图标按钮
- [x] 5.5 创建 `src/components/chat/AgentSelector.tsx`：Agent 选择下拉组件——当前 Agent 名称 + 头像色块，下拉列表显示所有 Agent，默认选中 main Agent

## 6. Chat 组件实现——ChatTimelineDrawer

- [x] 6.1 创建 `src/components/chat/ChatTimelineDrawer.tsx`：可展开抽屉容器组件，支持 CSS transition 展开/收起动画（200ms ease-out）
- [x] 6.2 实现拖拽调整高度：顶部拖拽手柄 + mousedown/mousemove/mouseup 事件处理，高度约束在 150px～40vh 之间
- [x] 6.3 实现消息列表自动滚动：新消息追加时自动滚动到底部，用户手动向上滚动时暂停自动滚动并显示"回到底部"按钮
- [x] 6.4 实现空消息列表空态提示

## 7. Chat 组件实现——消息气泡与子组件

- [x] 7.1 创建 `src/components/chat/MessageBubble.tsx`：消息气泡容器组件，根据 role 分发渲染用户消息或助手消息，使用 `React.memo` 优化
- [x] 7.2 创建 `src/components/chat/MarkdownContent.tsx`：使用 `react-markdown` + `remark-gfm` 渲染 Markdown 内容，配置 Tailwind prose 样式
- [x] 7.3 创建 `src/components/chat/StreamingIndicator.tsx`：光标闪烁动画组件，仅在 streaming 进行中显示

## 8. AppShell 集成与布局调整

- [x] 8.1 修改 `src/components/layout/AppShell.tsx`：在 `<main>` 区域底部集成 ChatTimelineDrawer 和 ChatDockBar 组件，Chat Dock 默认始终显示
- [x] 8.2 调整 OfficeView 容器高度：使用 flex-1 占据 Chat Dock 之外的剩余空间，确保展开 Drawer 时 OfficeView 向上推压而非被遮挡
- [x] 8.3 在 AppShell 中初始化 chat-dock-store 事件监听：使用 `useEffect` 调用 `initEventListeners()`，返回清理函数
- [x] 8.4 初始化默认 Agent：连接成功后自动将 main Agent 设为 chat dock 默认目标

## 9. Office Store 扩展

- [x] 9.1 在 `office-store.ts` 中新增 `chatDockHeight: number` 状态字段（默认 300）和 `setChatDockHeight(height)` action
- [x] 9.2 实现 `chatDockHeight` 的 localStorage 持久化：初始化时从 `"openclaw-chat-dock-height"` key 读取，变更时写入

## 10. Gateway 认证适配

- [x] 10.1 分析 Gateway scope 认证机制：发现 2026.2.15+ 要求签名的 device identity 来授予 scopes，Web 端无法提供 Ed25519 签名
- [x] 10.2 实现认证方案：将 client.id 改为 `openclaw-control-ui`，请求 `operator.admin` scope，配合 Gateway `dangerouslyDisableDeviceAuth` 配置绕过 device identity 要求
- [x] 10.3 创建 `.env.local` 配置模板和 `.env.example` 文件，文档化 token 配置流程
- [x] 10.4 更新 AGENTS.md 和 README.md：补充认证前提配置说明、Chat 协议文档、环境变量说明

## 11. 验收测试与集成验证

- [x] 11.1 执行 `pnpm typecheck` 确认无类型错误
- [x] 11.2 执行 `pnpm test` 确认所有测试通过（pre-existing AgentDot 失败除外）
- [x] 11.3 连接真实 Gateway 浏览器验收——基础流程：ChatDockBar 默认显示、默认 main Agent、可输入、发送消息成功
- [x] 11.4 连接真实 Gateway 浏览器验收——Streaming 展示：发送消息后 streaming 文本增量正常显示，完成后按钮从"停止"恢复为"发送"
- [x] 11.5 连接真实 Gateway 浏览器验收——Dock 交互：展开/收起 Drawer 正常，消息列表正确展示用户和 AI 消息
- [x] 11.6 连接真实 Gateway 浏览器验收——连续对话：多轮对话正常，消息按序追加到 Drawer 中
- [x] 11.7 浏览器验收——Agent 选择：通过 AgentSelector 切换到不同 Agent（main → coder）对话
