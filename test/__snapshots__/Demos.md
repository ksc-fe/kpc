# `Demos`

## `Intact`

##   `app`

####     `App basic`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div><div class=\"k-app\"></div></div></div>"
```

####     `App ssr`

```
"<div><button class=\"k-btn\" style=\"margin-right: 10px;\" tabindex=\"0\" type=\"button\"><span>Render in server</span></button><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div></div></div>"
```

##   `badge`

####     `Badge alone`

```
"<div><div class=\"k-badge k-alone\"><sup class=\"k-text\"></sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">new</sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">19</sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">99+</sup></div></div>"
```

####     `Badge basic`

```
"<div><div class=\"k-badge\">Message<sup class=\"k-text\"></sup></div><div class=\"k-badge\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\"></sup></div></div>"
```

####     `Badge disabled`

```
"<div><div class=\"k-badge\">Message</div><div class=\"k-badge\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div></div>"
```

####     `Badge text`

```
"<div><div class=\"k-badge k-has-text\">Message<sup class=\"k-text\">new</sup></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\">19</sup></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\">99+</sup></div></div>"
```

##   `breadcrumb`

####     `Breadcrumb basic`

```
"<div class=\"k-breadcrumb\"><div class=\"k-item\"><a class=\"k-item-link\">item 1</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><a class=\"k-item-link\">item 2</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><span class=\"k-item-link\">item 3</span></div></div>"
```

####     `Breadcrumb separator`

```
"<div class=\"k-breadcrumb\"><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-home\"></i> item 1
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-earth\"></i> item 2
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><span class=\"k-item-link\"><i class=\"ion-planet\"></i> item 3
    </span></div></div>"
```

##   `button`

####     `Button basic`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>primay</span></button><button class=\"k-btn k-warning\" tabindex=\"0\" type=\"button\"><span>warning</span></button><button class=\"k-btn k-danger\" tabindex=\"0\" type=\"button\"><span>danger</span></button><button class=\"k-btn k-success\" tabindex=\"0\" type=\"button\"><span>success</span></button><button class=\"k-btn k-none\" tabindex=\"0\" type=\"button\"><span>none</span></button></div>"
```

####     `Button disabled`

```
"<div><button class=\"k-btn k-disabled\" tabindex=\"-1\" type=\"button\"><span>disabled</span></button><button class=\"k-btn k-none k-disabled\" tabindex=\"-1\" type=\"button\"><span>disabled text</span></button><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button></div>"
```

####     `Button group`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><div class=\"k-btns\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><span>上一页
        </span></button><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            下一页</span><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><br><br><p>纵向按钮组</p><div class=\"k-btns k-vertical\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><br><br><p>radio按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>北京</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>上海</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>广州</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>深圳</span><input type=\"radio\" tabindex=\"-1\"></button></div><p>checkbox按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>北京</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>上海</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>广州</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>深圳</span><input type=\"checkbox\" tabindex=\"-1\"></button></div></div>"
```

####     `Button icon`

```
"<div><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i><span>搜索</span></button><button class=\"k-btn k-primary k-circle k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i><span>搜索</span></button></div>"
```

####     `Button loading`

```
"<div><button class=\"k-btn k-primary k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><span>确认</span></button><button class=\"k-btn k-btn-icon k-circle k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><i class=\"k-icon ion-ios-search\"></i></button><br><br><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击加载</span></button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i><span>点击加载</span></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>图标在右侧</span><i class=\"k-icon ion-ios-search\"></i></button></div>"
```

####     `Button size`

```
"<div><button class=\"k-btn k-large\" tabindex=\"0\" type=\"button\"><span>large</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>small</span></button><button class=\"k-btn k-mini\" tabindex=\"0\" type=\"button\"><span>mini</span></button><br><br><button class=\"k-btn k-btn-icon k-large k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-large\"></i></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-btn-icon k-small k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i></button><button class=\"k-btn k-btn-icon k-mini k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-mini\"></i></button></div>"
```

####     `Button tagName`

```
"<div><div class=\"k-btn k-primary\" tabindex=\"0\"><span>div元素按钮</span></div><div class=\"k-btn k-disabled\" tabindex=\"-1\"><span>disabled div button</span></div><a class=\"k-btn\" href=\"https://www.ksyun.com\" target=\"_blank\" tabindex=\"0\"><span>超链接按钮</span></a></div>"
```

##   `cascader`

####     `Cascader basic`

```
"<div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Cascader changeOnSelect`

```
"<div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Cascader custom`

```
"<div class=\"k-select k-cascader k-clearable k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

####     `Cascader disabled`

```
"<div><div class=\"k-select k-cascader k-disabled k-with-suffix\" tabindex=\"-1\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Cascader filterable`

```
"<div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Cascader loadData`

```
"<div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

####     `Cascader size`

```
"<div><div class=\"k-select k-cascader k-large k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-small k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-mini k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Cascader trigger`

```
"<div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

##   `checkbox`

####     `Checkbox basic`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">checkbox</span></label><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checkbox</span></label><label class=\"k-checkbox k-disabled k-checked\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked checkbox</span></label></div>"
```

####     `Checkbox group`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []</div>"
```

####     `Checkbox indeterminate`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">全选</span></label><hr><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []</div>"
```

####     `Checkbox value`

```
"<div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值: </span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时取值为\"checked\": </span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"0\"></span><span class=\"k-text\">
        指定非选中时取值为对象：</span></label></div>"
```

##   `collapse`

####     `Collapse accordion`

```
"<div class=\"k-collapse k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div>"
```

####     `Collapse arrow`

```
"<div class=\"k-collapse k-left k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<a class=\"link\" href=\"/docs/design/language/\">详细说明</a><i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div>"
```

####     `Collapse basic`

```
"<div class=\"k-collapse k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item k-disabled\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div>"
```

####     `Collapse noBorder`

```
"<div class=\"k-collapse\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div>"
```

####     `Collapse title`

```
"<div class=\"k-collapse k-border\"><div class=\"k-collapse-item\"><div class=\"k-title\"><i class=\"ion-cube\"></i>设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div>"
```

##   `datepicker`

####     `Datepicker basic`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker k-disabled\" tabindex=\"-1\"><div class=\"k-input k-disabled k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" disabled=\"\" tabindex=\"-1\"></div></div><!--placeholder--></div></div>"
```

####     `Datepicker clearable`

```
"<div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div>"
```

####     `Datepicker datetime`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"时间精确到小时\" tabindex=\"-1\"></div></div><!--placeholder--></div></div>"
```

####     `Datepicker disabledDate`

```
"<div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div>"
```

####     `Datepicker maxMin`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期\" tabindex=\"-1\"></div></div><!--placeholder--></div> ~
    <div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间\" tabindex=\"-1\"></div></div><!--placeholder--></div> ~
    <div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div></div>"
```

####     `Datepicker multiple`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: <br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Datepicker range`

```
"<div><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期 ~ 结束日期\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: <br><br><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Datepicker shortcuts`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div></div>"
```

####     `Datepicker yearMonth`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择年份\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择月份\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div></div>"
```

##   `dialog`

####     `Dialog asyncClose`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Close Dialog Asynchronously</span></button><!--placeholder--></div>"
```

####     `Dialog asyncOpen`

```
"<button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog Asynchronously</span></button>"
```

####     `Dialog basic`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><!--placeholder--></div>"
```

####     `Dialog block`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show No Footer Dialog</span></button><!--placeholder--><!--placeholder--></div>"
```

####     `Dialog events`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><!--placeholder--></div>"
```

####     `Dialog extends`

```
"<button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button>"
```

####     `Dialog size`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show </span><span>large</span><span> Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show </span><span>default</span><span> Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show </span><span>small</span><span> Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show </span><span>mini</span><span> Dialog</span></button><!--placeholder--></div></div>"
```

##   `drawer`

####     `Drawer basic`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Drawer</span></button><!--placeholder--></div>"
```

####     `Drawer overlay`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Drawer Without Overlay</span></button><!--placeholder--></div>"
```

####     `Drawer placement`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从上侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从下侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从左侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从右侧出现</span></button></div><!--placeholder--></div>"
```

##   `dropdown`

####     `Dropdown basic`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            hover </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div>"
```

####     `Dropdown checkbox`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>More &gt;</span></button><!--placeholder--></div>"
```

####     `Dropdown contextmenu`

```
"<div><div class=\"contextmenu-area\">
        right click this area to show context menu
    </div><!--placeholder--></div>"
```

####     `Dropdown disabled`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            disabled </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            disabled item</span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div>"
```

####     `Dropdown nested`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            click </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div>"
```

####     `Dropdown position`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            left </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            right </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            top center </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div>"
```

####     `Dropdown tooltip`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>DropdownItem with Tooltip</span></button><!--placeholder--></div>"
```

####     `Dropdown trigger`

```
"<div><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            hover </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            click </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div>"
```

##   `editable`

####     `Editable basic`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\"><i class=\"ion-ios-location\"></i><a href=\"\">editable text</a></div></div><br><div class=\"k-editable k-disabled\"><div class=\"c-ellipsis\"><i class=\"ion-ios-location\"></i><a href=\"\">disabled editable text</a></div></div></div>"
```

####     `Editable validate`

```
"<div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div></div>"
```

##   `form`

####     `Form basic`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Input</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Select</label><div class=\"k-content\"><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Checkbox</label><div class=\"k-content\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Radio</label><div class=\"k-content\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Radio ButtonGroup</label><div class=\"k-content\"><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Javascript</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PHP</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>C++</span><input type=\"radio\" tabindex=\"-1\"></button></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Switch</label><div class=\"k-content\"><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Slider</label><div class=\"k-content\"><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Datepicker</label><div class=\"k-content\"><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Textarea</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" rows=\"2\" spellcheck=\"false\"></textarea></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Confirm Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\"></label><div class=\"k-content\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"submit\"><span>提交</span></button><button class=\"k-btn\" style=\"margin-left: 20px\" tabindex=\"0\" type=\"button\"><span>重置</span></button></div></div></form>"
```

####     `Form custom`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">描述</label><div class=\"k-content\"><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button></div></div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button></div></div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>添加</span></button></div></div></form>"
```

####     `Form label`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\"><i style=\"color: red\">*</i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"><i class=\"ion-person\"></i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form>"
```

####     `Form remote`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">用户名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form>"
```

####     `Form variable`

```
"<form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">姓名</label><div class=\"k-content\"><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div></div></div></div></form>"
```

##   `grid`

####     `Grid basic`

```
"<div><div class=\"k-row\"><div class=\"k-col k-12\">col-12</div><div class=\"k-col k-12\">col-12</div></div><div class=\"k-row\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-6\">col-6</div><div class=\"k-col k-8\">col-8</div><div class=\"k-col k-6\">col-6</div></div></div>"
```

####     `Grid flexAlign`

```
"<div><h5>顶端对齐 top</h5><div class=\"k-row k-flex k-justify-center k-align-top\"><div class=\"k-col k-4\" style=\"height: 100px\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px\">col-4</div></div><h5>底部对齐 bottom</h5><div class=\"k-row k-flex k-justify-center k-align-bottom\"><div class=\"k-col k-4\" style=\"height: 100px\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px\">col-4</div></div><h5>居中对齐 middle</h5><div class=\"k-row k-flex k-justify-center k-align-middle\"><div class=\"k-col k-4\" style=\"height: 100px\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px\">col-4</div></div><h5>撑开成容器高度 stretch</h5><div class=\"k-row k-flex k-justify-center k-align-stretch\" style=\"height: 100px;\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>基线对齐 baseline</h5><div class=\"k-row k-flex k-justify-center k-align-baseline\"><div class=\"k-col k-4\" style=\"height: 100px; font-size: 20px\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px; font-size: 16px\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px; font-size: 28px\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px; font-size: 12px\">col-4</div></div></div>"
```

####     `Grid flexLayout`

```
"<div><h5>居左 start</h5><div class=\"k-row k-flex k-justify-start\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>居右 end</h5><div class=\"k-row k-flex k-justify-end\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>居中 center</h5><div class=\"k-row k-flex k-justify-center\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，顶边 between</h5><div class=\"k-row k-flex k-justify-between\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，与边界的距离是两个子元素的一半 around</h5><div class=\"k-row k-flex k-justify-around\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，间距（包括边界）相等 evenly</h5><div class=\"k-row k-flex k-justify-evenly\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div></div>"
```

####     `Grid flexOrder`

```
"<div class=\"k-row k-flex\"><div class=\"k-col k-6 k-order-4\">1 col-6 order-4</div><div class=\"k-col k-6 k-order-3\">2 col-6 order-3</div><div class=\"k-col k-6 k-order-2\">3 col-6 order-2</div><div class=\"k-col k-6 k-order-1\">4 col-6 order-1</div></div>"
```

####     `Grid gutter`

```
"<div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-12</div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-12</div></div></div></div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-4\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-4</div></div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-6</div></div></div><div class=\"k-col k-8\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-8</div></div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-6</div></div></div></div></div>"
```

####     `Grid offset`

```
"<div><div class=\"k-row no-gutter\"><div class=\"k-col k-6 k-offset-6\">col-6 offset-6</div><div class=\"k-col k-6 k-offset-6\">col-6 offset-6</div></div><div class=\"k-row gutter k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-6 k-offset-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6 gutter-16 offset-6</div></div><div class=\"k-col k-6 k-offset-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6 gutter-16 offset-6</div></div></div></div>"
```

####     `Grid pushPull`

```
"<div class=\"k-row\"><div class=\"k-col k-18 k-push-6\">1 col-18 push-6</div><div class=\"k-col k-6 k-pull-18\">2 col-6 push-18</div></div>"
```

####     `Grid responsive`

```
"<div><h5>指定每一个断点Col所占的栅格数</h5><div class=\"k-row\"><div class=\"k-col k-xxl-11 k-xl-10 k-lg-8 k-md-6 k-sm-4 k-2\">col</div><div class=\"k-col k-xxl-2 k-xl-4 k-lg-8 k-md-12 k-sm-16 k-20\">col</div><div class=\"k-col k-xxl-11 k-xl-10 k-lg-8 k-md-6 k-sm-4 k-2\">col</div></div><h5>指定一个断点，当宽度小于该断点时，Col将以100%宽度纵向排列</h5><div class=\"k-row\"><div class=\"k-col k-md-16\">col-md-18</div><div class=\"k-col k-md-8\">col-md-8</div></div><h5>同时指定多个属性</h5><div class=\"k-row k-flex\"><div class=\"k-col k-lg-8 k-lg-order-2 k-lg-offset-8 k-md-4 k-md-order-1 k-md-offset-4\">1 col</div><div class=\"k-col k-lg-4 k-lg-order-1 k-lg-offset-4 k-md-8 k-md-order-2 k-md-offset-8\">2 col</div></div></div>"
```

##   `icon`

####     `Icon basic`

```
"<div><i class=\"k-icon ion-happy-outline\" style=\"font-size: 36px;\"></i><i class=\"k-icon ion-happy-outline k-large\"></i><i class=\"k-icon ion-happy-outline\"></i><i class=\"k-icon ion-happy-outline k-small\"></i><i class=\"k-icon ion-happy-outline k-mini\"></i></div>"
```

####     `Icon color`

```
"<div><i class=\"k-icon ion-happy-outline k-large\"></i><i class=\"k-icon ion-happy-outline k-large k-color-primary\"></i><i class=\"k-icon ion-happy-outline k-large k-color-warning\"></i><i class=\"k-icon ion-happy-outline k-large k-color-danger\"></i><i class=\"k-icon ion-happy-outline k-large k-color-success\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: red;\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: rgb(0, 0, 234);\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: rgb(183, 18, 193);\"></i></div>"
```

##   `input`

####     `Input autowidth`

```
"<div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"auto width\" style=\"width: 100px;\"><div class=\"k-fake\">auto width</div></div></div>"
```

####     `Input basic`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div></div><br><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"disabled\" disabled=\"\"></div></div></div>"
```

