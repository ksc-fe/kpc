# `Dropdown`

#### `demos test`

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div>"
```

```
"<div class=\"k-item k-no-padding\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"1\"></span><span class=\"k-text\">item 1</span></label></div><div class=\"k-item k-no-padding\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"2\"></span><span class=\"k-text\">item 2</span></label></div><div class=\"k-item k-no-padding\"><label class=\"k-checkbox\" tabindex=\"0\"><span class=\"k-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"3\"></span><span class=\"k-text\">item 3</span></label></div>"
```

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div><div class=\"k-item\"><span>hover</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 3</div>"
```

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div>"
```

```
"<div class=\"k-item\">item 1</div><!--placeholder--><div class=\"k-item\">item 2</div><div class=\"k-item k-disabled\">item 3</div><!--placeholder--><div><div class=\"k-item\">item 4</div><!--placeholder--></div><!--placeholder-->"
```

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div>"
```

#### `should save original events`

```
"<div class=\"k-item\">test</div>"
```

#### `should move to dropdown menu`

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div>"
```

#### `nested dropdown`

```
"<div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 1</div>"
```

```
"<div class=\"k-item\"><span>hover</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 1</div>"
```

#### `operate by keyboard`

```
"<div class=\"k-item k-hover\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div><div class=\"k-item\"><span>hover</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 3</div>"
```

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div><div class=\"k-item\"><span>hover</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-hover\">item 3</div>"
```

```
"<div class=\"k-item k-hover\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 1</div>"
```

```
"<div class=\"k-item k-hover\">item 1</div><div class=\"k-item\">item 2</div>"
```

```
"<div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item k-hover\">item 1</div>"
```

#### `click mouse and move outside should not hide menu`

```
"<div class=\"k-item\">item 1</div><div class=\"k-item\">item 2</div><div class=\"k-item\">item 3</div><div class=\"k-item\"><span>hover</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 3</div>"
```

```
"<div class=\"k-item\"><span>click</span><i class=\"ion-ios-arrow-right\"></i></div><!--placeholder--><div class=\"k-item\">item 1</div>"
```

#### `should wrap dropdown when wrapDropdown is true`

```
"<div><div class=\"k-dropdown\"><div class=\"\">test</div><!-- react-mount-point-unstable --><!--placeholder--></div></div>"
```

