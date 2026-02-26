## ADDED Requirements

### Requirement: ChatDockBar 底部固定输入条

系统 SHALL 在 Office 视图（AppShell）底部渲染一个固定高度的输入条组件 `ChatDockBar`，提供消息输入和发送能力。

#### Scenario: 输入条始终可见

- **WHEN** 用户处于 Office 视图（`/` 路由）
- **THEN** ChatDockBar SHALL 固定显示在 main 区域底部，高度约 56px，包含输入框和操作按钮

#### Scenario: 非 Office 页面不显示

- **WHEN** 用户处于管控页面（如 `/dashboard`、`/channels`）
- **THEN** ChatDockBar SHALL 不渲染（仅在 Office 视图中显示）

### Requirement: 消息输入交互

系统 SHALL 支持标准的文本输入交互，包含快捷键和 IME 兼容。

#### Scenario: Enter 发送消息

- **WHEN** 用户在输入框中按下 Enter 键（非 Shift 组合，非 IME 组合输入中）
- **THEN** 系统 SHALL 调用 `sendMessage(text)` 发送消息，并清空输入框

#### Scenario: Shift+Enter 换行

- **WHEN** 用户在输入框中按下 Shift+Enter
- **THEN** 输入框 SHALL 插入换行符，不触发发送

#### Scenario: IME 组合输入防误发

- **WHEN** 用户正在使用输入法（IME）进行组合输入（compositionstart 到 compositionend 期间）
- **THEN** Enter 键 SHALL 不触发发送，等待组合输入完成后才响应 Enter 发送

#### Scenario: 空内容不可发送

- **WHEN** 输入框内容为空或仅含空白字符
- **THEN** 发送按钮 SHALL 显示为 disabled 状态，Enter 键不触发发送

#### Scenario: 输入框自适应高度

- **WHEN** 用户输入多行内容
- **THEN** 输入框 SHALL 自动增长高度，最多不超过 4 行高度（约 120px），超出部分滚动

### Requirement: 发送与停止控制

系统 SHALL 根据当前 streaming 状态切换发送/停止按钮。

#### Scenario: 发送按钮

- **WHEN** 当前无 streaming 活动（`isStreaming === false`）
- **THEN** 显示发送按钮（Send 图标），点击后调用 `sendMessage(text)`

#### Scenario: 停止按钮

- **WHEN** 当前有 streaming 活动（`isStreaming === true`）
- **THEN** 发送按钮 SHALL 切换为停止按钮（Square/Stop 图标），点击后调用 `abort()` 中止当前 streaming

### Requirement: 附件按钮（UI 占位）

系统 SHALL 在输入框左侧显示附件按钮，Phase B 仅实现 UI 占位。

#### Scenario: 附件按钮显示

- **WHEN** ChatDockBar 渲染
- **THEN** SHALL 在输入框左侧显示附件图标按钮（Paperclip 图标）

#### Scenario: 附件按钮点击

- **WHEN** 用户点击附件按钮
- **THEN** SHALL 弹出文件选择对话框（或显示"功能开发中"提示），不实现完整上传逻辑

### Requirement: 会话选择器

系统 SHALL 在 ChatDockBar 中集成会话选择能力。

#### Scenario: 显示当前会话

- **WHEN** ChatDockBar 渲染且有活跃会话
- **THEN** SHALL 在输入条左侧区域显示当前会话标签（SessionSelector 组件）

#### Scenario: 切换会话

- **WHEN** 用户通过 SessionSelector 选择另一个会话
- **THEN** 系统 SHALL 调用 `switchSession(key)` 切换会话，并加载对应会话的历史消息

#### Scenario: 新建会话

- **WHEN** 用户点击 SessionSelector 中的"新建会话"选项
- **THEN** 系统 SHALL 创建一个新的空会话，清空当前消息列表

### Requirement: Dock 展开/收起触发

系统 SHALL 提供展开/收起 ChatTimelineDrawer 的触发入口。

#### Scenario: 点击展开按钮

- **WHEN** 用户点击 ChatDockBar 上的展开按钮（ChevronUp 图标）
- **THEN** ChatTimelineDrawer SHALL 从底部向上展开，显示消息时间线

#### Scenario: 点击收起按钮

- **WHEN** ChatTimelineDrawer 已展开，用户点击收起按钮（ChevronDown 图标）
- **THEN** ChatTimelineDrawer SHALL 收起，仅保留 ChatDockBar 可见

#### Scenario: ESC 键收起

- **WHEN** ChatTimelineDrawer 已展开，用户按下 ESC 键
- **THEN** ChatTimelineDrawer SHALL 收起
