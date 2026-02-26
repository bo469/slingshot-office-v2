## ADDED Requirements

### Requirement: Streaming Delta 合并

系统 SHALL 提供 `mergeDelta` 函数，将 streaming delta 文本增量合并到现有消息内容。

#### Scenario: 追加文本 delta

- **WHEN** 调用 `mergeDelta(existingContent, deltaText)`
- **THEN** SHALL 返回 `existingContent + deltaText` 的拼接结果

#### Scenario: 空 delta 不影响内容

- **WHEN** 调用 `mergeDelta(existingContent, "")`
- **THEN** SHALL 返回原始 `existingContent` 不变

### Requirement: 工具调用信息更新

系统 SHALL 提供 `updateToolCall` 函数，更新消息中指定工具调用的状态和结果。

#### Scenario: 更新工具状态

- **WHEN** 调用 `updateToolCall(toolCalls, toolCallId, { status: "done", result: "..." })`
- **THEN** SHALL 返回新的 toolCalls 数组，对应 id 的 ToolCallInfo 的 status 和 result 已更新，其他项不变

#### Scenario: 新增工具调用

- **WHEN** 调用 `updateToolCall(toolCalls, toolCallId, patch)` 且 toolCallId 不存在于当前数组
- **THEN** SHALL 在数组末尾追加新的 ToolCallInfo 项

### Requirement: 消息 ID 生成

系统 SHALL 提供 `generateMessageId` 函数，为 optimistic message 生成唯一 ID。

#### Scenario: 生成唯一 ID

- **WHEN** 调用 `generateMessageId()`
- **THEN** SHALL 返回格式为 `"msg-{timestamp}-{random}"` 的字符串，确保唯一性

### Requirement: 消息摘要截断

系统 SHALL 提供 `truncateText` 函数，将长文本截断到指定长度。

#### Scenario: 文本超过限制

- **WHEN** 调用 `truncateText(text, maxLength)` 且 `text.length > maxLength`
- **THEN** SHALL 返回截断后的文本加 `"…"` 后缀

#### Scenario: 文本未超过限制

- **WHEN** 调用 `truncateText(text, maxLength)` 且 `text.length <= maxLength`
- **THEN** SHALL 返回原始文本不变

### Requirement: 批处理更新调度器

系统 SHALL 提供 `createBatchScheduler` 函数，将高频 streaming delta 事件合并为批处理更新。

#### Scenario: 批处理合并

- **WHEN** 在 50ms 内收到多个 delta 事件
- **THEN** 调度器 SHALL 将所有 delta 合并，仅触发一次 store 更新

#### Scenario: 超时强制刷新

- **WHEN** 距离上次刷新已超过 100ms
- **THEN** 调度器 SHALL 立即将累积的 delta 刷新到 store，避免视觉延迟过大
