# `Demos`

#### `Breadcrumb basic`

```
"<div class=\"k-breadcrumb\">
    <div class=\"k-item\"><a class=\"k-item-link\">item 1</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><a class=\"k-item-link\">item 2</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><span class=\"k-item-link\">item 3</span></div> 
</div>"
```

#### `Breadcrumb separator`

```
"<div class=\"k-breadcrumb\">
    <div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-home\"></i> item 1
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-earth\"></i> item 2
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><span class=\"k-item-link\"><i class=\"ion-planet\"></i> item 3
    </span></div> 
</div>"
```

#### `Button basic`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>default</span>
    </button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>primay</span>
    </button><button class=\"k-btn k-warning\" tabindex=\"0\" type=\"button\">
    <span>warning</span>
    </button><button class=\"k-btn k-danger\" tabindex=\"0\" type=\"button\">
    <span>danger</span>
    </button><button class=\"k-btn k-none\" tabindex=\"0\" type=\"button\">
    <span>none</span>
    </button></div>"
```

#### `Button disabled`

```
"<div><button class=\"k-btn k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>disabled</span>
    </button><button class=\"k-btn k-none k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>disabled text</span>
    </button><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button group`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>重启</span>
    </button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>重启</span>
    </button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-small k-icon-left\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i><span>上一页
        </span>
    </button><button class=\"k-btn k-primary k-small k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            下一页</span><i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><br><br><p>纵向按钮组</p><div class=\"k-btns k-vertical\"><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>开机</span>
    </button><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>关机</span>
    </button><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>重启</span>
    </button></div><br><br><p>radio按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small k-active\" tabindex=\"0\" type=\"button\">
    <span>北京</span>
    <input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>上海</span>
    <input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>广州</span>
    <input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>深圳</span>
    <input type=\"radio\" tabindex=\"-1\"></button></div><p>checkbox按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>北京</span>
    <input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>上海</span>
    <input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>广州</span>
    <input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>深圳</span>
    <input type=\"checkbox\" tabindex=\"-1\"></button></div></div>"
```

#### `Button icon`

```
"<div><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>搜索</span>
    </button><button class=\"k-btn k-primary k-circle k-icon-left\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>搜索</span>
    </button></div>"
```

#### `Button loading`

```
"<div><button class=\"k-btn k-primary k-loading k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-load-c icon-loading\"></i><span>确认</span>
    </button><button class=\"k-btn k-btn-icon k-circle k-loading k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-load-c icon-loading\"></i><i class=\"k-icon ion-ios-search\"></i>
    </button><br><br><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>点击加载</span>
    </button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i><span>点击加载</span>
    </button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>图标在右侧</span><i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button size`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>default</span>
    </button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\">
    <span>small</span>
    </button><button class=\"k-btn k-mini\" tabindex=\"0\" type=\"button\">
    <span>mini</span>
    </button><br><br><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-small k-circle\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button><button class=\"k-btn k-btn-icon k-mini k-circle\" tabindex=\"0\" type=\"button\">
    <i class=\"k-icon ion-ios-search\"></i>
    </button></div>"
```

#### `Button tagName`

```
"<div><div class=\"k-btn k-primary\" tabindex=\"0\">
    <span>div元素按钮</span>
    </div><div class=\"k-btn k-disabled\" tabindex=\"-1\">
    <span>disabled div button</span>
    </div><a class=\"k-btn\" href=\"https://www.ksyun.com\" target=\"_blank\" tabindex=\"0\">
    <span>超链接按钮</span>
    </a></div>"
```

#### `Checkbox basic`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">checkbox</span></label><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checkbox</span></label><label class=\"k-checkbox k-disabled k-checked\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked checkbox</span></label></div>"
```

#### `Checkbox group`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []
</div>"
```

#### `Checkbox value`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值: </span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时取值为\"checked\": 
    </span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"0\"></span><span class=\"k-text\">
        指定非选中时取值为对象：
    </span></label></div>"
```

#### `Datepicker basic`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker k-disabled\" tabindex=\"-1\"><div class=\"k-input k-disabled k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" disabled=\"\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker clearable`

```
"<div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>"
```

#### `Datepicker datetime`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"时间精确到小时\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker disabledDate`

```
"<div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>"
```

