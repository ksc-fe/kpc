# `Drawer`

#### `should show drawer correctly`

```
"<div><button class=\"k-btn k-primary css-1832za1\" tabindex=\"0\" type=\"button\">Show Drawer</button><!--portal--></div>"
```

```
"<div class=\"k-dialog-overlay k-fade-enter-from k-fade-enter-active\" style=\"\"><div class=\"k-dialog k-drawer k-right css-m1r46w css-1pz65ef transition-enter-from transition-enter-active\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-1832za1\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-icon-close css-1s6te75\"></i></button></div><div class=\"k-dialog-body\"><div class=\"k-select css-1ti24q0\" tabindex=\"0\"><div class=\"k-select-main\"><input type=\"hidden\"><div class=\"k-select-placeholder c-ellipsis\">请选择</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow k-icon-down css-1s6te75\"></i></span></span></div><!--portal-->
        Drawer Body 
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-dialog-cancel css-1832za1\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-primary k-dialog-ok css-1832za1\" tabindex=\"0\" type=\"button\">确定</button></div></div><div class=\"k-dropdown-menu k-select-menu css-31kaao css-7sngro\" style=\"display: none;\"><div class=\"k-dropdown-item k-select-option css-vj004t\">Option 1</div><div class=\"k-dropdown-item k-select-option css-vj004t\">Option 2</div></div></div></div>"
```

#### `should show no overlay`

```
"<div class=\"k-dialog k-drawer k-right css-lcrlh css-1pz65ef\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-1832za1\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon k-icon-close css-1s6te75\"></i></button></div><div class=\"k-dialog-body\">
        Drawer Without Overlay
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-dialog-cancel css-1832za1\" tabindex=\"0\" type=\"button\">取消</button><button class=\"k-btn k-primary k-dialog-ok css-1832za1\" tabindex=\"0\" type=\"button\">确定</button></div></div></div>"
```

