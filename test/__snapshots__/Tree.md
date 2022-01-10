# `Tree`

#### `expand and shrink`

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div>"
```

#### `checkbox`

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"}]"
```

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div></div></div></div>"
```

```
"[{\"label\":\"First floor-2\",\"children\":[{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Second floor-2.2\",\"disabled\":true,\"children\":[{\"label\":\"Third floor-2.2.1\"}]}]},{\"label\":\"Second floor-2.1\",\"children\":[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]},{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-132z6n9\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"[{\"label\":\"Third floor-2.1.1\",\"key\":\"floor-2.1.1\"},{\"label\":\"Third floor-2.1.2\"}]"
```

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-132z6n9\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-132z6n9\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked data</button><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get checked leaves data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-disabled k-tree-checkbox css-132z6n9\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" disabled=\"\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

#### `async load`

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree k-expand-enter-from k-expand-enter-active\" style=\"height: 0px;\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-rotate k-tree-icon ion-load-c css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

```
"<div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">parent</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">first child</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child1</div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">child2</div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\">last child</div></div></div></div></div></div>"
```

#### `append and remove node`

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
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
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Third floor-1.1.1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
```

```
"<div class=\"wrapper\"><div class=\"k-btns root-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button></div><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-indeterminate k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Second floor-1.1</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-checked k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">First floor-2</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div><div class=\"k-tree-node\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><label class=\"k-checkbox k-tree-checkbox css-132z6n9\" tabindex=\"0\"><span class=\"k-checkbox-wrapper\"><input type=\"checkbox\" tabindex=\"-1\" value=\"true\"></span></label><div class=\"k-tree-text c-ellipsis\"><div class=\"text\">Appended root node</div><div class=\"k-btns css-16i9d0z\"><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">+</button><button class=\"k-btn k-small k-btn-icon css-1do08rc\" tabindex=\"0\" type=\"button\">-</button></div></div></div></div></div></div>"
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
"<div><div class=\"k-input css-1qqnubh\"><div class=\"k-input-wrapper\"><input class=\"k-input-inner\" placeholder=\"Please enter keywords to filter node.\" type=\"text\" value=\"First\"></div></div><div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"></div></div></div></div>"
```

```
"<div><div class=\"k-input css-1qqnubh\"><div class=\"k-input-wrapper\"><input class=\"k-input-inner\" placeholder=\"Please enter keywords to filter node.\" type=\"text\" value=\"2.1.1\"></div></div><div class=\"k-tree k-line k-selectable css-hl0zi2\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div></div></div></div></div></div></div>"
```

#### `select`

```
"<div><button class=\"k-btn css-1do08rc\" tabindex=\"0\" type=\"button\">get selected data</button><br><br><div class=\"k-tree k-line css-hl0zi2\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div></div><div class=\"k-tree-node k-expanded\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div></div><div class=\"k-tree-node k-disabled\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div></div></div></div></div>"
```

#### `draggable`

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "2-1-2",
            "label": "Third floor-2.1.2",
          },
          Object {
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div></div><div class=\"k-tree-node\" draggable=\"true\" style=\"\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
          Object {
            "key": "2-1-2",
            "label": "Third floor-2.1.2",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

```
"<div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-1.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">This node can not be dragged and dropped.</div></div></div></div></div></div></div><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">First floor-2</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.1</div></div><div class=\"k-tree\"><div class=\"k-tree-node k-expanded\" draggable=\"true\" style=\"\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.1</div></div><div class=\"k-tree\" style=\"\"><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Third floor-2.1.2</div></div></div></div></div></div></div><div class=\"k-tree-node\" draggable=\"true\"><div class=\"k-tree-label\"><i class=\"k-icon k-tree-icon ion-android-arrow-dropdown css-1ai1ziz\"></i><div class=\"k-tree-text c-ellipsis\">Second floor-2.2</div></div></div><div class=\"k-tree-node k-disabled\" draggable=\"true\"><div class=\"k-tree-label k-tree-leaf\"><div class=\"k-tree-text c-ellipsis\">Second floor-2.3</div></div></div></div></div>"
```

```
Array [
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "key": "1-1-1",
            "label": "This node can not be dragged and dropped.",
          },
        ],
        "key": "1-1",
        "label": "Second floor-1.1",
      },
    ],
    "key": "1",
    "label": "First floor-1",
  },
  Object {
    "children": Array [
      Object {
        "children": Array [
          Object {
            "children": Array [
              Object {
                "key": "2-1-2",
                "label": "Third floor-2.1.2",
              },
            ],
            "key": "2-1-1",
            "label": "Third floor-2.1.1",
          },
        ],
        "key": "2-1",
        "label": "Second floor-2.1",
      },
      Object {
        "children": Array [
          Object {
            "key": "2-2-1",
            "label": "Third floor-2.2.1",
          },
        ],
        "key": "2-2",
        "label": "Second floor-2.2",
      },
      Object {
        "disabled": true,
        "key": "2-3",
        "label": "Second floor-2.3",
      },
    ],
    "key": "2",
    "label": "First floor-2",
  },
]
```

