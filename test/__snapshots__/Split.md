# `Split`

#### `should fix leftSize and rightSize`

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 10px;\"></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"></div></div>"
```

#### `should drag to resize horizontal panel`

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 80px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 100px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 794px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

#### `should drag to resize vertical panel for lastSize`

```
"<div class=\"k-split k-vertical k-first-auto k-resizing\"><div class=\"k-first\" style=\"height: auto;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: 274px;\"><div class=\"panel\">bottom</div></div></div>"
```

```
"<div class=\"k-split k-vertical k-first-auto k-resizing\"><div class=\"k-first\" style=\"height: auto;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: 1074px;\"><div class=\"panel\">bottom</div></div></div>"
```

```
"<div class=\"k-split k-vertical k-first-auto k-resizing\"><div class=\"k-first\" style=\"height: auto;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: 0px;\"><div class=\"panel\">bottom</div></div></div>"
```

#### `should drag to resize vertical panel for firstSize`

```
"<div class=\"k-split k-vertical k-last-auto k-resizing\"><div class=\"k-first\" style=\"height: 800px;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: auto;\"><div class=\"panel\">bottom</div></div></div>"
```

```
"<div class=\"k-split k-vertical k-last-auto k-resizing\"><div class=\"k-first\" style=\"height: 1074px;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: auto;\"><div class=\"panel\">bottom</div></div></div>"
```

```
"<div class=\"k-split k-vertical k-last-auto k-resizing\"><div class=\"k-first\" style=\"height: 0px;\"><div class=\"panel\">top</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"height: auto;\"><div class=\"panel\">bottom</div></div></div>"
```

#### `should not drag out of the min/max range`

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 410px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 40px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

#### `should drag to resize panel`

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 100px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 794px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto k-resizing\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

```
"<div class=\"k-split k-horizontal k-last-auto\"><div class=\"k-first\" style=\"width: 0px;\"><div class=\"panel\">left</div></div><div class=\"k-line-wrapper\"><div class=\"k-line\"><div class=\"k-drag-lines\"></div></div></div><div class=\"k-last\" style=\"width: auto;\"><div class=\"panel\">right</div></div></div>"
```

