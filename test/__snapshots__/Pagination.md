# `Pagination`

#### `basic test`

```
"<div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

```
"<div class=\"k-pages\"><div class=\"k-prev\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page\">1</div><div class=\"k-page\">2</div><div class=\"k-page k-active\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

```
"<div class=\"k-pages\"><div class=\"k-prev\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page\">1</div><div class=\"k-page k-active\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

```
"<div class=\"k-pages\"><div class=\"k-prev\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page\">1</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">5</div><div class=\"k-page k-active\">6</div><div class=\"k-page\">7</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

```
"<div class=\"k-pages\"><div class=\"k-prev\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page\">1</div><div class=\"k-page k-active\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

```
"<div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">10</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"20\"><span class=\"k-value c-ellipsis\">20 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-total\">共 200 条</div>"
```

#### `goto test`

```
"<div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page\">1</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">16</div><div class=\"k-page\">17</div><div class=\"k-page\">18</div><div class=\"k-page\">19</div><div class=\"k-page k-active\">20</div><div class=\"k-next k-disabled\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">
        跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页
    </div><div class=\"k-total\">共 200 条</div></div>"
```

```
"<div class=\"k-pagination\"><div class=\"k-pages\"><div class=\"k-prev k-disabled\"><i class=\"ion-ios-arrow-left\"></i></div><div class=\"k-page k-active\">1</div><div class=\"k-page\">2</div><div class=\"k-page\">3</div><div class=\"k-page\">4</div><div class=\"k-page\">5</div><div class=\"k-ellipsis\">...</div><div class=\"k-page\">20</div><div class=\"k-next\"><i class=\"ion-ios-arrow-right\"></i></div></div><div class=\"k-limits\"><div class=\"k-select k-active\" tabindex=\"0\"><div class=\"k-wrapper\" tabindex=\"-1\"><input type=\"hidden\" value=\"10\"><span class=\"k-value c-ellipsis\">10 条 / 页</span><span class=\"k-suffix\"><i class=\"k-arrow ion-arrow-down-b\"></i></span></div><!--placeholder--></div></div><div class=\"k-goto\">
        跳至<div class=\"k-input\"><div class=\"k-wrapper\"><input class=\"k-inner\" type=\"text\"></div></div>页
    </div><div class=\"k-total\">共 200 条</div></div>"
```

