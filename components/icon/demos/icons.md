---
title: King-Design Icons
order: 1
---



```vdt
import {Icon} from 'kpc';

<div class="icons">
    <div class="icon" v-for={this.get('fonts')}>
        <Icon 
            class={'k-icon-' + $value}
            size="large"
        />
        <div>{'k-icon-' + $value}</div>
    </div>
</div>
```

```styl
.icons
    display flex
    flex-wrap wrap
    gap 10px
    text-align center
.icon
    width 100px
```

```ts
export default class extends Component {
    static template = template;

    static defaults() {
        return {
            fonts: [
                'alert',
                'alarm',
                'calendar',
                'application',
                'arrow-right',
                'arrow-up',
                'arrow-left',
                'arrow-down',
                'arrow-expand',
                'arrow-left-circled',
                'arrow-right-circled',
                'close',
                'bill',
                'change',
                'cloud-download',
                'content-squared',
                'cloud',
                'arrow-move',
                'code-download',
                'cloud-server',
                'arrow-shrink',
                'clone',
                'cloud-servers',
                'cart',
                'delete',
                'fault-outline',
                'calculate',
                'arrow-swap',
                'download',
                'information',
                'internet',
                'edit',
                'search',
                'code-working',
                'heart',
                'content',
                'cut',
                'money-square',
                'logout',
                'cloud-upload',
                'lock',
                'corporate',
                'truth-none',
                'resize',
                'protect',
                'time',
                'date',
                'document-change',
                'scanner',
                'notification',
                'notification-outline',
                'silent',
                'heart-outline',
                'share',
                'pay',
                'picture',
                'desktop',
                'earphone',
                'cube',
                'user-verify',
                'fault',
                'location',
                'down-squared',
                'pay-dollar',
                'paperclip',
                'settings',
                'home',
                'more',
                'phonecall',
                'tag',
                'truth-circled',
                'refresh',
                'watch',
                'images',
                'sort',
                'money-circled',
                'trade',
                'star-outline',
                'minus-circled',
                'right',
                'left',
                'up',
                'down',
                'upward',
                'up-circled',
                'pin',
                'hide',
                'users',
                'user',
                'return-right',
                'message',
                'paper',
                'phonecall-prohibit',
                'speedometer',
                'settings-horizontal',
                'phone',
                'star',
                'play',
                'refresh-lock',
                'shield',
                'panel',
                'structure',
                'settings-vertical',
                'printer',
                'stop',
                'return-left',
                'question',
                'unlock',
                'sound-off',
                'up-squared',
                'sound-on',
                'upload',
                'tool',
                'visible',
                'truth',
            ]
        }
    }
}
```