####     `Input blocks`

```
"<div><div class=\"k-input k-group\"><div class=\"k-prepend k-padding\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append k-padding\">.com</div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>搜索</span></button></div></div><div class=\"k-input k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div></div><div class=\"k-input k-group k-with-prefix k-with-suffix\"><div class=\"k-prepend k-padding\">http://</div><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div><div class=\"k-append k-padding\">.com</div></div></div>"
```

####     `Input clearable`

```
"<div><div class=\"k-input k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><br><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> <i class=\"ion-ios-search\"></i></div></div></div></div>"
```

####     `Input select`

```
"<div><div class=\"k-input k-group\" style=\"width: 500px;\"><div class=\"k-prepend\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\" style=\"width: 110px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"http\"><span class=\"k-value c-ellipsis\">http://</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div><div class=\"k-append\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\" style=\"width: 90px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"com\"><span class=\"k-value c-ellipsis\">.com</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div></div>"
```

####     `Input size`

```
"<div><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><div class=\"k-input k-small k-group\"><div class=\"k-prepend k-padding\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append k-padding\">.com</div></div><div class=\"k-input k-small k-group k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-small k-group k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div><div class=\"k-append\"><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\"><span>Search</span></button></div></div><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div>"
```

####     `Input textarea`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"2\" spellcheck=\"false\"></textarea></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"5\" spellcheck=\"false\"></textarea></div></div></div>"
```

##   `menu`

####     `Menu accordion`

```
"<div class=\"k-menu k-dark k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div></div></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2
    </span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div></div></div></div></div>"
```

####     `Menu basic`

```
"<div class=\"k-menu k-dark k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded k-highlighted\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item k-active\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div>"
```

####     `Menu collapse`

```
"<div><div class=\"k-switch k-default\" style=\"margin-right: 16px;width: 60px\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">展开</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">收起</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><br><br><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>
                    sub menu 4
                    </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 2</span></div></div></div></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div>"
```

####     `Menu dot`

```
"<div class=\"k-menu k-light k-vertical\"><div class=\"k-header\"><i class=\"k-icon ion-star\"></i><span>Header</span></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded k-highlighted\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item k-active\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 4</span></div></div></div>"
```

####     `Menu horizontal`

```
"<div><div class=\"k-menu k-horizontal\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><!--placeholder--></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div><br><br><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

####     `Menu size`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">展开</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">收起</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 100px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 100px;\">vertical</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 100px;\">horizontal</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>large</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>small</span><input type=\"radio\" tabindex=\"-1\"></button></div><br><br><div class=\"k-menu k-large\"><div class=\"k-header\"><i class=\"k-icon ion-star\"></i><span>Header</span></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>
                    sub menu 4
                    </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 2</span></div></div></div></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div>"
```

####     `Menu theme`

```
"<div class=\"k-menu k-light k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div>"
```

##   `message`

####     `Message basic`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>info</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>error</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>warning</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>success</span></button></div>"
```

####     `Message custom`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>custom message</span></button><!--message--></div>"
```

####     `Message duration`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>close after 10s</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>stick message</span></button></div>"
```

##   `pagination`

####     `Pagination basic`

```
"<div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>10</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>10</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

####     `Pagination counts`

```
"<div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>6</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>7</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>8</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>6</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>7</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

####     `Pagination current`

```
"<div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

####     `Pagination goto`

```
"<div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页</div><div class=\"k-total\">共 200 条</div></div></div>"
```

####     `Pagination noBoard`

```
"<div><div class=\"k-pagination k-large k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-large k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-small k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-mini k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

####     `Pagination simple`

```
"<div><div class=\"k-pagination k-large k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-small k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-small k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-small k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-mini k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-mini k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-mini k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div></div>"
```

####     `Pagination size`

```
"<div><div class=\"k-pagination k-large\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-large k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-small k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-mini k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div>"
```

##   `progress`

####     `Progress basic`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 100%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-checkmark-outline\"></i></span></div></div></div>"
```

####     `Progress children`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\"><circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"58\" stroke-dashoffset=\"218.65484868984962\" stroke-dasharray=\"364.424747816416\" stroke-width=\"4\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\" stroke-dasharray=\"364.424747816416\" stroke-dashoffset=\"364.424747816416\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"364.424747816416\" to=\"218.65484868984962\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle></svg><div class=\"k-text\"><div style=\"font-size: 14px; line-height: 20px;\">
            正在上传<br>40%
        </div></div></div><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div>"
```

####     `Progress circle`

```
"<div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\"><circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"58\" stroke-dashoffset=\"182.212373908208\" stroke-dasharray=\"364.424747816416\" stroke-width=\"4\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\" stroke-dasharray=\"364.424747816416\" stroke-dashoffset=\"364.424747816416\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"364.424747816416\" to=\"182.212373908208\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle></svg><div class=\"k-text\"><span>50%</span></div></div></div>"
```

####     `Progress innerText`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 0%;\"><div class=\"k-inner-text\">0 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"><div class=\"k-inner-text\">50 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 60%;\"><div class=\"k-inner-text\">60 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 70%;\"><div class=\"k-inner-text\">70 %
                </div></div></div></div></div></div>"
```

####     `Progress size`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-small\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-mini\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div></div>"
```

####     `Progress status`

```
"<div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-close-outline\"></i></span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-checkmark-outline\"></i></span></div></div></div>"
```

##   `radio`

####     `Radio basic`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">radio</span></label><label class=\"k-radio k-disabled\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled radio</span></label><label class=\"k-radio k-disabled k-checked\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked radio</span></label></div>"
```

####     `Radio group`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: </div>"
```

####     `Radio value`

```
"<div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值：</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时的取值为\"checked\": </span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"[object Object]\"></span><span class=\"k-text\">
        指定选中时的取值为对象：</span></label></div>"
```

##   `scrollSelect`

####     `ScrollSelect basic`

```
"<div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">4月</div><div class=\"k-scroll-item\">5月</div><div class=\"k-scroll-item\">6月</div><div class=\"k-scroll-item\">7月</div><div class=\"k-scroll-item\">8月</div><div class=\"k-scroll-item\">9月</div><div class=\"k-scroll-item\">10月</div><div class=\"k-scroll-item\">11月</div><div class=\"k-scroll-item\">12月</div><div class=\"k-scroll-item k-active\">1月</div><div class=\"k-scroll-item\">2月</div><div class=\"k-scroll-item\">3月</div><div class=\"k-scroll-item\">4月</div><div class=\"k-scroll-item\">5月</div><div class=\"k-scroll-item\">6月</div><div class=\"k-scroll-item\">7月</div><div class=\"k-scroll-item\">8月</div><div class=\"k-scroll-item\">9月</div><div class=\"k-scroll-item\">10月</div></div><div class=\"k-border\"></div></div>"
```

####     `ScrollSelect disable`

```
"<div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item k-disabled\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item k-disabled\">2016年</div><div class=\"k-scroll-item\">2017年</div><div class=\"k-scroll-item k-active\">2018年</div><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item k-disabled\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item k-disabled\">2016年</div><div class=\"k-scroll-item\">2017年</div></div><div class=\"k-border\"></div></div>"
```

####     `ScrollSelect infinite`

```
"<div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item\">2016年</div><div class=\"k-scroll-item\">2017年</div><div class=\"k-scroll-item k-active\">2018年</div><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item\">2016年</div><div class=\"k-scroll-item\">2017年</div></div><div class=\"k-border\"></div></div>"
```

##   `select`

####     `Select allowUnmatch`

```
"<div><div class=\"k-select k-with-suffix\" style=\"margin-right: 10px\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入或选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    Day: </div>"
```

####     `Select basic`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Select clearable`

```
"<div><div class=\"k-select k-clearable k-with-suffix\" style=\"margin-right: 10px\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-clearable k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select custom`

```
"<div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

####     `Select disabled`

```
"<div><div class=\"k-select k-disabled k-with-suffix\" style=\"margin-right: 10px\" tabindex=\"-1\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select filterable`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-values\"><div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\" style=\"width: 100px;\"><div class=\"k-fake\">请选择</div></div></div></span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select group`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select multiple`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Select noBorder`

```
"<div class=\"k-select k-with-suffix k-inline\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

####     `Select remote`

```
"<div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

####     `Select size`

```
"<div><div class=\"k-select k-large k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-small k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-mini k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

##   `slider`

####     `Slider basic`

```
"<div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 60%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50.4444%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50.4444%;\"></div></div><div class=\"k-box\"><span>50</span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Change Range Randomly</span></button></div>"
```

####     `Slider disabled`

```
"<div><div class=\"k-slider k-disabled k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 50%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-disabled k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-disabled k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%; left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>50</span><span>100</span></div></div></div></div>"
```

####     `Slider marks`

```
"<div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 45.4545%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45.4545%;\"></div></div><div class=\"k-marks\"><span style=\"left: 0%;\">1</span><span style=\"left: 9.09091%;\">2</span><span style=\"left: 18.1818%;\">3</span><span style=\"left: 27.2727%;\">4</span><span style=\"left: 36.3636%;\">5</span><span style=\"left: 45.4545%;\">6月</span><span style=\"left: 54.5455%;\">7</span><span style=\"left: 63.6364%;\">8</span><span style=\"left: 72.7273%;\">9</span><span style=\"left: 81.8182%;\">1年</span><span style=\"left: 90.9091%;\">2年</span><span style=\"left: 100%;\">3年</span></div></div></div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 36.3636%; left: 9.09091%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 9.09091%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45.4545%;\"></div></div><div class=\"k-marks\"><span style=\"left: 0%;\">1</span><span style=\"left: 9.09091%;\">2</span><span style=\"left: 18.1818%;\">3</span><span style=\"left: 27.2727%;\">4</span><span style=\"left: 36.3636%;\">5</span><span style=\"left: 45.4545%;\">6月</span><span style=\"left: 54.5455%;\">7</span><span style=\"left: 63.6364%;\">8</span><span style=\"left: 72.7273%;\">9</span><span style=\"left: 81.8182%;\">1年</span><span style=\"left: 90.9091%;\">2年</span><span style=\"left: 100%;\">3年</span></div></div></div></div>"
```

####     `Slider range`

```
"<div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 26%; left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 76%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div>"
```

####     `Slider step`

```
"<div><div class=\"k-slider k-show-input\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>50</span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div></div>"
```

####     `Slider stop`

```
"<div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 45%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45%;\"></div><i class=\"k-point\" style=\"left: 5%;\"></i><i class=\"k-point\" style=\"left: 10%;\"></i><i class=\"k-point\" style=\"left: 15%;\"></i><i class=\"k-point\" style=\"left: 20%;\"></i><i class=\"k-point\" style=\"left: 25%;\"></i><i class=\"k-point\" style=\"left: 30%;\"></i><i class=\"k-point\" style=\"left: 35%;\"></i><i class=\"k-point\" style=\"left: 40%;\"></i><i class=\"k-point\" style=\"left: 45%;\"></i><i class=\"k-point\" style=\"left: 50%;\"></i><i class=\"k-point\" style=\"left: 55%;\"></i><i class=\"k-point\" style=\"left: 60%;\"></i><i class=\"k-point\" style=\"left: 65%;\"></i><i class=\"k-point\" style=\"left: 70%;\"></i><i class=\"k-point\" style=\"left: 75%;\"></i><i class=\"k-point\" style=\"left: 80%;\"></i><i class=\"k-point\" style=\"left: 85%;\"></i><i class=\"k-point\" style=\"left: 90%;\"></i><i class=\"k-point\" style=\"left: 95%;\"></i></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 30%; left: 30%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 30%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 60%;\"></div><i class=\"k-point\" style=\"left: 10%;\"></i><i class=\"k-point\" style=\"left: 20%;\"></i><i class=\"k-point\" style=\"left: 30%;\"></i><i class=\"k-point\" style=\"left: 40%;\"></i><i class=\"k-point\" style=\"left: 50%;\"></i><i class=\"k-point\" style=\"left: 60%;\"></i><i class=\"k-point\" style=\"left: 70%;\"></i><i class=\"k-point\" style=\"left: 80%;\"></i><i class=\"k-point\" style=\"left: 90%;\"></i></div><div class=\"k-box\"><span>0</span><span>1</span></div></div></div></div>"
```

##   `spin`

####     `Spin basic`

```
"<div><div class=\"k-spin k-large\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin k-small\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin k-mini\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div>"
```

####     `Spin overlay`

```
"<div class=\"wrapper\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"第三行\">第三行</td><td title=\"哈哈3\">哈哈3</td></tr></tbody></table></div></div></div><div class=\"k-spin k-overlay\"><div class=\"k-wrapper\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div></div>"
```

##   `spinner`

####     `Spinner basic`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div>"
```

####     `Spinner size`

```
"<div><div class=\"k-spinner k-large\"><button class=\"k-btn k-btn-icon k-large k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-large k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-small\"><button class=\"k-btn k-btn-icon k-small k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-mini\"><button class=\"k-btn k-btn-icon k-mini k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div>"
```

####     `Spinner step`

```
"<div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div>"
```

####     `Spinner vertical`

```
"<div><div class=\"k-spinner k-large k-vertical\"><button class=\"k-btn k-btn-icon k-large k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-large k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-small k-vertical\"><button class=\"k-btn k-btn-icon k-small k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-mini k-vertical\"><button class=\"k-btn k-btn-icon k-mini k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div>"
```

##   `steps`

####     `Steps basic`

```
"<div><div class=\"k-steps c-clearfix k-default\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button></div>"
```

####     `Steps clickable`

```
"<div><div class=\"k-steps c-clearfix k-default k-clickable\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button></div>"
```

####     `Steps error`

```
"<div class=\"k-steps c-clearfix k-default\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div>"
```

####     `Steps line`

```
"<div><div class=\"k-steps c-clearfix k-line\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button><div class=\"k-steps c-clearfix k-line\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div></div>"
```

####     `Steps simple`

```
"<div><div class=\"k-steps c-clearfix k-simple\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button><div class=\"k-steps c-clearfix k-simple\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div></div>"
```

##   `switch`

####     `Switch basic`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default k-disabled\" tabindex=\"-1\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