#### `Datepicker maxMin`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div>"
```

#### `Datepicker multiple`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>
    You selected: 
    <br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>
    You selected: 
</div>"
```

#### `Datepicker range`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>
    You selected: 
    <br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div>
    You selected: 
</div>"
```

#### `Dialog asyncClose`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Close Dialog Asynchronously</span>
    </button><!--placeholder--></div>"
```

#### `Dialog asyncOpen`

```
"<button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Show Dialog Asynchronously</span>
    </button>"
```

#### `Dialog basic`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog block`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog events`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Show Dialog</span>
    </button><!--placeholder--></div>"
```

#### `Dialog extends`

```
"<button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Show Dialog</span>
    </button>"
```

#### `Dropdown basic`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            hover </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown disabled`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            disabled </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            disabled item</span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown nested`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            click </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown position`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            left </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            right </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            top center </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Dropdown tooltip`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>DropdownItem with Tooltip</span>
    </button><!--placeholder--></div>"
```

#### `Dropdown trigger`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            hover </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\">
    <span>
            click </span><i class=\"k-icon ion-arrow-down-b\"></i>
    </button><!--placeholder--></div>"
```

#### `Editable basic`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        <i class=\"ion-ios-location\"></i><a href=\"\">editable text</a>
    </div></div><br><div class=\"k-editable k-disabled\"><div class=\"c-ellipsis\">
        <i class=\"ion-ios-location\"></i><a href=\"\">disabled editable text</a>
    </div></div></div>"
```

#### `Editable validate`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">
        100
    </div></div></div>"
```

#### `Form basic`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">Input</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Select</label><div class=\"k-content\"><div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Checkbox</label><div class=\"k-content\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\">Radio</label><div class=\"k-content\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\">Radio ButtonGroup</label><div class=\"k-content\"><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>Javascript</span>
    <input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>PHP</span>
    <input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>C++</span>
    <input type=\"radio\" tabindex=\"-1\"></button></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Switch</label><div class=\"k-content\"><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Slider</label><div class=\"k-content\"><div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Datepicker</label><div class=\"k-content\"><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-suffix\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"ion-ios-calendar-outline\"></i></div></div></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Textarea</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" rows=\"2\" spellcheck=\"false\"></textarea></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\">Confirm Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"></label><div class=\"k-content\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"submit\">
    <span>提交</span>
    </button><button class=\"k-btn\" style=\"margin-left: 20px\" tabindex=\"0\" type=\"button\">
    <span>重置</span>
    </button></div></div></form>"
```

#### `Form custom`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">描述</label><div class=\"k-content\"><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>删除</span>
    </button></div></div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>添加</span>
    </button></div></div></form>"
```

#### `Form label`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\"><i style=\"color: red\">*</i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"><i class=\"ion-person\"></i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form>"
```

#### `Form variable`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">姓名</label><div class=\"k-content\"><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div></div></div></div></form>"
```

#### `Grid basic`

```
"<div><div class=\"k-row\"><div class=\"k-col k-12\">col-12</div><div class=\"k-col k-12\">col-12</div></div><div class=\"k-row\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-6\">col-6</div><div class=\"k-col k-8\">col-8</div><div class=\"k-col k-6\">col-6</div></div></div>"
```

#### `Grid gutter`

```
"<div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-12</div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-12</div></div></div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-4\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-4</div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6</div></div><div class=\"k-col k-8\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-8</div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6</div></div></div></div>"
```

#### `Input autowidth`

```
"<div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"auto width\" style=\"width: 2px;\"><div class=\"k-fake\">auto width</div></div></div>"
```

#### `Input basic`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div></div> 
    <br><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"disabled\" disabled=\"\"></div></div></div>"
```

#### `Input blocks`

```
"<div><div class=\"k-input k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>搜索</span>
    </button></div></div><div class=\"k-input k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"ion-ios-search\"></i></div></div></div><div class=\"k-input k-group k-with-prefix k-with-suffix\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"ion-ios-search\"></i></div></div><div class=\"k-append\">.com</div></div></div>"
```

#### `Input clearable`

```
"<div><div class=\"k-input k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div></div><br><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i><i class=\"ion-ios-search\"></i></div></div></div></div>"
```

#### `Input size`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><div class=\"k-input k-small k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-small k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon k-small\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-input k-small k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\">
    <span>Search</span>
    </button></div></div><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div>"
