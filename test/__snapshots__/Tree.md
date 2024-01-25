# `Tree`

#### `expand and shrink`

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div>"
```

#### `checkbox`

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"}]"
```

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div></div></div></div>"
```

```
"[{\"label\":\"First floor-2\",\"key\":\"floor-2\",\"children\":[{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Second floor-2.2\",\"disabled\":true,\"children\":[{\"label\":\"Third floor-2.2.1\"}]}]},{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-rfvdpj\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-rfvdpj\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-rfvdpj\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-rfvdpj\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

#### `async load`

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree k-expand-enter-from k-expand-enter-active\" style=\"height: 0px;\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-rotate k-tree-icon ion-load-c css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

#### `append and remove node`

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "label": "Third floor-1.1.1",
          },
        ],
        "label": "Second floor-1.1",
      },
    ],
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "floor-2.1.1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "label": "Third floor-2.1.2",
          },
        ],
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "label": "Third floor-2.2.1",
          },
        ],
        "disabled": true,
        "label": "Second floor-2.2",
      },
    ],
    "label": "First floor-2",
  },
  Object {
    "key": 0,
    "label": "Appended root node",
  },
]
```

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Third floor-1.1.1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-rfvdpj\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-mk35v2\"><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-default k-btn-icon css-12pzj9v\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": 2,
            "label": "Appended node",
          },
        ],
        "label": "Second floor-1.1",
      },
      Object {
        "key": 1,
        "label": "Appended node",
      },
    ],
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "floor-2.1.1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "label": "Third floor-2.1.2",
          },
        ],
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "label": "Third floor-2.2.1",
          },
        ],
        "disabled": true,
        "label": "Second floor-2.2",
      },
    ],
    "label": "First floor-2",
  },
  Object {
    "key": 0,
    "label": "Appended root node",
  },
]
```

#### `filterable`

```
"<div><div class=\"k-input css-l0vdz7\"><div class=\"k-input-wrapper\"><input class=\"k-input-inner\" placeholder=\"Please enter keywords to filter node.\" value=\"First\"></div></div><div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"></div></div></div></div>"
```

```
"<div><div class=\"k-input css-l0vdz7\"><div class=\"k-input-wrapper\"><input class=\"k-input-inner\" placeholder=\"Please enter keywords to filter node.\" value=\"2.1.1\"></div></div><div class=\"k-tree k-line k-selectable css-3c9wnf\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" style=\"\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div></div></div></div></div></div></div>"
```

```
"<div><div class=\"k-input css-1j9tfcu\"><div class=\"k-input-wrapper\"><input class=\"k-input-inner\" placeholder=\"Please enter keywords to filter node.\" value=\"2.1.1\"></div></div><div class=\"k-tree k-line k-selectable css-192otbj\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-x0ey6t\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" style=\"\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-x0ey6t\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div></div></div></div></div></div></div>"
>>>>>>> v2
```

#### `select`

```
"<div><button class=\"k-btn k-default css-12pzj9v\" tabindex=\"0\" type=\"button\">get selected data</button><br><br><div class=\"k-tree k-line css-3c9wnf\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

#### `draggable`

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
Array [
  Object {
    "key": "summarization",
    "label": "总览",
    "type": "file",
  },
  Object {
    "key": "implemention",
    "label": "技术实现",
    "type": "file",
  },
  Object {
    "key": "introduction",
    "label": "产品简介",
    "type": "file",
  },
  Object {
    "children": Array [
      Object {
        "key": "installation",
        "label": "产品安装",
        "type": "file",
      },
    ],
    "key": "guide",
    "label": "操作指南",
    "type": "dir",
  },
  Object {
    "children": Array [
      Object {
        "key": "usage",
        "label": "使用",
        "type": "file",
      },
    ],
    "key": "interaction",
    "label": "接入说明",
    "type": "dir",
  },
  Object {
    "disabled": true,
    "key": "disabled",
    "label": "禁用文件",
    "type": "file",
  },
]
```

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
Array [
  Object {
    "key": "summarization",
    "label": "总览",
    "type": "file",
  },
  Object {
    "key": "introduction",
    "label": "产品简介",
    "type": "file",
  },
  Object {
    "key": "implemention",
    "label": "技术实现",
    "type": "file",
  },
  Object {
    "children": Array [
      Object {
        "key": "installation",
        "label": "产品安装",
        "type": "file",
      },
    ],
    "key": "guide",
    "label": "操作指南",
    "type": "dir",
  },
  Object {
    "children": Array [
      Object {
        "key": "usage",
        "label": "使用",
        "type": "file",
      },
    ],
    "key": "interaction",
    "label": "接入说明",
    "type": "dir",
  },
  Object {
    "disabled": true,
    "key": "disabled",
    "label": "禁用文件",
    "type": "file",
  },
]
```

```
"<div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>总览</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>技术实现</div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>操作指南</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品安装</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>产品简介</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-hoverable k-tree-icon ion-android-arrow-dropdown css-16qej3\"></i><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-folder css-16qej3\"></i>接入说明</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\"><i class=\"k-icon k-icon-paper css-16qej3\"></i>禁用文件</div></div></div>"
```

```
Array [
  Object {
    "key": "summarization",
    "label": "总览",
    "type": "file",
  },
  Object {
    "key": "implemention",
    "label": "技术实现",
    "type": "file",
  },
  Object {
    "children": Array [
      Object {
        "key": "installation",
        "label": "产品安装",
        "type": "file",
      },
      Object {
        "key": "introduction",
        "label": "产品简介",
        "type": "file",
      },
    ],
    "key": "guide",
    "label": "操作指南",
    "type": "dir",
  },
  Object {
    "children": Array [
      Object {
        "key": "usage",
        "label": "使用",
        "type": "file",
      },
    ],
    "key": "interaction",
    "label": "接入说明",
    "type": "dir",
  },
  Object {
    "disabled": true,
    "key": "disabled",
    "label": "禁用文件",
    "type": "file",
  },
]
```

