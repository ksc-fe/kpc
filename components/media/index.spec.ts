import {Component} from 'intact';
import {dispatchEvent, getElement, mount, unmount, wait} from '../../test/utils';
import {Media, MediaGroup} from '.';
import {setTheme} from '../../styles/theme';

describe('Media', () => {
    afterEach(() => {
        unmount();
        setTheme({});
    });

    function expectViewerClosed() {
        const viewer = document.querySelector('.k-media-viewer') as HTMLElement | null;

        if (!viewer) {
            expect(viewer).to.eql(null);
            return;
        }

        expect(
            viewer.classList.contains('k-fade-leave-active') ||
            viewer.classList.contains('k-fade-leave-to')
        ).to.be.true;
    }

    function dispatchMediaEvent(target: Element, eventName: string) {
        target.dispatchEvent(new Event(eventName, {bubbles: false, cancelable: true}));
    }

    function getViewerButton(selector: string) {
        return getElement(selector) as HTMLButtonElement;
    }

    function stubNativeGetter(prototype: object, key: string, value: unknown) {
        const descriptor = Object.getOwnPropertyDescriptor(prototype, key);

        Object.defineProperty(prototype, key, {
            configurable: true,
            get: () => typeof value === 'function' ? (value as Function)() : value,
        });

        return () => {
            if (descriptor) {
                Object.defineProperty(prototype, key, descriptor);
            } else {
                delete (prototype as any)[key];
            }
        };
    }

    // 覆盖图片、视频、音频三类基础缩略图。
    it('should render image, video and audio thumbnails', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media type="image" src="https://example.com/cover.png" />
                    <Media type="video" src="https://example.com/demo.mp4" />
                    <Media type="audio" src="https://example.com/demo.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);

        expect(element.querySelectorAll('.k-media').length).to.eql(3);
        expect(element.querySelector('.k-media-image')).not.to.eql(null);
        expect(element.querySelector('.k-media-video')).not.to.eql(null);
        expect(element.querySelector('.k-media-audio-loader')).not.to.eql(null);
        expect(element.querySelector('.k-media-audio-card')).not.to.eql(null);
        expect(
            getComputedStyle(element.querySelector('.k-media-audio-card') as HTMLElement).backgroundColor
        ).to.eql('rgb(243, 245, 246)');
        expect((element.querySelector('.k-media-audio-card-icon') as HTMLImageElement).src).to.contain('data:image/svg+xml');
        expect(element.querySelector('.k-media-audio-card-name')).to.eql(null);
        expect(element.querySelectorAll('.k-media-loading').length).to.eql(3);
        expect(element.querySelectorAll('.k-media-loading-indicator').length).to.eql(3);
        expect(element.querySelectorAll('.k-media-loading-spinner').length).to.eql(3);
        expect(element.querySelector('.k-media-status-layer')).to.eql(null);
    });

    // 视频完成态展示居中的播放入口。
    it('should show play trigger in the center of video thumbnail', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        type="video"
                        status="done"
                        src="https://example.com/demo.mp4"
                        poster="https://example.com/poster.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const video = element.querySelector('video.k-media-video') as HTMLVideoElement;
        const trigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;
        const icon = trigger.querySelector('.k-media-preview-icon') as HTMLElement;
        const overlay = element.querySelector('.k-media-overlay') as HTMLElement;

        expect(video).not.to.eql(null);
        expect(video.preload).to.eql('metadata');
        expect(trigger).not.to.eql(null);
        expect(trigger.className).to.contain('k-media-video-preview-trigger');
        expect(trigger.title).to.eql('播放视频');
        expect(trigger.disabled).to.eql(false);
        expect(icon.className).to.contain('ion-ios-play');
        expect(overlay).not.to.eql(null);
        expect(getComputedStyle(overlay).opacity).to.eql('0');
        expect(getComputedStyle(overlay).backgroundColor).to.eql('rgba(15, 23, 42, 0.42)');
        expect(getComputedStyle(trigger).position).to.eql('absolute');
    });

    // 图片完成态展示 Icon 组件内置的可见图标。
    it('should use visible icon for image preview trigger', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const trigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;
        const icon = trigger.querySelector('.k-media-preview-icon') as HTMLElement;

        expect(trigger).not.to.eql(null);
        expect(trigger.title).to.eql('查看图片');
        expect(icon.className).to.contain('k-icon-visible');
        expect(icon.className).not.to.contain('ion-ios-eye-outline');
    });

    // 无 poster 的视频需等首帧可用后才进入完成态，loading 时展示静态播放标识和加载蒙层，不展示播放 hover 入口。
    it('should wait for video frame when poster is absent', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="video-media"
                        type="video"
                        src="https://example.com/demo.mp4"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.video-media') as HTMLElement;
        const video = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(video.preload).to.eql('auto');
        expect(media.className).to.contain('k-media-loading');
        expect(media.className).not.to.contain('k-media-previewable');
        expect(media.querySelector('.k-media-placeholder-asset')).not.to.eql(null);
        expect(getComputedStyle(video).display).to.eql('none');
        expect(media.querySelector('.k-media-loading-video-icon')).to.eql(null);
        expect(media.querySelector('.k-media-loading-overlay')).to.eql(null);
        expect(media.querySelector('.k-media-overlay')).to.eql(null);
        expect(media.querySelector('.k-media-preview-trigger')).to.eql(null);

        dispatchMediaEvent(video, 'loadedmetadata');
        await wait();

        expect(media.className).to.contain('k-media-loading');
        expect(media.className).not.to.contain('k-media-previewable');
        expect(media.querySelector('.k-media-placeholder-asset')).not.to.eql(null);
        expect(getComputedStyle(video).display).to.eql('none');
        expect(media.querySelector('.k-media-loading-video-icon')).to.eql(null);
        expect(media.querySelector('.k-media-loading-overlay')).to.eql(null);
        expect(media.querySelector('.k-media-overlay')).to.eql(null);
        expect(media.querySelector('.k-media-preview-trigger')).to.eql(null);

        dispatchMediaEvent(video, 'loadeddata');
        await wait();

        expect(media.className).to.contain('k-media-done');
        expect(media.className).to.contain('k-media-previewable');
        expect(getComputedStyle(video).display).not.to.eql('none');
        expect(media.querySelector('.k-media-placeholder')).to.eql(null);
        expect(media.querySelector('.k-media-loading-video-icon')).to.eql(null);
        expect((media.querySelector('.k-media-preview-trigger') as HTMLButtonElement).disabled).to.eql(false);
    });

    // 有 poster 的视频在 metadata 可用后即可展示预览。
    it('should complete video at metadata when poster is present', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="video-media"
                        type="video"
                        src="https://example.com/demo.mp4"
                        poster="https://example.com/poster.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.video-media') as HTMLElement;
        const video = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(video.preload).to.eql('metadata');

        dispatchMediaEvent(video, 'loadedmetadata');
        await wait();

        expect(media.className).to.contain('k-media-done');
        expect(media.querySelector('.k-media-preview-trigger')).not.to.eql(null);
    });

    // 顶层 src/poster 优先于原生 props 中的同名字段。
    it('should keep media-level src and poster ahead of native props', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="video-media"
                        type="video"
                        src="https://example.com/demo.mp4"
                        videoProps={{
                            src: 'https://example.com/native.mp4',
                            poster: 'https://example.com/native-poster.png',
                            controls: true,
                            'data-native': 'video',
                        }}
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.video-media') as HTMLElement;
        const video = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(video.getAttribute('src')).to.eql('https://example.com/demo.mp4');
        expect(video.getAttribute('poster')).to.eql(null);
        expect(video.controls).to.eql(true);
        expect(video.getAttribute('data-native')).to.eql('video');
        expect(video.preload).to.eql('auto');

        dispatchMediaEvent(video, 'loadedmetadata');
        await wait();

        expect(media.className).to.contain('k-media-loading');
    });

    // src 变化时重建 video，避免热更新保留旧资源状态。
    it('should remount video when src changes', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="video-media"
                        type="video"
                        src={this.get('src')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    src: 'https://example.com/demo.mp4',
                };
            }

            Media = Media;
        }

        const [instance, element] = mount(Demo);
        const media = element.querySelector('.video-media') as HTMLElement;
        const firstVideo = element.querySelector('video.k-media-video') as HTMLVideoElement;

        dispatchMediaEvent(firstVideo, 'loadeddata');
        await wait();

        expect(media.className).to.contain('k-media-done');

        (instance as any).set('src', 'https://example.com/next.mp4');
        await wait();

        const nextVideo = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(nextVideo).not.to.eql(firstVideo);
        expect(nextVideo.getAttribute('src')).to.eql('https://example.com/next.mp4');
        expect(media.className).to.contain('k-media-loading');
    });

    // poster 变化时重建 video，覆盖有封面和无封面互切。
    it('should remount video when poster changes', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="video-media"
                        type="video"
                        src="https://example.com/demo.mp4"
                        poster={this.get('poster')}
                    />
                </div>
            `;

            static defaults() {
                return {
                    poster: 'https://example.com/poster.png',
                };
            }

            Media = Media;
        }

        const [instance, element] = mount(Demo);
        const media = element.querySelector('.video-media') as HTMLElement;
        const videoWithPoster = element.querySelector('video.k-media-video') as HTMLVideoElement;

        dispatchMediaEvent(videoWithPoster, 'loadedmetadata');
        await wait();

        expect(media.className).to.contain('k-media-done');
        expect(videoWithPoster.getAttribute('poster')).to.eql('https://example.com/poster.png');

        (instance as any).set('poster', undefined);
        await wait();

        const videoWithoutPoster = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(videoWithoutPoster).not.to.eql(videoWithPoster);
        expect(videoWithoutPoster.getAttribute('poster')).to.eql(null);
        expect(media.className).to.contain('k-media-loading');

        (instance as any).set('poster', 'https://example.com/next-poster.png');
        await wait();

        const videoWithNextPoster = element.querySelector('video.k-media-video') as HTMLVideoElement;

        expect(videoWithNextPoster).not.to.eql(videoWithoutPoster);
        expect(videoWithNextPoster.getAttribute('poster')).to.eql('https://example.com/next-poster.png');
        expect(media.className).to.contain('k-media-loading');
    });

    // 完成态媒体默认允许展示预览遮罩。
    it('should render preview overlay for done media', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="done-image" type="image" status="done" src="https://example.com/cover.png" />
                    <Media className="done-video" type="video" status="done" src="https://example.com/demo.mp4" />
                    <Media className="done-audio" type="audio" status="done" src="https://example.com/demo.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);

        ['done-image', 'done-video', 'done-audio'].forEach(className => {
            const media = element.querySelector(`.${className}`) as HTMLElement;

            expect(media.className).to.contain('k-media-previewable');
            expect(media.querySelector('.k-media-overlay')).not.to.eql(null);
            expect(media.querySelector('.k-media-preview-trigger')).not.to.eql(null);
        });
    });

    // loading 蒙层只覆盖已加载出的真实图片/视频资源；占位图和默认音频 loading 不额外压暗。
    it('should render loading overlay only for visual media with source', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="loading-image" type="image" status="loading" src="https://example.com/cover.png" />
                    <Media className="loading-video" type="video" status="loading" src="https://example.com/demo.mp4" />
                    <Media className="placeholder-image" type="image" status="loading" />
                    <Media className="placeholder-video" type="video" status="loading" />
                    <Media className="loading-audio" type="audio" status="loading" src="https://example.com/demo.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const image = element.querySelector('.loading-image img.k-media-image') as HTMLImageElement;
        const video = element.querySelector('.loading-video video.k-media-video') as HTMLVideoElement;

        ['loading-image', 'loading-video', 'placeholder-image', 'placeholder-video', 'loading-audio'].forEach(className => {
            expect(element.querySelector(`.${className} .k-media-loading-overlay`)).to.eql(null);
        });
        expect(getComputedStyle(image).display).to.eql('none');
        expect(getComputedStyle(video).display).to.eql('none');

        dispatchMediaEvent(image, 'load');
        dispatchMediaEvent(video, 'loadeddata');
        await wait();

        ['loading-image', 'loading-video'].forEach(className => {
            expect(element.querySelector(`.${className} .k-media-loading-overlay`)).not.to.eql(null);
        });
        expect(element.querySelector('.loading-audio .k-media-loading-overlay')).to.eql(null);
        expect(element.querySelector('.loading-image .k-media-placeholder')).to.eql(null);
        expect(element.querySelector('.loading-video .k-media-placeholder')).to.eql(null);
        expect(getComputedStyle(image).display).not.to.eql('none');
        expect(getComputedStyle(video).display).not.to.eql('none');
    });

    // 外部保持 loading 时，资源未加载出先展示占位图；资源加载出后再展示真实媒体。
    it('should keep placeholder visible until visual source is loaded under loading status', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <Media type="image" status="loading" src="https://example.com/loading.png" />
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.classList.contains('k-media') ? element : element.querySelector('.k-media') as HTMLElement;
        const image = element.querySelector('img.k-media-image') as HTMLImageElement;

        expect(media.className).to.contain('k-media-loading');
        expect(image).not.to.eql(null);
        expect(getComputedStyle(image).display).to.eql('none');
        expect(media.querySelector('.k-media-placeholder-asset')).not.to.eql(null);
        expect(media.querySelector('.k-media-loading-overlay')).to.eql(null);

        dispatchMediaEvent(image, 'load');
        await wait();

        expect(media.className).to.contain('k-media-loading');
        expect(getComputedStyle(image).display).not.to.eql('none');
        expect(media.querySelector('.k-media-placeholder')).to.eql(null);
        expect(media.querySelector('.k-media-loading-overlay')).not.to.eql(null);
    });

    // showPreview=false 时完成态也不生成预览入口。
    it('should hide preview overlay when showPreview is false', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="no-preview"
                        type="image"
                        status="done"
                        showPreview={false}
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.no-preview') as HTMLElement;

        expect(media.className).not.to.contain('k-media-previewable');
        expect(media.querySelector('.k-media-overlay')).to.eql(null);
        expect(media.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // mask 插槽仅在 default/done 状态生效，loading/error 不展示。
    it('should render mask slot only in default and done status', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="mask-default" type="image">
                        <b:mask args="media">
                            <div class="mask-slot-default">{media.status}</div>
                        </b:mask>
                    </Media>
                    <Media className="mask-done" type="image" status="done" src="https://example.com/cover.png">
                        <b:mask args="media">
                            <div class="mask-slot-done">{media.status}</div>
                        </b:mask>
                    </Media>
                    <Media className="mask-loading" type="image" status="loading" src="https://example.com/cover.png">
                        <b:mask args="media">
                            <div class="mask-slot-loading">{media.status}</div>
                        </b:mask>
                    </Media>
                    <Media className="mask-error" type="image" status="error" src="https://example.com/cover.png">
                        <b:mask args="media">
                            <div class="mask-slot-error">{media.status}</div>
                        </b:mask>
                    </Media>
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);

        expect((element.querySelector('.mask-default') as HTMLElement).className).to.contain('k-media-custom-mask');
        expect((element.querySelector('.mask-done') as HTMLElement).className).to.contain('k-media-custom-mask');
        expect((element.querySelector('.mask-loading') as HTMLElement).className).not.to.contain('k-media-custom-mask');
        expect((element.querySelector('.mask-error') as HTMLElement).className).not.to.contain('k-media-custom-mask');
        expect(element.querySelector('.mask-slot-default')?.textContent).to.contain('default');
        expect(element.querySelector('.mask-slot-done')?.textContent).to.contain('done');
        expect(element.querySelector('.mask-slot-loading')).to.eql(null);
        expect(element.querySelector('.mask-slot-error')).to.eql(null);
    });

    // mask 生效时接管预览入口，不再显示默认预览按钮。
    it('should hide default preview trigger when mask slot is active', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="mask-preview" type="image" status="done" src="https://example.com/cover.png">
                        <b:mask args="media">
                            <button class="mask-action" type="button">{media.name || 'mask'}</button>
                        </b:mask>
                    </Media>
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.mask-preview') as HTMLElement;

        expect(media.querySelector('.mask-action')).not.to.eql(null);
        expect(media.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // mask 插槽可以通过 preview(event) 主动触发预览。
    it('should open preview by custom mask preview handler', async () => {
        const previewCalls: any[] = [];

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="mask-preview-open"
                        type="image"
                        status="done"
                        name="封面图"
                        src="https://example.com/cover.png"
                        ev-preview={this.onPreview}
                    >
                        <b:mask args="media">
                            <button
                                class="mask-open"
                                type="button"
                                disabled={!media.canPreview}
                                ev-click={media.preview}
                            >open</button>
                        </b:mask>
                    </Media>
                </div>
            `;

            Media = Media;

            onPreview = (media: any, e: MouseEvent) => {
                previewCalls.push({media, eventType: e.type});
            };
        }

        const [, element] = mount(Demo);
        const maskOpen = element.querySelector('.mask-open') as HTMLButtonElement;

        maskOpen.click();
        await wait(0);

        expect(previewCalls.length).to.eql(1);
        expect(previewCalls[0].eventType).to.eql('click');
        expect(previewCalls[0].media).to.include({
            name: '封面图',
            resolvedType: 'image',
            status: 'done',
            src: 'https://example.com/cover.png',
        });
        expect(getElement('.k-media-viewer')).not.to.eql(null);
        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('封面图');
    });

    // 无 src 且无外部状态时展示默认占位，不进入 loading；图片/视频使用内置 SVG 占位图。
    it('should render default placeholder when src and status are absent', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="empty-media" />
                    <Media className="empty-video" type="video" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.empty-media') as HTMLElement;
        const video = element.querySelector('.empty-video') as HTMLElement;
        const imageAsset = media.querySelector('.k-media-placeholder-asset') as HTMLImageElement;
        const videoAsset = video.querySelector('.k-media-placeholder-asset') as HTMLImageElement;

        expect(media.className).to.contain('k-media-image');
        expect(media.className).to.contain('k-media-default');
        expect(media.className).not.to.contain('k-media-previewable');
        expect(media.getAttribute('title')).to.eql('未命名文件');
        expect(media.querySelector('.k-media-placeholder')).not.to.eql(null);
        expect(imageAsset).not.to.eql(null);
        expect(imageAsset.src).to.contain('data:image/svg+xml');
        expect(imageAsset.src).to.contain('M4.5%207');
        expect(getComputedStyle(imageAsset).width).to.eql('16px');
        expect(getComputedStyle(imageAsset).height).to.eql('16px');
        expect(videoAsset).not.to.eql(null);
        expect(videoAsset.src).to.contain('data:image/svg+xml');
        expect(videoAsset.src).to.contain('M1.33282%204.4165');
        expect(getComputedStyle(videoAsset).width).to.eql('16px');
        expect(getComputedStyle(videoAsset).height).to.eql('16px');
        expect(media.querySelector('.k-media-image')).to.eql(null);
        expect(media.querySelector('.k-media-loading-indicator')).to.eql(null);
        expect(media.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // 未传 type 时根据 name/src 文件名推断媒体类型。
    it('should infer media type from name or src', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="infer-image" status="done" src="https://example.com/cover.webp?x=1" />
                    <Media className="infer-video" name="clip.webm" status="done" src="https://example.com/resource" />
                    <Media className="infer-audio" status="done" src="https://example.com/audio.m4a#hash" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const image = element.querySelector('.infer-image') as HTMLElement;
        const video = element.querySelector('.infer-video') as HTMLElement;
        const audio = element.querySelector('.infer-audio') as HTMLElement;

        expect(image.className).to.contain('k-media-image');
        expect(image.querySelector('img.k-media-image')).not.to.eql(null);
        expect(video.className).to.contain('k-media-video');
        expect(video.querySelector('video.k-media-video')).not.to.eql(null);
        expect(audio.className).to.contain('k-media-audio');
        expect(audio.querySelector('.k-media-audio-card')).not.to.eql(null);
    });

    // click 和 preview 事件分别返回缩略图信息和预览信息。
    it('should trigger click and preview events with media payload', async () => {
        const clickCalls: any[] = [];
        const previewCalls: any[] = [];

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="event-media"
                        name="封面图"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        ev-click={this.onClick}
                        ev-preview={this.onPreview}
                    />
                </div>
            `;

            Media = Media;

            onClick = (media: any, e: MouseEvent) => {
                clickCalls.push({media, eventType: e.type});
            };

            onPreview = (media: any, e: MouseEvent) => {
                previewCalls.push({media, eventType: e.type});
            };
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.event-media') as HTMLElement;
        const trigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;

        media.click();
        await wait();

        expect(clickCalls.length).to.eql(1);
        expect(clickCalls[0].media).to.include({
            name: '封面图',
            type: 'image',
            resolvedType: 'image',
            status: 'done',
            src: 'https://example.com/cover.png',
            size: 'default',
        });
        expect(clickCalls[0].eventType).to.eql('click');

        trigger.click();
        await wait();

        expect(clickCalls.length).to.eql(1);
        expect(previewCalls.length).to.eql(1);
        expect(previewCalls[0].media).to.include({
            name: '封面图',
            type: 'image',
            resolvedType: 'image',
            status: 'done',
            src: 'https://example.com/cover.png',
            size: 'default',
        });
        expect(previewCalls[0].eventType).to.eql('click');
        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('封面图');
    });

    // imageProps/audioProps 透传原生属性，并移除被组件接管的事件属性。
    it('should pass native image and audio props without leaking handled events', async () => {
        const calls: string[] = [];

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        type="image"
                        src="https://example.com/cover.png"
                        imageProps={{
                            onerror: this.onImageError,
                            'data-native': 'image',
                        }}
                    />
                    <Media
                        type="audio"
                        src="https://example.com/demo.mp3"
                        audioProps={{
                            onloadedmetadata: this.onAudioLoad,
                            preload: 'auto',
                            'data-native': 'audio',
                        }}
                    />
                </div>
            `;

            Media = Media;

            onImageError = () => {
                calls.push('image-error');
            };

            onAudioLoad = () => {
                calls.push('audio-load');
            };
        }

        const [, element] = mount(Demo);
        const image = element.querySelector('img.k-media-image') as HTMLImageElement;
        const audio = element.querySelector('audio.k-media-audio-loader') as HTMLAudioElement;

        expect(image.getAttribute('data-native')).to.eql('image');
        expect(image.getAttribute('onerror')).to.eql(null);
        expect(audio.preload).to.eql('auto');
        expect(audio.getAttribute('data-native')).to.eql('audio');
        expect(audio.getAttribute('onloadedmetadata')).to.eql(null);

        dispatchMediaEvent(image, 'error');
        dispatchMediaEvent(audio, 'loadedmetadata');
        await wait();

        expect(calls).to.eql(['image-error', 'audio-load']);
    });

    // 原生媒体事件驱动内部自动状态切换。
    it('should update automatic status from native media events', async () => {
        const calls: string[] = [];

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="image-media" type="image" src="https://example.com/cover.png" ev-load={this.onLoad} ev-loadError={this.onLoadError} />
                    <Media className="video-media" type="video" src="https://example.com/demo.mp4" ev-load={this.onLoad} />
                    <Media className="audio-media" type="audio" src="https://example.com/demo.mp3" ev-load={this.onLoad} />
                </div>
            `;

            Media = Media;

            onLoad = (media: any) => {
                calls.push(`load:${media.resolvedType}`);
            };

            onLoadError = (media: any) => {
                calls.push(`error:${media.resolvedType}`);
            };
        }

        const [, element] = mount(Demo);
        const imageMedia = element.querySelector('.image-media') as HTMLElement;
        const videoMedia = element.querySelector('.video-media') as HTMLElement;
        const audioMedia = element.querySelector('.audio-media') as HTMLElement;

        expect(imageMedia.className).to.contain('k-media-loading');
        expect(videoMedia.className).to.contain('k-media-loading');
        expect(audioMedia.className).to.contain('k-media-loading');

        dispatchMediaEvent(element.querySelector('img.k-media-image')!, 'load');
        dispatchMediaEvent(element.querySelector('video.k-media-video')!, 'loadeddata');
        dispatchMediaEvent(element.querySelector('audio.k-media-audio-loader')!, 'loadedmetadata');
        await wait();

        expect(imageMedia.className).to.contain('k-media-done');
        expect(videoMedia.className).to.contain('k-media-done');
        expect(audioMedia.className).to.contain('k-media-done');
        expect(element.querySelector('.k-media-loading-indicator')).to.eql(null);
        expect(calls).to.eql(['load:image', 'load:video', 'load:audio']);

        dispatchMediaEvent(element.querySelector('img.k-media-image')!, 'error');
        await wait();

        expect(imageMedia.className).to.contain('k-media-error');
        expect(imageMedia.querySelector('.k-media-error-card')).not.to.eql(null);
        expect(imageMedia.querySelector('.k-media-placeholder')).to.eql(null);
        expect(imageMedia.querySelector('.k-media-status-layer')).to.eql(null);
        expect(imageMedia.querySelector('.k-media-preview-trigger')).to.eql(null);
        expect(calls).to.eql(['load:image', 'load:video', 'load:audio', 'error:image']);
    });

    // 原生事件先更新内部状态，再调用用户传入的回调。
    it('should merge native handlers', async () => {
        const calls: string[] = [];
        let imageMedia: HTMLElement;

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="image-media"
                        type="image"
                        src="https://example.com/cover.png"
                        imageProps={{
                            onload: this.onImageLoad,
                        }}
                    />
                </div>
            `;

            Media = Media;

            onImageLoad = () => {
                calls.push('load');
            };
        }

        const [, element] = mount(Demo);
        imageMedia = element.querySelector('.image-media') as HTMLElement;

        dispatchMediaEvent(element.querySelector('img.k-media-image')!, 'load');
        await wait();

        expect(imageMedia.className).to.contain('k-media-done');
        expect(calls).to.eql(['load']);
        expect(element.querySelector('img.k-media-image')!.getAttribute('onload')).to.eql(null);
    });

    // 缓存资源错过事件时，通过原生 ready 状态补齐完成态。
    it('should sync automatic status from native media state', async () => {
        const restores = [
            stubNativeGetter(HTMLImageElement.prototype, 'complete', true),
            stubNativeGetter(HTMLImageElement.prototype, 'naturalWidth', 120),
            stubNativeGetter(HTMLImageElement.prototype, 'naturalHeight', 80),
            stubNativeGetter(HTMLMediaElement.prototype, 'readyState', 2),
        ];

        try {
            class Demo extends Component {
                static template = `
                    const { Media } = this;
                    <div>
                        <Media className="image-media" type="image" src="https://example.com/cover.png" />
                        <Media className="video-media" type="video" src="https://example.com/demo.mp4" />
                        <Media className="audio-media" type="audio" src="https://example.com/demo.mp3" />
                    </div>
                `;

                Media = Media;
            }

            const [, element] = mount(Demo);

            await wait();

            expect((element.querySelector('.image-media') as HTMLElement).className).to.contain('k-media-done');
            expect((element.querySelector('.video-media') as HTMLElement).className).to.contain('k-media-done');
            expect((element.querySelector('.audio-media') as HTMLElement).className).to.contain('k-media-done');
            expect(element.querySelector('.k-media-loading-indicator')).to.eql(null);
            expect(element.querySelectorAll('.k-media-preview-trigger').length).to.eql(3);
        } finally {
            restores.forEach(restore => restore());
        }
    });

    // 外部 status 优先级高于内部自动状态。
    it('should let status prop override internal status', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="loading-media" type="image" status="loading" src="https://example.com/loading.png" />
                    <Media className="error-media" type="video" status="error" src="https://example.com/error.mp4" />
                    <Media className="done-media" type="audio" status="done" src="https://example.com/done.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const loadingMedia = element.querySelector('.loading-media') as HTMLElement;
        const errorMedia = element.querySelector('.error-media') as HTMLElement;
        const doneMedia = element.querySelector('.done-media') as HTMLElement;

        dispatchMediaEvent(loadingMedia.querySelector('img.k-media-image')!, 'load');
        dispatchMediaEvent(doneMedia.querySelector('audio.k-media-audio-loader')!, 'error');
        await wait();

        expect(loadingMedia.className).to.contain('k-media-loading');
        expect(loadingMedia.querySelector('.k-media-loading-spinner')).not.to.eql(null);
        expect(loadingMedia.querySelector('.k-media-status-layer')).to.eql(null);
        expect(errorMedia.className).to.contain('k-media-error');
        expect(errorMedia.querySelector('.k-media-error-card')).not.to.eql(null);
        expect(errorMedia.querySelector('.k-media-placeholder')).to.eql(null);
        expect(errorMedia.querySelector('.k-media-status-layer')).to.eql(null);
        expect(doneMedia.className).to.contain('k-media-done');
        expect(doneMedia.querySelector('.k-media-loading-indicator')).to.eql(null);
        expect((doneMedia.querySelector('.k-media-preview-trigger') as HTMLButtonElement).disabled).to.eql(false);
    });

    // 音频 loading 展示居中的音频图标，并和图片/视频一致展示左上角加载圆圈。
    it('should render centered audio icon and loading indicator for loading audio card', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="audio-loading" type="audio" status="loading" src="https://example.com/loading.mp3" />
                    <Media className="audio-loading-mini" type="audio" size="mini" status="loading" src="https://example.com/loading.mp3" />
                    <Media className="audio-loading-compact" type="audio" width={20} height={28} status="loading" src="https://example.com/loading.mp3" />
                    <Media className="audio-loading-single-width" type="audio" width={18} status="loading" src="https://example.com/loading.mp3" />
                    <Media className="audio-loading-custom-size" type="audio" size={22} status="loading" src="https://example.com/loading.mp3" />
                    <Media className="audio-loading-wide" type="audio" width={36} height={40} status="loading" src="https://example.com/loading.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const audio = element.querySelector('.audio-loading') as HTMLElement;
        const mini = element.querySelector('.audio-loading-mini') as HTMLElement;
        const compact = element.querySelector('.audio-loading-compact') as HTMLElement;
        const singleWidth = element.querySelector('.audio-loading-single-width') as HTMLElement;
        const customSize = element.querySelector('.audio-loading-custom-size') as HTMLElement;
        const wide = element.querySelector('.audio-loading-wide') as HTMLElement;
        const icon = audio.querySelector('.k-media-audio-card-icon') as HTMLElement;
        const miniIcon = mini.querySelector('.k-media-audio-card-icon') as HTMLElement;
        const compactIcon = compact.querySelector('.k-media-audio-card-icon') as HTMLElement;
        const singleWidthIcon = singleWidth.querySelector('.k-media-audio-card-icon') as HTMLElement;
        const customSizeIcon = customSize.querySelector('.k-media-audio-card-icon') as HTMLElement;
        const wideIcon = wide.querySelector('.k-media-audio-card-icon') as HTMLElement;

        expect(audio.querySelector('.k-media-audio-card-name')).to.eql(null);
        expect(audio.querySelector('.k-media-loading-indicator')).not.to.eql(null);
        expect(audio.querySelector('.k-media-loading-spinner')).not.to.eql(null);
        expect(mini.querySelector('.k-media-audio-card-name')).to.eql(null);
        expect(getComputedStyle(icon).width).to.eql('32px');
        expect(getComputedStyle(icon).height).to.eql('32px');
        expect(getComputedStyle(miniIcon).width).to.eql('24px');
        expect(getComputedStyle(miniIcon).height).to.eql('24px');
        expect(getComputedStyle(compactIcon).width).to.eql('20px');
        expect(getComputedStyle(compactIcon).height).to.eql('20px');
        expect(getComputedStyle(singleWidthIcon).width).to.eql('18px');
        expect(getComputedStyle(singleWidthIcon).height).to.eql('18px');
        expect(getComputedStyle(customSizeIcon).width).to.eql('22px');
        expect(getComputedStyle(customSizeIcon).height).to.eql('22px');
        expect(getComputedStyle(wideIcon).width).to.eql('32px');
        expect(getComputedStyle(wideIcon).height).to.eql('32px');
    });

    // 图片/视频 loading 使用骨架底图和小型加载圆圈。
    it('should render skeleton loading styles with spinner', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="loading-media" type="image" status="loading" src="https://example.com/loading.png" />
                    <Media className="mini-loading-media" type="image" size="mini" status="loading" src="https://example.com/loading.png" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const shell = element.querySelector('.loading-media .k-media-shell') as HTMLElement;
        const indicator = element.querySelector('.loading-media .k-media-loading-indicator') as HTMLElement;
        const spinner = element.querySelector('.loading-media .k-media-loading-spinner') as HTMLElement;
        const miniIndicator = element.querySelector('.mini-loading-media .k-media-loading-indicator') as HTMLElement;
        const miniSpinner = element.querySelector('.mini-loading-media .k-media-loading-spinner') as HTMLElement;
        const shellStyle = getComputedStyle(shell);

        expect(shellStyle.backgroundImage).to.contain('linear-gradient');
        expect(shellStyle.backgroundSize).to.eql('400% 100%');
        expect(getComputedStyle(indicator).top).to.eql('3px');
        expect(getComputedStyle(indicator).left).to.eql('3px');
        expect(getComputedStyle(spinner).width).to.eql('12px');
        expect(getComputedStyle(spinner).height).to.eql('12px');
        expect(getComputedStyle(miniIndicator).top).to.eql('4px');
        expect(getComputedStyle(miniSpinner).width).to.eql('10px');
    });

    // loading 圆圈颜色跟随主题主色，和 Bubble loading 点一致。
    it('should use theme primary color for loading spinner', async () => {
        setTheme({
            color: {
                primary: '#7c3aed',
            },
        });

        class Demo extends Component {
            static template = `
                const { Media } = this;
                <Media type="image" status="loading" src="https://example.com/loading.png" />
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const spinner = element.querySelector('.k-media-loading-spinner') as HTMLElement;
        const style = getComputedStyle(spinner);

        expect(style.borderTopColor).to.eql('rgb(124, 58, 237)');
        expect(style.borderRightColor).to.eql('rgba(124, 58, 237, 0.22)');
    });

    // loading/error 插槽可接管默认状态层展示。
    it('should render custom loading and error slots', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="custom-loading"
                        name="上传中.png"
                        type="image"
                        status="loading"
                        src="https://example.com/loading.png"
                    >
                        <b:loading args="media">
                            <div class="custom-loading-slot">
                                {media.status} / {media.resolvedType} / {media.name}
                            </div>
                        </b:loading>
                    </Media>
                    <Media
                        className="custom-error"
                        name="加载失败.mp4"
                        type="video"
                        status="error"
                        src="https://example.com/error.mp4"
                    >
                        <b:error args="media">
                            <button class="custom-error-slot" type="button">
                                {media.status} / {media.resolvedType} / {media.name}
                            </button>
                        </b:error>
                    </Media>
                    <Media
                        className="custom-audio-loading"
                        name="上传中.mp3"
                        type="audio"
                        status="loading"
                        src="https://example.com/loading.mp3"
                    >
                        <b:loading args="media">
                            <div class="custom-audio-loading-slot">
                                {media.status} / {media.resolvedType} / {media.name}
                            </div>
                        </b:loading>
                    </Media>
                    <Media
                        className="custom-audio-error"
                        name="加载失败.mp3"
                        type="audio"
                        status="error"
                        src="https://example.com/error.mp3"
                    >
                        <b:error args="media">
                            <div class="custom-audio-error-slot">
                                {media.status} / {media.resolvedType} / {media.name}
                            </div>
                        </b:error>
                    </Media>
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const loading = element.querySelector('.custom-loading') as HTMLElement;
        const error = element.querySelector('.custom-error') as HTMLElement;
        const audioLoading = element.querySelector('.custom-audio-loading') as HTMLElement;
        const audioError = element.querySelector('.custom-audio-error') as HTMLElement;

        expect(loading.querySelector('.custom-loading-slot')?.textContent).to.contain('loading / image / 上传中.png');
        expect(loading.querySelector('.k-media-loading-layer')).not.to.eql(null);
        expect(loading.querySelector('.k-media-loading-indicator')).to.eql(null);
        expect(loading.querySelector('.k-media-preview-trigger')).to.eql(null);

        expect(error.querySelector('.custom-error-slot')?.textContent).to.contain('error / video / 加载失败.mp4');
        expect(error.querySelector('.k-media-error-layer')).not.to.eql(null);
        expect(error.querySelector('.k-media-placeholder')).to.eql(null);
        expect(error.querySelector('.k-media-preview-trigger')).to.eql(null);

        expect(audioLoading.querySelector('.custom-audio-loading-slot')?.textContent).to.contain('loading / audio / 上传中.mp3');
        expect(audioLoading.querySelector('.k-media-loading-layer')).not.to.eql(null);
        expect(audioLoading.querySelector('.k-media-loading-indicator')).to.eql(null);
        expect(audioLoading.querySelector('.k-media-audio-card')).to.eql(null);

        expect(audioError.querySelector('.custom-audio-error-slot')?.textContent).to.contain('error / audio / 加载失败.mp3');
        expect(audioError.querySelector('.k-media-error-layer')).not.to.eql(null);
        expect(audioError.querySelector('.k-media-audio-card')).to.eql(null);
    });

    // loading/error/mask 插槽为空时，不接管默认状态和预览入口。
    it('should ignore empty state and mask slots', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="empty-loading" type="image" status="loading" src="https://example.com/loading.png">
                        <b:loading>
                            <span v-if={false} class="empty-loading-slot">loading</span>
                        </b:loading>
                    </Media>
                    <Media className="empty-error" type="image" status="error" src="https://example.com/error.png">
                        <b:error>
                            <span v-if={false} class="empty-error-slot">error</span>
                        </b:error>
                    </Media>
                    <Media className="empty-mask" type="image" status="done" src="https://example.com/cover.png">
                        <b:mask>
                            <button v-if={false} class="empty-mask-slot" type="button">open</button>
                        </b:mask>
                    </Media>
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const loading = element.querySelector('.empty-loading') as HTMLElement;
        const error = element.querySelector('.empty-error') as HTMLElement;
        const mask = element.querySelector('.empty-mask') as HTMLElement;

        expect(loading.className).not.to.contain('k-media-custom-loading');
        expect(loading.querySelector('.k-media-loading-layer')).to.eql(null);
        expect(loading.querySelector('.k-media-loading-indicator')).not.to.eql(null);

        expect(error.className).not.to.contain('k-media-custom-error');
        expect(error.querySelector('.k-media-error-layer')).to.eql(null);
        expect(error.querySelector('.k-media-error-card')).not.to.eql(null);
        expect(error.querySelector('.k-media-placeholder')).to.eql(null);

        expect(mask.className).not.to.contain('k-media-custom-mask');
        expect(mask.querySelector('.k-media-preview-trigger')).not.to.eql(null);
    });

    // 图片/视频/音频 error 展示居中的灰色类型图标，不展示默认失败文案。
    it('should render centered gray media icons for failed media cards', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="image-error" type="image" status="error" src="https://example.com/error.png" />
                    <Media className="image-error-compact" type="image" width={20} height={28} status="error" src="https://example.com/error.png" />
                    <Media className="video-error" type="video" status="error" src="https://example.com/error.mp4" />
                    <Media className="audio-error" type="audio" status="error" src="https://example.com/error.mp3" />
                    <Media className="audio-error-mini" type="audio" size="mini" status="error" src="https://example.com/error.mp3" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const image = element.querySelector('.image-error') as HTMLElement;
        const imageCompact = element.querySelector('.image-error-compact') as HTMLElement;
        const video = element.querySelector('.video-error') as HTMLElement;
        const audio = element.querySelector('.audio-error') as HTMLElement;
        const mini = element.querySelector('.audio-error-mini') as HTMLElement;
        const imageIcon = image.querySelector('.k-media-error-card-icon') as HTMLImageElement;
        const compactIcon = imageCompact.querySelector('.k-media-error-card-icon') as HTMLElement;
        const videoIcon = video.querySelector('.k-media-error-card-icon') as HTMLImageElement;
        const audioIcon = audio.querySelector('.k-media-error-card-icon') as HTMLImageElement;
        const miniIcon = mini.querySelector('.k-media-error-card-icon') as HTMLElement;

        expect(element.querySelectorAll('.k-media-error-card').length).to.eql(5);
        expect(element.querySelector('.k-media-placeholder')).to.eql(null);
        expect(imageIcon.src).to.contain('ECECEC');
        expect(imageIcon.src).to.contain('D6DCE7');
        expect(videoIcon.src).to.contain('ECECEC');
        expect(videoIcon.src).to.contain('D6DCE7');
        expect(audioIcon.src).to.contain('ECECEC');
        expect(audioIcon.src).to.contain('D6DCE7');
        expect(getComputedStyle(imageIcon).width).to.eql('32px');
        expect(getComputedStyle(imageIcon).height).to.eql('32px');
        expect(getComputedStyle(compactIcon).width).to.eql('20px');
        expect(getComputedStyle(compactIcon).height).to.eql('20px');
        expect(getComputedStyle(miniIcon).width).to.eql('24px');
        expect(getComputedStyle(miniIcon).height).to.eql('24px');
        expect(element.querySelector('.k-media-status-layer')).to.eql(null);
    });

    // 名称 Tooltip 默认关闭，显式开启后图片/视频/音频缩略图 hover 时展示最大 160px 的名称。
    it('should hide media name tooltip by default and allow enabling it', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="image-with-tooltip"
                        name="很长很长很长很长很长很长的图片名称.png"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        showNameTooltip={true}
                        nameTooltipProps={{position: 'bottom'}}
                    />
                    <Media
                        className="video-with-tooltip"
                        name="产品预告.mp4"
                        type="video"
                        status="done"
                        src="https://example.com/demo.mp4"
                        showNameTooltip={true}
                    />
                    <Media
                        className="audio-with-tooltip"
                        name="很长很长很长很长很长很长的音频名称.mp3"
                        type="audio"
                        status="done"
                        src="https://example.com/demo.mp3"
                        showNameTooltip={true}
                    />
                    <Media
                        className="audio-without-tooltip"
                        name="普通音频.mp3"
                        type="audio"
                        status="done"
                        src="https://example.com/normal.mp3"
                        showNameTooltip={false}
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const imageWithTooltip = element.querySelector('.image-with-tooltip') as HTMLElement;
        const videoWithTooltip = element.querySelector('.video-with-tooltip') as HTMLElement;
        const audioWithTooltip = element.querySelector('.audio-with-tooltip') as HTMLElement;
        const withoutTooltip = element.querySelector('.audio-without-tooltip') as HTMLElement;
        const imageTooltipTrigger = imageWithTooltip.querySelector('.k-media-name-tooltip-trigger') as HTMLElement;
        const videoTooltipTrigger = videoWithTooltip.querySelector('.k-media-name-tooltip-trigger') as HTMLElement;
        const audioTooltipTrigger = audioWithTooltip.querySelector('.k-media-name-tooltip-trigger') as HTMLElement;
        const icon = audioWithTooltip.querySelector('.k-media-audio-card-icon') as HTMLElement;

        expect(imageWithTooltip.getAttribute('title')).to.eql(null);
        expect(videoWithTooltip.getAttribute('title')).to.eql(null);
        expect(audioWithTooltip.getAttribute('title')).to.eql(null);
        expect(withoutTooltip.getAttribute('title')).to.eql('普通音频.mp3');
        expect(audioWithTooltip.querySelector('.k-media-audio-card-name')).to.eql(null);
        expect(imageTooltipTrigger).not.to.eql(null);
        expect(videoTooltipTrigger).not.to.eql(null);
        expect(audioTooltipTrigger).not.to.eql(null);
        expect(withoutTooltip.querySelector('.k-media-name-tooltip-trigger')).to.eql(null);
        expect(getComputedStyle(icon).width).to.eql('32px');
        expect(getComputedStyle(icon).height).to.eql('32px');

        dispatchEvent(imageTooltipTrigger, 'mouseenter');
        await wait(0);

        let content = getElement('.k-tooltip-content')!;
        let name = content.querySelector('.k-media-name-tooltip-content') as HTMLElement;

        expect(content).not.to.eql(null);
        expect(content.textContent).to.contain('很长很长很长很长很长很长的图片名称.png');
        expect(content.className).to.contain('k-light');
        expect(name.style.maxWidth).to.eql('160px');
        expect(getComputedStyle(name).textOverflow).to.eql('ellipsis');
        expect(content.querySelector('.k-tooltip-arrow')!.className).to.contain('k-top');

        dispatchEvent(imageTooltipTrigger, 'mouseleave');
        await wait(0);

        const videoPreviewTrigger = videoWithTooltip.querySelector('.k-media-video-preview-trigger') as HTMLElement;

        dispatchEvent(videoPreviewTrigger, 'mouseenter');
        await wait(0);

        content = getElement('.k-tooltip-content')!;
        expect(content.textContent).to.contain('产品预告.mp4');
        expect(content.className).to.contain('k-light');

        dispatchEvent(videoPreviewTrigger, 'mouseleave');
        await wait(0);

        dispatchEvent(audioTooltipTrigger, 'mouseenter');
        await wait(0);

        content = getElement('.k-tooltip-content')!;
        name = content.querySelector('.k-media-name-tooltip-content') as HTMLElement;

        expect(content.textContent).to.contain('很长很长很长很长很长很长的音频名称.mp3');
        expect(name.style.maxWidth).to.eql('160px');
    });

    // size 支持预设尺寸和自定义正方形尺寸。
    it('should support named and custom sizes', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="small-media" type="image" size="small" src="https://example.com/a.png" />
                    <Media className="custom-media" type="image" size={88} src="https://example.com/b.png" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const small = element.querySelector('.small-media') as HTMLElement;
        const custom = element.querySelector('.custom-media') as HTMLElement;

        expect(small.className).to.contain('k-media-small');
        expect(custom.style.width).to.eql('88px');
        expect(custom.style.height).to.eql('88px');
    });

    // width/height 单边传入时镜像另一边，双边传入时各自生效。
    it('should mirror single width or height and respect explicit dimensions', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media className="width-only" type="image" width={120} src="https://example.com/a.png" />
                    <Media className="height-only" type="image" height="48px" src="https://example.com/b.png" />
                    <Media className="both-dimensions" type="image" width={120} height={80} src="https://example.com/c.png" />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const widthOnly = element.querySelector('.width-only') as HTMLElement;
        const heightOnly = element.querySelector('.height-only') as HTMLElement;
        const both = element.querySelector('.both-dimensions') as HTMLElement;

        expect(widthOnly.style.width).to.eql('120px');
        expect(widthOnly.style.height).to.eql('120px');
        expect(heightOnly.style.width).to.eql('48px');
        expect(heightOnly.style.height).to.eql('48px');
        expect(both.style.width).to.eql('120px');
        expect(both.style.height).to.eql('80px');
    });

    // 根节点透传 class/style/data/aria 等通用属性。
    it('should pass rest props to root element', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        className="rest-media"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        style={{marginTop: '3px'}}
                        data-id="media"
                        aria-label="媒体缩略图"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const media = element.querySelector('.rest-media') as HTMLElement;

        expect(media.style.marginTop).to.eql('3px');
        expect(media.getAttribute('data-id')).to.eql('media');
        expect(media.getAttribute('aria-label')).to.eql('媒体缩略图');
    });

    // 单项预览可打开并通过关闭按钮关闭。
    it('should open and close standalone preview', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        name="封面图"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const trigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;

        trigger.click();
        await wait();

        const viewer = getElement('.k-media-viewer') as HTMLElement;

        expect(viewer).not.to.eql(null);
        expect(getComputedStyle(viewer).position).to.eql('fixed');
        expect(getComputedStyle(viewer).display).to.eql('flex');
        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('封面图');

        (getElement('.k-media-viewer-close') as HTMLButtonElement).click();
        await wait(400);

        expectViewerClosed();
    });

    // 单项预览支持挂载到指定 Portal 容器。
    it('should mount standalone preview into custom container', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <div id="media-preview-container"></div>
                    <Media
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        container="#media-preview-container"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);

        (element.querySelector('.k-media-preview-trigger') as HTMLButtonElement).click();
        await wait();

        const container = element.querySelector('#media-preview-container') as HTMLElement;

        expect(container.querySelector('.k-media-viewer')).not.to.eql(null);
    });

    // 点击真实预览内容不关闭，点击内容空白区或遮罩关闭。
    it('should close standalone preview on mask click only', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const previewTrigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;
        expect(previewTrigger).to.exist;
        previewTrigger.click();
        await wait(60);

        const stage = getElement('.k-media-viewer-stage') as HTMLElement;
        expect(stage).to.exist;
        const content = stage.querySelector('.k-media-viewer-image, .k-media-viewer-video, .k-media-viewer-audio') as HTMLElement;
        expect(content).to.exist;

        content.click();
        await wait();

        expect(getElement('.k-media-viewer')).not.to.eql(null);

        const viewer = getElement('.k-media-viewer') as HTMLElement;
        expect(viewer).to.exist;
        viewer.click();
        await wait(400);

        expectViewerClosed();
    });

    // 预览层关闭、上一张、下一张按钮带有无障碍文案。
    it('should render accessibility labels for viewer buttons', async () => {
        class Demo extends Component {
            static template = `
                const { Media, MediaGroup } = this;
                <MediaGroup>
                    <Media name="第一张" type="image" status="done" src="https://example.com/1.png" />
                    <Media name="第二张" type="image" status="done" src="https://example.com/2.png" />
                </MediaGroup>
            `;

            Media = Media;
            MediaGroup = MediaGroup;
        }

        const [, element] = mount(Demo);

        (element.querySelector('.k-media-preview-trigger') as HTMLButtonElement).click();
        await wait();

        expect(getViewerButton('.k-media-viewer-close').getAttribute('aria-label')).to.eql('关闭预览');
        expect(getViewerButton('.k-media-viewer-close').title).to.eql('关闭预览');
        expect(getViewerButton('.k-media-viewer-prev').getAttribute('aria-label')).to.eql('上一个');
        expect(getViewerButton('.k-media-viewer-prev').title).to.eql('上一个');
        expect(getViewerButton('.k-media-viewer-next').getAttribute('aria-label')).to.eql('下一个');
        expect(getViewerButton('.k-media-viewer-next').title).to.eql('下一个');
    });

    // 音频预览复用缩略图中的默认音频封面素材。
    it('should use the same audio asset in standalone preview', async () => {
        class Demo extends Component {
            static template = `
                const { Media } = this;
                <div>
                    <Media
                        name="播客片段.mp3"
                        type="audio"
                        status="done"
                        src="https://example.com/demo.mp3"
                    />
                </div>
            `;

            Media = Media;
        }

        const [, element] = mount(Demo);
        const trigger = element.querySelector('.k-media-preview-trigger') as HTMLButtonElement;

        trigger.click();
        await wait();

        const cover = getElement('.k-media-viewer-audio-cover-image') as HTMLImageElement;

        expect(cover).not.to.eql(null);
        expect(cover.src).to.contain('data:image/svg+xml');

        (getElement('.k-media-viewer-close') as HTMLButtonElement).click();
        await wait(400);

        expectViewerClosed();
    });

    // MediaGroup 支持前后切换，并在首尾正确禁用按钮。
    it('should switch preview items in media group and disable boundary buttons', async () => {
        class Demo extends Component {
            static template = `
                const { Media, MediaGroup } = this;
                <MediaGroup>
                    <Media name="第一张" type="image" status="done" src="https://example.com/1.png" />
                    <Media name="第二张" type="image" status="done" src="https://example.com/2.png" />
                    <Media name="第三张" type="image" status="done" src="https://example.com/3.png" />
                </MediaGroup>
            `;

            Media = Media;
            MediaGroup = MediaGroup;
        }

        const [, element] = mount(Demo);
        const group = getElement('.k-media-group') as HTMLElement;
        const firstMedia = element.querySelector('.k-media') as HTMLElement;
        const triggers = element.querySelectorAll('.k-media-preview-trigger');

        expect(getComputedStyle(group).display).to.eql('inline-flex');
        expect(getComputedStyle(firstMedia).width).to.eql('64px');
        expect(getComputedStyle(firstMedia).height).to.eql('64px');

        (triggers[0] as HTMLButtonElement).click();
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第一张');
        expect(getElement('.k-media-viewer-counter')?.textContent).to.contain('1 / 3');
        expect(getViewerButton('.k-media-viewer-prev').disabled).to.eql(true);
        expect(getViewerButton('.k-media-viewer-next').disabled).to.eql(false);

        getViewerButton('.k-media-viewer-prev').click();
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第一张');

        getViewerButton('.k-media-viewer-next').click();
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第二张');
        expect(getViewerButton('.k-media-viewer-prev').disabled).to.eql(false);
        expect(getViewerButton('.k-media-viewer-next').disabled).to.eql(false);

        getViewerButton('.k-media-viewer-prev').click();
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第一张');
        expect(getViewerButton('.k-media-viewer-prev').disabled).to.eql(true);

        getViewerButton('.k-media-viewer-next').click();
        await wait();

        dispatchEvent(document, 'keydown', {keyCode: 39});
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第三张');
        expect(getElement('.k-media-viewer-counter')?.textContent).to.contain('3 / 3');
        expect(getViewerButton('.k-media-viewer-prev').disabled).to.eql(false);
        expect(getViewerButton('.k-media-viewer-next').disabled).to.eql(true);

        getViewerButton('.k-media-viewer-next').click();
        await wait();

        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('第三张');

        dispatchEvent(document, 'keydown', {keyCode: 27});
        await wait(400);

        expectViewerClosed();
    });

    // MediaGroup 的预览层同样支持挂载到指定 Portal 容器。
    it('should mount media group preview into custom container', async () => {
        class Demo extends Component {
            static template = `
                const { Media, MediaGroup } = this;
                <div>
                    <div id="media-group-preview-container"></div>
                    <MediaGroup container="#media-group-preview-container">
                        <Media name="第一张" type="image" status="done" src="https://example.com/1.png" />
                        <Media name="第二张" type="image" status="done" src="https://example.com/2.png" />
                    </MediaGroup>
                </div>
            `;

            Media = Media;
            MediaGroup = MediaGroup;
        }

        const [, element] = mount(Demo);

        (element.querySelector('.k-media-preview-trigger') as HTMLButtonElement).click();
        await wait();

        const container = element.querySelector('#media-group-preview-container') as HTMLElement;

        expect(container.querySelector('.k-media-viewer')).not.to.eql(null);
        expect(container.querySelector('.k-media-viewer-counter')?.textContent).to.contain('1 / 2');
    });
});
