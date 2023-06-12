---
title: King-Design Icons
order: 3
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
                "tag",
                "clone",
                "information-fill",
                "warning-fill",
                "success-fill",
                "error-fill",
                "question-fill",
                "information", 
                "cloud", 
                "pin", 
                "home", 
                "cut", 
                "servers", 
                "internet", 
                "mail", 
                "paper", 
                "phone", 
                "panel", 
                "alarm", 
                "notification-outline", 
                "earphone", 
                "settings-horizontal", 
                "message", 
                "heart-outline", 
                "return-right", 
                "picture", 
                "logout", 
                "all", 
                "drag", 
                "settings-vertical", 
                "more", 
                "more-circled", 
                "folder", 
                "unlock", 
                "user", 
                "folder-open", 
                "lock", 
                "users", 
                "edit", 
                "location", 
                "delete", 
                "edit2", 
                "settings", 
                "calendar", 
                "search", 
                "alert", 
                "question", 
                "zoom-in", 
                "zoom-out",
                "fault-outline", 
                "truth-circled", 
                "hide", 
                "visible", 
                "time", 
                "refresh", 
                "batchsearch", 
                "refresh2", 
                "upload", 
                "download", 
                "left-squared", 
                "right-squared", 
                "down-squared", 
                "up-squared", 
                "arrow-right-circled", 
                "arrow-down-circled", 
                "arrow-left-circled", 
                "arrow-up-circled", 
                "arrow-up-big", 
                "arrow-left-big", 
                "arrow-down", 
                "arrow-right-big", 
                "arrow-right", 
                "sortfill", 
                "arrow-left", 
                "arrow-up", 
                "arrow-down-big", 
                "sort", 
                "sortbig", 
                "truth", 
                "check", 
                "close-big", 
                "add-small",
                "minus", 
                "close", 
                "minuss-mall", 
                "add-big"
            ]
        }
    }
}
```