####     `Switch onOff`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-checked k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\"><i class=\"ion-ios-close-empty\"></i></div><div class=\"k-bar\"><div class=\"k-on\"><i class=\"ion-ios-checkmark-empty\"></i></div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

####     `Switch size`

```
"<div>
    large: <div class=\"k-switch k-large\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    default: <div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    small: <div class=\"k-switch k-small\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    mini: <div class=\"k-switch k-mini\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

####     `Switch value`

```
"<div><div style=\"margin-bottom: 20px\"><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div><div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Switch widthHeight`

```
"<div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 62px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 62px;\">关闭</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 62px;\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"height: 30px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\" style=\"width: 30px;\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 100px; height: 30px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 100px; height: 30px; line-height: 30px; padding: 0px 10px 0px 30px;\">关闭</div><div class=\"k-bar\" style=\"width: 30px;\"><div class=\"k-on\" style=\"width: 100px; height: 30px; line-height: 30px; padding: 0px 30px 0px 10px;\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

##   `table`

####     `Table basic`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div></div>"
```

####     `Table checkType`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"多选1\">多选1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"多选2\">多选2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td><td title=\"单选1\">单选1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"1\"></span></label></td><td title=\"单选2\">单选2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"不可选1\">不可选1</td></tr><tr class=\"\"><td title=\"不可选2\">不可选2</td></tr></tbody></table></div></div></div></div>"
```

####     `Table checkedKey_s`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"radio不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio不指定rowKey</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td><td title=\"赋默认值选中\">赋默认值选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"1\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"radio指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio指定为item的id</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"yes\"></span></label></td><td title=\"选中\">选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"no\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div></div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox不指定rowKey</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"赋默认值选中\">赋默认值选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"不选中\">不选中</td></tr><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"赋默认值选中，可设置多个\">赋默认值选中，可设置多个</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox指定为item的id</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"yes\"></span></label></td><td title=\"选中\">选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"no\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table disableRow`

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"奇数行不可点击\"><div class=\"k-th\"><div class=\"c-ellipsis\">奇数行不可点击</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"1\">1</td></tr><tr class=\"k-disabled\"><td class=\"k-th-check\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"2\">2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"3\">3</td></tr><tr class=\"k-disabled\"><td class=\"k-th-check\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td><td title=\"4\">4</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td><td title=\"5\">5</td></tr></tbody></table></div></div></div>"
```

####     `Table export`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>导出表格</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>导出自定义数据</span></button><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"普通文本\"><div class=\"k-th\"><div class=\"c-ellipsis\">普通文本</div></div></th><th title=\"自定义导出文本\"><div class=\"k-th\"><div class=\"c-ellipsis\">自定义导出文本</div></div></th><th title=\"操作\" data-ignore=\"\"><div class=\"k-th\"><div class=\"c-ellipsis\">操作</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>第一行</a></td><td title=\"哈哈1\">哈哈1</td><td><div data-text=\"自定义导出文本:自定义1\">自定义1</div></td><td data-ignore=\"\"><a>删除</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td><a>第二行</a></td><td title=\"哈哈2\">哈哈2</td><td><div data-text=\"自定义导出文本:自定义2\">自定义2</div></td><td data-ignore=\"\"><a>删除</a></td></tr></tbody></table></div></div></div></div>"
```

####     `Table fixColumn`

```
"<div><div class=\"k-table k-sticky k-scroll-left\"><div class=\"k-table-wrapper\"><div class=\"k-thead\" style=\"width: 800px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-left\" style=\"width: 230px;\"><div class=\"k-thead\" style=\"width: 230px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th class=\"k-invisible\" title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-right\" style=\"width: 200px;\"><div class=\"k-thead\" style=\"width: 200px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th class=\"k-invisible\" minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name k-invisible\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td class=\"k-invisible\" title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td class=\"k-invisible\" title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td class=\"k-invisible\" title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div></div><div class=\"k-table k-scroll-left\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-left\" style=\"width: 230px;\"><div class=\"k-thead\" style=\"width: 230px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th class=\"k-invisible\" title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 85px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-right\" style=\"width: 215px;\"><div class=\"k-thead\" style=\"width: 215px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th class=\"k-invisible\" minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-invisible\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 85px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td class=\"k-invisible\" title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td class=\"k-invisible\" title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td class=\"k-invisible\" title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div></div></div>"
```

####     `Table fixHeader`

```
"<div class=\"wrapper\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"表头固定，但内容没有超出最高高度\">表头固定，但内容没有超出最高高度</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"表头固定啦\">表头固定啦</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"下拉\">下拉</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"yeah!\">yeah!</td></tr></tbody></table></div></div></div></div>"
```

####     `Table group`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态(全部)\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态(全部)</div></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td><span>运行中</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机2\">主机2</td><td><span>已关闭</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"主机3\">主机3</td><td><span>运行中</span></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态</div></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td><span>运行中</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机2\">主机2</td><td><span>已关闭</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"主机3\">主机3</td><td><span>运行中</span></td></tr></tbody></table></div></div></div></div>"
```

####     `Table loading`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"第三行\">第三行</td><td title=\"哈哈3\">哈哈3</td></tr></tbody></table></div></div></div>
    切换loading状态: <div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div>"
```

####     `Table noDataTemplate`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\">/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\"><div>这里没有数据(自定义版本)</div></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\"><div style=\"color: red\">没有数据</div></td></tr></tbody></table></div></div></div></div>"
```

####     `Table resizable`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"通过minColWidth控制最小宽度100px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">通过minColWidth控制最小宽度100px</div></div></th><th title=\"单独设置最小宽度300px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">单独设置最小宽度300px</div></div></th><th title=\"标题\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">标题</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr></tbody></table></div></div></div><form class=\"k-form\" style=\"margin-top: 20px;\" novalidate=\"\"><div class=\"k-form-item\" style=\"width: 100%\"><label class=\"k-label\"><div style=\"width: 140px\">table in table-cell</div></label><div class=\"k-content\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"通过minColWidth控制最小宽度100px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">通过minColWidth控制最小宽度100px</div></div></th><th title=\"单独设置最小宽度300px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">单独设置最小宽度300px</div></div></th><th title=\"标题\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">标题</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr></tbody></table></div></div></div></div></div></form></div>"
```

####     `Table rowCheckable`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"点击整行不选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行不选中</div></div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"点我不会选中整行\">点我不会选中整行</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"点击整行选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行选中</div></div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"任何位置都可以哦～\">任何位置都可以哦～</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"点我会选中整行\">点我会选中整行</td></tr></tbody></table></div></div></div></div>"
```

####     `Table rowClassName`

```
"<div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"偶数行背景变换\"><div class=\"k-th\"><div class=\"c-ellipsis\">偶数行背景变换</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"1\">1</td></tr><tr class=\"odd\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"2\">2</td></tr><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"3\">3</td></tr><tr class=\"odd\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td><td title=\"4\">4</td></tr><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td><td title=\"5\">5</td></tr></tbody></table></div></div></div>"
```

####     `Table rowExpandable`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击整行展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"Javey\">Javey</td></tr><tr class=\"\"><td title=\"Jiawei\">Jiawei</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Javey</div></td></tr><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>Jiawei</div></td></tr></tbody></table></div></div></div></div>"
```

####     `Table scheme`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"key形式\"><div class=\"k-th\"><div class=\"c-ellipsis\">key形式</div></div></th><th title=\"key为一个路径字符串\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个路径字符串</div></div></th><th title=\"没有这个key，则返回空\"><div class=\"k-th\"><div class=\"c-ellipsis\">没有这个key，则返回空</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>虚拟DOM</a></td><td title=\"获取到了item.b\">获取到了item.b</td><td title=\"item.c.c1\">item.c.c1</td><td></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"key形式\"><div class=\"k-th\"><div class=\"c-ellipsis\">key形式</div></div></th><th title=\"key为一个路径字符串\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个路径字符串</div></div></th><th title=\"没有这个key，则返回空\"><div class=\"k-th\"><div class=\"c-ellipsis\">没有这个key，则返回空</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>虚拟DOM</a></td><td title=\"获取到了item.b\">获取到了item.b</td><td title=\"item.c.c1\">item.c.c1</td><td></td></tr></tbody></table></div></div></div></div>"
```

####     `Table sort`

```
"<div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div></div></div>"
```

####     `Table stickHeader`

```
"<div class=\"k-table k-sticky\"><div class=\"k-table-wrapper\"><div class=\"k-thead\" style=\"width: 800px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"姓名\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div></div></th><th title=\"性别\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">性别</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"male\">male</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Lisa\">Lisa</td><td title=\"female\">female</td></tr></tbody></table></div></div></div>"
```

####     `Table stickScrollbar`

```
"<div class=\"k-table k-sticky-scrollbar\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-scrollbar\" style=\"display: none;\"><div class=\"k-inner\" style=\"width: 1630px;\"></div></div></div>"
```

####     `Table title`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\"><span class=\"c-middle title\" title=\"自定义表头内容\">自定义表头内容</span><i class=\"ion-ios-help-outline c-middle\"></i><!--placeholder--></div></div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\"><span class=\"c-middle title\" title=\"自定义表头内容\">自定义表头内容</span><i class=\"ion-ios-help-outline c-middle\"></i><!--placeholder--></div></div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div></div>"
```

####     `Table type`

```
"<div class=\"k-table k-border\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"类型\"><div class=\"k-th\"><div class=\"c-ellipsis\">类型</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"border类型\">border类型</td></tr></tbody></table></div></div></div>"
```

##   `tabs`

####     `Tabs basic`

```
"<div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-active\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"left: 150px; width: 120px;\"></div></div></div></div><div class=\"content\"><div>出站规则</div></div></div>"
```

####     `Tabs card`

```
"<div><div class=\"k-tabs k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div></div>"
```

####     `Tabs closable`

```
"<div><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>large</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>small</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>mini</span><input type=\"radio\" tabindex=\"-1\"></button></div><br><br><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>新增Tab</span></button><div class=\"k-tabs k-large\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-large k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div><div class=\"k-tabs k-large k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div><div class=\"k-tabs k-large k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div></div>"
```

####     `Tabs data`

```
"<div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-active\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"left: 150px; width: 120px;\"></div></div></div></div><div class=\"content\"><div>出站规则</div></div></div>"
```

####     `Tabs disabled`

```
"<div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-disabled\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\"></div></div></div></div><div class=\"content\"><div>关联云主机</div></div></div>"
```

####     `Tabs size`

```
"<div><div class=\"k-tabs k-large\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">large1</a><a class=\"k-tab\">large2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">default1</a><a class=\"k-tab\">defalut2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-small\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">small1</a><a class=\"k-tab\">small2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-mini\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">mini1</a><a class=\"k-tab\">mini2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div></div>"
```

####     `Tabs vertical`

```
"<div><div class=\"k-tabs k-vertical\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"top: 0px; height: 36px;\"></div></div></div></div><div class=\"k-tabs k-vertical k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-vertical k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-vertical k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div></div>"
```

##   `tag`

####     `Tag basic`

```
"<div><div class=\"k-tag\">default</div><div class=\"k-tag k-primary\">primary</div><div class=\"k-tag k-success\">success</div><div class=\"k-tag k-warning\">warning</div><div class=\"k-tag k-danger\">danger</div><div class=\"k-tag k-disabled\">disabled</div></div>"
```

####     `Tag closable`

```
"<div><div class=\"k-tag k-closable\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable\">primary<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable\">success<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable\">warning<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable\">danger<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-disabled k-closable\">disabled<button class=\"k-btn k-none k-btn-icon k-close k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div>"
```

####     `Tag size`

```
"<div><div class=\"k-tag k-large\">large</div><div class=\"k-tag\">default</div><div class=\"k-tag k-small\">small</div><div class=\"k-tag k-mini\">mini</div><br><br><div class=\"k-tag k-primary k-large\">large</div><div class=\"k-tag k-warning\">default</div><div class=\"k-tag k-success k-small\">small</div><div class=\"k-tag k-danger k-mini\">mini</div><br><br><div class=\"k-tag k-primary k-large k-closable\">large<button class=\"k-btn k-none k-btn-icon k-large k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-small k-closable\">small<button class=\"k-btn k-none k-btn-icon k-small k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-mini k-closable\">mini<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div>"
```

##   `timeline`

####     `Timeline basic`

```
"<div class=\"k-timeline\"><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">
        August
        <p>some descriptions</p></div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div>"
```

####     `Timeline custom`

```
"<div class=\"k-timeline\"><div class=\"k-item k-success\"><div class=\"k-indicator\"><div class=\"k-dot\"><i class=\"ion-trophy\"></i></div><div class=\"k-line\"></div></div><div class=\"k-content\">
        August
    </div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div>"
```

####     `Timeline type`

```
"<div class=\"k-timeline\"><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">August</div></div><div class=\"k-item k-success k-small\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-danger k-large\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-warning k-mini\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div>"
```

##   `timepicker`

####     `Timepicker basic`

```
"<div><div class=\"k-datepicker k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: <br><br><div class=\"k-datepicker k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Timepicker range`

```
"<div><div class=\"k-datepicker k-range k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Timepicker step`

```
"<div><div class=\"k-select k-datepicker time k-with-prefix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择时间</span></div></div><!--placeholder--></div>
    You selected: <br><br><div class=\"k-select k-datepicker k-clearable k-with-prefix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择时间</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i></span></div><!--placeholder--></div>
    You selected: </div>"
```

####     `Timepicker stepRange`

```
"<div><div class=\"k-datepicker k-range k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div>
    You selected: </div>"
```

##   `tip`

####     `Tip basic`

```
"<div><div class=\"k-tag k-component-tip\">default</div><div class=\"k-tag k-primary k-component-tip\">primary</div><div class=\"k-tag k-success k-component-tip\">success</div><div class=\"k-tag k-warning k-component-tip\">warning</div><div class=\"k-tag k-danger k-component-tip\">danger</div></div>"
```

####     `Tip closable`

```
"<div><div class=\"k-tag k-closable k-component-tip\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable k-component-tip\">primary<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable k-component-tip\">success<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable k-component-tip\">warning<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable k-component-tip\">danger<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-closable k-component-tip\">
        custom closing content
        <button class=\"k-btn k-none k-close k-custom\" tabindex=\"0\" type=\"button\"><span>No longer show</span></button></div></div>"
```

####     `Tip title`

```
"<div><div class=\"k-tag k-closable k-component-tip\"><div class=\"k-title\">default</div>
        This is a default tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable k-component-tip\"><div class=\"k-title\">primary</div>
        This is a primary tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable k-component-tip\"><div class=\"k-title\">success</div>
        This is a success tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable k-component-tip\"><div class=\"k-title\">warning</div>
        This is a warning tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable k-component-tip\"><div class=\"k-title\">danger</div>
        This is a danger tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div>"
```

##   `tooltip`

####     `Tooltip basic`

```
"<div><span class=\"k-tooltip\">
        hover the text
    </span><!--placeholder--><br><br><span class=\"k-tooltip\">
        don't show anything if content is empty 
    </span><!--placeholder--></div>"
```

