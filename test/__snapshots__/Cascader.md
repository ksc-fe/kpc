# `Cascader`

#### `basic test`

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-dropdown-open\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-select k-cascader k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><span class=\"k-value c-ellipsis\">湖南 / 岳阳市 / 岳阳县</span></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder--></div>
    You selected: [\"hunan\",\"yueyang\",\"yueyangxian\"]<br><br><div class=\"k-select k-cascader k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-icon ion-load-c icon-loading\"></i></span></span></div><!--placeholder--></div>"
```

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-active k-dropdown-open\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-item\">长沙市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-active k-dropdown-open\">岳阳市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-item\">岳阳楼区</div><div class=\"k-item k-active\">岳阳县</div>"
```

#### `custom label`

```
"<div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"beijing,haidian\"><span class=\"k-value c-ellipsis\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px; vertical-align: middle;\"></i>海淀区</div></span></div><span class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close k-show\"></i><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder-->"
```

```
"<div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><span class=\"k-value c-ellipsis\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px; vertical-align: middle;\"></i>岳阳县</div></span></div><span class=\"k-suffix\"><i class=\"k-icon k-clear ion-ios-close k-show\"></i><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder-->"
```

#### `change on select`

```
<div>
  <div
    class="k-select k-cascader k-show k-with-suffix k-has-value"
    tabindex="0"
  >
    <div
      class="k-wrapper k-dropdown-open"
      tabindex="-1"
    >
      <div
        class="k-main"
      >
        <input
          type="hidden"
          value="hunan"
        />
        <span
          class="k-value c-ellipsis"
        >
          湖南
        </span>
      </div>
      <span
        class="k-suffix"
      >
        <span
          class="k-suffix-icon"
        >
          <i
            class="k-arrow ion-arrow-down-b"
          />
        </span>
      </span>
    </div>
    <!-- placeholder -->
  </div>
  You selected: 
  ["hunan"]
</div>
```

#### `load data asychronously`

```
"<i class=\"ion-load-c icon-loading\"></i>"
```

```
"<div class=\"k-item\">长沙市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">岳阳市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

#### `filter`

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-item k-disabled\">湖南 / <em>长沙</em>市 / 岳麓区</div>"
```

```
"<div class=\"k-no-data\">无匹配数据</div>"
```

```
"<div class=\"k-item k-hover\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>楼区</div><div class=\"k-item\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>县</div>"
```

```
"<div class=\"k-select k-cascader k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyanglou\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder--></div>"
```

#### `no data for init data`

```
"<div class=\"k-no-data\">无数据</div>"
```

