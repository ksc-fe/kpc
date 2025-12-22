---
title: 更新日志
order: 99
sidebar: doc
---

## v3.6.2

1. `Fix` 修复`Table`组件，当第一列`hidden=true`时，依然展示`::before`的问题 [#1098](https://github.com/ksc-fe/kpc/issues/1098)
2. `Fix` 修复`Dropdown`在某些`webpack`中，打包存在循环依赖问题 [#1099](https://github.com/ksc-fe/kpc/issues/1099)

### @king-design/react

1. `Fix` 修复与AntDesigin Input共用时，不能正常输入的问题 [#1100](https://github.com/ksc-fe/kpc/issues/1100)


## v3.6.1

1. `Add` `Form`新增`getAllInvalidFormItems`方法，用于获取所有检验失败的`FormItem` [#1093](https://github.com/ksc-fe/kpc/issues/1093)
2. `Fix` 修复`Select` `card`模式下，搜索不能正确展示搜索结果的问题，以及延迟设置`value`，弹层不能正确高亮的问题 [#1095](https://github.com/ksc-fe/kpc/issues/1095) [#1085](https://github.com/ksc-fe/kpc/issues/1085)
3. `Fix` 修复`Spinner`在`forceStep`下，`min`没有设置，会将指置为`NaN`的问题 [#1073](https://github.com/ksc-fe/kpc/issues/1073)
4. `Fix` 修复`Menu`在`horizontal`模式下，菜单展示位置异常的问题 [#1067](https://github.com/ksc-fe/kpc/issues/1067)
5. `Fix` 修复`Datepicker`选择日期范围会触发两次`change value`事件的问题 [#1054](https://github.com/ksc-fe/kpc/issues/1054)

### @king-design/react

1. `Fix` 修复`Dialog.confirm`在React16下，报错的问题[#1091](https://github.com/ksc-fe/kpc/issues/1091)

### @king-design/vue

1. `Fix` 修复`FormItem`在异步展示的情况下，有时会取不到父组件`Form`，导致的诡异问题 [#1084](https://github.com/ksc-fe/kpc/issues/1084)

### @king-design/vue-legacy

1. `Fix` 修复`Datepicker`在`range`模式下，不能更改日期的问题 [#1092](https://github.com/ksc-fe/kpc/issues/1092)

## v3.6.0

1. `Add` 新增`Tour`引导式导航组件 [#1079](https://github.com/ksc-fe/kpc/issues/1079)
2. `Add` `Datepicker` 组件`range`模式，交互方式优化 [#1080](https://github.com/ksc-fe/kpc/issues/1080)
3. `Add` `Select`组件新增`keepKeywords`属性，enter选中，是否继续保留搜索关键字[#1077](https://github.com/ksc-fe/kpc/issues/1077)
4. `Fix` `Select`组件`searchable + multiple`状态下，默认值`checkbox`第一次不选中问题 [#1081](https://github.com/ksc-fe/kpc/issues/1081)
5. `Fix` `Table`组件开启`fixHeader`属性，表头无法横向滚动 [#1087](https://github.com/ksc-fe/kpc/issues/1087)
6. `Fix` `Table` 组件，将kpc的版本从v3.4.3升级到最新版本v3.5.2后，使用`fixHeader`属性会导致一些不符合预期的表现 [#1089](https://github.com/ksc-fe/kpc/issues/1089)
7. `Fix` `Input` `textarea` 部分场景下`resize`属性失效 [#1090](https://github.com/ksc-fe/kpc/issues/1090)
8. `Fix` `Table` 组件`group`后赋值且多个TableColumn会报错卡死 [#1082](https://github.com/ksc-fe/kpc/issues/1082)

### @king-design/vue
1. `Fix` 页面报错 Cannot add property 23, object is not extensible [#1066](https://github.com/ksc-fe/kpc/issues/1066)


## v3.5.2

1. `Fix` `TreeSelect`单选时v-model绑定值数据类型被重置为数组 [#1069](https://github.com/ksc-fe/kpc/issues/1069)
2. `Fix` `TreeSelect`下拉框无法选中节点 [#1063](https://github.com/ksc-fe/kpc/issues/1063)
3. `Fix` `Table`当前页内`checkbox`全部`disabled`时，表头`checkbox`需设置为`disabled`置灰 [#1068](https://github.com/ksc-fe/kpc/issues/1068)
4. `Fix` `Select`设置`virtual`属性，无法展示内容 [#1065](https://github.com/ksc-fe/kpc/issues/1065)
5. `Fix` `Breadcrumb` UI优化 [#1070](https://github.com/ksc-fe/kpc/issues/1070)


## v3.5.1

1. `Fix` `TreeSelect`组件初始化时输入框展示问题 [#1046](https://github.com/ksc-fe/kpc/issues/1055)
2. `Fix` `TreeSelect`组件复选框：清除最后一个子元素，父元素半选状态未更新 [#1057](https://github.com/ksc-fe/kpc/issues/1057)
3. `Fix` `VirtualList`渲染空数据，然后更新数据报错 [#1060](https://github.com/ksc-fe/kpc/issues/1060)

### @king-design/react

1. `Fix` 某些情况下更新报错:Cannot add property children, object is not extensible  [#1058](https://github.com/ksc-fe/kpc/issues/1058)


## v3.5.0

1. `Add` `VirtualList` 组件支持任意`list`结构虚拟列表化 [#971](https://github.com/ksc-fe/kpc/issues/971)
2. `Add` `Table`组件新增`virtual`属性，支持表格虚拟化 [#971](https://github.com/ksc-fe/kpc/issues/971)
2. `Add` `Select`组件新增`virtual`属性，支持选择框虚拟化 [#971](https://github.com/ksc-fe/kpc/issues/971)
3. `Fix` `Input`组件`autoWidth`输入空格不能自动撑开宽度 [#1046](https://github.com/ksc-fe/kpc/issues/1046)
4. `Fix` `Select`组件远程搜索时，不能输入空格 [#1047](https://github.com/ksc-fe/kpc/issues/1047)
5. `Fix` `Datepicker`传入`dayjs`对象报类型不匹配警告 [#1048](https://github.com/ksc-fe/kpc/issues/1048)
6. `Fix` `Dialog`组件`confirm`模式，UI调整

## v3.4.5

1. `Add` `Tip` 组件支持`Icon`及自定义`Icon` [#1043](https://github.com/ksc-fe/kpc/issues/1043)
2. `Add` `Table`组件新增`spreadArrowIndex`属性，支持通过`spreadArrowIndex`参数控制树形表格展开按钮所在的列 [#1035](https://github.com/ksc-fe/kpc/issues/1035)
3. `Fix` `Timepicker`放在`Dialog`中样式有问题 [#1026](https://github.com/ksc-fe/kpc/issues/1026)
4. `Fix` `Input`组件在`Drawer`自动高度设置不生效 [#1026](https://github.com/ksc-fe/kpc/issues/1026)
5. `Fix` `Table`树形表格，展开行中的组件不能双向绑定 [#1030](https://github.com/ksc-fe/kpc/issues/1030)
6. `Fix` `Table` 合并表头后border问题 [#1042](https://github.com/ksc-fe/kpc/issues/1042)
7. `Fix` `Upload` file list 文件名超长省略 [#1037](https://github.com/ksc-fe/kpc/issues/1037)
8. `Fix` `Tooltip always`模式下设置了`value`不展示，实际鼠标悬浮上依然会展示 [#1039](https://github.com/ksc-fe/kpc/issues/1039)

### @king-design/vue
1. `Fix` 【vue2.0】全局安装install存在警告 [#1031](https://github.com/ksc-fe/kpc/issues/1031)


## v3.4.3

1. `Add` `Table`组件支持异步加载`children` [#1014](https://github.com/ksc-fe/kpc/issues/1014)
2. `Add` 补充`Button`组件`disabled`色系 [#1015](https://github.com/ksc-fe/kpc/issues/1015)
3. `Add` `Table`组件新增`footer`插槽，用于自定义表格footer [#1017](https://github.com/ksc-fe/kpc/issues/1017)
4. `Add` `Select`组件支持已选中的选项，个别选项通过条件判断禁止删除 [#1020](https://github.com/ksc-fe/kpc/issues/1020)
5. `Add` `TableColumn`组件支持配置`ellipsis`属性，用于开启超长省略 [#1024](https://github.com/ksc-fe/kpc/issues/1024)
6. `Add` `Eidtable`组件支持自动折行 [#1027](https://github.com/ksc-fe/kpc/issues/1027)
7. `Fix` `Menu`组件关闭后`MenuHeader`存在padding [#1023](https://github.com/ksc-fe/kpc/issues/1023)
8. `Fix` `Tooltip`自定义内容嵌套`Select`，`Select`选中会隐藏`Tooltip` [#1021](https://github.com/ksc-fe/kpc/issues/1021)
9. `Fix` `Table`组件合并表头设置`fixHeader`，向下滚动后`border-bottom` 会变成透明 [#1018](https://github.com/ksc-fe/kpc/issues/1018)
10. `Fix` `TreeSelect`左侧对齐线无法隐藏 [#1016](https://github.com/ksc-fe/kpc/issues/1016)
11. `Fix` 样式fix（`Switch`默然size`small`;`Button`上下居中；`Dialog` icon 默认24px） [#1022](https://github.com/ksc-fe/kpc/issues/1022)

### @king-design/react

1. `Fix` `Input`的组件`slotPrepend`传入`undefined`，但是生成了DOM [#1019](https://github.com/ksc-fe/kpc/issues/1019)


## v3.4.2

1. `Add` 适配qiankun微前端框架 [#1002](https://github.com/ksc-fe/kpc/issues/1002)
2. `Add` 新增`Descriptions`描述列表组件 [#1010](https://github.com/ksc-fe/kpc/issues/1010)
3. `Add` `TableColumn`新增`hideGroupHeader`属性，用于自定义隐藏group 默认搜索 [#1011](https://github.com/ksc-fe/kpc/issues/1011)
4. `Add` `Icon`新增`start`、`stop`、 `sortorder`图标 [#1007](https://github.com/ksc-fe/kpc/issues/1007)
5. `Fix` `Table`在合并单元格模式下（merge），插入数据会报错 [#1008](https://github.com/ksc-fe/kpc/issues/1008)
6. `Fix` `Switch` `beforeChange`属性在拖拽开关情况下不生效 [#1006](https://github.com/ksc-fe/kpc/issues/1006)
7. `Fix` 字体包优化，`ionicons`增加woff2，调整加载顺序 [#1009](https://github.com/ksc-fe/kpc/issues/1009)
8. `Fix` 其他UI调整`Card`、`Tabs`等默认阴影，表头筛选的次级按钮样式 [#1007](https://github.com/ksc-fe/kpc/issues/1007)

### @king-design/vue

1. `Fix` 【vue3.0】proxyFragmentParent某些情况下，由于元素被卸载，导致报错 [#1005](https://github.com/ksc-fe/kpc/issues/1005)


## v3.3.3

1. `Add` `Button`新增`color`属性，支持自定义字体、边框、波纹效果颜色 [#999](https://github.com/ksc-fe/kpc/issues/999)
2. `Add` `ButtonGroup`新增`btnWidth`属性，支持定义按钮组按钮保持一致的宽度 [#949](https://github.com/ksc-fe/kpc/issues/949)
3. `Add` `Switch`新增`loading`、`beforeChange`，定义Switch切换前的拦截函数，支持异步函数 [#1000](https://github.com/ksc-fe/kpc/issues/1000)
4. `Add` `TableColumn`新增`hidden`属性，用于隐藏列 [#996](https://github.com/ksc-fe/kpc/issues/996)
5. `Fix` `Table`组件包含隐藏列，宽度计算错误 [#996](https://github.com/ksc-fe/kpc/issues/996)
6. `Fix` `Upload`双向绑定files，会导致死循环 [#985](https://github.com/ksc-fe/kpc/issues/985)
7. `Fix` `Upload`组件，设置disabled属性样式无变化 [#985](https://github.com/ksc-fe/kpc/issues/985)

### @king-design/vue

1. `Fix` vite下国际化 global is not defined [#995](https://github.com/ksc-fe/kpc/issues/995)
2. `Fix` Popover和Tooltip直接嵌套使用失效 [#1001](https://github.com/ksc-fe/kpc/issues/1001)


## v3.3.2

1. `Add` 新增`ConfigProvider`配置`disableWave`，可一键屏蔽全局水波纹动效 [#984](https://github.com/ksc-fe/kpc/issues/984)
2. `Add` `DatePicker`组件支持`dayjs`导出 [#987](https://github.com/ksc-fe/kpc/issues/987)
3. `Fix` `Cascader`展示检索项，高亮已经被选择的菜单项 [#990](https://github.com/ksc-fe/kpc/issues/990)
4. `Fix` `Select`组件在多选下设置`filterable`，支持选择后不清空搜索记录 [#983](https://github.com/ksc-fe/kpc/issues/983)
5. `Fix` `Select`组件在，下拉列表还没有拿到返回值时，传入key为数字，会报    `placeholder`为`string`类型的检查报错 [#988](https://github.com/ksc-fe/kpc/issues/988)
6. `Fix` `Cascader`级联多选，在已有一个的情况下，搜索出下一个，选择后下拉菜单会飘到左上角 [#982](https://github.com/ksc-fe/kpc/issues/982)
7. `Fix` `Upload`组件，设置disabled属性样式无变化 [#985](https://github.com/ksc-fe/kpc/issues/985)
8. `Fix` `Table`/`Breadcrumb`/`Menu`/`Tooltip`样式优化 [#972](https://github.com/ksc-fe/kpc/issues/972)

### @king-design/react

1. `Fix` 修复`React`在渲染阶段更新组件，导致生命周期函数执行顺序不对，找不到ref对应的value [#989](https://github.com/ksc-fe/kpc/issues/989) 

## v3.3.0

1. `Add` `Divider`组件，支持分割线 [#979](https://github.com/ksc-fe/kpc/pull/979)
2. `Add` `Ellipsis`组件，支持超长省略，超出展示tooltip [#979](https://github.com/ksc-fe/kpc/pull/979)
3. `Add` `MenuTitle`, `MenuItem`组件默认支持`Ellipsis`， [#979](https://github.com/ksc-fe/kpc/pull/979)
4. `Fix` 修复Table无数据提示文案修改 [#967](https://github.com/ksc-fe/kpc/issues/967)
5. `Fix` 修复Webpack V4下，sideEffects失效，导致tree-shaking问题 [#974](https://github.com/ksc-fe/kpc/issues/974)
6. `Fix` 修复Select nowrap不折行，当隐藏的项过多，Tooltip会展示不下 [#974](https://github.com/ksc-fe/kpc/issues/970)
7. `Fix` 修复v1 v2/v3版本共存 [#895](https://github.com/ksc-fe/kpc/issues/895)

### @king-design/react

1. `Fix` 修复React元素做King-Design直接子元素，King-Design组件内部无法正确卸载它 [#969](https://github.com/ksc-fe/kpc/issues/969) 
2. `Fix` 修复React事件冒泡问题  [#973](https://github.com/ksc-fe/kpc/issues/973) 
2. `Fix` 修复组件事件中多次设置state，会触发多次更新   [#977](https://github.com/ksc-fe/kpc/issues/977) 

### @king-design/vue-legacy

1. `Fix` 修复Menu header插槽存在Icon组件，折叠再展开，点击MenuItem报错 [#976](https://github.com/ksc-fe/kpc/issues/976)

### @king-design/vue

1. `Fix` 修复Tooltip如果存在注释，会报存在多个子元素的错误 [#975](https://github.com/ksc-fe/kpc/issues/975)

## v3.2.1

### @king-design/react

1. `Fix` 修复React 16版本下的问题 [#968](https://github.com/ksc-fe/kpc/issues/968) [#965](https://github.com/ksc-fe/kpc/issues/965)

## v3.2.0

1. `Add` `Menu`新增`showCollapseArrow`属性，可以选择展示隐藏折叠按钮，默认`showCollapseArrow: false` [#964](https://github.com/ksc-fe/kpc/pull/964)
2. `Add` `Menu`新增`MenuTitle`子组件，用于展示一级菜单项 [#964](https://github.com/ksc-fe/kpc/pull/964)
3. `Fix` 修复Select在searchable和multiple模式下，disabled选项依然可以被选中 [#963](https://github.com/ksc-fe/kpc/issues/963)
4. `Fix` 修复Table拖动调整列宽时，不应该触发排序 [#962](https://github.com/ksc-fe/kpc/issues/962)

### @king-design/react

1. `Fix` 修复React组件作为KingDesign组件直接子元素，组件内部自己无法正确卸载元素 [#965](https://github.com/ksc-fe/kpc/issues/965)

## v3.1.6

1. `Change` 优化`Datepicker`日期时间范围选择，只有选择完开始和结束日期，才切换到时间选择面板 [#944](https://github.com/ksc-fe/kpc/issues/944)
2. `Fix` 修复打包导致的TS类型错误

### @king-design/react

1. `Fix` 修复给react元素绑定mouseleave事件，回调函数触发更新会报错的问题 [#961](https://github.com/ksc-fe/kpc/issues/961)

## v3.1.5

1. `Fix` 修复`Cascader`某些情况下，子菜单位置异常的问题 [#953](https://github.com/ksc-fe/kpc/issues/953) [#956](https://github.com/ksc-fe/kpc/issues/956)
2. `Fix` 修复`Cascader`选择一个深层级的值，隐藏菜单重新展开选择一个浅层级的值，最终值有误的问题 [#957](https://github.com/ksc-fe/kpc/issues/957)

### @king-design/react

1. `Fix` 修复组件下渲染React元素，如果更新的时候替换元素，元素不能被正确销毁的问题 [#958](https://github.com/ksc-fe/kpc/issues/958)
2. `Fix` 修复外层元素绑定的事件，不能被触发的问题 [#959](https://github.com/ksc-fe/kpc/issues/959)

## v3.1.4

1. `Add` `Card`新增`size`属性，可以改变`padding`大小，默认`padding: 24px` [#948](https://github.com/ksc-fe/kpc/issues/948)
2. `Add` `Message`由于是静态方法，并不能获取全局配置`ConfigProvider`，故添加`Message.classNamePrefix`属性，用于定义`Message`组件的样式前缀 [#943](https://github.com/ksc-fe/kpc/issues/943)
3. `Fix` 修复Table导出，在Office Excel下打开乱码的问题 [#917](https://github.com/ksc-fe/kpc/issues/917)
4. `Fix` 修复`Editable`在编辑状态下，`Input`输入框会超出父容器宽度的问题 [#950](https://github.com/ksc-fe/kpc/issues/950)

### @king-design/vue-legacy

1. `Fix` 修复多个`v-if`并列使用，某些情况下，会导致子元素渲染顺序错乱的问题  [#955](https://github.com/ksc-fe/kpc/issues/955)
2. `Fix` 修复`Select` `Option`下存在`Tooltip`，在`searchable`模式下，搜索会报错的问题 [#954](https://github.com/ksc-fe/kpc/issues/954)
3. `Fix` 修复`Tab` `disabled`属性无效的问题 [#952](https://github.com/ksc-fe/kpc/issues/952)
4. `Fix` 修复某些情况下，vue元素不能被正确删除的问题 [#946](https://github.com/ksc-fe/kpc/issues/946)

## v3.1.3

1. `Change` 自定义滚动条样式，只对非`MacOS`系统生效 [#937](https://github.com/ksc-fe/kpc/issues/937)
2. `Change` `Collapse`标题栏采用`flex`布局，更好地兼容`title`扩展点自定义标题内容 [#939](https://github.com/ksc-fe/kpc/issues/939)
3. `Fix` 修复`Collapse`箭头位置设置左侧展示`left`无效的问题 [#934](https://github.com/ksc-fe/kpc/issues/934)
4. `Fix` 修复`Dialog`在改变`container`为`undefined | null`，元素不能默认append到body中，并且不能重新定位到屏幕中间的问题 [#935](https://github.com/ksc-fe/kpc/issues/935)

### @king-design/react

1. `Fix` 修复`Dialog`某些情况下（特别地，渲染的时候挂载，然后useEffect中将其卸载），会导致报错的问题 [#938](https://github.com/ksc-fe/kpc/issues/938)
2. `Fix` 修复KingDesign组件下渲染react元素，卸载的时候，会提前删除react元素，这会导致在一些有删除动画的元素上，元素在运行动画的过程中，react元素就都不见了，影响体验 [#938](https://github.com/ksc-fe/kpc/issues/940)

### @king-design/vue

1. `Fix` 修复`Upload`双向绑定`files`(`v-model:files`)，会导致死循环的问题 [#936](https://github.com/ksc-fe/kpc/issues/936)

## v3.1.2

1. `Add` 优化组件样式渲染的性能 [#928](https://github.com/ksc-fe/kpc/issues/928) 
2. `Add` 当`Table`需要在一侧固定两列及以上的列时，`width`属性不再是必须项 [#930](https://github.com/ksc-fe/kpc/issues/930)
3. `Add` `Table`分组菜单，多选情况下，支持全选操作 [#931](https://github.com/ksc-fe/kpc/issues/931)
4. `Add` `Cascader`多选情况下，选择不会隐藏菜单 [#933](https://github.com/ksc-fe/kpc/issues/933)
5. `Fix` 修复`Table`当列设置了`minWidth`导致出现横向滚动条，固定列不能展示阴影的问题 [#927](https://github.com/ksc-fe/kpc/issues/927)
6. `Fix` 修复`Table`右侧固定列，不能拖动改变宽度的问题 [#925](https://github.com/ksc-fe/kpc/issues/925)
7. `Fix` 修复`Tree`当处于半选中状态，此时设置`checkedKeys`让它全选，样式展示错误的问题 [#932](https://github.com/ksc-fe/kpc/issues/932)

### @king-design/vue-legacy

1. `Fix` 修复某些情况下，会报`object is not extensible`的错误的问题 [#926](https://github.com/ksc-fe/kpc/issues/926)

## v3.1.1

1. `Add` `Drawer`上下弹出支持设置宽度，设置宽度后，会从页面中间弹出，可以实现类似MacOS弹窗的功能 [#920](https://github.com/ksc-fe/kpc/issues/920)
2. `Add` `Popover` `size`属性支持设置弹层宽度`small=240px` [#923](https://github.com/ksc-fe/kpc/issues/923)
3. `Add` `FormItem`新增`validateOnStart`属性，支持组件一渲染就验证验证结果 [#924](https://github.com/ksc-fe/kpc/issues/924)
4. `Change` `Editable`采用`inline-flex`布局，取消行高的设定 [#918](https://github.com/ksc-fe/kpc/issues/918)
5. `Fix` 修复`Table`导出表格，某些情况下会乱码的问题 [#917](https://github.com/ksc-fe/kpc/issues/917)
6. `Fix` 修复`Collapse`嵌套使用，展开箭头样式冲突的问题 [#919](https://github.com/ksc-fe/kpc/issues/919)
7. `Fix` 修复`Input`自动宽度`autoWidth`，不支持针对`defaultValue`设置宽度的问题 [#921](https://github.com/ksc-fe/kpc/issues/921)
8. `Fix` 修复`Drawer`自定义整个内容`content`，动画会丢失的问题 [#922](https://github.com/ksc-fe/kpc/issues/922)

## v3.1.0

1. `Add` 新增`ConfigProvider`配置组件，目前能配置组件样式名className的前缀`classNamePrefix` [#905](https://github.com/ksc-fe/kpc/issues/905) [#904](https://github.com/ksc-fe/kpc/issues/904)
2. `Add` 布局组件`Aside`支持自定义收缩`collapse`的宽度 [#909](https://github.com/ksc-fe/kpc/issues/909)
3. `Add` `Tree`允许拖入的自定义函数，及相应事件回调函数，新增拖拽的节点`srcNode`和插入模式`mode`作为参数 [#901](https://github.com/ksc-fe/kpc/issues/901)
4. `Add` `Tree/TreeSelect`新增`expandAll`方法，用于灵活控制是否展示所有节点。 另外，默认展开逻辑`defaultExpandAll`，调整为，当数据不存在，或者数据为空时，不执行，待首次接收到新数据时，才展开，便于异步请求的数据更新后，也能展开所有节点  [#913](https://github.com/ksc-fe/kpc/issues/913)
5. `Add` `Upload`组件的`files`属性，现在可以用来定义初始化上传列表，支持响应式更新，之前的`defaultFiles`将废弃 [#906](https://github.com/ksc-fe/kpc/issues/906)
6. `Change` `Menu`组件，当不展示任何图标和`dot`时，优化子菜单嵌套的`padding`值 [#912](https://github.com/ksc-fe/kpc/issues/912)
7. `Fix` 修复`Dropdown`子菜单较多时，快速移动鼠标选择子菜单，可能会使整个菜单消失，造成的体验问题 [#900](https://github.com/ksc-fe/kpc/issues/900)
8. `Fix` 修复`Copy`和`Tooltip`嵌套使用时，复制失效的问题 [#910](https://github.com/ksc-fe/kpc/issues/910)
9. `Fix` 修复`Dialog`在`html`设为`100%`的情况下，展示位置不对，且不能拖动的问题 [#887](https://github.com/ksc-fe/kpc/issues/887)
10. `Fix` 修复`Input` `append`扩展点，插入按钮组`ButtonGroup`展示错位的问题 [#914](https://github.com/ksc-fe/kpc/issues/914)

### @king-design/vue

1. `Fix` 修复`Dialog`嵌套渲染`Dialog`，子`Dialog`会被遮挡的问题 [#915](https://github.com/ksc-fe/kpc/issues/915)

### @king-design/vue-legacy

1. `Fix` 修复Vue组件渲染在`KingDesign`组件下，会导致拿不到Vuex store的问题 [#907](https://github.com/ksc-fe/kpc/issues/907)

## v3.0.1

1. `Add` 布局组件`Header`支持高斯模糊和展示阴影 [#892](https://github.com/ksc-fe/kpc/issues/892)
2. `Add` `MenuItem`文案超长，展示省略号 [#889](https://github.com/ksc-fe/kpc/issues/889)
3. `Change` 更改`Table`内置翻页组件，页码改变的事件名为`page`，来保证在`React/Vue`下可以正确触发 [#888](https://github.com/ksc-fe/kpc/issues/888)
4. `Fix` 修复布局组件`Body`嵌套含有`fixed`状态`Aside`的`Layout`时，展示位置不对的问题 [#891](https://github.com/ksc-fe/kpc/issues/891)
5. `Fix` 修复`Table`当分组较多时，确认按钮不能置底显示的问题 [#898](https://github.com/ksc-fe/kpc/issues/898)
6. `Fix` 修复`Table`拖动调节宽度时的性能问题 [#896](https://github.com/ksc-fe/kpc/issues/896)
7. `Fix` 修复`FormItem`当内容超长时，会挤压`label`空间的问题 [#890](https://github.com/ksc-fe/kpc/issues/890)

### @king-design/react

1. `Fix` 修复`Timepicker` `onChangeValue`回调中，更新`state`，可能会导致死循环的问题 [#894](https://github.com/ksc-fe/kpc/issues/894)

### @king-design/vue

1. `Fix` 修复`RouterView`下直接返回king-design组件，子组件也会添加多余scopedId的问题 [#893](https://github.com/ksc-fe/kpc/issues/893)

### @king-design/vue-legacy

1. `Fix` 修复当子元素过多时，某些情况下会导致`RangeError`错误的问题 [#899](https://github.com/ksc-fe/kpc/issues/899)
2. `Fix` 修复`Tooltip`等组件，导致触发器元素className丢失的问题 [#897](https://github.com/ksc-fe/kpc/issues/897)


## v3.0.0

### 全局变更

1. 全局样式变更，更显年轻活力

### 组件变更

1. Copy
    1. `Add` 新增`Copy`组件，用于复制文本
2. Popover
    1. `Add` 新增`Popover`组件，用于弹出确认框，快速操作
3. Tags
    1. `Add` 新增`Tags`组件，用于管理`Tag`，支持单行展示隐藏更多，以及拖拽排序 
4. Button
    1. `Add` `Button`支持`flat`扁平样式
    2. `Add` `ButtonGroup`新增`seperate`属性，用于展示带间隔的按钮组
5. Pagination
    1. `Add` `Pagination`支持`flat`样式，删除之前的`noBorder`属性
6. Input
    1. `Add` `Input`支持`flat`样式
    2. `Add` `Input`支持展示输入字符长度提示数字
    3. `Change` `Input`采用`flex`布局方式，可以更好地展示组合样式
7. Select
    1. `Add` `Select`及其它选择类组件支持`flat`样式
    2. `Add` `Select`新增`nowrap`属性，多选时，支持单行展示，隐藏超出的值
    3. `Add` `Select`新增`draggable`属性，多选时，支持给选定值拖动排序 
8. Steps
    1. `Add` `Steps`支持垂直模式
    2. `Add` `Steps`新增`line-compact`样式
9. Slider
    1. `Add` `Slider`范围选择支持展示输入框
10. Progress
    1. `Add` `Progress`圆形进度条，新增`small` `mini`尺寸
11. Tabs
    1. `Add` `Tabs`在垂直模式下，也能够支持超出自动展示翻页按钮
    2. `Change` `Tabs`新增`flat-card`样式，去掉之间的`border-card` `no-border-card`样式
13. Icon
    1. `Change` 对`Icon`进行了增删改
14. Table
    1. `Change` `Table`分组多选时，添加确认操作
    2. `Change` `Table`分组时，不再在标题中展示已选值，仅高亮分组按钮
    3. `Change` 动效去掉背景色
    4. `Change` 默认展示表头的半选中状态
17. Datepicker
    1. `Change` 范围选择，选择时间时，结束时间默认为`23:59:59`，而非之前的`00:00:00`
18. Message
    1. `Change` 默认不展示关闭按钮