####     `Tooltip confirm`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button><!--placeholder--></div>"
```

####     `Tooltip content`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Adjust Volume</span></button><!--placeholder--></div>"
```

####     `Tooltip position`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>left</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>right</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>top</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>bottom</span></button><!--placeholder--></div>"
```

####     `Tooltip trigger`

```
"<div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>hover</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>click</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>can hover</span></button><!--placeholder--></div>"
```

##   `transfer`

####     `Transfer basic`

```
"<div><div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                3</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                2</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"right\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"right\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div></div></div></div><p>You selected: [{\"label\":\"主机名0\",\"key\":0},{\"label\":\"主机名1\",\"key\":1,\"disabled\":true}]</p></div>"
```

####     `Transfer label`

```
"<div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                5</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-input k-small k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-search\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名0</div><p>前端服务器0 | 192.168.1.0</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名1</div><p>前端服务器1 | 192.168.1.1</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名2</div><p>前端服务器2 | 192.168.1.2</p></div></span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名3</div><p>前端服务器3 | 192.168.1.3</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名4</div><p>前端服务器4 | 192.168.1.4</p></div></span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                0</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-input k-small k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-search\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><div class=\"k-list\"></div></div></div>"
```

####     `Transfer leftChecked`

```
"<div><div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">2 /
                5</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div><div class=\"k-item\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                0</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-list\"></div></div></div><p>You checked left side: [{\"label\":\"主机名0\",\"key\":0},{\"label\":\"主机名2\",\"key\":2}]</p></div>"
```

##   `tree`

####     `Tree basic`

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div>"
```

####     `Tree checkbox`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get checked data</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get checked leaves data</span></button><br><br><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div></div></div></div>"
```

####     `Tree contextmenu`

```
"<div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div><!--placeholder--></div>"
```

####     `Tree custom`

```
"<div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>+</span></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>-</span></button></div></div></div></div></div>"
```

####     `Tree filterable`

```
"<div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"Please enter keywords to filter node.\"></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div></div>"
```

####     `Tree loading`

```
"<div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div></div></div>"
```

####     `Tree select`

```
"<div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get selected data</span></button><br><br><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div><div class=\"k-node k-expanded k-selected\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div></div>"
```

##   `upload`

####     `Upload basic`

```
"<div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-tip\">只能上传JPG/PNG格式文件，且不超过500kb</div><div class=\"k-files\"></div><!--placeholder--></div>"
```

####     `Upload directory`

```
"<div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" directory=\"\" webkitdirectory=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-files\"></div><!--placeholder--></div>"
```

####     `Upload drag`

```
"<div class=\"k-upload k-drag\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><div class=\"k-area\"><i class=\"k-icon ion-upload\"></i><div>将文件拖到此处，或点击上传</div></div></div><div class=\"k-files\"></div><!--placeholder--></div>"
```

####     `Upload files`

```
"<div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-files\"><div class=\"k-file\"><div class=\"k-wrapper\"><div class=\"k-name c-ellipsis\"><i class=\"k-file-icon ion-document\"></i>test1.jpg<div class=\"k-icons\"><button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button><i class=\"k-status-icon ion-ios-checkmark-outline\"></i></div></div></div></div><div class=\"k-file\"><div class=\"k-wrapper\"><div class=\"k-name c-ellipsis\"><i class=\"k-file-icon ion-document\"></i>test2.png<div class=\"k-icons\"><button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button><i class=\"k-status-icon ion-ios-checkmark-outline\"></i></div></div></div></div></div><!--placeholder--></div>"
```

####     `Upload gallery`

```
"<div class=\"k-upload k-gallery\"><input class=\"c-hidden\" type=\"file\" accept=\".jpg, .png\" multiple=\"\"><div class=\"k-pictures\"><div class=\"c-middle\"><div class=\"k-handle\"><i class=\"k-picture-card k-add ion-ios-plus-empty\"></i></div></div></div><!--placeholder--></div>"
```

####     `Upload manually`

```
"<div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>选择文件</span></button></div><div class=\"k-tip\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>开始上传</span></button></div><div class=\"k-files\"></div><!--placeholder--></div>"
```

## `Vue`

##   `badge`

####     `Badge alone`

```
"<div><div><div class=\"k-badge k-alone\"><sup class=\"k-text\"></sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">new</sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">19</sup></div><div class=\"k-badge k-has-text k-alone\"><sup class=\"k-text\">99+</sup></div></div></div>"
```

####     `Badge basic`

```
"<div><div><div class=\"k-badge\">Message<sup class=\"k-text\"></sup></div><div class=\"k-badge\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\"></sup></div></div></div>"
```

####     `Badge disabled`

```
"<div><div><div class=\"k-badge\">Message</div><div class=\"k-badge\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button></div></div></div>"
```

####     `Badge text`

```
"<div><div><div class=\"k-badge k-has-text\">Message<sup class=\"k-text\">new</sup></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\">19</sup></div><div class=\"k-badge k-has-text\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Message</span></button><sup class=\"k-text\">99+</sup></div></div></div>"
```

##   `breadcrumb`

####     `Breadcrumb basic`

```
"<div><div class=\"k-breadcrumb\"><div class=\"k-item\"><a class=\"k-item-link\">item 1</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><a class=\"k-item-link\">item 2</a><span class=\"k-separator\">&gt;</span></div><div class=\"k-item\"><span class=\"k-item-link\">item 3</span></div></div></div>"
```

####     `Breadcrumb separator`

```
"<div><div class=\"k-breadcrumb\"><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-home\"></i> item 1
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><a class=\"k-item-link\"><i class=\"ion-earth\"></i> item 2
    </a><span class=\"k-separator\"><b class=\"separator\">=&gt;</b></span></div><div class=\"k-item\"><span class=\"k-item-link\"><i class=\"ion-planet\"></i> item 3
    </span></div></div></div>"
```

##   `button`

####     `Button basic`

```
"<div><div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>primay</span></button><button class=\"k-btn k-warning\" tabindex=\"0\" type=\"button\"><span>warning</span></button><button class=\"k-btn k-danger\" tabindex=\"0\" type=\"button\"><span>danger</span></button><button class=\"k-btn k-success\" tabindex=\"0\" type=\"button\"><span>success</span></button><button class=\"k-btn k-none\" tabindex=\"0\" type=\"button\"><span>none</span></button></div></div>"
```

####     `Button disabled`

```
"<div><div><button class=\"k-btn k-disabled\" tabindex=\"-1\" type=\"button\"><span>disabled</span></button><button class=\"k-btn k-none k-disabled\" tabindex=\"-1\" type=\"button\"><span>disabled text</span></button><button class=\"k-btn k-btn-icon k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button></div></div>"
```

####     `Button group`

```
"<div><div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><div class=\"k-btns\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><div class=\"k-btns\"><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><span>上一页
        </span></button><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            下一页</span><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><br><br><p>纵向按钮组</p><div class=\"k-btns k-vertical\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>开机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>关机</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>重启</span></button></div><br><br><p>radio按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>北京</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>上海</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>广州</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>深圳</span><input type=\"radio\" tabindex=\"-1\"></button></div><p>checkbox按钮组</p><div class=\"k-btns\"><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>北京</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>上海</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>广州</span><input type=\"checkbox\" tabindex=\"-1\"></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>深圳</span><input type=\"checkbox\" tabindex=\"-1\"></button></div></div></div>"
```

####     `Button icon`

```
"<div><div><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i><span>搜索</span></button><button class=\"k-btn k-primary k-circle k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i><span>搜索</span></button></div></div>"
```

####     `Button loading`

```
"<div><div><button class=\"k-btn k-primary k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><span>确认</span></button><button class=\"k-btn k-btn-icon k-circle k-loading k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-load-c icon-loading\"></i><i class=\"k-icon ion-ios-search\"></i></button><br><br><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击加载</span></button><button class=\"k-btn k-primary k-icon-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i><span>点击加载</span></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>图标在右侧</span><i class=\"k-icon ion-ios-search\"></i></button></div></div>"
```

####     `Button size`

```
"<div><div><button class=\"k-btn k-large\" tabindex=\"0\" type=\"button\"><span>large</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span></button><button class=\"k-btn k-small\" tabindex=\"0\" type=\"button\"><span>small</span></button><button class=\"k-btn k-mini\" tabindex=\"0\" type=\"button\"><span>mini</span></button><br><br><button class=\"k-btn k-btn-icon k-large k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-large\"></i></button><button class=\"k-btn k-btn-icon k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search\"></i></button><button class=\"k-btn k-btn-icon k-small k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-small\"></i></button><button class=\"k-btn k-btn-icon k-mini k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-search k-mini\"></i></button></div></div>"
```

####     `Button tagName`

```
"<div><div><div class=\"k-btn k-primary\" tabindex=\"0\"><span>div元素按钮</span></div><div class=\"k-btn k-disabled\" tabindex=\"-1\"><span>disabled div button</span></div><a class=\"k-btn\" href=\"https://www.ksyun.com\" target=\"_blank\" tabindex=\"0\"><span>超链接按钮</span></a></div></div>"
```

##   `cascader`

####     `Cascader basic`

```
"<div><div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Cascader changeOnSelect`

```
"<div><div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Cascader custom`

```
"<div><div class=\"k-select k-cascader k-clearable k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Cascader disabled`

```
"<div><div><div class=\"k-select k-cascader k-disabled k-with-suffix\" tabindex=\"-1\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Cascader filterable`

```
"<div><div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Cascader loadData`

```
"<div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Cascader size`

```
"<div><div><div class=\"k-select k-cascader k-large k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-small k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-cascader k-mini k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Cascader trigger`

```
"<div><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

##   `checkbox`

####     `Checkbox basic`

```
"<div><div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">checkbox</span></label><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checkbox</span></label><label class=\"k-checkbox k-disabled k-checked\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked checkbox</span></label></div></div>"
```

####     `Checkbox group`

```
"<div><div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []
</div></div>"
```

####     `Checkbox indeterminate`

```
"<div><div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">全选</span></label><hr><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"languages\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: []
</div></div>"
```

####     `Checkbox value`

```
"<div><div><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值: null</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时取值为\"checked\": null
    </span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"0\"></span><span class=\"k-text\">
        指定非选中时取值为对象：null
    </span></label></div></div>"
```

##   `collapse`

####     `Collapse accordion`

```
"<div><div class=\"k-collapse k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div></div>"
```

####     `Collapse arrow`

```
"<div><div class=\"k-collapse k-left k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<a href=\"/docs/design/language/\" class=\"link\">详细说明</a><i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div></div>"
```

####     `Collapse basic`

```
"<div><div class=\"k-collapse k-border\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item k-disabled\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div></div>"
```

####     `Collapse noBorder`

```
"<div><div class=\"k-collapse\"><div class=\"k-collapse-item k-active\"><div class=\"k-title\">设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div></div>"
```

####     `Collapse title`

```
"<div><div class=\"k-collapse k-border\"><div class=\"k-collapse-item\"><div class=\"k-title\"><i class=\"ion-cube\"></i>设计语言<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><p>语言是合作的基础。在团队中工作，没有共同的语言，一群人不能共同有效地合作。同理，因为每个人都会有不同的心智模式去达成各自的目的，如果没有共同的设计语言，对界面元素的共同理解，那么我们很难通过协作输出协调一致并具备高可用性的产品。</p><p>拥有通用语言意味着我们有相同的方法来命名界面元素和定义设计模式，或者在设计文件和前端框架中使用相同的名称。通用设计语言让团队成员达成了相互理解，基于共同的理解，参与产品创建的每个人都知道这个元素是什么: 它的名称和目的, 为什么这样设计, 以及如何及何时使用它。</p><p>当设计语言是通用知识时，它就成为一个强大的设计和协作工具，产品创建过程中便可停止专注于界面样式本身，而更多地关注用户。</p></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">KDL的价值<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\"><ol><li>节省设计和构建模块的时间；</li><li>网站变更时节省时间，复用的模式更新时将在任何使用的地方自动更新，重复工作浪费的时间越少，就有 更多时间做有价值的事；</li><li>更快的发布产品，现成的模式库缩短了新功能设计研发上线时间；</li><li>品牌统一性、视觉一致性、提升团队协作效率，不用每次重新创造。</li></ol></div></div></div><div class=\"k-collapse-item\"><div class=\"k-title\">设计原则<i class=\"k-arrow ion-ios-arrow-right\"></i></div><div class=\"k-show-height k-content\" style=\"height: 0px; display: none;\"><div class=\"k-wrapper\">
        原则顺序必须按照给定的顺序执行。也就是说，美不可以建立在清晰和效率之上，效率也不可以妥协于一致性之下，清晰永远都是第一优先级。在制定任何设计决策时都应按照设计原则，考虑优先级。
        设计由设计者的选择而决定，设计原则为设计者提供了选择依据，从众多存在矛盾或价值冲突的设计决策中找到平衡。
    </div></div></div></div></div>"
```

##   `datepicker`

####     `Datepicker basic`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker k-disabled\" tabindex=\"-1\"><div class=\"k-input k-disabled k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" disabled=\"\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div>"
```

####     `Datepicker clearable`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div></div>"
```

####     `Datepicker datetime`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"时间精确到小时\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div>"
```

####     `Datepicker disabledDate`

```
"<div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div></div>"
```

####     `Datepicker maxMin`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期\" tabindex=\"-1\"></div></div><!--placeholder--></div> ~
    <div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间\" tabindex=\"-1\"></div></div><!--placeholder--></div> ~
    <div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div>"
```

####     `Datepicker multiple`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: null
    <br><br><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期和时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Datepicker range`

```
"<div><div><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始日期 ~ 结束日期\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: null
    <br><br><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Datepicker shortcuts`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker k-range\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div>"
```

####     `Datepicker yearMonth`

```
"<div><div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择年份\" tabindex=\"-1\"></div></div><!--placeholder--></div><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择月份\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div></div></div>"
```

##   `dialog`

####     `Dialog asyncClose`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Close Dialog Asynchronously</span></button><!--placeholder--></div></div>"
```

####     `Dialog basic`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><!--placeholder--></div></div>"
```

####     `Dialog block`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show No Footer Dialog</span></button><!--placeholder--><!--placeholder--></div></div>"
```

####     `Dialog events`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Dialog</span></button><!--placeholder--></div></div>"
```

####     `Dialog size`

```
"<div><div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show large Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show default Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show small Dialog</span></button><!--placeholder--><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Show mini Dialog</span></button><!--placeholder--></div></div></div>"
```

##   `drawer`

####     `Drawer basic`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Drawer</span></button><!--placeholder--></div></div>"
```

####     `Drawer overlay`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Drawer Without Overlay</span></button><!--placeholder--></div></div>"
```

####     `Drawer placement`

```
"<div><div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从上侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从下侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从左侧出现</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>从右侧出现</span></button></div><!--placeholder--></div></div>"
```

##   `dropdown`

####     `Dropdown basic`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            hover </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div></div></div>"
```

