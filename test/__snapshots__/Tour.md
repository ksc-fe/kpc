# `Tour`

#### `should handle custom text correctly`

```
"<div class=\"example-container\"><button class=\"k-btn k-default css-h31bz\" id=\"welcome-btn\" tabindex=\"0\" type=\"button\">欢迎页面</button><button class=\"k-btn k-default css-h31bz\" id=\"feature-btn\" tabindex=\"0\" type=\"button\" style=\"margin-left: 20px;\">功能介绍</button><button class=\"k-btn k-default css-h31bz\" id=\"finish-btn\" tabindex=\"0\" type=\"button\" style=\"margin-left: 20px;\">完成设置</button></div><div class=\"k-tour k-light css-1gikalg\"><div class=\"k-tour-target-highlight\" style=\"width: 98px; height: 48px; position: fixed; left: -8px; top: -8px;\"></div><div class=\"k-tour-step-wrapper\" style=\"left: 0px; top: 4372px;\"><div class=\"k-tour-step\"><div class=\"k-tour-step-header\"><div class=\"k-tour-step-title\">欢迎使用！</div></div><div class=\"k-tour-step-body\">欢迎来到我们的应用，让我们开始引导之旅吧！</div><div class=\"k-tour-step-footer\"><div class=\"k-tour-step-indicator\">1 / 3</div><div class=\"k-tour-step-buttons\"><button class=\"k-btn k-small k-primary css-h31bz\" tabindex=\"0\" type=\"button\">开始探索</button></div></div></div><i class=\"k-tour-arrow k-top\" style=\"left: 34px\"></i></div></div><div style=\"margin-top: 20px;\"><button class=\"k-btn k-primary css-h31bz css-1ga069\" tabindex=\"0\" type=\"button\">
            开始自定义按钮引导
        </button><span style=\"margin-left: 10px;\">
            当前步骤: 1</span></div>"
```

#### `should handle target correctly`

```
"<div class=\"k-tour k-light css-1gikalg\"><div class=\"k-tour-target-highlight\"></div><div class=\"k-tour-step-wrapper\" style=\"left: 752.5px; top: 4708px;\"><div class=\"k-tour-step\"><div class=\"k-tour-step-header\"><div class=\"k-tour-step-title\">无目标元素-第一步</div></div><div class=\"k-tour-step-body\"><span>当没有指定target属性或者目标元素不存在时，Tour会居中显示在屏幕中央。</span></div><div class=\"k-tour-step-footer\"><div class=\"k-tour-step-indicator\">1 / 2</div><div class=\"k-tour-step-buttons\"><button class=\"k-btn k-small k-primary css-h31bz\" tabindex=\"0\" type=\"button\">下一步</button></div></div></div><i class=\"k-tour-arrow k-center\" style=\"top: 79.5px\"></i></div></div><div style=\"margin-top: 20px;\"><button class=\"k-btn k-default css-h31bz css-1ga069\" tabindex=\"0\" type=\"button\">
            启动无目标引导
        </button></div>"
```

