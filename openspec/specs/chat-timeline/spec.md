## ADDED Requirements

### Requirement: ChatTimelineDrawer 消息时间线抽屉

系统 SHALL 提供可展开的消息时间线抽屉组件 `ChatTimelineDrawer`，位于 ChatDockBar 上方，展示当前会话的消息流。

#### Scenario: 展开态布局

- **WHEN** `dockExpanded === true`
- **THEN** ChatTimelineDrawer SHALL 显示在 ChatDockBar 上方，高度可通过拖拽调整，默认 300px，最小 150px，最大为视口高度的 40%

#### Scenario: 收起态不占空间

- **WHEN** `dockExpanded === false`
- **THEN** ChatTimelineDrawer SHALL 不渲染或 `height: 0`，不占据 Office 视图空间

#### Scenario: 展开收起过渡动画

- **WHEN** `dockExpanded` 状态变化
- **THEN** 高度变化 SHALL 使用 CSS transition（duration ~200ms, ease-out），避免突兀跳变

### Requirement: 消息流渲染

系统 SHALL 按时间顺序渲染当前会话的所有消息。

#### Scenario: 用户消息渲染

- **WHEN** 消息列表包含 `role: "user"` 的消息
- **THEN** SHALL 在右侧（或右对齐）渲染用户消息气泡，显示纯文本内容

#### Scenario: 助手消息渲染

- **WHEN** 消息列表包含 `role: "assistant"` 的消息
- **THEN** SHALL 在左侧（或左对齐）渲染助手消息气泡，内容通过 Markdown 渲染

#### Scenario: 消息列表自动滚动到底部

- **WHEN** 新消息追加到消息列表
- **THEN** 消息列表 SHALL 自动滚动到底部显示最新消息

#### Scenario: 用户手动滚动时暂停自动滚动

- **WHEN** 用户手动向上滚动查看历史消息
- **THEN** 系统 SHALL 暂停自动滚动到底部，并显示"回到底部"按钮

#### Scenario: 空消息列表

- **WHEN** 当前会话无消息
- **THEN** SHALL 显示空态提示（如"开始一段新的对话"）

### Requirement: Streaming 消息实时展示

系统 SHALL 支持实时展示 streaming 中的助手消息。

#### Scenario: Streaming 进行中

- **WHEN** 存在 `isStreaming: true` 的助手消息
- **THEN** SHALL 在消息内容末尾显示光标闪烁动画（streaming indicator），内容随 delta 增量更新

#### Scenario: Streaming 完成

- **WHEN** streaming 消息的 `isStreaming` 变为 `false`
- **THEN** SHALL 移除光标闪烁动画，显示完整的最终消息内容

### Requirement: Thinking 折叠块

系统 SHALL 支持展示助手消息中的 thinking（思考过程）内容。

#### Scenario: 有 thinking 内容的消息

- **WHEN** 助手消息包含 `thinking` 字段且非空
- **THEN** SHALL 在消息正文上方渲染 ThinkingBlock 组件——默认折叠状态，显示"思考过程"标题和展开/折叠箭头

#### Scenario: 展开 thinking 内容

- **WHEN** 用户点击 ThinkingBlock 的展开箭头
- **THEN** SHALL 展开显示 thinking 文本内容（纯文本或轻量格式化），背景色区分于正文

#### Scenario: Streaming 中的 thinking

- **WHEN** streaming 进行中且正在接收 thinking 内容
- **THEN** ThinkingBlock SHALL 自动展开并实时更新内容，streaming 完成后自动折叠

### Requirement: ToolCall 卡片

系统 SHALL 支持展示助手消息中的工具调用信息。

#### Scenario: 工具调用显示

- **WHEN** 助手消息包含 `toolCalls` 数组且非空
- **THEN** SHALL 在消息正文中渲染 ToolCallCard 组件，每个卡片显示工具名称和当前状态（pending/running/done/error）

#### Scenario: 工具运行中状态

- **WHEN** ToolCallInfo 的 `status` 为 `"running"`
- **THEN** ToolCallCard SHALL 显示旋转加载动画和工具名称

#### Scenario: 工具完成状态

- **WHEN** ToolCallInfo 的 `status` 为 `"done"`
- **THEN** ToolCallCard SHALL 显示成功图标、工具名称和 result 摘要（截断到 200 字符）

#### Scenario: 工具错误状态

- **WHEN** ToolCallInfo 的 `status` 为 `"error"`
- **THEN** ToolCallCard SHALL 显示错误图标和错误信息，卡片边框变为红色

### Requirement: 拖拽调整高度

系统 SHALL 支持用户通过拖拽调整 ChatTimelineDrawer 的高度。

#### Scenario: 拖拽手柄

- **WHEN** ChatTimelineDrawer 展开
- **THEN** SHALL 在抽屉顶部显示拖拽手柄（水平线条），鼠标 hover 时光标变为 `ns-resize`

#### Scenario: 拖拽调整

- **WHEN** 用户按住拖拽手柄上下移动
- **THEN** 抽屉高度 SHALL 实时跟随鼠标移动，受最小/最大高度约束

#### Scenario: 高度持久化

- **WHEN** 用户调整抽屉高度后松开鼠标
- **THEN** 系统 SHALL 将当前高度保存到 store（或 localStorage），下次展开时恢复
