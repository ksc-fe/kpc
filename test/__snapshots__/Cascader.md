# `Cascader`

#### `basic test`

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-dropdown-open\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-select k-cascader k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><span class=\"k-value c-ellipsis\">湖南 / 岳阳市 / 岳阳县</span></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>
    You selected: [\"hunan\",\"yueyang\",\"yueyangxian\"]"
```

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-active k-dropdown-open\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-item\">北京<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-active\">湖南<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

```
"<div class=\"k-item\">长沙市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-active k-dropdown-open\">岳阳市<i class=\"k-arrow ion-ios-arrow-right\"></i></div><!--placeholder-->"
```

#### `custom label`

```
"<div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"beijing,haidian\"><span class=\"k-value c-ellipsis\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px;\"></i>海淀区</div></span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close k-show\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder-->"
```

```
"<div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyangxian\"><span class=\"k-value c-ellipsis\"><div><i class=\"ion-ios-location\" style=\"line-height: 1; margin-right: 8px;\"></i>岳阳县</div></span></div><span class=\"k-suffix\"><i class=\"k-clear ion-ios-close k-show\"></i><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder-->"
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
        <i
          class="k-arrow ion-arrow-down-b"
        />
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
"<div class=\"k-item k-hover\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>楼区</div><div class=\"k-item\">湖南 / <em>岳阳</em>市 / <em>岳阳</em>县</div>"
```

```
"<div class=\"k-select k-cascader k-with-suffix k-has-value\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\" value=\"hunan,yueyang,yueyanglou\"><div class=\"k-input k-fluid\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\" placeholder=\"请选择\"></div></div></div><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div>"
```