####     `Dropdown checkbox`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>More &gt;</span></button><!--placeholder--></div></div></div>"
```

####     `Dropdown contextmenu`

```
"<div><div><div class=\"contextmenu-area\">
        right click this area to show context menu
    </div><!--placeholder--></div></div>"
```

####     `Dropdown disabled`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            disabled </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            disabled item</span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div></div></div>"
```

####     `Dropdown nested`

```
"<div><div><div class=\"k-dropdown\" trigger=\"click\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            click </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div></div></div>"
```

####     `Dropdown position`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            left </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            right </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            top center </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div></div></div>"
```

####     `Dropdown tooltip`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>DropdownItem with Tooltip</span></button><!--placeholder--></div></div></div>"
```

####     `Dropdown trigger`

```
"<div><div><div class=\"k-dropdown\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            hover </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div><div class=\"k-dropdown\" trigger=\"click\"><button class=\"k-btn k-primary k-icon-right\" tabindex=\"0\" type=\"button\"><span>
            click </span><i class=\"k-icon ion-arrow-down-b k-small\"></i></button><!--placeholder--></div></div></div>"
```

##   `editable`

####     `Editable basic`

```
"<div><div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\"><i class=\"ion-ios-location\"></i><a href=\"\">editable text</a></div></div><br><div class=\"k-editable k-disabled\"><div class=\"c-ellipsis\"><i class=\"ion-ios-location\"></i><a href=\"\">disabled editable text</a></div></div></div></div>"
```

####     `Editable validate`

```
"<div><div><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div><br><div class=\"k-editable\"><i class=\"ion-edit k-edit\" title=\"编辑\"></i><div class=\"c-ellipsis\">100</div></div></div></div>"
```

##   `form`

####     `Form basic`

```
"<div><form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Input</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Select</label><div class=\"k-content\"><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Checkbox</label><div class=\"k-content\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Radio</label><div class=\"k-content\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"C++\"></span><span class=\"k-text\">C++</span></label></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Radio ButtonGroup</label><div class=\"k-content\"><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Javascript</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>PHP</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>C++</span><input type=\"radio\" tabindex=\"-1\"></button></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Switch</label><div class=\"k-content\"><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Slider</label><div class=\"k-content\"><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Datepicker</label><div class=\"k-content\"><div class=\"k-datepicker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-calendar-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择日期\" tabindex=\"-1\"></div></div><!--placeholder--></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Textarea</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" rows=\"2\" spellcheck=\"false\"></textarea></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\">Confirm Password</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"password\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\" style=\"width: 200px;\"></label><div class=\"k-content\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"submit\"><span>提交</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\" style=\"margin-left: 20px;\"><span>重置</span></button></div></div></form></div>"
```

####     `Form custom`

```
"<div><form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">描述</label><div class=\"k-content\"><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button></div></div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-append\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button></div></div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>添加</span></button></div></div></form></div>"
```

####     `Form label`

```
"<div><form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\"><i style=\"color: red;\">*</i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div><div class=\"k-form-item\"><label class=\"k-label\"><i class=\"ion-person\"></i> 姓名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form></div>"
```

####     `Form remote`

```
"<div><form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">用户名</label><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></form></div>"
```

####     `Form variable`

```
"<div><form class=\"k-form\" novalidate=\"\"><div class=\"k-form-item\"><label class=\"k-label\">姓名</label><div class=\"k-content\"><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div class=\"k-form-item\"><div class=\"k-content\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div></div></div></div></div></div></form></div>"
```

##   `grid`

####     `Grid basic`

```
"<div><div><div class=\"k-row\"><div class=\"k-col k-12\">col-12</div><div class=\"k-col k-12\">col-12</div></div><div class=\"k-row\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-6\">col-6</div><div class=\"k-col k-8\">col-8</div><div class=\"k-col k-6\">col-6</div></div></div></div>"
```

####     `Grid flexAlign`

```
"<div><div><h5>顶端对齐 top</h5><div class=\"k-row k-flex k-justify-center k-align-top\"><div class=\"k-col k-4\" style=\"height: 100px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px;\">col-4</div></div><h5>底部对齐 bottom</h5><div class=\"k-row k-flex k-justify-center k-align-bottom\"><div class=\"k-col k-4\" style=\"height: 100px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px;\">col-4</div></div><h5>居中对齐 middle</h5><div class=\"k-row k-flex k-justify-center k-align-middle\"><div class=\"k-col k-4\" style=\"height: 100px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px;\">col-4</div></div><h5>撑开成容器高度 stretch</h5><div class=\"k-row k-flex k-justify-center k-align-stretch\" style=\"height: 100px;\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>基线对齐 baseline</h5><div class=\"k-row k-flex k-justify-center k-align-baseline\"><div class=\"k-col k-4\" style=\"height: 100px; font-size: 20px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 60px; font-size: 16px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 80px; font-size: 28px;\">col-4</div><div class=\"k-col k-4\" style=\"height: 40px; font-size: 12px;\">col-4</div></div></div></div>"
```

####     `Grid flexLayout`

```
"<div><div><h5>居左 start</h5><div class=\"k-row k-flex k-justify-start\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>居右 end</h5><div class=\"k-row k-flex k-justify-end\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>居中 center</h5><div class=\"k-row k-flex k-justify-center\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，顶边 between</h5><div class=\"k-row k-flex k-justify-between\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，与边界的距离是两个子元素的一半 around</h5><div class=\"k-row k-flex k-justify-around\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div><h5>平均分布，间距（包括边界）相等 evenly</h5><div class=\"k-row k-flex k-justify-evenly\"><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div><div class=\"k-col k-4\">col-4</div></div></div></div>"
```

####     `Grid flexOrder`

```
"<div><div class=\"k-row k-flex\"><div class=\"k-col k-6 k-order-4\">1 col-6 order-4</div><div class=\"k-col k-6 k-order-3\">2 col-6 order-3</div><div class=\"k-col k-6 k-order-2\">3 col-6 order-2</div><div class=\"k-col k-6 k-order-1\">4 col-6 order-1</div></div></div>"
```

####     `Grid gutter`

```
"<div><div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-12</div></div></div><div class=\"k-col k-12\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-12</div></div></div></div><div class=\"k-row k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-4\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-4</div></div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-6</div></div></div><div class=\"k-col k-8\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-8</div></div></div><div class=\"k-col k-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div><div>col-6</div></div></div></div></div></div>"
```

####     `Grid offset`

```
"<div><div><div class=\"k-row no-gutter\"><div class=\"k-col k-6 k-offset-6\">col-6 offset-6</div><div class=\"k-col k-6 k-offset-6\">col-6 offset-6</div></div><div class=\"k-row gutter k-gutter\" style=\"margin-left: -8px; margin-right: -8px;\"><div class=\"k-col k-6 k-offset-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6 gutter-16 offset-6</div></div><div class=\"k-col k-6 k-offset-6\" style=\"padding-left: 8px; padding-right: 8px;\"><div>col-6 gutter-16 offset-6</div></div></div></div></div>"
```

####     `Grid pushPull`

```
"<div><div class=\"k-row\"><div class=\"k-col k-18 k-push-6\">1 col-18 push-6</div><div class=\"k-col k-6 k-pull-18\">2 col-6 push-18</div></div></div>"
```

####     `Grid responsive`

```
"<div><div><h5>指定每一个断点Col所占的栅格数</h5><div class=\"k-row\"><div class=\"k-col k-xxl-11 k-xl-10 k-lg-8 k-md-6 k-sm-4 k-2\">col</div><div class=\"k-col k-xxl-2 k-xl-4 k-lg-8 k-md-12 k-sm-16 k-20\">col</div><div class=\"k-col k-xxl-11 k-xl-10 k-lg-8 k-md-6 k-sm-4 k-2\">col</div></div><h5>指定一个断点，当宽度小于该断点时，Col将以100%宽度纵向排列</h5><div class=\"k-row\"><div class=\"k-col k-md-16\">col-md-18</div><div class=\"k-col k-md-8\">col-md-8</div></div><h5>同时指定多个属性</h5><div class=\"k-row k-flex\"><div class=\"k-col k-lg-8 k-lg-order-2 k-lg-offset-8 k-md-4 k-md-order-1 k-md-offset-4\">1 col</div><div class=\"k-col k-lg-4 k-lg-order-1 k-lg-offset-4 k-md-8 k-md-order-2 k-md-offset-8\">2 col</div></div></div></div>"
```

##   `icon`

####     `Icon basic`

```
"<div><div><i class=\"k-icon ion-happy-outline\" style=\"font-size: 36px;\"></i><i class=\"k-icon ion-happy-outline k-large\"></i><i class=\"k-icon ion-happy-outline\"></i><i class=\"k-icon ion-happy-outline k-small\"></i><i class=\"k-icon ion-happy-outline k-mini\"></i></div></div>"
```

####     `Icon color`

```
"<div><div><i class=\"k-icon ion-happy-outline k-large\"></i><i class=\"k-icon ion-happy-outline k-large k-color-primary\"></i><i class=\"k-icon ion-happy-outline k-large k-color-warning\"></i><i class=\"k-icon ion-happy-outline k-large k-color-danger\"></i><i class=\"k-icon ion-happy-outline k-large k-color-success\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: red;\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: rgb(0, 0, 234);\"></i><i class=\"k-icon ion-happy-outline k-large\" style=\"color: rgb(183, 18, 193);\"></i></div></div>"
```

##   `input`

####     `Input autowidth`

```
"<div><div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"auto width\" style=\"width: 100px;\"><div class=\"k-fake\">auto width</div></div></div></div>"
```

####     `Input basic`

```
"<div><div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div></div> 
    <br><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"disabled\" disabled=\"\"></div></div></div></div>"
```

####     `Input blocks`

```
"<div><div><div class=\"k-input k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-group\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>搜索</span></button></div></div><div class=\"k-input k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div></div><div class=\"k-input k-group k-with-prefix k-with-suffix\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div><div class=\"k-append\">.com</div></div></div></div>"
```

####     `Input clearable`

```
"<div><div><div class=\"k-input k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><br><div class=\"k-input k-with-suffix k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> <i class=\"ion-ios-search\"></i></div></div></div></div></div>"
```

####     `Input select`

```
"<div><div><div class=\"k-input k-group\" style=\"width: 500px;\"><div class=\"k-prepend\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\" style=\"width: 110px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"http\"><span class=\"k-value c-ellipsis\">http://</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div><div class=\"k-append\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\" style=\"width: 90px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"com\"><span class=\"k-value c-ellipsis\">.com</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div></div></div>"
```

####     `Input size`

```
"<div><div><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><br><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><div class=\"k-input k-small k-group\"><div class=\"k-prepend\">http://</div><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"></div><div class=\"k-append\">.com</div></div><div class=\"k-input k-small k-group k-with-prefix k-with-suffix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-earth\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"> <i class=\"ion-ios-search\"></i></div></div><div class=\"k-append\"><button class=\"k-btn k-primary k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-search\"></i></button></div></div><div class=\"k-input k-small k-group k-clearable\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"please enter\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div><div class=\"k-append\"><button class=\"k-btn k-primary k-small\" tabindex=\"0\" type=\"button\"><span>Search</span></button></div></div><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div></div>"
```

####     `Input textarea`

```
"<div><div><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"2\" spellcheck=\"false\"></textarea></div></div><br><div class=\"k-input\"><div class=\"k-wrapper\"><textarea class=\"k-inner k-textarea\" placeholder=\"please enter\" rows=\"5\" spellcheck=\"false\"></textarea></div></div></div></div>"
```

##   `menu`

####     `Menu accordion`

```
"<div><div class=\"k-menu k-dark k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div></div></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2
    </span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div></div></div></div></div></div>"
```

####     `Menu basic`

```
"<div><div class=\"k-menu k-dark k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded k-highlighted\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item k-active\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div>"
```

####     `Menu collapse`

```
"<div><div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"margin-right: 16px; width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">展开</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">收起</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><br><br><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>
                    sub menu 4
                    </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 2</span></div></div></div></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div></div>"
```

####     `Menu dot`

```
"<div><div class=\"k-menu k-light k-vertical\"><div class=\"k-header\"><i class=\"k-icon ion-star\"></i><span>Header</span></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded k-highlighted\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item k-active\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 4</span></div></div></div></div>"
```

####     `Menu horizontal`

```
"<div><div><div class=\"k-menu k-horizontal\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><!--placeholder--></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div><br><br><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Menu size`

```
"<div><div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">展开</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">收起</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 60px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 60px;\">dark</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 60px;\">light</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 100px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 100px;\">vertical</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 100px;\">horizontal</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>large</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>small</span><input type=\"radio\" tabindex=\"-1\"></button></div><br><br><div class=\"k-menu k-large\"><div class=\"k-header\"><i class=\"k-icon ion-star\"></i><span>Header</span></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon k-dot ion-record\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
            </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>
                    sub menu 4
                    </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\" style=\"height: 0px; display: none;\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>option 2</span></div></div></div></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div></div>"
```

####     `Menu theme`

```
"<div><div class=\"k-menu k-light k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-flag\"></i><span>menu 1</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><i class=\"k-icon ion-star\"></i><span>menu 2</span></div></div><div class=\"k-menu-item k-expanded\"><div class=\"k-title\"><i class=\"k-icon ion-heart\"></i><span>menu 3
        </span><i class=\"k-arrow ion-ios-arrow-down\"></i></div><div class=\"k-show-height\"><div class=\"k-menu k-vertical\"><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 1</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 2</span></div></div><div class=\"k-menu-item k-disabled\"><div class=\"k-title\"><span>sub menu 3</span></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><span>sub menu 4</span></div></div></div></div></div><div class=\"k-menu-item\"><div class=\"k-title\"><i class=\"k-icon ion-gear-b\"></i><span>menu 4</span></div></div></div></div>"
```

##   `message`

####     `Message basic`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>info</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>error</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>warning</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>success</span></button></div></div>"
```

####     `Message custom`

```
"<div><div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>custom message</span></button><!--message--></div></div>"
```

####     `Message duration`

```
"<div><div class=\"k-btns\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>close after 10s</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>stick message</span></button></div></div>"
```

##   `pagination`

####     `Pagination basic`

```
"<div><div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>10</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>10</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

####     `Pagination counts`

```
"<div><div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>6</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>7</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>8</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>6</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>7</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

####     `Pagination current`

```
"<div><div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

####     `Pagination goto`

```
"<div><div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页</div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

####     `Pagination noBoard`

```
"<div><div><div class=\"k-pagination k-large k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-large k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-small k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini k-no-border\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-mini k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

####     `Pagination simple`

```
"<div><div><div class=\"k-pagination k-large k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-small k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-small k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-small k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-mini k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div><div class=\"k-pagination k-mini k-simple\"><div class=\"k-btns\"><button class=\"k-btn k-none k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><div class=\"k-input k-mini k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" style=\"width: 100px;\"><div class=\"k-fake\">1</div></div></div><span class=\"k-text\"> / 20</span><button class=\"k-btn k-none k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div></div></div></div>"
```

