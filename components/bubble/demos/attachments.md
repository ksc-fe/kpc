---
title: 放置附件
order: 9
---

`attachments` 插槽位于气泡内部顶部、正文之前，适合承载 `FileCard`、`FileCardList` 等富内容。

```vdt
import {Bubble, FileCardList, FileCard} from 'kpc';

<div class="bubble-demo-attachments">
    <Bubble avatar={true} roleName="你" placement="end">
        <b:attachments>
            <FileCardList
                overflow="scrollX"
                items={this.get('userFiles')}
            />
        </b:attachments>
        <b:content>
            请基于这些输入素材做一个 20 秒的介绍短片。
        </b:content>
    </Bubble>

    <Bubble avatar={true} roleName="AI 助手" variant="plain">
        <b:attachments>
            <FileCard
                name="intro.mp4"
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                byte={1024 * 1024 * 18}
                videoProps={{muted: true, playsinline: true}}
                size="large"
            />
        </b:attachments>
    </Bubble>
</div>
```

```styl
.bubble-demo-attachments
    display flex
    flex-direction column
    gap 16px
```

```ts
import type {FileCardListItem} from 'kpc';

interface Props {
    userFiles: FileCardListItem[]
}

export default class extends Component<Props> {
    static template = template;

    static defaults() {
        return {
            userFiles: [
                {
                    key: 'img-1',
                    name: '店铺参考图.jpg',
                    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
                    byte: 1024 * 420,
                },
                {
                    key: 'audio-1',
                    name: '旁白.mp3',
                    type: 'audio',
                    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
                    byte: 1024 * 930,
                },
                {
                    key: 'file-1',
                    name: '分镜脚本.pdf',
                    type: 'file',
                    src: 'https://example.com/storyboard.pdf',
                    byte: 1024 * 120,
                },
            ],
        } as Props;
    }
}
```
