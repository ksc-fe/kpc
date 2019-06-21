# `Affix`

#### `basic test`

```
"<div class=\"k-affix k-fixed\" style=\"height: 36px;\"><div style=\"position: fixed; width: 800px; top: 87px;\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at 87px from the top</span></button></div></div><div class=\"k-affix\"><div><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at the bottom</span></button></div></div>"
```

```
"<div class=\"k-affix\"><div><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at 87px from the top</span></button></div></div><div class=\"k-affix\"><div><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at the bottom</span></button></div></div>"
```

```
"<div class=\"k-affix\"><div><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at 87px from the top</span></button></div></div><div class=\"k-affix k-fixed\" style=\"height: 36px;\"><div style=\"position: fixed; width: 800px; bottom: 900px;\"><button class=\"k-btn k-default\" tabindex=\"0\" type=\"button\"><span>fix at the bottom</span></button></div></div>"
```

#### `custom fix rule`

```
"<div class=\"k-affix k-fixed\" style=\"height: 36px;\"><div style=\"position: fixed; width: 800px; top: 150px;\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at 150px from the top while scroll top 100px</span></button></div></div><div class=\"k-affix\"><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at the bottom only while this demo is in viewport</span></button></div></div>"
```

```
"<div class=\"k-affix\"><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at 150px from the top while scroll top 100px</span></button></div></div><div class=\"k-affix\"><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at the bottom only while this demo is in viewport</span></button></div></div>"
```

```
"<div class=\"k-affix k-fixed\" style=\"height: 36px;\"><div style=\"position: fixed; width: 800px; top: 150px;\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at 150px from the top while scroll top 100px</span></button></div></div><div class=\"k-affix k-fixed\" style=\"height: 36px;\"><div style=\"position: fixed; width: 800px; bottom: 500px;\"><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at the bottom only while this demo is in viewport</span></button></div></div>"
```

```
"<div class=\"k-affix\"><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at 150px from the top while scroll top 100px</span></button></div></div><div class=\"k-affix\"><div><button class=\"k-btn k-primary\" tabindex=\"0\" type=\"button\"><span>fix at the bottom only while this demo is in viewport</span></button></div></div>"
```

