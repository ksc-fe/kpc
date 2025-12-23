# `Anchor`

#### `should render basic anchor correctly`

```
"<div class=\"k-anchor k-anchor-vertical css-4crbop\"><div class=\"k-tabs k-size-default k-vertical k-type-default css-zo0w25\"><div class=\"k-tabs-scroll c-clearfix\"><div class=\"k-tabs-wrapper\" style=\"transform: translateY(0px);\"><div class=\"k-tab k-anchor-link\">基础用法</div><div class=\"k-tab k-anchor-link\">水平排列</div><div class=\"k-tab k-anchor-link k-disabled\">自定义滚动容器</div><div class=\"k-tabs-active-bar\" style=\"height: 0px;\"></div></div></div></div></div>"
```

#### `should render nested anchor links correctly`

```
"<div class=\"k-anchor k-anchor-vertical css-4crbop\"><div class=\"k-tabs k-size-default k-vertical k-type-default css-zo0w25\"><div class=\"k-tabs-scroll c-clearfix\"><div class=\"k-tabs-wrapper\" style=\"transform: translateY(0px);\"><div class=\"k-tab k-active k-anchor-link k-anchor-link-nested\">Part1</div><div class=\"k-tab k-anchor-link k-anchor-link-level-1\">Part1.1</div><div class=\"k-tab k-anchor-link k-anchor-link-nested k-anchor-link-level-1\">Part1.2</div><div class=\"k-tab k-anchor-link k-anchor-link-level-2\">Part1.2.1</div><div class=\"k-tab k-anchor-link k-anchor-link-level-2\">Part1.2.2</div><div class=\"k-tab k-anchor-link k-anchor-link-level-1\">Part1.3</div><div class=\"k-tab k-anchor-link k-anchor-link-nested\">Part2</div><div class=\"k-tab k-anchor-link k-anchor-link-level-1\">Part2.1</div><div class=\"k-tab k-anchor-link k-anchor-link-level-1\">Part2.2</div><div class=\"k-tab k-anchor-link\">Part3</div><div class=\"k-tabs-active-bar\" style=\"top: 0px; height: 32px;\"></div></div></div></div></div>"
```

#### `should support disabled anchor link`

```
"<div class=\"k-anchor k-anchor-vertical css-4crbop\"><div class=\"k-tabs k-size-default k-vertical k-type-default css-zo0w25\"><div class=\"k-tabs-scroll c-clearfix\"><div class=\"k-tabs-wrapper\" style=\"transform: translateY(0px);\"><div class=\"k-tab k-active k-anchor-link\">Section 1</div><div class=\"k-tab k-anchor-link k-disabled\">Section 2</div><div class=\"k-tabs-active-bar\" style=\"top: 0px; height: 32px;\"></div></div></div></div></div>"
```

