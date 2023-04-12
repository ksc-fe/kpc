---
title: King-Design Icons
order: 1
---



```vdt
import {Icon} from 'kpc';

<div class="icons">
    <div class="icon" v-for={this.get('fonts')}>
        <Icon 
            class={`k-icon-${$value}`}
            size="large"
        />
        <div>{`k-icon-${$value}`}</div>
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
                "information-fill",
                "warning-fill",
                "success-fill",
                "error-fill",
                "question-fill",
                "calendar",
                "down-squared",
                "check",
                "arrow-up-circled",
                "edit",
                "arrow-right-circled",
                "earphone",
                "cut",
                "folder",
                "download",
                "folder-open",
                "edit2",
                "drag",
                "delete",
                "heart-outline",
                "fault-outline",
                "hide",
                "home",
                "left-squared",
                "internet",
                "mail",
                "lock",
                "logout",
                "location",
                "message",
                "minussmall",
                "minus",
                "more-circled",
                "more",
                "notification-outline",
                "picture",
                "paper",
                "refresh2",
                "phone",
                "pin",
                "panel",
                "refresh",
                "question",
                "return-right",
                "servers",
                "search",
                "settings-vertical",
                "right-squared",
                "time",
                "sortbig",
                "settings-horizontal",
                "settings",
                "truth-circled",
                "truth",
                "sort",
                "sortfill",
                "unlock",
                "upload", 
                "up-squared",
                "users", 
                "zoom-out",
                "zoom-in",
                "visible",
                "user",
                "information",
                "arrow-bigdown",
                "add-samll",
                "alarm", 
                "add-big",
                "alert",
                "arrow-bigright",
                "arrow-bigleft",
                "arrow-bigup",
                "arrow-down-circled",
                "arrow-left-circled",
                "arrow-left",
                "arrow-right", 
                "arrow-up", 
                "closebig", 
                "batchsearch", 
                "cloud", 
                "arrow-down", 
                "all", 
                "close"
            ]
        }
    }
}
```
