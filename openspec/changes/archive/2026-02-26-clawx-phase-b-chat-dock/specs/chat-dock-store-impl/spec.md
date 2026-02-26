## ADDED Requirements

### Requirement: 完整消息发送链路

系统 SHALL 在 `chat-dock-store` 中实现完整的消息发送流程，包括乐观更新和 streaming 处理。

#### Scenario: 发送消息（乐观更新）

- **WHEN** 调用 `sendMessage(text)`
- **THEN** 系统 SHALL：
  1. 立即创建 `role: "user"` 的消息追加到 `messages` 数组（乐观更新）
  2. 将 `isStreaming` 设为 `true`
  3. 通过 GatewayAdapter 调用 `chatSend({ text, sessionKey })`

#### Scenario: 发送失败回滚

- **WHEN** `chatSend` 调用抛出异常
- **THEN** 系统 SHALL 将 `isStreaming` 设为 `false`，将最后一条 user message 标记为发送失败状态，并设置 `error` 字段

### Requirement: Streaming 事件处理

系统 SHALL 监听 Adapter 事件，处理 streaming 响应的完整生命周期。

#### Scenario: stream.start 事件

- **WHEN** 收到 `chat` 事件且 `type === "stream.start"`
- **THEN** 系统 SHALL 创建空的 assistant message（`isStreaming: true`）追加到 `messages`

#### Scenario: stream.delta 事件

- **WHEN** 收到 `chat` 事件且 `type === "stream.delta"`
- **THEN** 系统 SHALL 将 delta text 合并到当前 streaming 的 assistant message 的 `content` 字段（使用批处理调度器）

#### Scenario: stream.end 事件

- **WHEN** 收到 `chat` 事件且 `type === "stream.end"`
- **THEN** 系统 SHALL 将当前 streaming 消息的 `isStreaming` 设为 `false`，将 store 的 `isStreaming` 设为 `false`

#### Scenario: tool 事件处理

- **WHEN** 收到 `agent` 事件且 `stream === "tool"`
- **THEN** 系统 SHALL 将工具调用信息追加/更新到当前 streaming 助手消息的 `toolCalls` 数组

#### Scenario: thinking 事件处理

- **WHEN** 收到 `agent` 事件且 `stream === "assistant"` 且 data 包含 `thinking` 字段
- **THEN** 系统 SHALL 更新当前 streaming 助手消息的 `thinking` 字段

#### Scenario: streaming 超时保护

- **WHEN** streaming 开始后超过 60 秒未收到 `stream.end` 事件
- **THEN** 系统 SHALL 自动将 `isStreaming` 设为 `false`，将当前消息标记为完成，避免 UI 永久挂起

### Requirement: 中止 Streaming

系统 SHALL 支持用户中止正在进行的 streaming 响应。

#### Scenario: 调用 abort

- **WHEN** 调用 `abort()`
- **THEN** 系统 SHALL：
  1. 通过 GatewayAdapter 调用 `chatAbort(runId)`
  2. 将 `isStreaming` 设为 `false`
  3. 将当前 streaming 消息标记为已中止

### Requirement: 会话管理

系统 SHALL 支持会话列表获取、会话切换和新建会话。

#### Scenario: 加载会话列表

- **WHEN** ChatDockBar 首次渲染（或调用 `loadSessions()`）
- **THEN** 系统 SHALL 通过 `adapter.sessionsList()` 获取会话列表，存储到 `sessions` 状态

#### Scenario: 切换会话

- **WHEN** 调用 `switchSession(key)`
- **THEN** 系统 SHALL：
  1. 更新 `currentSessionKey` 为目标 key
  2. 清空 `messages`
  3. 通过 `adapter.chatHistory(key)` 加载目标会话的历史消息
  4. 将加载的消息填充到 `messages`

#### Scenario: 新建会话

- **WHEN** 调用 `newSession()`
- **THEN** 系统 SHALL 将 `currentSessionKey` 设为 `null`，清空 `messages`

### Requirement: 事件监听初始化与清理

系统 SHALL 在 store 初始化时注册事件监听，组件卸载时清理。

#### Scenario: 初始化事件监听

- **WHEN** 调用 `initEventListeners()`
- **THEN** 系统 SHALL 通过 `adapter.onEvent()` 注册 chat 和 agent 事件的处理函数，返回取消订阅函数

#### Scenario: 清理事件监听

- **WHEN** 调用返回的取消订阅函数
- **THEN** 系统 SHALL 停止监听所有事件，避免内存泄漏