```

#### `Input textarea`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"2\" spellcheck=\"false\"></textarea></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"5\" spellcheck=\"false\"></textarea></div></div></div>"
```

#### `Message basic`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>info</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>error</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>warning</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>success</span>
    </button></div>"
```

#### `Message custom`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>custom message</span>
    </button><!--message--></div>"
```

#### `Message duration`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>close after 10s</span>
    </button><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>stick message</span>
    </button></div>"
```

#### `Pagination basic`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">10</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">10</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination counts`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-page\">6</div><div class=\"k-page\">7</div><div class=\"k-page\">8</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-page\">6</div><div class=\"k-page\">7</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination current`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination goto`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">
        跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页
    </div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Pagination size`

```
"<div><div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-small k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-mini k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

#### `Progress basic`

```
"<div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div>"
```

#### `Progress children`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\">
        <circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"55\" stroke-dashoffset=\"207.34511513692635\" stroke-dasharray=\"345.57519189487726\" stroke-width=\"10\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\" stroke-dasharray=\"345.57519189487726\" stroke-dashoffset=\"345.57519189487726\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"345.57519189487726\" to=\"207.34511513692635\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle>
    </svg><div class=\"k-text\"><div style=\"font-size: 14px; line-height: 20px;\">
            正在上传<br>
            40%
        </div></div></div><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button></div></div>"
```

#### `Progress circle`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\">
        <circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"55\" stroke-dashoffset=\"172.78759594743863\" stroke-dasharray=\"345.57519189487726\" stroke-width=\"10\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"55\" stroke-width=\"10\" stroke-dasharray=\"345.57519189487726\" stroke-dashoffset=\"345.57519189487726\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"345.57519189487726\" to=\"172.78759594743863\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle>
    </svg><div class=\"k-text\"><span>50%</span></div></div></div>"
```

#### `Progress size`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-small\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-mini\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div></div>"
```

#### `Progress status`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>100%</span></div></div></div>"
```

#### `Radio basic`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">radio</span></label><label class=\"k-radio k-disabled\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled radio</span></label><label class=\"k-radio k-disabled k-checked\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked radio</span></label></div>"
```

#### `Radio group`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: 
</div>"
```

#### `Radio value`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值：</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时的取值为\"checked\": 
    </span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"[object Object]\"></span><span class=\"k-text\">
        指定选中时的取值为对象：
    </span></label></div>"
```

#### `Select allowUnmatch`

```
"<div><div class=\"k-select\" style=\"margin-right: 10px\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入或选择\"></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    Day: 
</div>"
```

#### `Select basic`

```
"<div><div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: 
</div>"
```

#### `Select clearable`

```
"<div><div class=\"k-select k-clearable\" style=\"margin-right: 10px\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-clearable\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select custom`

```
"<div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select disabled`

```
"<div><div class=\"k-select k-disabled\" style=\"margin-right: 10px\" tabindex=\"-1\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select filterable`

```
"<div><div class=\"k-select\" style=\"margin-right: 10px\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-values\"><div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\" style=\"width: 2px;\"><div class=\"k-fake\">请选择</div></div></div></span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Select group`

```
"<div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select multiple`

```
"<div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

#### `Select size`

```
"<div><div class=\"k-select\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-small\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-mini\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

#### `Slider basic`

```
"<div><div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 60%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div></div><div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50.4444%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50.4444%;\"></div></div><div class=\"k-box\"><span>50 </span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div></div></div>"
```

#### `Slider disabled`

```
"<div><div class=\"k-slider k-disabled\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 50%;\"></div></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>+</span>
    </button></div></div></div><div class=\"k-slider k-disabled\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%; left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>50 </span><span>100</span></div></div></div></div>"
```

#### `Slider range`

```
"<div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 26%; left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 76%;\"></div></div><div class=\"k-box\"><span>0 </span><span>100</span></div></div></div>"
```

#### `Slider step`

```
"<div><div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div></div><div class=\"k-slider\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>50 </span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div></div></div>"
```

#### `Spinner basic`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Spinner size`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-small\"><button class=\"k-btn k-btn-icon k-small k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner k-mini\"><button class=\"k-btn k-btn-icon k-mini k-left\" tabindex=\"0\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Spinner step`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\">
    <span>-</span>
    </button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\">
    <span>+</span>
    </button></div></div>"
