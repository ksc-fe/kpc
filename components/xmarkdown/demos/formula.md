---
title: 公式渲染
order: 1
---

可以展示公式。`enableFormula` 是否开启公式渲染，`formulaDelimiters` 用于切换分隔符方案，`formulaMacros` 用于补充常用宏定义。

```vdt
import {XMarkdown, Switch} from 'kpc';

<div class="xmarkdown-demo-formula">
    <div class="xmarkdown-demo-formula-actions">
        <span>enableFormula: <Switch value={this.get('enableFormula')} ev-$change:value={this.setEnableFormula} /></span>
        <span>useBrackets: <Switch value={this.get('useBrackets')} ev-$change:value={this.setUseBrackets} /></span>
    </div>
    <XMarkdown
        content={this.getContent()}
        enableFormula={this.get('enableFormula')}
        formulaDelimiters={this.getFormulaDelimiters()}
        formulaMacros={this.getFormulaMacros()}
    />
</div>
```

```styl
.xmarkdown-demo-formula-actions
    display flex
    flex-wrap wrap
    gap 16px
    margin-bottom 16px
```

```ts
import type {XMarkdownFormulaDelimiter} from 'kpc';
import {bind} from 'kpc';

interface Props {
    enableFormula: boolean
    useBrackets: boolean
}

const DOLLARS_CONTENT = `欧拉恒等式：$e^{i\\pi} + 1 = 0$。

定义域：$f: \\RR \\to \\RR$。

$$
\\score(x)=\\sum_{i=1}^{n}\\frac{x_i}{1 + x_i^2}
$$

\\begin{equation}
\\int_0^1 x^2 dx = \\frac{1}{3}
\\end{equation}
`;

const BRACKETS_CONTENT = `下面这段内容改用 \\[ ... \\] 分隔符：

\\[
f: \\RR \\to \\RR
\\]

\\[
\\score(x)=\\sum_{i=1}^{n}\\frac{x_i}{1 + x_i^2}
\\]`;

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            enableFormula: true,
            useBrackets: false,
        };
    }

    getContent() {
        return this.get('useBrackets') ? BRACKETS_CONTENT : DOLLARS_CONTENT;
    }

    getFormulaDelimiters(): XMarkdownFormulaDelimiter | XMarkdownFormulaDelimiter[] {
        return this.get('useBrackets') ? 'brackets' : ['dollars', 'beg_end'];
    }

    getFormulaMacros() {
        return {
            '\\RR': '\\mathbb{R}',
            '\\score': '\\operatorname{score}',
        };
    }

    @bind
    setEnableFormula(enableFormula?: boolean) {
        this.set('enableFormula', !!enableFormula);
    }

    @bind
    setUseBrackets(useBrackets?: boolean) {
        this.set('useBrackets', !!useBrackets);
    }
}
```
