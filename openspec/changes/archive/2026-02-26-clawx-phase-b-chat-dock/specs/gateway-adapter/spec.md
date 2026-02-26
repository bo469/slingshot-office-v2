## MODIFIED Requirements

### Requirement: MockAdapter 实现

系统 SHALL 提供 `MockAdapter` 类，实现 `GatewayAdapter` 接口，返回模拟数据用于离线开发。

#### Scenario: MockAdapter 返回合理的模拟数据

- **WHEN** 调用 MockAdapter 的 `channelsStatus()` 方法
- **THEN** SHALL 返回包含 2-3 个模拟渠道的数组，每个渠道具有 id、name、type、status 等字段

#### Scenario: MockAdapter 的 cronList 返回数据

- **WHEN** 调用 MockAdapter 的 `cronList()` 方法
- **THEN** SHALL 返回包含 1-2 个模拟定时任务的数组

#### Scenario: MockAdapter 的事件订阅

- **WHEN** 调用 MockAdapter 的 `onEvent()` 方法
- **THEN** SHALL 返回取消订阅函数，MockAdapter MAY 定期发送模拟事件（如心跳）

#### Scenario: MockAdapter 的 chatSend 模拟 streaming

- **WHEN** 调用 MockAdapter 的 `chatSend(params)` 方法
- **THEN** MockAdapter SHALL 通过 `setTimeout` 序列模拟多步骤 streaming 响应：
  1. 发射 `chat` 事件 `{ type: "stream.start", runId }`
  2. 延迟后发射 `agent` 事件含 thinking 内容
  3. 延迟后发射 `agent` 事件含 tool stream（running → done）
  4. 延迟后发射多个 `chat` 事件 `{ type: "stream.delta", text }` 模拟文本流
  5. 最后发射 `chat` 事件 `{ type: "stream.end", runId }`

#### Scenario: MockAdapter 的 chatHistory 返回对话记录

- **WHEN** 调用 MockAdapter 的 `chatHistory(sessionKey)` 方法
- **THEN** SHALL 返回 2-4 条包含 user 和 assistant 角色的模拟消息，assistant 消息包含 Markdown 格式内容

#### Scenario: MockAdapter 的 chatAbort 中止 streaming

- **WHEN** 在 chatSend streaming 过程中调用 `chatAbort(runId)`
- **THEN** MockAdapter SHALL 取消剩余的 setTimeout 定时器，并立即发射 `chat` 事件 `{ type: "stream.end", runId, aborted: true }`
