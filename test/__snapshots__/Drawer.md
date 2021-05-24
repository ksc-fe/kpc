# `Drawer`

#### `should show drawer correctly`

```
"<div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>Show Drawer</span></button><!--placeholder--></div>"
```

```
"<div class=\"k-drawer-content\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-select k-with-suffix\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><div class=\"k-main\"><input type=\"hidden\"><span class=\"k-placeholder c-ellipsis\">请选择</span></div><span class=\"k-suffix\"><span class=\"k-suffix-icon\"><i class=\"k-icon k-arrow ion-arrow-down-b\"></i></span></span></div><!--placeholder--></div>

        Drawer Body 
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div><div class=\"k-dropdown-menu k-select-dropdown\" style=\"display: none;\"><div class=\"k-item\">Option 1</div><div class=\"k-item\">Option 2</div></div>"
```

#### `should show no overlay`

```
"<div class=\"k-drawer-content\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\">
        Drawer Without Overlay
    </div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div>"
```

#### `"after each" hook`

```
"<div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div>"
```

#### `should show drawer from different placement correctly`

```
"<div class=\"k-overlay\" style=\"display: none;\"></div><div class=\"k-wrapper\" style=\"display: none;\"><div class=\"k-dialog\" style=\"display: none;\"><div class=\"k-header k-dialog-header\"><span class=\"k-title\">Dialog Title</span><button class=\"k-btn k-none k-btn-icon k-close\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty\"></i></button></div><div class=\"k-body k-dialog-body\"><div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div></div><div class=\"k-footer c-clearfix k-dialog-footer\"><button class=\"k-btn k-default k-cancel\" tabindex=\"0\" type=\"button\"><span>取消</span></button><button class=\"k-btn k-primary k-ok\" tabindex=\"0\" type=\"button\"><span>确定</span></button></div></div></div>"
```

