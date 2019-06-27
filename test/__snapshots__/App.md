# `App`

#### `should load page`

```
"<div><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div><div class=\"k-app\"><div>page a</div><div class=\"k-spin k-large k-center\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div></div></div>"
```

```
"<div><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div><div class=\"k-app\"><div>page b title: Detail</div><div class=\"k-spin k-large k-center\"><div class=\"k-canvas\"><svg viewBox=\"0 0 120 120\"><circle class=\"k-circle\" cx=\"60\" cy=\"60\" r=\"57\"></circle></svg></div></div></div></div></div>"
```

```
"<div><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div><div class=\"k-app\"><div>page b title: Detail</div></div></div></div>"
```

#### `should handle ssr correctly`

```
"<div><button class=\"k-btn k-default k-disabled\" style=\"margin-right: 10px;\" tabindex=\"-1\" type=\"button\"><span>Render in server</span></button><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div></div></div>"
```

```
"<div><button class=\"k-btn k-default k-disabled\" style=\"margin-right: 10px;\" tabindex=\"-1\" type=\"button\"><span>Render in server</span></button><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div></div></div>"
```

```
"<div><button class=\"k-btn k-default k-disabled\" style=\"margin-right: 10px;\" tabindex=\"-1\" type=\"button\"><span>Render in server</span></button><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div></div></div>"
```

```
"<div><button class=\"k-btn k-default k-disabled\" style=\"margin-right: 10px;\" tabindex=\"-1\" type=\"button\"><span>Render in server</span></button><div class=\"k-btns\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageA</span></button><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>PageB</span></button></div><div><div class=\"k-app\"><div>page b title: Detail</div></div></div></div>"
```