####     `Pagination size`

```
"<div><div><div class=\"k-pagination k-large\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-large k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-large\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-large k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-small\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-small k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div><div class=\"k-pagination k-mini\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini k-active\" tabindex=\"0\" type=\"button\"><span>1</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>2</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>3</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>4</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>5</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini k-ellipsis\" tabindex=\"0\" type=\"button\"><span>...</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><span>20</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i><input type=\"radio\" tabindex=\"-1\"></button></div><div class=\"k-limits\"><div class=\"k-select k-mini k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div></div></div></div>"
```

##   `progress`

####     `Progress basic`

```
"<div><div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 100%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-checkmark-outline\"></i></span></div></div></div></div>"
```

####     `Progress children`

```
"<div><div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\"><circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"58\" stroke-dashoffset=\"218.65484868984962\" stroke-dasharray=\"364.424747816416\" stroke-width=\"4\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\" stroke-dasharray=\"364.424747816416\" stroke-dashoffset=\"364.424747816416\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"364.424747816416\" to=\"218.65484868984962\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle></svg><div class=\"k-text\"><div style=\"font-size: 14px; line-height: 20px;\">
            正在上传<br>
            40%
        </div></div></div><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-btn-icon k-mini\" tabindex=\"0\" type=\"button\">-</button></div></div></div>"
```

####     `Progress circle`

```
"<div><div><div class=\"k-progress k-circle k-active\"><svg class=\"k-canvas\" viewBox=\"0 0 120 120\"><circle class=\"k-meter\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\"></circle><circle class=\"k-value\" cx=\"60\" cy=\"60\" r=\"58\" stroke-dashoffset=\"182.212373908208\" stroke-dasharray=\"364.424747816416\" stroke-width=\"4\"></circle><circle class=\"k-animate\" cx=\"60\" cy=\"60\" r=\"58\" stroke-width=\"4\" stroke-dasharray=\"364.424747816416\" stroke-dashoffset=\"364.424747816416\"><animate attributeName=\"stroke-dashoffset\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"364.424747816416\" to=\"182.212373908208\"></animate><animate attributeName=\"opacity\" begin=\"0s\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0.2\" to=\"0\"></animate></circle></svg><div class=\"k-text\"><span>50%</span></div></div></div></div>"
```

####     `Progress innerText`

```
"<div><div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 0%;\"><div class=\"k-inner-text\">0 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"><div class=\"k-inner-text\">50 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 60%;\"><div class=\"k-inner-text\">60 %
                </div></div></div></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 70%;\"><div class=\"k-inner-text\">70 %
                </div></div></div></div></div></div></div>"
```

####     `Progress size`

```
"<div><div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-small\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-active k-mini\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div></div></div>"
```

####     `Progress status`

```
"<div><div><div class=\"k-progress k-bar k-active\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span>50%</span></div></div><div class=\"k-progress k-bar k-error\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-close-outline\"></i></span></div></div><div class=\"k-progress k-bar k-success\"><div class=\"k-container\"><div class=\"k-content\"><div class=\"k-bg\" style=\"width: 50%;\"></div></div></div><div class=\"k-text\"><span><i class=\"k-icon ion-ios-checkmark-outline\"></i></span></div></div></div></div>"
```

##   `radio`

####     `Radio basic`

```
"<div><div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">radio</span></label><label class=\"k-radio k-disabled\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled radio</span></label><label class=\"k-radio k-disabled k-checked\" tabindex=\"-1\"><span class=\"k-wrapper\"><input type=\"radio\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">disabled checked radio</span></label></div></div>"
```

####     `Radio group`

```
"<div><div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"Javascript\"></span><span class=\"k-text\">Javascript</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"C++\"></span><span class=\"k-text\">C++</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"language\" value=\"PHP\"></span><span class=\"k-text\">PHP</span></label>
    Your selected: 
</div></div>"
```

####     `Radio value`

```
"<div><div><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">默认值：null</span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"checked\"></span><span class=\"k-text\">
        指定选中时的取值为\"checked\": null
    </span></label><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" value=\"[object Object]\"></span><span class=\"k-text\">
        指定选中时的取值为对象：null
    </span></label></div></div>"
```

##   `scrollSelect`

####     `ScrollSelect basic`

```
"<div><div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">4月</div><div class=\"k-scroll-item\">5月</div><div class=\"k-scroll-item\">6月</div><div class=\"k-scroll-item\">7月</div><div class=\"k-scroll-item\">8月</div><div class=\"k-scroll-item\">9月</div><div class=\"k-scroll-item\">10月</div><div class=\"k-scroll-item\">11月</div><div class=\"k-scroll-item\">12月</div><div class=\"k-scroll-item k-active\">1月</div><div class=\"k-scroll-item\">2月</div><div class=\"k-scroll-item\">3月</div><div class=\"k-scroll-item\">4月</div><div class=\"k-scroll-item\">5月</div><div class=\"k-scroll-item\">6月</div><div class=\"k-scroll-item\">7月</div><div class=\"k-scroll-item\">8月</div><div class=\"k-scroll-item\">9月</div><div class=\"k-scroll-item\">10月</div></div><div class=\"k-border\"></div></div></div>"
```

####     `ScrollSelect disable`

```
"<div><div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item k-disabled\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item k-disabled\">2016年</div><div class=\"k-scroll-item\">2017年</div><div class=\"k-scroll-item k-active\">2018年</div><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item k-disabled\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item k-disabled\">2016年</div><div class=\"k-scroll-item\">2017年</div></div><div class=\"k-border\"></div></div></div>"
```

####     `ScrollSelect infinite`

```
"<div><div class=\"k-scroll-select\"><div class=\"k-wrapper\" style=\"transform: translateY(-222px); margin-top: 0px;\"><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item\">2016年</div><div class=\"k-scroll-item\">2017年</div><div class=\"k-scroll-item k-active\">2018年</div><div class=\"k-scroll-item\">2019年</div><div class=\"k-scroll-item\">2020年</div><div class=\"k-scroll-item\">2021年</div><div class=\"k-scroll-item\">2022年</div><div class=\"k-scroll-item\">2013年</div><div class=\"k-scroll-item\">2014年</div><div class=\"k-scroll-item\">2015年</div><div class=\"k-scroll-item\">2016年</div><div class=\"k-scroll-item\">2017年</div></div><div class=\"k-border\"></div></div></div>"
```

##   `select`

####     `Select allowUnmatch`

```
"<div><div><div class=\"k-select k-with-suffix\" tabindex=\"0\" style=\"margin-right: 10px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请输入或选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    Day: 
</div></div>"
```

####     `Select basic`

```
"<div><div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: 
</div></div>"
```

####     `Select clearable`

```
"<div><div><div class=\"k-select k-clearable k-with-suffix\" tabindex=\"0\" style=\"margin-right: 10px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-clearable k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Select custom`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select disabled`

```
"<div><div><div class=\"k-select k-disabled k-with-suffix\" tabindex=\"-1\" style=\"margin-right: 10px;\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Select filterable`

```
"<div><div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-values\"><div class=\"k-input k-auto-width\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\" style=\"width: 100px;\"><div class=\"k-fake\">请选择</div></div></div></span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Select group`

```
"<div><div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

####     `Select multiple`

```
"<div><div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: null 
</div></div>"
```

####     `Select noBorder`

```
"<div><div class=\"k-select k-with-suffix k-inline\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select remote`

```
"<div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div>"
```

####     `Select size`

```
"<div><div><div class=\"k-select k-large k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-small k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div><div class=\"k-select k-mini k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div></div>"
```

##   `slider`

####     `Slider basic`

```
"<div><div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 60%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50.4444%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50.4444%;\"></div></div><div class=\"k-box\"><span>50</span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Change Range Randomly</span></button></div></div>"
```

####     `Slider disabled`

```
"<div><div><div class=\"k-slider k-disabled k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 50%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-disabled k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-disabled k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 50%; left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 10%;\"></div><div class=\"k-handle\" tabindex=\"-1\" style=\"left: 60%;\"></div></div><div class=\"k-box\"><span>50</span><span>100</span></div></div></div></div></div>"
```

####     `Slider marks`

```
"<div><div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 45.4545%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45.4545%;\"></div></div><div class=\"k-marks\"><span style=\"left: 0%;\">1</span><span style=\"left: 9.09091%;\">2</span><span style=\"left: 18.1818%;\">3</span><span style=\"left: 27.2727%;\">4</span><span style=\"left: 36.3636%;\">5</span><span style=\"left: 45.4545%;\">6月</span><span style=\"left: 54.5455%;\">7</span><span style=\"left: 63.6364%;\">8</span><span style=\"left: 72.7273%;\">9</span><span style=\"left: 81.8182%;\">1年</span><span style=\"left: 90.9091%;\">2年</span><span style=\"left: 100%;\">3年</span></div></div></div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 36.3636%; left: 9.09091%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 9.09091%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45.4545%;\"></div></div><div class=\"k-marks\"><span style=\"left: 0%;\">1</span><span style=\"left: 9.09091%;\">2</span><span style=\"left: 18.1818%;\">3</span><span style=\"left: 27.2727%;\">4</span><span style=\"left: 36.3636%;\">5</span><span style=\"left: 45.4545%;\">6月</span><span style=\"left: 54.5455%;\">7</span><span style=\"left: 63.6364%;\">8</span><span style=\"left: 72.7273%;\">9</span><span style=\"left: 81.8182%;\">1年</span><span style=\"left: 90.9091%;\">2年</span><span style=\"left: 100%;\">3年</span></div></div></div></div></div>"
```

####     `Slider range`

```
"<div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 26%; left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 50%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 76%;\"></div></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div></div>"
```

####     `Slider step`

```
"<div><div><div class=\"k-slider k-show-input\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div><div class=\"k-slider k-show-input k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 0%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 0%;\"></div></div><div class=\"k-box\"><span>50</span><span>500</span></div></div><div class=\"k-spinner-wrapper\"><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div></div></div>"
```

####     `Slider stop`

```
"<div><div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 45%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 45%;\"></div><i class=\"k-point\" style=\"left: 5%;\"></i><i class=\"k-point\" style=\"left: 10%;\"></i><i class=\"k-point\" style=\"left: 15%;\"></i><i class=\"k-point\" style=\"left: 20%;\"></i><i class=\"k-point\" style=\"left: 25%;\"></i><i class=\"k-point\" style=\"left: 30%;\"></i><i class=\"k-point\" style=\"left: 35%;\"></i><i class=\"k-point\" style=\"left: 40%;\"></i><i class=\"k-point\" style=\"left: 45%;\"></i><i class=\"k-point\" style=\"left: 50%;\"></i><i class=\"k-point\" style=\"left: 55%;\"></i><i class=\"k-point\" style=\"left: 60%;\"></i><i class=\"k-point\" style=\"left: 65%;\"></i><i class=\"k-point\" style=\"left: 70%;\"></i><i class=\"k-point\" style=\"left: 75%;\"></i><i class=\"k-point\" style=\"left: 80%;\"></i><i class=\"k-point\" style=\"left: 85%;\"></i><i class=\"k-point\" style=\"left: 90%;\"></i><i class=\"k-point\" style=\"left: 95%;\"></i></div><div class=\"k-box\"><span>0</span><span>100</span></div></div></div><div class=\"k-slider k-show-end\"><div class=\"k-slider-wrapper\"><div class=\"k-wrapper\"><div class=\"k-bar\" style=\"width: 30%; left: 30%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 30%;\"></div><div class=\"k-handle\" tabindex=\"0\" style=\"left: 60%;\"></div><i class=\"k-point\" style=\"left: 10%;\"></i><i class=\"k-point\" style=\"left: 20%;\"></i><i class=\"k-point\" style=\"left: 30%;\"></i><i class=\"k-point\" style=\"left: 40%;\"></i><i class=\"k-point\" style=\"left: 50%;\"></i><i class=\"k-point\" style=\"left: 60%;\"></i><i class=\"k-point\" style=\"left: 70%;\"></i><i class=\"k-point\" style=\"left: 80%;\"></i><i class=\"k-point\" style=\"left: 90%;\"></i></div><div class=\"k-box\"><span>0</span><span>1</span></div></div></div></div></div>"
```

##   `spin`

####     `Spin basic`

```
"<div><div><div class=\"k-spin k-large\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin k-small\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div><div class=\"k-spin k-mini\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div></div>"
```

####     `Spin overlay`

```
"<div><div class=\"wrapper\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"第三行\">第三行</td><td title=\"哈哈3\">哈哈3</td></tr></tbody></table></div></div></div><div class=\"k-spin k-overlay\"><div class=\"k-wrapper\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div></div></div>"
```

##   `spinner`

####     `Spinner basic`

```
"<div><div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-disabled\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-disabled\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" disabled=\"\"></div></div><button class=\"k-btn k-btn-icon k-right k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div></div>"
```

####     `Spinner size`

```
"<div><div><div class=\"k-spinner k-large\"><button class=\"k-btn k-btn-icon k-large k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-large k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-small\"><button class=\"k-btn k-btn-icon k-small k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner k-mini\"><button class=\"k-btn k-btn-icon k-mini k-left\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div></div>"
```

####     `Spinner step`

```
"<div><div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div><div class=\"k-spinner\"><button class=\"k-btn k-btn-icon k-left k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-minus-empty\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-plus-empty\"></i></button></div></div></div>"
```

####     `Spinner vertical`

```
"<div><div><div class=\"k-spinner k-large k-vertical\"><button class=\"k-btn k-btn-icon k-large k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-large\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-large k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-vertical\"><button class=\"k-btn k-btn-icon k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-small k-vertical\"><button class=\"k-btn k-btn-icon k-small k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-small\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-small k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div><div class=\"k-spinner k-mini k-vertical\"><button class=\"k-btn k-btn-icon k-mini k-left\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-down\"></i></button><div class=\"k-input k-mini\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div><button class=\"k-btn k-btn-icon k-mini k-right\" tabindex=\"0\" type=\"button\"><i class=\"ion-ios-arrow-up\"></i></button></div></div></div>"
```

##   `steps`

####     `Steps basic`

```
"<div><div><div class=\"k-steps c-clearfix k-default\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button></div></div>"
```

####     `Steps clickable`

```
"<div><div><div class=\"k-steps c-clearfix k-default k-clickable\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button></div></div>"
```

####     `Steps error`

```
"<div><div class=\"k-steps c-clearfix k-default\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div></div>"
```

####     `Steps line`

```
"<div><div><div class=\"k-steps c-clearfix k-line\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button><div class=\"k-steps c-clearfix k-line\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div></div></div>"
```

####     `Steps simple`

