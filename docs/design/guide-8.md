# ⾊彩系统推演



设计的⽬的是为⽤户提供流畅的交互体验。因此，颜⾊选择和配置不应完全基于个⼈喜好，它应以您的品牌审美以及可访问性为基础。本⽂简要介绍了King Design ⾊彩⽅案背后的推演逻辑。本⽂不会深⼊探讨对于⾊盲⼈群的颜⾊可访性的问题。



## 01 关于⾊彩系统的常⽤概念

### ⾊彩模型HSB

该采⽤哪⼀个颜⾊模型（HUE，HSB，HSL，HSV还是LAB）是⼀个复杂的问题，但简⽽⾔之的是：King Design⾊彩系统采⽤ HSB ⾊彩模型进⾏设计，因为其表达⾊彩的语义更贴近⼈类视觉感官。 HSB将我们⼤众所理解的“颜⾊深浅”“颜⾊鲜亮”的概念以饱和度，明度的维度来展示，即HSB三要素为⾊相(Hue)、饱和度(Saturation)、明度(Brightness)。HSB⾮常适合检查和调整颜⾊，但为了避免不同程式（浏览器、设计软件、显示器等）之间的渲染问题，最终HSB颜⾊的最准确地记录为 RGB 或 HEX 值。



### ⾊相

⾊彩的外相。在不同波⻓的光照射下，⼈眼所感觉到不同的颜⾊，有紅⾊、橙⾊、⿈⾊、綠⾊、藍⾊、紫⾊、粉紅⾊、⿊⾊、褐⾊、灰⾊、⽩⾊、⾦⾊和銀⾊。



### 饱和度

⾊彩的纯度。饱和度⾼的⾊彩就会⽐较艳丽，饱和度低的就接近灰⾊。

img1



### 明度

⾊彩的明暗度。明度⾼的⾊彩就会⽐较明亮，明度低的就⽐较暗淡。明度最⾼即纯⽩，最低即纯⿊。



### 变体⾊

也叫颜⾊梯度，颜⾊带或颜⾊渐变。变体⾊即通过更改某颜⾊的明度和饱和度来将某⼀颜⾊扩展成由浅到深的颜⾊列阵。King Design为每个颜⾊提供9个变体⾊，其颜⾊编号从10到100，主题⾊包含在其中，通常是编号50或60为主题⾊。

img2



### ⾊彩对⽐度

两种相邻颜⾊或重叠颜⾊（前景/背景）之间的亮度（L）差异。



## 02 ⾊彩⽅案推演

为保证King Design⾊彩系统的使⽤统⼀性以及可访性，我们规定变体⾊编号10到100的颜⾊之间的对⽐度保持⼀致。

**Step 1：选取某颜⾊，该⾊与⽩⾊字体对⽐度满⾜>=4.5；**

**Step 2：制定出⼀组颜⾊编号10-100的对⽐度数列；**

**Step 3：将所选颜⾊的HSB⾊值及变体⾊的对⽐度数列推算出10个变体⾊的HSB⾊值，并取其中编号50或60的变体⾊为主题⾊。**



### 如何计算⾊彩对⽐度

对⽐度C（contrast ratio）的范围可以从 1 到 21（通常写作 1:1 到 21:1），在WCAG标准中可以找到对⽐度公式：



对⽐度 C = （L1 + 0.05）/（L2 + 0.05） 

相对亮度 L = 0.2126 * R sRGB + 0.7152 sRGB * G + 0.0722 * B sRGB



其中：

L1 是亮度相对较亮的颜⾊

L2 是亮度相对较暗的颜⾊



算出的对⽐度C是否达标，这取决于您所追求的是普通WCAG AA的标准，还是加强版WCAG AAA 的标准，相对于AA标准，AAA标准对视觉要求更严格：

AA 级：常规⼤⼩⽂本的视觉呈现与背景⾄少要有 4.5:1 的对⽐度，⼤⽂本与背景⾄少有 3:1 的对⽐度。

AAA级：常规⼤⼩⽂本的视觉呈现与背景⾄少有 7:1 的对⽐度，⼤⽂本与背景⾄少有 4.5:1 的对⽐度。

注：⼤⽂本：WCAG规定 「≥18pt常规字重」的⽂本或 「≥14pt字重加粗」的⽂本。