```

#### `Steps basic`

```
"<div><div class=\"k-steps c-clearfix\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\">
    <span>Next Step</span>
    </button></div>"
```

#### `Steps error`

```
"<div class=\"k-steps c-clearfix\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-checkmark-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div>"
```

#### `Switch basic`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

#### `Switch disabled`

```
"<div><div class=\"k-switch k-default k-disabled\" tabindex=\"-1\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

#### `Switch onOff`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

#### `Switch size`

```
"<div><div>
        小号：<div class=\"k-switch k-small\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div><div>
        迷你：<div class=\"k-switch k-mini\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

#### `Switch value`

```
"<div><div class=\"k-switch k-checked k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-checked k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"1\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"1\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

#### `Switch widthHeight`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关闭</div><div class=\"k-bar\"><div class=\"k-on\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"><div class=\"k-off\">关闭</div><div class=\"k-bar\"><div class=\"k-on\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

#### `Table basic`

```
"<div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div>
        
    </div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table checkType`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"多选框\">多选框</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td>
                <td title=\"单选框\">单选框</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\">
                <td title=\"无选框\">无选框</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table checkedKey_s`

```
"<div><div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"></th>
            <th title=\"radio不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio不指定rowKey</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"k-checked\"><td><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td>
                <td title=\"赋默认值选中\">赋默认值选中</td>
            </tr><tr class=\"\"><td><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"1\"></span></label></td>
                <td title=\"不选中\">不选中</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"></th>
            <th title=\"radio指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio指定为item的id</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"k-checked\"><td><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"yes\"></span></label></td>
                <td title=\"选中\">选中</td>
            </tr><tr class=\"\"><td><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"no\"></span></label></td>
                <td title=\"不选中\">不选中</td>
            </tr>
</tbody>
</table>
</div></div><div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox不指定rowKey</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"k-checked\"><td><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"赋默认值选中\">赋默认值选中</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"不选中\">不选中</td>
            </tr><tr class=\"k-checked\"><td><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td>
                <td title=\"赋默认值选中，可设置多个\">赋默认值选中，可设置多个</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox指定为item的id</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"k-checked\"><td><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"yes\"></span></label></td>
                <td title=\"选中\">选中</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"no\"></span></label></td>
                <td title=\"不选中\">不选中</td>
            </tr>
</tbody>
</table>
</div></div></div>"
```

#### `Table disableRow`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"奇数行不可点击\"><div class=\"k-th\"><div class=\"c-ellipsis\">奇数行不可点击</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"1\">1</td>
            </tr><tr class=\"k-disabled\"><td><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"2\">2</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td>
                <td title=\"3\">3</td>
            </tr><tr class=\"k-disabled\"><td><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td>
                <td title=\"4\">4</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td>
                <td title=\"5\">5</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table fixHeader`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"false\"><div class=\"k-th\"><div class=\"c-ellipsis\">false</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"false(默认)\">false(默认)</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\"><div class=\"k-fixed\" style=\"padding-right: 0px;\"><table class=\"k-table\">
            <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"true\"><div class=\"k-th\"><div class=\"c-ellipsis\">true</div>
        
    </div></th>
            
        </tr></thead>
        </table></div>
    <div class=\"k-scroll\"><table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"true\"><div class=\"k-th\"><div class=\"c-ellipsis\">true</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"表头固定但是没有滚动条，展示不出效果\">表头固定但是没有滚动条，展示不出效果</td>
            </tr>
</tbody>
</table></div>
</div><div class=\"k-table-wrapper\"><div class=\"k-fixed\" style=\"padding-right: 0px;\"><table class=\"k-table\">
            <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div>
        
    </div></th>
            
        </tr></thead>
        </table></div>
    <div class=\"k-scroll\" style=\"max-height: 100px;\"><table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"表头固定啦\">表头固定啦</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"下拉\">下拉</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td>
                <td title=\"yeah!\">yeah!</td>
            </tr>