```
"<div><div><div class=\"k-steps c-clearfix k-simple\"><div class=\"k-step k-active\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>2</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div><button class=\"k-btn k-primary k-disabled\" tabindex=\"-1\" type=\"button\"><span>Previous Step</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Next Step</span></button><div class=\"k-steps c-clearfix k-simple\"><div class=\"k-step k-done\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>1</span></div></div><div class=\"k-main\"><div class=\"k-title\">选择配置</div><div class=\"k-content\">请选择主机的配置信息</div></div></div></div><div class=\"k-step k-active k-error\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><i class=\"ion-ios-close-empty k-icon\"></i></div></div><div class=\"k-main\"><div class=\"k-title\">选择弹性IP</div><div class=\"k-content\">请选择主机弹性IP的配置信息</div></div></div></div><div class=\"k-step\" style=\"width: 33.3333%;\"><div class=\"k-tail\"></div><div class=\"k-wrapper\"><div class=\"k-head\"><div class=\"k-inner\"><span>3</span></div></div><div class=\"k-main\"><div class=\"k-title\">设置VPC</div><div class=\"k-content\"></div></div></div></div></div></div></div>"
```

##   `switch`

####     `Switch basic`

```
"<div><div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default k-disabled\" tabindex=\"-1\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Switch onOff`

```
"<div><div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\">关</div><div class=\"k-bar\"><div class=\"k-on\">开</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-checked k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\"><i class=\"ion-ios-close-empty\"></i></div><div class=\"k-bar\"><div class=\"k-on\"><i class=\"ion-ios-checkmark-empty\"></i></div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Switch size`

```
"<div><div>
    large: <div class=\"k-switch k-large\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    default: <div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    small: <div class=\"k-switch k-small\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
    mini: <div class=\"k-switch k-mini\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Switch value`

```
"<div><div><div style=\"margin-bottom: 20px;\"><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
        null
    </div><div><div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div>
        null
    </div></div></div>"
```

####     `Switch widthHeight`

```
"<div><div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 62px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 62px;\">关闭</div><div class=\"k-bar\"><div class=\"k-on\" style=\"width: 62px;\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"height: 30px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\" style=\"width: 30px;\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div><div class=\"k-switch k-default\" tabindex=\"0\" style=\"width: 100px; height: 30px;\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-off\" style=\"width: 100px; height: 30px; line-height: 30px; padding: 0px 10px 0px 30px;\">关闭</div><div class=\"k-bar\" style=\"width: 30px;\"><div class=\"k-on\" style=\"width: 100px; height: 30px; line-height: 30px; padding: 0px 30px 0px 10px;\">开启</div><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

##   `table`

####     `Table basic`

```
"<div><div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table checkType`

```
"<div><div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"多选1\">多选1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"多选2\">多选2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td><td title=\"单选1\">单选1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"1\"></span></label></td><td title=\"单选2\">单选2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            <th title=\"表头\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"不可选1\">不可选1</td></tr><tr class=\"\"><td title=\"不可选2\">不可选2</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table checkedKey_s`

```
"<div><div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"radio不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio不指定rowKey</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"0\"></span></label></td><td title=\"赋默认值选中\">赋默认值选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"1\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"></th>
            <th title=\"radio指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">radio指定为item的id</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-radio k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"yes\"></span></label></td><td title=\"选中\">选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-radio\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"radio\" tabindex=\"-1\" name=\"k-table-radio\" value=\"no\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div></div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox不指定rowKey\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox不指定rowKey</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"赋默认值选中\">赋默认值选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"不选中\">不选中</td></tr><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"赋默认值选中，可设置多个\">赋默认值选中，可设置多个</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"checkbox指定为item的id\"><div class=\"k-th\"><div class=\"c-ellipsis\">checkbox指定为item的id</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"k-checked\"><td class=\"k-th-check\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"yes\"></span></label></td><td title=\"选中\">选中</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"no\"></span></label></td><td title=\"不选中\">不选中</td></tr></tbody></table></div></div></div></div></div></div>"
```

####     `Table disableRow`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"奇数行不可点击\"><div class=\"k-th\"><div class=\"c-ellipsis\">奇数行不可点击</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"1\">1</td></tr><tr class=\"k-disabled\"><td class=\"k-th-check\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"2\">2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"3\">3</td></tr><tr class=\"k-disabled\"><td class=\"k-th-check\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td><td title=\"4\">4</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td><td title=\"5\">5</td></tr></tbody></table></div></div></div></div>"
```

####     `Table export`

```
"<div><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>导出表格</span></button><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>导出自定义数据</span></button><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"普通文本\"><div class=\"k-th\"><div class=\"c-ellipsis\">普通文本</div></div></th><th title=\"自定义导出文本\"><div class=\"k-th\"><div class=\"c-ellipsis\">自定义导出文本</div></div></th><th title=\"操作\" data-ignore=\"\"><div class=\"k-th\"><div class=\"c-ellipsis\">操作</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>第一行</a></td><td title=\"哈哈1\">哈哈1</td><td><div data-text=\"自定义导出文本:自定义1\">
                    自定义1
                </div></td><td data-ignore=\"\"><a>删除</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td><a>第二行</a></td><td title=\"哈哈2\">哈哈2</td><td><div data-text=\"自定义导出文本:自定义2\">
                    自定义2
                </div></td><td data-ignore=\"\"><a>删除</a></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table fixColumn`

```
"<div><div><div class=\"k-table k-sticky k-scroll-left\"><div class=\"k-table-wrapper\"><div class=\"k-thead\" style=\"width: 800px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-left\" style=\"width: 230px;\"><div class=\"k-thead\" style=\"width: 230px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th class=\"k-invisible\" title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-right\" style=\"width: 200px;\"><div class=\"k-thead\" style=\"width: 200px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th class=\"k-invisible\" minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"name k-invisible\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col class=\"name\" width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td class=\"k-invisible\" title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td class=\"k-invisible\" title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td class=\"k-invisible\" title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div></div><div class=\"k-table k-scroll-left\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-left\" style=\"width: 230px;\"><div class=\"k-thead\" style=\"width: 230px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th class=\"k-invisible\" title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 85px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\"><a>action</a></td></tr></tbody></table></div></div><div class=\"k-table-wrapper k-fixed-right\" style=\"width: 215px;\"><div class=\"k-thead\" style=\"width: 215px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th class=\"k-invisible\" minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-invisible\" title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th class=\"k-invisible\" title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th class=\"k-invisible\" title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th class=\"k-invisible\" title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th class=\"k-invisible\" title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 85px;\"><table style=\"width: 1630px;\"><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td class=\"k-invisible\" title=\"John\">John</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td class=\"k-invisible\" title=\"Tom\">Tom</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check k-invisible\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td class=\"k-invisible\" title=\"Javey\">Javey</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td class=\"k-invisible\" title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table fixHeader`

```
"<div><div class=\"wrapper\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"表头固定，但内容没有超出最高高度\">表头固定，但内容没有超出最高高度</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 15px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"100px\"><div class=\"k-th\"><div class=\"c-ellipsis\">100px</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\" style=\"max-height: 100px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"表头固定啦\">表头固定啦</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"下拉\">下拉</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"yeah!\">yeah!</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table group`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态(全部)\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态(全部)</div></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td><span>运行中</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机2\">主机2</td><td><span>已关闭</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"主机3\">主机3</td><td><span>运行中</span></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"名称\"><div class=\"k-th\"><div class=\"c-ellipsis\">名称</div></div></th><th title=\"状态\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\">状态</div></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"主机1\">主机1</td><td><span>运行中</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"主机2\">主机2</td><td><span>已关闭</span></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"主机3\">主机3</td><td><span>运行中</span></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table loading`

```
"<div><div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"第三行\">第三行</td><td title=\"哈哈3\">哈哈3</td></tr></tbody></table></div></div></div>
    切换loading状态: <div class=\"k-switch k-default\" tabindex=\"0\"><input type=\"checkbox\" tabindex=\"-1\"><div class=\"k-bar\"><div class=\"k-wrapper\"><div class=\"k-handle\"><img src=\"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7\"></div></div></div></div></div></div>"
```

####     `Table noDataTemplate`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\">/(ㄒoㄒ)/~~ 没有找到亲要的数据哦~</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\"><div>这里没有数据(自定义版本)</div></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"表头1\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头1</div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr><td class=\"k-no-data\" colspan=\"3\"><div style=\"color: red;\">没有数据</div></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table resizable`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"通过minColWidth控制最小宽度100px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">通过minColWidth控制最小宽度100px</div></div></th><th title=\"单独设置最小宽度300px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">单独设置最小宽度300px</div></div></th><th title=\"标题\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">标题</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr></tbody></table></div></div></div><form class=\"k-form\" novalidate=\"\" style=\"margin-top: 20px;\"><div class=\"k-form-item\" style=\"width: 100%;\"><label class=\"k-label\"><div style=\"width: 140px;\">table in table-cell</div></label><div class=\"k-content\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"通过minColWidth控制最小宽度100px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">通过minColWidth控制最小宽度100px</div></div></th><th title=\"单独设置最小宽度300px\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">单独设置最小宽度300px</div></div></th><th title=\"标题\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">标题</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"50%\"><col width=\"10%\"><col width=\"40%\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td><td title=\"C\">C</td></tr></tbody></table></div></div></div></div></div></form></div></div>"
```

####     `Table rowCheckable`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"点击整行不选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行不选中</div></div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"B\">B</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"点我不会选中整行\">点我不会选中整行</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"点击整行选中\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行选中</div></div></th><th title=\"B\"><div class=\"k-th\"><div class=\"c-ellipsis\">B</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"A\">A</td><td title=\"任何位置都可以哦～\">任何位置都可以哦～</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"A\">A</td><td title=\"点我会选中整行\">点我会选中整行</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table rowClassName`

```
"<div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"偶数行背景变换\"><div class=\"k-th\"><div class=\"c-ellipsis\">偶数行背景变换</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"1\">1</td></tr><tr class=\"odd\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"2\">2</td></tr><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"3\">3</td></tr><tr class=\"odd\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"3\"></span></label></td><td title=\"4\">4</td></tr><tr class=\"even\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"4\"></span></label></td><td title=\"5\">5</td></tr></tbody></table></div></div></div></div>"
```

####     `Table rowExpandable`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击整行展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击整行展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td title=\"Javey\">Javey</td></tr><tr class=\"\"><td title=\"Jiawei\">Jiawei</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col></colgroup><thead><tr>
            
            <th title=\"点击+，展开内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">点击+，展开内容</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col></colgroup><tbody><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>
                    Javey
                </div></td></tr><tr class=\"\"><td><div><i class=\"icon ion-ios-plus-outline\"></i>
                    Jiawei
                </div></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table scheme`

```
"<div><div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"key形式\"><div class=\"k-th\"><div class=\"c-ellipsis\">key形式</div></div></th><th title=\"key为一个路径字符串\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个路径字符串</div></div></th><th title=\"没有这个key，则返回空\"><div class=\"k-th\"><div class=\"c-ellipsis\">没有这个key，则返回空</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>虚拟DOM</a></td><td title=\"获取到了item.b\">获取到了item.b</td><td title=\"item.c.c1\">item.c.c1</td><td></td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"定义该列单元格内容\"><div class=\"k-th\"><div class=\"c-ellipsis\">定义该列单元格内容</div></div></th><th title=\"key形式\"><div class=\"k-th\"><div class=\"c-ellipsis\">key形式</div></div></th><th title=\"key为一个路径字符串\"><div class=\"k-th\"><div class=\"c-ellipsis\">key为一个路径字符串</div></div></th><th title=\"没有这个key，则返回空\"><div class=\"k-th\"><div class=\"c-ellipsis\">没有这个key，则返回空</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td><a>虚拟DOM</a></td><td title=\"获取到了item.b\">获取到了item.b</td><td title=\"item.c.c1\">item.c.c1</td><td></td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table sort`

```
"<div><div class=\"no-data-template\"><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\" title=\"姓名\"><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th class=\"k-sortable\" title=\"年龄\"><div class=\"k-th\"><div class=\"c-ellipsis\">年龄</div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"aa\">aa</td><td title=\"1\">1</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"cc\">cc</td><td title=\"5\">5</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"bb\">bb</td><td title=\"9\">9</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table stickHeader`

```
"<div><div class=\"k-table k-sticky\"><div class=\"k-table-wrapper\"><div class=\"k-thead\" style=\"width: 800px; position: fixed; top: 87px;\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"姓名\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">姓名</div></div></th><th title=\"性别\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">性别</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\" style=\"padding-top: 41px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"Javey\">
            Javey
        </td><td title=\"male\">
            male
        </td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Lisa\">
            Lisa
        </td><td title=\"female\">
            female
        </td></tr></tbody></table></div></div></div></div>"
```

####     `Table stickScrollbar`

```
"<div><div class=\"k-table k-sticky-scrollbar\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th title=\"Name\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Name</div></div></th><th title=\"Column1\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column1</div></div></th><th title=\"Column2\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column2</div></div></th><th title=\"Column3\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column3</div></div></th><th title=\"Column4\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Column4</div></div></th><th title=\"Action\"><div class=\"k-resize\"></div><div class=\"k-th\"><div class=\"c-ellipsis\">Action</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col width=\"200\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"300\"><col width=\"200\"></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"John\">John</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"Tom\">Tom</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"2\"></span></label></td><td title=\"Javey\">Javey</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td title=\"test\">test</td><td><a>action</a></td></tr></tbody></table></div></div><div class=\"k-scrollbar\" style=\"display: none;\"><div class=\"k-inner\" style=\"width: 1630px;\"></div></div></div></div>"
```

####     `Table title`

```
"<div><div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th class=\"k-sortable\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\"><div><span title=\"自定义表头内容\" class=\"c-middle title\">自定义表头内容</span><div class=\"k-tooltip\"><i _evhassaved=\"true\" class=\"ion-ios-help-outline c-middle\"></i><!--placeholder--></div></div></div></div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div><div class=\"k-table\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            
            <th class=\"k-sortable\"><div class=\"k-th\"><div class=\"k-group\"><i class=\"k-arrow ion-ios-arrow-down\"></i><!--placeholder--><div class=\"c-ellipsis\"><span title=\"自定义表头内容\" class=\"c-middle title\">自定义表头内容</span><div class=\"k-tooltip\"><i _evhassaved=\"true\" class=\"ion-ios-help-outline c-middle\"></i><!--placeholder--></div></div></div><div class=\"k-sort\"><i class=\"k-icon icon-sortable\"></i></div></div></th><th title=\"表头2\"><div class=\"k-th\"><div class=\"c-ellipsis\">表头2</div></div></th></tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"第一行\">第一行</td><td title=\"哈哈2\">哈哈2</td></tr><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"1\"></span></label></td><td title=\"第二行\">第二行</td><td title=\"哈哈2\">哈哈2</td></tr></tbody></table></div></div></div></div></div>"
```

####     `Table type`

```
"<div><div class=\"k-table k-border\"><div class=\"k-table-wrapper\"><div class=\"k-thead\"><div class=\"k-thead-wrapper\" style=\"padding-right: 0px;\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><thead><tr><th minwidth=\"40\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label></th>
            <th title=\"类型\"><div class=\"k-th\"><div class=\"c-ellipsis\">类型</div></div></th>
            </tr></thead></table></div></div><div class=\"k-tbody\"><table><colgroup><col class=\"k-th-check\"><col></colgroup><tbody><tr class=\"\"><td class=\"k-th-check\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"k-table-checkbox\" value=\"0\"></span></label></td><td title=\"border类型\">border类型</td></tr></tbody></table></div></div></div></div>"
```

