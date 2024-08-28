# `Tooltip`

#### `should trigger correctly`

```
"click"
```

#### `should custom content correctly`

```
"<div class=\"k-slider css-1a62bpu\" style=\"width: 200px;\"><div class=\"k-slider-main\"><div class=\"k-slider-track-wrapper\"><div class=\"k-slider-track\"><div class=\"k-slider-bar\" style=\"width: 0%;\"></div><div class=\"k-slider-thumb-wrapper\" style=\"left: 0%;\"><div class=\"k-slider-thumb k-slider-tooltip\" tabindex=\"0\"></div><!--portal--><div class=\"k-dropdown-menu k-tooltip-content k-hoverable k-dark k-slider-tooltip css-o1x0o9 css-7sngro\" style=\"display: none;\">0<i class=\"k-tooltip-arrow\"></i></div></div></div></div></div></div>"
```

#### `Internal dropdown closing should not affect tooltip`

```
"<div><button class=\"k-btn k-default css-h31bz\" tabindex=\"0\" type=\"button\">Adjust Volume</button><!--portal--><button class=\"k-btn k-default k-dropdown-open css-h31bz\" tabindex=\"0\" type=\"button\">Test Dropdown</button><!--portal--></div>"
```

```
"<div class=\"k-dropdown-item k-select-option k-active css-vj004t\">星期一</div><div class=\"k-dropdown-item k-select-option css-vj004t\">星期二</div>"
```

#### `should handle confirm tooltip corectly`

```
"<div class=\"k-tooltip-buttons\"><button class=\"k-btn k-small css-9px56k\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-primary k-small css-9px56k\" tabindex=\"0\" type=\"button\">确定</button></div>"
```

