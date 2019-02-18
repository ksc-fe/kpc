---
title: 更新日志
order: 99
sidebar: doc
---

## v0.8.3

### Core

1. `Add` 新增布局组件`Layout` [#210](https://github.com/ksc-fe/kpc/issues/210)
2. `Fix` 修复`ScrollSelect`当虚拟元素个数`count`为偶数时，选中项不能居中的问题 [#211](https://github.com/ksc-fe/kpc/issues/211)
3. `Fix` 修复`Spinner`当输入值合法`value`不能立即变更，而必须失去焦点才能变更的问题 [#213](https://github.com/ksc-fe/kpc/issues/213)

### Vue

1. `Fix` 修复`Tooltip`在`click`触发方式下，当触发元素为vue元素时，弹层会立即消失的问题 [#209](https://github.com/ksc-fe/kpc/issues/209)
2. `Fix` 修复`MenuItem`等支持`to`属性的组件，当`to`指向外部链接时不能正确跳转的问题 [#212](https://github.com/ksc-fe/kpc/issues/212) 


## v0.8.2

#### Core
1. `Add` 内置主题`ksyun`支持再次继承，不会再因为重新定义了`$theme-dir`而导致部分样式丢失 [#193](https://github.com/ksc-fe/kpc/issues/193)
1. `Change` `Dialog`弹出位置优化，以前为垂直居中弹出，现在弹出位置向上偏移 [#207](https://github.com/ksc-fe/kpc/issues/207)
2. `Fix` 修复`Spinner`当父元素设置了`line-height`后，布局错位的问题 [#206](https://github.com/ksc-fe/kpc/issues/206)
4. `Fix` 修复`Table`当固定了列时，`loading`状态不能遮住固定列的问题 [#208](https://github.com/ksc-fe/kpc/issues/208)

#### Vue
1. `Add` `BreadcrumbItem` `MenuItem`等组件的`to`属性支持`vue-router`的`router-link`写法 [#166](https://github.com/ksc-fe/kpc/issues/166)

#### React
1. `Add` `BreadcrumbItem` `MenuItem`等组件的`to`属性支持`react-router`的`Link`写法 [#166](https://github.com/ksc-fe/kpc/issues/166)

## v0.8.1

##### Core
1. `Add` `Spinner`支持`precision`属性，用于控制数值精度 [#195](https://github.com/ksc-fe/kpc/issues/195)
1. `Fix` 修复`Collapse`折叠一项，另一项会抖动的问题 [#180](https://github.com/ksc-fe/kpc/issues/180)
2. `Fix` 修复`Icon`在默认主题下`color`无效的问题
3. `Fix` 修复`Slider`不能展示间隔点的问题 [#189](https://github.com/ksc-fe/kpc/issues/189)
4. `Fix` 修复`Timepicker`在时间面板展开的情况下，点击清空按钮报错的问题 [#192](https://github.com/ksc-fe/kpc/issues/192)
6. `Fix` 修复`Pagination`在默认主题下，无边框模式高亮按钮文字消失的问题 [#199](https://github.com/ksc-fe/kpc/issues/199)
7. `Fix` 修复`Select`在默认主题下，`size`属性无效的问题 [#181](https://github.com/ksc-fe/kpc/issues/181)
8. `Fix` 修复`Datepicker`时间范围选择，年份会出现负数的问题 [#186](https://github.com/ksc-fe/kpc/issues/186)
9. `Fix` 修复`Table`在默认主题下，排序按钮消失的问题 [#191](https://github.com/ksc-fe/kpc/issues/191)
10. `Fix` 修复`Table`在MacOS下，固定列不能展示阴影的问题 [#201](https://github.com/ksc-fe/kpc/issues/201)
11. `Fix` 修复`Drawer`关闭后，`document`上绑定的`click`事件没有被解绑，可能引起报错的问题 [#203](https://github.com/ksc-fe/kpc/issues/203)
12. `Fix` 修复`Dialog`渲染的同时进行展示，弹窗不能居中和进行动画的问题 [#185](https://github.com/ksc-fe/kpc/issues/185)
13. `Fix` 修复`Dialog`中展示`Spin`，由于`k-overlay`样式冲突，导致蒙层不能被删除的问题 [#205](https://github.com/ksc-fe/kpc/issues/205)

##### Vue
1. `Fix` 修复`Table`，当一个`TableColumn`存在`title`扩展点，另一个`TableColumn`固定列时，头部渲染丢失的问题 [#202](https://github.com/ksc-fe/kpc/issues/202)
2. `Doc` 补充`Vue CLI`创建的项目使用KPC组件库的文档

##### React
1. `Fix` 修复`Table`使用自定义数据导出报错的问题 [#190](https://github.com/ksc-fe/kpc/issues/190)
2. `Fix` 修复`Grid`在响应式`gutter`属性下，渲染报错的问题 [#196](https://github.com/ksc-fe/kpc/issues/196)
3. `Fix` 修复`Tree` `rightclick:node`事件对应`React`下写法`onRightclick-node`不能被正确触发的问题 [#194](https://github.com/ksc-fe/kpc/issues/194)
4. `Fix` 修复`Switch` `on`属性被错误地当做事件处理的问题 [#188](https://github.com/ksc-fe/kpc/issues/188)
5. `Fix` 修复`Input`不能根据`append`扩展点传入的字符串节点进行判断，自动添加`padding`的问题 [#187](https://github.com/ksc-fe/kpc/issues/187)
6. `Fix` 修复`Dropdown`和`Tooltip`嵌套使用时，存在找不到定位元素的问题 [#184](https://github.com/ksc-fe/kpc/issues/184)
7. `Fix` 修复`Dropdown`自身嵌套使用渲染报错的问题 [#183](https://github.com/ksc-fe/kpc/issues/183)
8. `Fix` 修复通过`React.Fragment`传入文本节点无法渲染的问题 [#182](https://github.com/ksc-fe/kpc/issues/182)
9. `Doc` 完善React使用文档和单元测试


## v0.8.0

##### Core
1. `Add` `TableColumn`支持`className`属性，用于给当前列所有单元格添加`class`来控制列样式 [#164](https://github.com/ksc-fe/kpc/issues/164)
3. `Add` `Table`支持导出表格内容成`csv`格式并下载，而且支持自定义表格数据进行全量导出 [#171](https://github.com/ksc-fe/kpc/issues/171)
5. `Add` 新增`Icon`组件，统一字体图标使用方式 [#169](https://github.com/ksc-fe/kpc/issues/169)
6. `Add` `Upload`支持上传文件夹 [caniuse](https://caniuse.com/#feat=input-file-directory) [#168](https://github.com/ksc-fe/kpc/issues/168)
7. `Add` `Tree`支持选中节点功能，通过`selectedKeys`控制，默认选中会高亮 [#167](https://github.com/ksc-fe/kpc/issues/167)
9. `Add` `Pagination`支持简洁样式 [#177](https://github.com/ksc-fe/kpc/issues/177)
4. `Fix` 修复babel@7不支持commonjs和es6 module混用，导致组件库入口文件`index.js`调用全量安装方法报错的问题 [#172](https://github.com/ksc-fe/kpc/issues/172)
8. `Fix` 修复`Input`在自动宽度`autoWidth`情况下，去除`autoWidth`不能还原`Input`宽度的问题 [#178](https://github.com/ksc-fe/kpc/issues/178)
10. `Fix` 修复`Select`内联模式`inline`情况下，存在背景色的问题 [#179](https://github.com/ksc-fe/kpc/issues/179)
2. `Change` `Breadcrumb`废弃掉`separator`属性，改用`separator`扩展点代替，分隔符定制更灵活 [#165](https://github.com/ksc-fe/kpc/issues/165)
11. `Change` 将`peerDependencies`依赖改为直接依赖`dependencies`，方便版本更新管理 [#174](https://github.com/ksc-fe/kpc/issues/174)

##### React
1. `Fix` `Select`修复不能展示已选`Option`文案的问题 [#170](https://github.com/ksc-fe/kpc/issues/170)

##### Vue
1. `Fix` `FormItem`在某些情况下不能进行表单验证的问题


## v0.7.9

1. `Refactor` 升级babel@7进行构建，自动引入实例方法polyfill，提高兼容性 [#157](https://github.com/ksc-fe/kpc/issues/157)
2. `Add` 新增React开始文档
3. `Add` Tree在过滤时，默认展开匹配的节点 [#156](https://github.com/ksc-fe/kpc/issues/156)
4. `Fix` 修复Collapse默认主题下没有折叠展开动画的问题 [#153](https://github.com/ksc-fe/kpc/issues/153)
4. `Fix` 修复Collapse在没有内容导致高度为0时，动画不执行结束回调的问题 [#150](https://github.com/ksc-fe/kpc/issues/150) [#162](https://github.com/ksc-fe/kpc/issues/162)
6. `Fix` 修复IE下多处兼容性问题，目前支持IE10及以上 [#155](https://github.com/ksc-fe/kpc/issues/155)

## v0.7.6

1. `Add` `Collapse`使用`display: none`代替删除折叠起来的元素 [#149](https://github.com/ksc-fe/kpc/issues/149)
2. `Fix` `Datepicker` `disabledSeconds`无效的问题 [#148](https://github.com/ksc-fe/kpc/issues/148)

## v0.7.4

1. `Add` `FormItem`支持单独使用，不用一定要嵌入`Form`组件下，以便可以复用它的样式 [#145](https://github.com/ksc-fe/kpc/issues/145)
2. `Add` `Menu`渲染时自动展开已选择的菜单项 [#144](https://github.com/ksc-fe/kpc/issues/144)
3. `Add` `Select`支持无边框的内联样式 [#146](https://github.com/ksc-fe/kpc/issues/146)
4. `Add` `Tabs`标签页支持关闭功能
5. `Add` `Tabs`当标签页过多时自动展示翻页按钮 [#142](https://github.com/ksc-fe/kpc/issues/142)
6. `Add` `Tree`支持节点过滤功能 [#137](https://github.com/ksc-fe/kpc/issues/137)

## v0.7.1

1. `Add` `Dropdown`及所有包含弹出菜单元素的组件支持`container`属性，以便自定义弹出菜单插入的位置 [#138](https://github.com/ksc-fe/kpc/issues/138)
2. `Add` `Dialog`和`Drawer`弹层中的`Dropdown`，默认append到`k-dialog`元素下 [#138](https://github.com/ksc-fe/kpc/issues/138)
    > vue需要升级`intact-vue`到`v0.4.0`才能完美支持该功能，否则会出现部分情况下依然append到`body`的情况
3. `Add` `Menu`支持`dot`属性，以便往菜单项前面添加圆点 [#143](https://github.com/ksc-fe/kpc/issues/143)
4. `Add` `Menu`支持`block`扩展点，以便自定义菜单头部 [#143](https://github.com/ksc-fe/kpc/issues/143)
5. `Change` `Menu`菜单样式调整 [#135](https://github.com/ksc-fe/kpc/issues/135)
6. `Fix` 修复`Dropdown`右键菜单模式在Vue下报错的问题，该bug不会影响功能 [#141](https://github.com/ksc-fe/kpc/issues/141)
7. `Fix` 修复将`Event`作为属性类型检测，但是在NodeJs下不存在该构造函数导致的报错问题

## v0.7.0

> `@since v0.7.0`版本需要<code>intact@2.4.1</code><code>intact-vue@0.3.9</code>支持

1. `Add` `Table`支持`loading`状态 [#128](https://github.com/ksc-fe/kpc/issues/128)
2. `Add` `Spin`支持遮罩层动画`overlay` [#139](https://github.com/ksc-fe/kpc/issues/139)
3. `Add` `Form`新增`labelWidth`属性，用于定义所有`FormItem`的`label`宽度 [#127](https://github.com/ksc-fe/kpc/issues/127)
4. `Fix` 修复`Tree` `class`和`style`属性丢失的问题 [#136](https://github.com/ksc-fe/kpc/issues/136) 
5. `Fix` 修复`Dropdown`的`of`属性在Vue下传入事件对象会报属性类型不匹配的问题
6. `Fix` 修复`Timepicker`隐藏弹层会`focus`输入框导致页面滚动的问题 [#126](https://github.com/ksc-fe/kpc/issues/126)
7. `Fix` 修复`Drawer`在Vue下，点击触发按钮弹出弹层，弹层又会立即消失的问题 [#140](https://github.com/ksc-fe/kpc/issues/140)
8. `Fix` 修复`Drawer`默认主题动画不协调的问题 [#134](https://github.com/ksc-fe/kpc/issues/134)

## v0.6.1

1. `Fix` 修复`v0.6.0`引入的`@css`编译版字体文件丢失的问题
2. `Fix` 修复当`Dialog`的`footer`只存在一个`Button`时，样式展示问题 [#132](https://github.com/ksc-fe/kpc/issues/132)
3. `Fix` 修复`Tooltip`没有加载`Dropdown`样式的问题，这个问题当只使用`Tooltip`而不使用`Dropdown`组件时复现 [#133](https://github.com/ksc-fe/kpc/issues/133)

## v0.6.0

1. `Add` 新增`Drawer`抽屉组件 [#112](https://github.com/ksc-fe/kpc/issues/112)
5. `Change` 调整字体加载路径，兼容parcel [#131](https://github.com/ksc-fe/kpc/issues/131)

    webpack.config.js配置文件需要更改如下所示：
    ```js
    {
        test: /\.styl$/,
        loader: 'stylus-loader', 
        options: {
            'include css': true,
            'resolve url': true,
            sourceMap: false,
            // 'import': '~kpc/styles/themes/ksyun/index.styl',
        }
    }
    ```
4. `Change` 调整package.json `module`字段指向 [#130](https://github.com/ksc-fe/kpc/issues/130)
2. `Fix` 修复`Datepicker`disableSeconds等参数禁用无效 [#124](https://github.com/ksc-fe/kpc/issues/124)
3. `Fix` 修复`App`loading动画没有在最上层的问题 [#120](https://github.com/ksc-fe/kpc/issues/120)
6. `Fix` convert Number to String to validate length [#125](https://github.com/ksc-fe/kpc/issues/125)
7. `Fix` 修复`Datepicker`can not set width with style [#122](https://github.com/ksc-fe/kpc/issues/122)
8. `Fix` 修复`Timepicker`step状态下class和style不能自定义 [#121](https://github.com/ksc-fe/kpc/issues/121)


## v0.5.15

1. `Fix` `Button`样式声明中`success`类型变量丢失的问题
2. `Fix` `Transfer`当`data`数据变更时，不能更新全选状态的问题 [#109](https://github.com/ksc-fe/kpc/issues/109)
3. `Fix` `Cascader`当级联菜单碰撞反转，3级以下菜单存在错误的问题 [#111](https://github.com/ksc-fe/kpc/issues/111)
4. `Fix` `App`加载动画会被挡住的问题 [#120](https://github.com/ksc-fe/kpc/issues/120)
5. `Fix` `Timepicker`传入初始时间字符串会当做数组处理的问题
6. `Add` `Tree`新增左击(`click:node`)和右击(`rightclick:node`)节点事件 [#117](https://github.com/ksc-fe/kpc/issues/117)
7. `Add` `Dropdown`支持右键菜单 [#118](https://github.com/ksc-fe/kpc/issues/118)
8. `Add` `Transfer`优化`shift`多选逻辑
9. `Add` `package.json`中添加`sideEffects`字段，以便支持webpack `tree-shaking` 

## v0.5.14

1. `Fix` `Tree`删除节点没有更新选中状态 [#102](https://github.com/ksc-fe/kpc/issues/102)
2. `Fix` `Cascader`支持`data`属性一开始就传入`undefined`，以便数据完全动态加载 [#103](https://github.com/ksc-fe/kpc/issues/103)
3. `Fix` `Grid`响应式取值不能重置为`0` [#104](https://github.com/ksc-fe/kpc/issues/104)
4. `Fix` `Datepicker`范围选择成功后，再次取消已选值，重新选择会出现`null` [#105](https://github.com/ksc-fe/kpc/issues/105)
5. `Fix` `Editable`没有传入`value`，不能展示子元素的问题 [#106](https://github.com/ksc-fe/kpc/issues/106)
6. `Fix` `package.json` `browser`字段指向错误的问题

## v0.5.13

1. `Fix` 修复`Steps`在宽度不够的情况下，索引不展示；以及在`vue`下`Step`宽度不等分的问题 [#100](https://github.com/ksc-fe/kpc/issues/100)
2. `Fix` 修复`Table`在Firefox下，`word-break: break-all`不支持的问题
3. `Fix` 修复`Tooltip`在应该隐藏箭头的情况下，没有隐藏的问题 [#101](https://github.com/ksc-fe/kpc/issues/101)

## v0.5.12

1. `Add` 新增`Menu`菜单组件 [#90](https://github.com/ksc-fe/kpc/issues/90)
2. `Fix` 修复Fixfox下，`Spin`不能展示的问题 [#97](https://github.com/ksc-fe/kpc/issues/97)
3. `Fix` 修复Fixfox下，`Table`在固定右侧列并出现纵向滚动条的情况下，左侧单元格宽度不正确导致出现空白间隙的问题 [#98](https://github.com/ksc-fe/kpc/issues/98)
4. `Fix` 修复`Timeline`文字与图标没对齐的问题
5. `Fix` 修复`Collapse`手风琴模式下，无法全部收起的问题 [#99](https://github.com/ksc-fe/kpc/issues/99)

## v0.5.11

> 要使用`Table`新特性，需要更新`Intact`至`v2.3.5`及以上

1. `Add` `Table`支持列固定 [#86](https://github.com/ksc-fe/kpc/issues/86)
2. `Add` `Table`支持横向滚动条吸底 [#96](https://github.com/ksc-fe/kpc/issues/96)
3. `Fix` 修复`Table`固定表头横向滚动的问题 [#89](https://github.com/ksc-fe/kpc/issues/89)

## v0.5.10

1. `Fix` 修复`Select`将`0`当做空值处理的问题 [#94](https://github.com/ksc-fe/kpc/issues/94)
2. `Fix` 修复`Transfer`不能取消全选的问题 [#95](https://github.com/ksc-fe/kpc/issues/95)

## v0.5.9

1. `Add` 新增`xxl`响应式宽度`≥1600px`
2. `Change` 改变全局字体行高`1.5`
3. `Fix` Firefox下`Datepicker`快速切换年月按钮错位的问题

## v0.5.7

1. `Add` `Grid`改进，支持响应式，以及`pull` `push` `order`等属性 [#87](https://github.com/ksc-fe/kpc/issues/87)
2. `Add` 新增时间轴组件`Timeline` [#77](https://github.com/ksc-fe/kpc/issues/77)
3. `Add` `Message`在Vue全局安装的情况下，支持`this.$message.success()`的调用方式 [#88](https://github.com/ksc-fe/kpc/issues/88)

## v0.5.6

1. `Add` 新增时间选择组件`Timepicker`
2. `Add` 新增树形控件`Tree`
3. `Add` `Datepicker`支持只选择年/月 [#84](https://github.com/ksc-fe/kpc/issues/84)
4. `Add` `Datepicker`可选择范围，支持控制到秒的精度 [#81](https://github.com/ksc-fe/kpc/issues/81)
5. `Add` `Table`组件支持表头吸顶功能 [#85](https://github.com/ksc-fe/kpc/issues/85)
6. `Change` `Datepicker`交互变更，支持快速切换时间选择
7. `Change` `Checkbox`将`click` `mouseenter` `mouseleave`事件绑定在最外层元素上，而不是`input`上
7. `Fix` 修复`Cascader`无法获取完整取值的问题 [#78](https://github.com/ksc-fe/kpc/issues/78)
8. `Fix` 修复`Table` `expand`属性不兼容intact-vue@v0.3的问题 [#82](https://github.com/ksc-fe/kpc/issues/82)
9. `Fix` 修复`Button` `showLoading`后`hideLoading`，在某些情况下子元素渲染出错的问题

## v0.5.4

1. `Add` 新增`Spin`加载动画组件 [#74](https://github.com/ksc-fe/kpc/issues/74)
2. `Add` `Form`新增`getFirstInvalidFormItem`方法，用于获取第一个出错的`FormItem` [#73](https://github.com/ksc-fe/kpc/issues/73)
3. `Fix` `Datepicker`月份切换问题 [#62](https://github.com/ksc-fe/kpc/issues/62)
4. `Fix` 修复`FormItem`错误信息某些情况下的样式问题 [#75](https://github.com/ksc-fe/kpc/issues/75) 
5. `Refactor` 改变内置动画className命名，避免冲突 [#76](https://github.com/ksc-fe/kpc/issues/76)

## v0.5.3

1. `Add` `Tag`组件支持`size`属性 [#68](https://github.com/ksc-fe/kpc/issues/68)
2. `Add` 新增`Tip`组件，用于展示警告提示信息 [#69](https://github.com/ksc-fe/kpc/issues/69)
3. `Add` `Tabs`新增一种无边框的卡片样式，适用于具有背景的场景 [#70](https://github.com/ksc-fe/kpc/issues/70)
4. `Add` `Steps`新增一种简洁样式`simple` [#71](https://github.com/ksc-fe/kpc/issues/71)
5. `Add` `Steps`支持`clickable`属性，用于快速切换已完成的步骤 [#72](https://github.com/ksc-fe/kpc/issues/72)
6. `Change` 部分组件样式调整 [#67](https://github.com/ksc-fe/kpc/issues/67)

## v0.5.0

`0.5.0`版本需要<code>vdt@1.3.0</code><code>intact@2.3.0</code><code>intact-vue@0.3.0</code>支持

1. `Add` 支持组件属性类型检查
2. `Add` 支持带参数的`block`
3. `Add` 支持通过`v-model`绑定任意属性值
4. `Add` 支持同一事件绑定多次回调函数
5. `Refactor` `App`组件重构，减少依赖 [#65](https://github.com/ksc-fe/kpc/issues/65)
6. `Fix` 在`Vue`下`Vue.use(Kpc)`全量使用的问题 [#63](https://github.com/ksc-fe/kpc/issues/63) [#64](https://github.com/ksc-fe/kpc/issues/64)

## v0.4.0

1. `Add` 新增级联选择组件`Cascader`
1. `Add` 新增标签组件`Tag`
1. `Add` 新增徽标组件`Badge`
1. `Add` 新增折叠面板组件`Collapse`
1. `Add` `Pagination`支持无边框样式，[#33](https://github.com/ksc-fe/kpc/issues/33)
1. `Add` 嵌套`Dropdown`支持子菜单相对父菜单定位
1. `Change` 更新ksyun主题`Message`样式
1. `Change` 优化`Dropdown`键盘操作
1. `Change` 更新ksyun主题`Progress`样式
1. `Fix` 修复`Datepicker`在点击年份等区域导致input失焦，然后`FormItem`立即验证的问题，[#46](https://github.com/ksc-fe/kpc/issues/46)
1. `Fix` 修复`Tooltip` `hover`触发方式下，有时不能消失的问题，[#52](https://github.com/ksc-fe/kpc/issues/52)
1. `Fix` 修复`Pagination`当传入的`limit`不是可选项时，页码错误的问题， [#48](https://github.com/ksc-fe/kpc/issues/48)
1. `Fix` 修复`Select`键盘选中某项然后搜索导致该项不存在，此时按回车会报错的问题，[#50](https://github.com/ksc-fe/kpc/issues/50)

## v0.3.12

1. `Add` `TableColumn`支持`title`扩展点，[#19](https://github.com/ksc-fe/kpc/issues/19)
2. `Add` `Transfer`支持全选和清空操作，[#18](https://github.com/ksc-fe/kpc/issues/18)
3. `Fix` 修复`Editable`在invalid的状态下，父组件更新也会触发`$changed:value`事件的问题，[#51](https://github.com/ksc-fe/kpc/issues/51)
4. `Fix` 修复`FormItem`在`model`不存在时，依然会验证导致报错的问题，[#47](https://github.com/ksc-fe/kpc/issues/47)
5. `Fix` 修复`value`不存在options中时的问题，[#41](https://github.com/ksc-fe/kpc/issues/41) [#40](https://github.com/ksc-fe/kpc/issues/40)
6. `Fix` `FormItem`延迟100ms去验证，来规避某些弹出型组件在失焦瞬间，可能闪现`required`错误信息的问题 [#4](https://github.com/ksc-fe/kpc/issues/4)
7. `Fix` 修复`Dropdown`在vue下，子元素事件丢失的问题
8. `Fix` 修复`Tooltip`箭头位置问题，[#17](https://github.com/ksc-fe/kpc/issues/17)

## v0.2.0

1. `Add` 表单元素(`Select` `Datepicker`等)支持键盘操作 [#7](https://github.com/ksc-fe/kpc/issues/7)
2. `Add` `FormItem`支持强制验证 [#6](https://github.com/ksc-fe/kpc/issues/6)
3. `Add` `Select`支持输入不存在的条目，此时它将作为最终值 [#5](https://github.com/ksc-fe/kpc/issues/5)
4. `Fix` 修复`Table`在MacOS下`Checkbox`选不中的问题 [#8](https://github.com/ksc-fe/kpc/issues/8)
5. `Fix` 修复`Slider`中的`Input`不能输入中间过程值的问题 [#9](https://github.com/ksc-fe/kpc/issues/9)
6. `Fix` 修复`Form`表单验证`Select`选择时，闪现`required`错误信息的问题 [#4](https://github.com/ksc-fe/kpc/issues/4)


## v0.1.0

1. `Add` Datepicker支持日期范围选择, [#1](https://github.com/ksc-fe/kpc/issues/1)
2. `Add` Datepicker选择日期和时间时，支持多选
3. `Add` 弹出菜单支持边界碰撞反转弹出弹出方向，[#2](https://github.com/ksc-fe/kpc/issues/2)
4. `Fix` Vue中Tab不能切换的问题，[#3](https://github.com/ksc-fe/kpc/issues/3)
5. `Fix` Slider在设置了步长后，拖动会闪动的问题