</tbody>
</table></div>
</div></div>"
```

#### `Table group`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div>
        
    </div></th><th title=\"时间\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">
                时间
                
            </div></div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"lihua\">lihua</td><td title=\"10-12-12\">10-12-12</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div>
        
    </div></th><th title=\"时间\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">
                时间
                
            </div></div>
        
    </div></th>
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"lihua(标签形式定义表头信息)\">lihua(标签形式定义表头信息)</td><td title=\"10-12-12\">10-12-12</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table noDataTemplate`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div>
        
    </div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr><td class=\"k-no-data\" colspan=\"3\">/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~</td></tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div>
        
    </div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr><td class=\"k-no-data\" colspan=\"3\"><div>这里没有数据(自定义版本)</div></td></tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div>
        
    </div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr><td class=\"k-no-data\" colspan=\"3\"><div style=\"color: red\">没有数据</div></td></tr>
</tbody>
</table>
</div></div>"
```

#### `Table resizable`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"默认不可拖拽\"><div class=\"k-th\"><div class=\"c-ellipsis\">默认不可拖拽</div>
        
    </div></th><th title=\"表头B\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头B</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"A\">A</td><td title=\"B\">B</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"A\">A</td><td title=\"B\">B</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"设置为可拖拽\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">设置为可拖拽</div>
        
    </div></th><th title=\"表头B\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头B</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"A\">A</td><td title=\"B\">B</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"A\">A</td><td title=\"B\">B</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table rowCheckable`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"不整行选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">不整行选中</div>
        
    </div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"A\">A</td><td title=\"B\">B</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"A\">A</td><td title=\"点我不会选中整行\">点我不会选中整行</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"整行选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">整行选中</div>
        
    </div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"A\">A</td><td title=\"任何位置都可以哦～\">任何位置都可以哦～</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"A\">A</td><td title=\"点我会选中整行\">点我会选中整行</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table rowClassName`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"偶数行背景变换\"><div class=\"k-th\"><div class=\"c-ellipsis\">偶数行背景变换</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"turn-blue\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"1\">1</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"2\">2</td>
            </tr><tr class=\"turn-blue\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td>
                <td title=\"3\">3</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td>
                <td title=\"4\">4</td>
            </tr><tr class=\"turn-blue\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td>
                <td title=\"5\">5</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table rowExpandable`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr>
            
            <th title=\"点击整行展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行展开内容</div>
        
    </div></th>
        </tr></thead>
    <tbody>
    <tr class=\"\">
                <td title=\"Javey\">Javey</td>
            </tr><tr class=\"\">
                <td title=\"Jiawei\">Jiawei</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div>
        
    </div></th>
        </tr></thead>
    <tbody>
    <tr class=\"\">
                <td><div><i class=\"icon ion-ios-plus-outline\"></i>
                    Javey
                </div></td>
            </tr><tr class=\"\">
                <td><div><i class=\"icon ion-ios-plus-outline\"></i>
                    Jiawei
                </div></td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table scheme`

```
"<div><p>{key: value}形式:</p><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"a只是个id\"><div class=\"k-th\"><div class=\"c-ellipsis\">a只是个id</div>
        
    </div></th><th title=\"key-{String}形式\"><div class=\"k-th\"><div class=\"c-ellipsis\">key-{String}形式</div>
        
    </div></th><th title=\"key为一个连续获取的字符串\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个连续获取的字符串</div>
        
    </div></th><th title=\"没有这个key\"><div class=\"k-th\"><div class=\"c-ellipsis\">没有这个key</div>
        
    </div></th><th title=\"e也只是个id\"><div class=\"k-th\"><div class=\"c-ellipsis\">e也只是个id</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td><a>虚拟DOM</a></td><td title=\"获取到了item.b\">获取到了item.b</td><td title=\"item.c.c1\">item.c.c1</td><td></td><td title=\"值形式\">值形式</td>
            </tr>
