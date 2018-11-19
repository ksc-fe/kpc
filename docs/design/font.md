---
title: 字体
order: 2
sidebar: design
---

## 字体家族

优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下字体始终保持良好的易读性和可读性。

`font-family :PingFangSC,helvetica neue,hiragino sans gb,arial,microsoft yahei ui,microsoft yahei,simsun,"sans-serif"`

## 字体大小

字体大依据具体应用场景制定相关标准，并通过透明度定义字体显示显著程度。

![zitidaxiao](/imgs/design/zitidaxiao.png)

## 字体行高

在确定字体行高时我们使用黄金比例来计算字体行高。即行高为字体的1.618倍。并对计算结果取整，

计算公式为：

**字体行高=Int(字体大小*1.618)**

> 如：字体大小我14px时，字体行高为：Int（14*0.618+14）=22px

![zitihanggao](/imgs/design/zitihanggao.png)

## 对比度

在确定字体颜色时，字体颜色与背景色的对比度应符合WCAG相关规则，以为视觉障碍人士保障足够的视觉对比度。

> WCAG 1.4.3
> 
> 对比度（最小）: 文本的视觉呈现以及文本图像至少要有4.5:1的对比度，以下部分除外：（AA级）
> 
> 大文本: 大号文本(18px左右大号加粗字体)以及大文本图像至少有3:1的对比度;
> 
> 对比度检测工具：[https://contrast-ratio.com/]()

