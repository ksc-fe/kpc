# `Cascader`

#### `basic test`

```
"<div class=\"k-dropdown-item k-cascader-option css-vj004t\">北京<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal--><div class=\"k-dropdown-item k-cascader-option k-active k-dropdown-open css-vj004t\">湖南<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal-->"
```

```
"<div class=\"k-select k-cascader css-1ti24q0\" tabindex=\"0\"><div class=\"k-select-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><div class=\"k-select-placeholder c-ellipsis k-fade-leave-from k-fade-leave-active\">请选择</div><div class=\"k-select-value c-ellipsis k-fade-enter-from k-fade-enter-active\">湖南 / 岳阳市 / 岳阳县</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow k-icon-down css-16qej3\"></i></span></span></div><!--portal-->
    You selected: [\"hunan\",\"yueyang\",\"yueyangxian\"]<br><br><div class=\"k-select k-cascader css-1ti24q0\" tabindex=\"0\"><div class=\"k-select-main\"><input type=\"hidden\"><div class=\"k-select-placeholder c-ellipsis\">请选择</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-rotate ion-load-c css-16qej3\"></i></span></span></div><!--portal-->"
```

```
"<div class=\"k-dropdown-item k-cascader-option css-vj004t\">北京<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal--><div class=\"k-dropdown-item k-cascader-option k-active k-selected k-dropdown-open css-vj004t\">湖南<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal-->"
```

```
"<div class=\"k-dropdown-item k-cascader-option css-vj004t\">长沙市<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal--><div class=\"k-dropdown-item k-cascader-option k-active k-selected k-dropdown-open css-vj004t\">岳阳市<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal-->"
```

```
"<div class=\"k-dropdown-item k-cascader-option css-vj004t\">岳阳楼区</div><div class=\"k-dropdown-item k-cascader-option k-active k-selected css-vj004t\">岳阳县</div>"
```

#### `custom label`

```
"<div class=\"k-select-main\"><input type=\"hidden\" value=\"beijing,haidian\"><div class=\"k-select-placeholder c-ellipsis k-fade-leave-from k-fade-leave-active\">请选择</div><div class=\"k-select-value c-ellipsis k-fade-enter-from k-fade-enter-active\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px; vertical-align: middle;\"></i>海淀区</div></div></div><span class=\"k-select-suffix\"><i class=\"k-icon k-hoverable k-select-clear ion-ios-close k-show css-16qej3\"></i><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow k-icon-down css-16qej3\"></i></span></span>"
```

```
"<div class=\"k-select-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><div class=\"k-select-placeholder c-ellipsis k-fade-leave-from k-fade-leave-active\">请选择</div><div class=\"k-select-value c-ellipsis k-fade-enter-from k-fade-enter-active\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px; vertical-align: middle;\"></i>岳阳县</div></div></div><span class=\"k-select-suffix\"><i class=\"k-icon k-hoverable k-select-clear ion-ios-close k-show css-16qej3\"></i><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow k-icon-down css-16qej3\"></i></span></span>"
```

#### `load data asychronously`

```
"<i class=\"k-icon k-rotate ion-load-c k-cascader-loading css-16qej3\"></i>"
```

```
"<div class=\"k-dropdown-item k-cascader-option css-vj004t\">长沙市<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal--><div class=\"k-dropdown-item k-cascader-option css-vj004t\">岳阳市<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal-->"
```

```
"<div class=\"k-cascader-empty\">无数据</div>"
```

#### `filter`

```
"<div class=\"k-dropdown-item k-disabled css-vj004t\">湖南 / <em>长沙</em>市 / 岳麓区</div>"
```

```
"<div class=\"k-cascader-empty\">无匹配数据</div>"
```

```
"<div class=\"k-dropdown-item k-hover css-vj004t\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>楼区</div><div class=\"k-dropdown-item css-vj004t\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>县</div>"
```

```
"<div class=\"k-dropdown-item k-hover css-vj004t\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>楼区</div><div class=\"k-dropdown-item css-vj004t\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>县</div>"
```

#### `no data for init data`

```
"<div class=\"k-cascader-empty\">无数据</div>"
```

#### `specify fields`

```
"<div class=\"k-dropdown-item k-cascader-option k-active k-dropdown-open css-vj004t\">北京<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal--><div class=\"k-dropdown-item k-cascader-option css-vj004t\">湖南<i class=\"k-icon k-cascader-arrow k-icon-right css-16qej3\"></i></div><!--portal-->"
```

```
"<div class=\"k-select-main\"><input type=\"hidden\" value=\"beijing,haidian\"><div class=\"k-select-placeholder c-ellipsis k-fade-leave-from k-fade-leave-active\">请选择</div><div class=\"k-select-value c-ellipsis k-fade-enter-from k-fade-enter-active\">北京 / 海淀区</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow k-icon-down css-16qej3\"></i></span></span>"
```

