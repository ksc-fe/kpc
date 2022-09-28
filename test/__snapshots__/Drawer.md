# `Drawer`

#### `should show drawer correctly`

```
"<div><button class=\"k-btn k-primary css-12uxt25\" tabindex=\"0\" type=\"button\">Show Drawer</button><!--portal--></div>"
```

```
"<div class=\"k-dialog-overlay k-fade-enter-from k-fade-enter-active\" style=\"\"></div><div class=\"k-dialog k-drawer k-right css-u7tprk css-1dwyv26 transition-enter-from transition-enter-active\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-12uxt25\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty css-x0ey6t\"></i></button></div><div class=\"k-dialog-body\"><div class=\"k-select css-3lwwnv\" tabindex=\"0\"><div class=\"k-select-main\"><input type=\"hidden\"><div class=\"k-select-placeholder c-ellipsis\">请选择</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow ion-ios-arrow-down css-x0ey6t\"></i></span></span></div><!--portal-->
        Drawer Body 
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-primary k-dialog-ok css-12uxt25\" tabindex=\"0\" type=\"button\">确定</button><button class=\"k-btn k-secondary k-dialog-cancel css-12uxt25\" tabindex=\"0\" type=\"button\">取消</button></div></div><div class=\"k-dropdown-menu k-select-menu css-i3ziwm css-1iaopr2\" style=\"display: none;\"><div class=\"k-dropdown-item k-select-option css-1s8b3lx\">Option 1</div><div class=\"k-dropdown-item k-select-option css-1s8b3lx\">Option 2</div></div></div>"
```

#### `should show no overlay`

```
"<div class=\"k-dialog k-drawer k-right css-8j817g css-1dwyv26\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-12uxt25\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty css-x0ey6t\"></i></button></div><div class=\"k-dialog-body\">
        Drawer Without Overlay
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-primary k-dialog-ok css-12uxt25\" tabindex=\"0\" type=\"button\">确定</button><button class=\"k-btn k-secondary k-dialog-cancel css-12uxt25\" tabindex=\"0\" type=\"button\">取消</button></div></div></div>"
```

