# `Popover`

#### `should handle popover correctly`

```
"<div class=\"k-popover-title\">确定删除？</div><div class=\"k-tooltip-footer\"><button class=\"k-btn k-small k-default css-h31bz\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-small k-primary css-h31bz\" tabindex=\"0\" type=\"button\">确定</button></div><i class=\"k-tooltip-arrow k-top\" style=\"left: 24.0078125px\"></i>"
```

#### `should handle title/content slot correctly`

```
<div
  class="k-popover-title"
>
  是否确认
  <span
    style="color: red;"
  >
    删除
  </span>
  ？
</div>
```

```
<div
  class="k-popover-content"
>
  <span
    style="color: red;"
  >
    删除
  </span>
  是一个危险操作，请谨慎操作
        
</div>
```

#### `should handle footer slot correctly`

```
"<div class=\"k-tooltip-footer\"><button class=\"k-btn k-small k-default css-h31bz\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-small k-default css-h31bz\" tabindex=\"0\" type=\"button\">永久删除</button><button class=\"k-btn k-small k-primary css-h31bz\" tabindex=\"0\" type=\"button\">移到回收站</button></div>"
```

#### `should handle buttons slot correctly`

```
"<div class=\"k-tooltip-buttons\"><button class=\"k-btn k-small css-55gqps\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-small css-55gqps\" tabindex=\"0\" type=\"button\">永久删除</button><button class=\"k-btn k-primary k-small css-55gqps\" tabindex=\"0\" type=\"button\">移到回收站</button></div>"
```

#### `should handle confirm tooltip corectly`

```
"<div class=\"k-tooltip-buttons\"><button class=\"k-btn k-small css-55gqps\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-primary k-small css-55gqps\" tabindex=\"0\" type=\"button\">确定</button></div>"
```

