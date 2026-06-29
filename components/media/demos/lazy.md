---
title: 懒加载
order: 3
---

`lazy` 适合放在长列表、消息流中使用。组件会在媒体接近浏览器可视区时再挂载图片、视频封面和音频 metadata 加载器，减少首屏外资源同时发起请求。默认以浏览器视口作为懒加载判断基准。

```vdt
import {Media} from 'kpc';

<div class="media-demo-lazy-demo">
    <div class="media-demo-lazy-intro">向下滚动这个列表，观察媒体项进入浏览器可视区附近后再开始加载。</div>

    <div class="media-demo-lazy-visible">
        <div class="media-demo-lazy-row" v-for={this.get('eagerItems')} key={$value.key}>
            <div class="media-demo-lazy-label">{$value.label}</div>
            <Media
                type={$value.type}
                src={$value.src}
                poster={$value.poster}
                lazy
                showNameTooltip
                name={$value.name}
            />
        </div>
    </div>

    <div class="media-demo-lazy">
        <div class="media-demo-lazy-row" v-for={this.get('lazyItems')} key={$value.key}>
            <div class="media-demo-lazy-label">{$value.label}</div>
            <Media
                type={$value.type}
                src={$value.src}
                poster={$value.poster}
                lazy
                showNameTooltip
                name={$value.name}
            />
        </div>
    </div>
</div>
```

```styl
.media-demo-lazy
    height 320px
    overflow auto
    display flex
    flex-direction column
    gap 12px
    padding 12px
    border 1px solid #E6E6EB
    border-radius 8px
    background #FAFAFB

.media-demo-lazy-visible
    display flex
    flex-direction column
    gap 12px
    margin 12px 0

.media-demo-lazy-intro
    color #4C5160
    font-size 12px
    line-height 18px

.media-demo-lazy-row
    min-height 96px
    display flex
    align-items center
    justify-content space-between
    gap 16px
    padding 12px
    border-radius 8px
    background #FFFFFF

.media-demo-lazy-label
    color #4C5160
    font-size 12px
    line-height 18px
    flex 1
```

```ts
interface DemoItem {
    key: string
    label: string
    type: 'image' | 'video'
    src: string
    poster?: string
    name: string
}

const imageSrc = 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=640&q=80';
const videoPoster = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=640&q=80';
const videoSrc = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';

function withDemoKey(url: string, key: string) {
    const separator = url.includes('?') ? '&' : '?';

    return `${url}${separator}lazy-demo=${encodeURIComponent(key)}`;
}

function createLazyItems(): DemoItem[] {
    return Array.from({length: 16}, (_, index) => {
        const itemNo = index + 1;

        if (index % 2 === 0) {
            return {
                key: `image-${index}`,
                label: `图片 ${itemNo}`,
                type: 'image',
                src: withDemoKey(imageSrc, `image-${index}`),
                name: `图片 ${itemNo}.png`,
            };
        }

        return {
            key: `video-${index}`,
            label: `视频 ${itemNo}`,
            type: 'video',
            src: withDemoKey(videoSrc, `video-${index}`),
            poster: withDemoKey(videoPoster, `video-poster-${index}`),
            name: `视频 ${itemNo}.mp4`,
        };
    });
}

export default class extends Component {
    static template = template;

    static defaults() {
        return {
            eagerItems: [
                {
                    key: 'image-visible',
                    label: '首屏图片',
                    type: 'image',
                    src: withDemoKey(imageSrc, 'image-visible'),
                    name: '首屏图片.png',
                },
                {
                    key: 'video-visible',
                    label: '首屏视频',
                    type: 'video',
                    src: withDemoKey(videoSrc, 'video-visible'),
                    poster: withDemoKey(videoPoster, 'video-poster-visible'),
                    name: '首屏视频.mp4',
                },
            ] as DemoItem[],
            lazyItems: createLazyItems(),
        };
    }
}
```
