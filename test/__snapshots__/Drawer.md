# `Drawer`

#### `should show drawer correctly`

```
"<div><button class=\"k-btn k-primary css-1do08rc\" tabindex=\"0\" type=\"button\">Show Drawer</button><!--portal--></div>"
```

```
"<div class=\"k-dialog-overlay k-fade-enter-from k-fade-enter-active\" style=\"\"></div><div class=\"k-dialog k-drawer k-right css-sceflz css-1f4goo5 transition-enter-from transition-enter-active\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-1do08rc\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty css-1ai1ziz\"></i></button></div><div class=\"k-dialog-body\"><div class=\"k-select css-sdvm74\" tabindex=\"0\"><div class=\"k-select-main\"><input type=\"hidden\"><div class=\"k-select-placeholder c-ellipsis\">请选择</div></div><span class=\"k-select-suffix\"><span class=\"k-select-suffix-icon\"><i class=\"k-icon k-select-arrow ion-ios-arrow-down css-1ai1ziz\"></i></span></span></div><!--portal-->
        Drawer Body 
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-primary k-dialog-ok css-1do08rc\" tabindex=\"0\" type=\"button\">确定</button><button class=\"k-btn k-secondary k-dialog-cancel css-1do08rc\" tabindex=\"0\" type=\"button\">取消</button></div></div><div class=\"k-dropdown-menu k-select-menu css-1xjnys5 css-s5aq4a\" style=\"display: none;\"><div class=\"k-dropdown-item k-select-option css-1kqiciw\">Option 1</div><div class=\"k-dropdown-item k-select-option css-1kqiciw\">Option 2</div></div></div>"
```

#### `should show no overlay`

```
"<div class=\"k-dialog k-drawer k-right css-1jlvbhz css-1f4goo5\" style=\"\"><div class=\"k-drawer-content\"><div class=\"k-dialog-header\"><span class=\"k-dialog-title\">Drawer Title</span><button class=\"k-btn k-none k-btn-icon k-dialog-close css-1do08rc\" title=\"关闭\" tabindex=\"0\" type=\"button\"><i class=\"k-icon ion-ios-close-empty css-1ai1ziz\"></i></button></div><div class=\"k-dialog-body\">
        Drawer Without Overlay
    </div><div class=\"k-dialog-footer\"><button class=\"k-btn k-primary k-dialog-ok css-1do08rc\" tabindex=\"0\" type=\"button\">确定</button><button class=\"k-btn k-secondary k-dialog-cancel css-1do08rc\" tabindex=\"0\" type=\"button\">取消</button></div></div></div>"
```