</tbody>
</table>
</div><p>标签形式:</p><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"a\"><div class=\"k-th\"><div class=\"c-ellipsis\">a</div>
        
    </div></th><th title=\"key为一个连续获取的字符\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个连续获取的字符</div>
        
    </div></th><th title=\"key为一个连续获取的字符\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个连续获取的字符</div>
        
    </div></th><th width=\"400\" title=\"这个宽度大一点400px\"><div class=\"k-th\"><div class=\"c-ellipsis\">这个宽度大一点400px</div>
        
    </div></th>
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td><a>虚拟DOM</a></td><td title=\"item.c.c1\">item.c.c1</td><td title=\"值形式\">值形式</td><td title=\"获取到了item.b\">获取到了item.b</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table sort`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div>
        <div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div>
    </div></th><th class=\"k-sortable\" title=\"时间\"><div class=\"k-th\"><div class=\"c-ellipsis\">时间</div>
        <div class=\"k-sort k-asc\"><i class=\"k-icon icon-asc\"></i></div>
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"a默认按照时间升序\">a默认按照时间升序</td><td title=\"2\">2</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"b 箭头方向默认的是向上的\">b 箭头方向默认的是向上的</td><td title=\"1\">1</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div>
        <div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div>
    </div></th><th class=\"k-sortable\" title=\"时间\"><div class=\"k-th\"><div class=\"c-ellipsis\">时间</div>
        <div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div>
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"a无默认排序\">a无默认排序</td><td title=\"2\">2</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"b 观察箭头方向都是双向的\">b 观察箭头方向都是双向的</td><td title=\"1\">1</td>
            </tr>
</tbody>
</table>
</div><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div>
        
    </div></th><th class=\"k-sortable\" title=\"时间(标签形式定义排序)\"><div class=\"k-th\"><div class=\"c-ellipsis\">时间(标签形式定义排序)</div>
        <div class=\"k-sort k-asc\"><i class=\"k-icon icon-asc\"></i></div>
    </div></th>
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"a默认按照时间升序\">a默认按照时间升序</td><td title=\"2\">2</td>
            </tr><tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td>
                <td title=\"b 箭头方向默认的是向上的\">b 箭头方向默认的是向上的</td><td title=\"1\">1</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Table type`

```
"<div class=\"no-data-template\"><div class=\"k-table-wrapper\">
    <table class=\"k-table\">
    <thead><tr><th class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"类型\"><div class=\"k-th\"><div class=\"c-ellipsis\">类型</div>
        
    </div></th>
            
        </tr></thead>
    <tbody>
    <tr class=\"\"><td><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td>
                <td title=\"defalut\">defalut</td>
            </tr>
</tbody>
</table>
</div></div>"
```

#### `Tabs basic`

```
"<div><div class=\"k-tabs\" style=\"margin: 20px;\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab k-active\">关联云主机</a>
    
</div><div class=\"k-tabs\" style=\"margin: 20px;\">
    <a class=\"k-tab\">入站规则</a><a class=\"k-tab k-active\">出站规则</a><a class=\"k-tab\">关联云主机</a>
</div><div style=\"margin: 20px;\">出站规则</div></div>"
```

#### `Tooltip basic`

```
"<div><span class=\"k-tooltip\">
        hover the text
    </span><!--placeholder--><br><br><span class=\"k-tooltip\">
        don't show anything if content is empty 
    </span><!--placeholder--></div>"
```

#### `Tooltip content`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>Adjust Volume</span>
    </button><!--placeholder--></div>"
```

#### `Tooltip position`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>left</span>
    </button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>right</span>
    </button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>top</span>
    </button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>bottom</span>
    </button><!--placeholder--></div>"
```

#### `Tooltip trigger`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>hover</span>
    </button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>click</span>
    </button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\">
    <span>can hover</span>
    </button><!--placeholder--></div>"
```

#### `Transfer basic`

```
"<div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\">请选择</div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><div class=\"k-panel\"><div class=\"k-title\">已选择 (0)</div><div class=\"k-list\"></div></div></div>"
```

#### `Transfer label`

```
"<div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\">请选择</div><div class=\"k-input k-group k-clearable k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名0</div><p>前端服务器0 | 192.168.1.0</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名1</div><p>前端服务器1 | 192.168.1.1</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名2</div><p>前端服务器2 | 192.168.1.2</p></div></span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名3</div><p>前端服务器3 | 192.168.1.3</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名4</div><p>前端服务器4 | 192.168.1.4</p></div></span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-left\"></i>
    </button><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\">
    <i class=\"k-icon ion-ios-arrow-right\"></i>
    </button></div><div class=\"k-panel\"><div class=\"k-title\">已选择 (0)</div><div class=\"k-input k-group k-clearable k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-clear k-icon ion-ios-close\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\">
    <i class=\"ion-ios-search\"></i>
    </button></div></div><div class=\"k-list\"></div></div></div>"
```