公式 L = 0.2126 * R sRGB + 0.7152 * G sRGB + 0.0722 * B sRGB 中的R sRGB、G sRGB和B sRGB定义为：

如果 R sRGB <= 0.03928 那么R sRGB = R sRGB /12.92 否则R = ((R sRGB +0.055)/1.055) ^ 2.4

如果 G sRGB <= 0.03928 那么G sRGB = G sRGB /12.92 否则G = ((G sRGB +0.055)/1.055) ^ 2.4

如果 B sRGB <= 0.03928 那么B sRGB = B sRGB /12.92 否则B = ((B sRGB +0.055)/1.055) ^ 2.4



其中R sRGB、 G sRGB和 B sRGB定义为：

R sRGB = R 8 bit/255

G sRGB = G 8 bit /255

B sRGB = B 8 bit /255



例如：

img3



将对应数值R sRGB 带⼊相对亮度L公式中得出⿊⾊的相对亮度为0，⽩⾊为1，它们的对⽐度是(1 + 0.05) / (0 + 0.05) = 21 : 1。



我们也可以计算任何其他颜⾊与⿊或⽩的对⽐度：

对⿊：(L + 0.05) / (0 + 0.05)

对⽩：(1 + 0.05) / (L + 0.05)



对于King Design主题⾊⽅案，我们规定每个主题⾊及其变体⾊与⽂字的对⽐度⾄少是4.5：1。



因此：

对⿊：(L + 0.05) / (0 + 0.05) >= 4.5

对⽩：(1 + 0.05) / (L + 0.05) >= 4.5



得出：

对⿊：L >= 0.175

对⽩：0.1833 >= L



最终我们得到King Design所选的主题⾊的相对亮度要求为：

0.175 <= L <= 0.1833



#### Step 1：选取某颜⾊，该⾊与⽩⾊字体对⽐度满⾜>=4.5

以颜⾊#0979ce举例。以下⾊板中展示的3条⽩线分别表示⽩⾊⽂字与颜⾊#0979ce（背景⾊）对⽐度为3，4.5和7的取点线；

img4



#### Step2 ：制定出⼀组颜⾊编号10-100的对⽐度数列

为保证King Design颜⾊系统的使⽤统⼀性以及可访性，对⽐度数列需以下⽬标：

⽬标1：不同⾊相的同⼀编号变体⾊（如，红30，蓝30，绿30）之间的对⽐度⼀致；

⽬标2：同⼀⾊相不同变体⾊之间的对⽐度数值有规律地变化，数值间的相差值不会太⼤，且平均分布；

⽬标3：编号10-50与⿊⾊⽂字的对⽐度>= 4.5：1，编号60-100与⽩⾊⽂字的对⽐度>= 4.5：1；



最终，通过计算我们得出以下数值：

img5



转换成图表为：

img6



#### Step 3：将所选颜⾊的HSB⾊值及变体⾊的对⽐度数列推算出10个变体⾊的HSB⾊值，并取其中编号50或60的变体⾊为主题⾊

通过公式推导，#0979ce的10个变体⾊如下：

img7



转换成图表为：

img8



该对⽐度数列并⾮通⽤，对于相对亮度较⾼的⾊相，对⽐度数列需要做出调整。通过⾊轮，将每个⾊相的饱和度和亮度转换为灰度。这样，颜⾊的三个维度被映射到⼀个维度，即亮度，参考⽩⾊ = 100%。如下图所示，可以看到蓝⾊的亮度值最低，⻩⾊的亮度值最⾼。

img9



如上图所示，若⻩⾊也都⽤以上对⽐度数列，会造成颜⾊变体⾊整体偏暗，⽽这些暗⾊并不常⽤，如下图所示：

img10



因此对于⻩⾊，我们规定其⿊⾊⽂字的使⽤范围是编号10-80，对⽐度数列调整为；

img11



通过公式推导，King Design⻩⾊的10个变体⾊以及主题⾊如下：

img12



转换成图表为：

img13



最后，King Design的⾊彩⽅案为以下9个主题⾊：

img14



## 最后

希望这篇⽂章能帮助您建⽴属于⾃⼰的⾊彩系统。更多的⾊彩使⽤请⻅⽂章⾊彩系统的应⽤，您也可以通过King Design Color在线⼯具制定属于⾃⼰的⾊彩系统。