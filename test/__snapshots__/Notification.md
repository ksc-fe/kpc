# `Notification`

#### `show basic notification`

```
"<div class=\"k-notification k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper\"><div class=\"k-notification-content\"><div class=\"k-notification-title\">Hello, Kingcloud Design!</div><div class=\"k-notification-body\">这是一条基础用法的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

#### `show notifications with different types`

```
"<div class=\"k-notification k-info k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">info</div><div class=\"k-notification-body\">这是一条info类型的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-error k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-error-fill css-agowrq\" style=\"color: rgb(255, 68, 51);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">error</div><div class=\"k-notification-body\">这是一条error类型的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-warning k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-warning-fill css-xgxz7q\" style=\"color: rgb(255, 154, 5);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">warning</div><div class=\"k-notification-body\">这是一条warning类型的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-success k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-success-fill css-17gt1dx\" style=\"color: rgb(54, 179, 66);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">success</div><div class=\"k-notification-body\">这是一条success类型的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

#### `set duration`

```
"<div class=\"k-notification k-info k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">测试标题</div><div class=\"k-notification-body\">测试内容</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

#### `hide close button when closable is false`

```
"<div class=\"k-notification k-info k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">隐藏关闭按钮</div><div class=\"k-notification-body\">这条通知隐藏了关闭按钮</div></div></div></div></div>"
```

#### `should not show icon when type is empty string and icon is not provided`

```
"<div class=\"k-notification k-position-topRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper\"><div class=\"k-notification-content\"><div class=\"k-notification-title\">无类型通知</div><div class=\"k-notification-body\">这条通知没有类型，不应该显示图标</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

#### `show notification at different positions`

```
"<div class=\"k-notification k-info k-position-topRight css-t0oqgz transition-leave-active transition-leave-to\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">info</div><div class=\"k-notification-body\">这是一条info类型的通知</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-info k-position-topLeft css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">位置测试</div><div class=\"k-notification-body\">通知出现在topLeft位置</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-info k-position-bottomRight css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">位置测试</div><div class=\"k-notification-body\">通知出现在bottomRight位置</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-info k-position-bottomLeft css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">位置测试</div><div class=\"k-notification-body\">通知出现在bottomLeft位置</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-info k-position-top css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">位置测试</div><div class=\"k-notification-body\">通知出现在top位置</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

```
"<div class=\"k-notification k-info k-position-bottom css-t0oqgz transition-enter-from transition-enter-active\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\">位置测试</div><div class=\"k-notification-body\">通知出现在bottom位置</div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

#### `test notification click and close event`

```
"<div class=\"k-message k-info css-1bb3gzg\"><div class=\"k-message-container\"><div class=\"k-message-wrapper k-with-icon\"><i class=\"k-icon k-icon-information-fill k-message-icon css-16qej3\"></i><div class=\"k-message-content\">你点击了通知</div></div></div></div>"
```

```
"<div class=\"k-message k-warning css-1bb3gzg\"><div class=\"k-message-container\"><div class=\"k-message-wrapper k-with-icon\"><i class=\"k-icon k-icon-warning-fill k-message-icon css-16qej3\"></i><div class=\"k-message-content\">通知已关闭</div></div></div></div>"
```

#### `should support VNode as title and content`

```
"<div class=\"k-notification custom-notification k-info k-position-topRight css-t0oqgz transition-enter-active transition-enter-to\"><div class=\"k-notification-container\"><div class=\"k-notification-wrapper k-with-icon\"><div class=\"k-notification-icon\"><i class=\"k-icon k-icon-information-fill css-18c3toa\" style=\"color: rgb(0, 145, 234);\"></i></div><div class=\"k-notification-content\"><div class=\"k-notification-title\"><div class=\"custom-title\">自定义标题</div></div><div class=\"k-notification-body\"><div class=\"custom-content\"><span style=\"color: red;\">这是</span>一段<strong>自定义内容</strong></div></div></div></div><button class=\"k-btn k-none k-btn-icon k-notification-close css-h31bz\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-hoverable k-icon-close css-16qej3\"></i></button></div></div>"
```