##   `tabs`

####     `Tabs basic`

```
"<div><div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-active\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"left: 150px; width: 120px;\"></div></div></div></div><div class=\"content\"><div>出站规则</div></div></div></div>"
```

####     `Tabs card`

```
"<div><div><div class=\"k-tabs k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div></div></div>"
```

####     `Tabs closable`

```
"<div><div><div class=\"k-btns\"><button class=\"k-btn k-active\" tabindex=\"0\" type=\"button\"><span>large</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>default</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>small</span><input type=\"radio\" tabindex=\"-1\"></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>mini</span><input type=\"radio\" tabindex=\"-1\"></button></div><br><br><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>新增Tab</span></button><div class=\"k-tabs k-large\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-large k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div><div class=\"k-tabs k-large k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div><div class=\"k-tabs k-large k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">Tab 1<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 2<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a><a class=\"k-tab\">Tab 3<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></a></div></div></div></div></div>"
```

####     `Tabs data`

```
"<div><div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-active\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"left: 150px; width: 120px;\"></div></div></div></div><div class=\"content\"><div>出站规则</div></div></div></div>"
```

####     `Tabs disabled`

```
"<div><div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab\">入站规则</a><a class=\"k-tab k-disabled\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\"></div></div></div></div><div class=\"content\"><div>关联云主机</div></div></div></div>"
```

####     `Tabs size`

```
"<div><div><div class=\"k-tabs k-large\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">large1</a><a class=\"k-tab\">large2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">default1</a><a class=\"k-tab\">defalut2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-small\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">small1</a><a class=\"k-tab\">small2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div><div class=\"k-tabs k-mini\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">mini1</a><a class=\"k-tab\">mini2</a><div class=\"k-active-bar\" style=\"left: 10px; width: 120px;\"></div></div></div></div></div></div>"
```

####     `Tabs vertical`

```
"<div><div><div class=\"k-tabs k-vertical\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a><div class=\"k-active-bar\" style=\"top: 0px; height: 36px;\"></div></div></div></div><div class=\"k-tabs k-vertical k-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-vertical k-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div><div class=\"k-tabs k-vertical k-card k-no-border-card\"><div class=\"k-scroll c-clearfix\"><div class=\"k-wrapper\" style=\"transform: translateX(0px);\"><a class=\"k-tab k-active\">入站规则</a><a class=\"k-tab\">出站规则</a><a class=\"k-tab\">关联云主机</a></div></div></div></div></div>"
```

##   `tag`

####     `Tag basic`

```
"<div><div><div class=\"k-tag\">default</div><div class=\"k-tag k-primary\">primary</div><div class=\"k-tag k-success\">success</div><div class=\"k-tag k-warning\">warning</div><div class=\"k-tag k-danger\">danger</div><div class=\"k-tag k-disabled\">disabled</div></div></div>"
```

####     `Tag closable`

```
"<div><div><div class=\"k-tag k-closable\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable\">primary<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable\">success<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable\">warning<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable\">danger<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-disabled k-closable\">disabled<button class=\"k-btn k-none k-btn-icon k-close k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div></div>"
```

####     `Tag size`

```
"<div><div><div class=\"k-tag k-large\">large</div><div class=\"k-tag\">default</div><div class=\"k-tag k-small\">small</div><div class=\"k-tag k-mini\">mini</div><br><br><div class=\"k-tag k-primary k-large\">large</div><div class=\"k-tag k-warning\">default</div><div class=\"k-tag k-success k-small\">small</div><div class=\"k-tag k-danger k-mini\">mini</div><br><br><div class=\"k-tag k-primary k-large k-closable\">large<button class=\"k-btn k-none k-btn-icon k-large k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-small k-closable\">small<button class=\"k-btn k-none k-btn-icon k-small k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-mini k-closable\">mini<button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div></div>"
```

##   `timeline`

####     `Timeline basic`

```
"<div><div class=\"k-timeline\"><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">
        August
        <p>some descriptions</p></div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div></div>"
```

####     `Timeline custom`

```
"<div><div class=\"k-timeline\"><div class=\"k-item k-success\"><div class=\"k-indicator\"><div class=\"k-dot\"><i class=\"ion-trophy\"></i></div><div class=\"k-line\"></div></div><div class=\"k-content\">
        August
    </div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div></div>"
```

####     `Timeline type`

```
"<div><div class=\"k-timeline\"><div class=\"k-item k-primary\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">August</div></div><div class=\"k-item k-success k-small\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">July</div></div><div class=\"k-item k-danger k-large\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">June</div></div><div class=\"k-item k-warning k-mini\"><div class=\"k-indicator\"><div class=\"k-dot\"><div class=\"k-circle\"></div></div><div class=\"k-line\"></div></div><div class=\"k-content\">May</div></div></div></div>"
```

##   `timepicker`

####     `Timepicker basic`

```
"<div><div><div class=\"k-datepicker k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: 
    <br><br><div class=\"k-datepicker k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"请选择时间\" tabindex=\"-1\"></div></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Timepicker range`

```
"<div><div><div class=\"k-datepicker k-range k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Timepicker step`

```
"<div><div><div class=\"k-select k-datepicker time k-with-prefix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择时间</span></div></div><!--placeholder--></div>
    You selected: null
    <br><br><div class=\"k-select k-datepicker k-clearable k-with-prefix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择时间</span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close\"></i></span></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

####     `Timepicker stepRange`

```
"<div><div><div class=\"k-datepicker k-range k-time-picker\" tabindex=\"0\"><div class=\"k-input k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-clock-outline\"></i></div><input class=\"k-inner\" type=\"text\" readonly=\"\" placeholder=\"开始时间 ~ 结束时间\" tabindex=\"-1\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><!--placeholder--></div>
    You selected: null
</div></div>"
```

##   `tip`

####     `Tip basic`

```
"<div><div><div class=\"k-tag k-component-tip\">default</div><div class=\"k-tag k-primary k-component-tip\">primary</div><div class=\"k-tag k-success k-component-tip\">success</div><div class=\"k-tag k-warning k-component-tip\">warning</div><div class=\"k-tag k-danger k-component-tip\">danger</div></div></div>"
```

####     `Tip closable`

```
"<div><div><div class=\"k-tag k-closable k-component-tip\">default<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable k-component-tip\">primary<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable k-component-tip\">success<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable k-component-tip\">warning<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable k-component-tip\">danger<button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-closable k-component-tip\">
        custom closing content
        <button class=\"k-btn k-none k-close k-custom\" tabindex=\"0\" type=\"button\"><span>No longer show</span></button></div></div></div>"
```

####     `Tip title`

```
"<div><div><div class=\"k-tag k-closable k-component-tip\"><div class=\"k-title\">default</div>
        This is a default tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-primary k-closable k-component-tip\"><div class=\"k-title\">primary</div>
        This is a primary tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-success k-closable k-component-tip\"><div class=\"k-title\">success</div>
        This is a success tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-warning k-closable k-component-tip\"><div class=\"k-title\">warning</div>
        This is a warning tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-tag k-danger k-closable k-component-tip\"><div class=\"k-title\">danger</div>
        This is a danger tip.
    <button class=\"k-btn k-none k-btn-icon k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div></div></div>"
```

##   `tooltip`

####     `Tooltip basic`

```
"<div><div><div class=\"k-tooltip\"><span>
        hover the text
    </span><!--placeholder--></div><br><br><div class=\"k-tooltip\"><span>
        don't show anything if content is empty 
    </span><!--placeholder--></div></div></div>"
```

####     `Tooltip confirm`

```
"<div><div><div class=\"k-tooltip\" confirm=\"true\" trigger=\"click\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>删除</span></button><!--placeholder--></div></div></div>"
```

####     `Tooltip content`

```
"<div><div><div class=\"k-tooltip\" trigger=\"click\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>Adjust Volume</span></button><!--placeholder--></div></div></div>"
```

####     `Tooltip position`

```
"<div><div class=\"k-btns\"><div class=\"k-tooltip\" position=\"left\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>left</span></button><!--placeholder--></div><div class=\"k-tooltip\" position=\"right\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>right</span></button><!--placeholder--></div><div class=\"k-tooltip\" position=\"top\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>top</span></button><!--placeholder--></div><div class=\"k-tooltip\" position=\"bottom\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>bottom</span></button><!--placeholder--></div></div></div>"
```

####     `Tooltip trigger`

```
"<div><div class=\"k-btns\"><div class=\"k-tooltip\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>hover</span></button><!--placeholder--></div><div class=\"k-tooltip\" trigger=\"click\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>click</span></button><!--placeholder--></div><div class=\"k-tooltip\" canhover=\"true\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>can hover</span></button><!--placeholder--></div></div></div>"
```

##   `transfer`

####     `Transfer basic`

```
"<div><div><div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                3</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                2</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"right\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"right\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div></div></div></div><p>You selected: [{\"label\":\"主机名0\",\"key\":0},{\"label\":\"主机名1\",\"key\":1,\"disabled\":true}]</p></div></div>"
```

####     `Transfer label`

```
"<div><div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                5</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-input k-small k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-search\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名0</div><p>前端服务器0 | 192.168.1.0</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名1</div><p>前端服务器1 | 192.168.1.1</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名2</div><p>前端服务器2 | 192.168.1.2</p></div></span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名3</div><p>前端服务器3 | 192.168.1.3</p></div></span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\"><div><div>主机名4</div><p>前端服务器4 | 192.168.1.4</p></div></span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                0</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-input k-small k-with-prefix k-clearable\"><div class=\"k-wrapper\"><div class=\"k-prefix\"><i class=\"ion-ios-search\"></i></div><input class=\"k-inner\" type=\"text\" placeholder=\"请输入\"><div class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close\"></i> </div></div></div><div class=\"k-list\"></div></div></div></div>"
```

####     `Transfer leftChecked`

```
"<div><div><div class=\"k-transfer\"><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">2 /
                5</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">请选择</span></label></div><div class=\"k-list\"><div class=\"k-item\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名0</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名1</span></label></div><div class=\"k-item\"><label class=\"k-checkbox k-checked\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名2</span></label></div><div class=\"k-item k-disabled\"><label class=\"k-checkbox k-disabled\"><span class=\"k-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名3</span></label></div><div class=\"k-item\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" name=\"left\" value=\"[object Object]\"></span><span class=\"k-text\">主机名4</span></label></div></div></div><div class=\"k-arrows\"><button class=\"k-btn k-primary k-btn-icon k-large k-circle k-disabled\" tabindex=\"-1\" type=\"button\"><i class=\"k-icon ion-ios-arrow-left\"></i></button><button class=\"k-btn k-primary k-btn-icon k-large k-circle\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-arrow-right\"></i></button></div><div class=\"k-panel\"><div class=\"k-title\"><div class=\"k-count\">0 /
                0</div><label class=\"k-checkbox c-ellipsis\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span><span class=\"k-text\">已选择</span></label></div><div class=\"k-list\"></div></div></div><p>You checked left side: [{\"label\":\"主机名0\",\"key\":0},{\"label\":\"主机名2\",\"key\":2}]</p></div></div>"
```

##   `tree`

####     `Tree basic`

```
"<div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div></div>"
```

####     `Tree checkbox`

```
"<div><div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get checked data</span></button><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get checked leaves data</span></button><br><br><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox k-indeterminate\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span></div></div></div></div></div>"
```

####     `Tree contextmenu`

```
"<div><div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div><!--placeholder--></div></div>"
```

####     `Tree custom`

```
"<div><div class=\"wrapper\"><div class=\"c-clearfix\"><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\">+</button></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-1</span><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">First floor-2</span><div class=\"k-btns\"><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-btn-icon k-small\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

####     `Tree filterable`

```
"<div><div><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"Please enter keywords to filter node.\"></div></div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div></div></div>"
```

####     `Tree loading`

```
"<div><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><span class=\"k-text\">parent</span></div></div></div></div>"
```

####     `Tree select`

```
"<div><div><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>get selected data</span></button><br><br><div class=\"k-tree\"><div class=\"k-node\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-1</span></div></div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">First floor-2</span></div><div><div class=\"k-node k-expanded\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.1</span></div><div><div class=\"k-node k-expanded k-selected\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.1</span></div><div></div></div><div class=\"k-node\"><div class=\"k-label k-leaf\"><span class=\"k-text\">Third floor-2.1.2</span></div></div></div></div><div class=\"k-node k-disabled\"><div class=\"k-label\"><i class=\"k-icon ion-android-arrow-dropdown\"></i><span class=\"k-text\">Second floor-2.2</span></div></div></div></div></div></div></div>"
```

##   `upload`

####     `Upload basic`

```
"<div><div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-tip\">只能上传JPG/PNG格式文件，且不超过500kb</div><div class=\"k-files\"></div><!--placeholder--></div></div>"
```

####     `Upload directory`

```
"<div><div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" directory=\"\" webkitdirectory=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-files\"></div><!--placeholder--></div></div>"
```

####     `Upload drag`

```
"<div><div class=\"k-upload k-drag\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><div class=\"k-area\"><i class=\"k-icon ion-upload\"></i><div>将文件拖到此处，或点击上传</div></div></div><div class=\"k-files\"></div><!--placeholder--></div></div>"
```

####     `Upload files`

```
"<div><div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>点击上传</span></button></div><div class=\"k-files\"><div class=\"k-file\"><div class=\"k-wrapper\"><div class=\"k-name c-ellipsis\"><i class=\"k-file-icon ion-document\"></i>test1.jpg<div class=\"k-icons\"><button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button><i class=\"k-status-icon ion-ios-checkmark-outline\"></i></div></div></div></div><div class=\"k-file\"><div class=\"k-wrapper\"><div class=\"k-name c-ellipsis\"><i class=\"k-file-icon ion-document\"></i>test2.png<div class=\"k-icons\"><button class=\"k-btn k-none k-btn-icon k-mini k-close\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button><i class=\"k-status-icon ion-ios-checkmark-outline\"></i></div></div></div></div></div><!--placeholder--></div></div>"
```

####     `Upload gallery`

```
"<div><div class=\"k-upload k-gallery\"><input class=\"c-hidden\" type=\"file\" accept=\".jpg, .png\" multiple=\"\"><div class=\"k-pictures\"><div class=\"c-middle\"><div class=\"k-handle\"><i class=\"k-picture-card k-add ion-ios-plus-empty\"></i></div></div></div><!--placeholder--></div></div>"
```

####     `Upload manually`

```
"<div><div class=\"k-upload\"><input class=\"c-hidden\" type=\"file\" multiple=\"\"><div class=\"k-handle\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>选择文件</span></button></div><div class=\"k-tip\"><button class=\"k-btn\" tabindex=\"0\" type=\"button\"><span>开始上传</span></button></div><div class=\"k-files\"></div><!--placeholder--></div></div>"
```

