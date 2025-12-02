---
title: King-Design Icons
order: 3
---



```vdt
import {Icon, Input, Copy} from 'kpc';

<div>
    <Input v-model="keywords" placeholder="Search icon" clearable />
    <div class="icons">
        <Copy v-for={this.filter()} text={this.config.k + '-icon-' + $value[0]}>
            <div class="icon">
                <Icon 
                    class={this.config.k + '-icon-' + $value[0]}
                    size="large"
                />
                <div>{this.config.k + '-icon-' + $value[0]}</div>
            </div>
        </Copy>
    </div>
</div>
```

```styl
.k-input
    margin-bottom 16px
.icons
    display flex
    flex-wrap wrap
    gap 10px
    text-align center
.icon
    width 100px
```

```ts
import { useConfigContext } from 'kpc';
interface Props {
    keywords?: string
    fonts: string[][]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            keywords: '',
            fonts: [
                ["outboundrules"],
                ["inboundrules"],
                ["fullscreen"],
                ["history"],
                ["correlation"],
                ["webui"],
                ["log"],
                ["save"],
                ["memory"],
                ["Physicalport"],
                ["queue"],
                ["channel"],
                ["cpu"],
                ["change"],
                ["subnet"],
                ["listener"],
                ["information-fill"],
                ["warning-fill"],
                ["success-fill"],
                ["error-fill"],
                ["question-fill"],
                ["heart-fill"],
                ['heart'],
                ['notification-fill'],
                ['notification'],
                ["information"], 
                ["alert"],
                ["question"],
                ["zoom-in"],
                ["zoom-out"],
                ["close-outline"],
                ["check-outline"],
                ["time"],
                ['right-circled', 'arrow'],
                ['down-circled', 'arrow'],
                ['right-circled', 'arrow'],
                ['up-circled', 'arrow'],
                ['right-squared', 'arrow'],
                ['down-squared', 'arrow'],
                ['left-squared', 'arrow'],
                ['up-squared', 'arrow'],
                ['right', 'arrow'],
                ['down', 'arrow'],
                ['left', 'arrow'],
                ['up', 'arrow'],
                ['right-bold', 'arrow'],
                ['down-bold', 'arrow'],
                ['left-bold', 'arrow'],
                ['up-bold', 'arrow'],
                ['sort'],
                ['sort-bold'],
                ['close'],
                ['close-bold'],
                ['check'],
                ['check-bold'],
                ['add'],
                ['add-bold'],
                ['minus'],
                ['minus-bold'],
                ['share'],
                ['tag'],
                ['clone'],
                ['cloud'],
                ['pin'],
                ['home'],
                ['cut'],
                ['server'],
                ['internet'],
                ['mail'],
                ['paper'],
                ['phone'],
                ['panel'],
                ['alarm'],
                ['earphone'],
                ['settings-horizontal'],
                ['settings-vertical'],
                ['settings'],
                ['message'],
                ['return-right'],
                ['picture'],
                ['logout'],
                ['all'],
                ['drag'],
                ['more'],
                ['more-circled'],
                ['folder'],
                ['folder-open'],
                ['lock'],
                ['unlock'],
                ['user'],
                ['users'],
                ['edit'],
                ['location'],
                ['delete'],
                ['calendar'],
                ['search'],
                ['batchsearch'],
                ['hidden'],
                ['visible'],
                ['refresh'],
                ['upload'],
                ['download'],
                ['start'],
                ['stop'],
                ['sortorder'],
            ],
        } as Props
    }

    private config = useConfigContext();

    init() {
        const fonts = this.get('fonts');
        const map: Record<string, boolean> = {};
        fonts.forEach(([font]) => {
            if (map[font]) {
                console.log('duplicated', font);
            }
            map[font] = true;
        });
    }

    filter() {
        const keywords = this.get('keywords')!.trim().toLowerCase();
        const fonts = this.get('fonts');

        if (!keywords) return fonts;

        return fonts.filter((font) => {
            return `${this.config.k}-icon-${font[0]}`.includes(keywords) ||
                font[1] && font[1].includes(keywords);
        });
    }
}
```

```vue-ignore
该示例无展示代码
```

```react-ignore
该示例无展示代码
```
