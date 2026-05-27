import {Component} from 'intact';
import {getElement, mount, unmount, wait} from '../../test/utils';
import {FileCard, FileCardList} from '.';

describe('FileCard', () => {
    afterEach(() => {
        unmount();
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

    // 文件卡片和显式媒体卡片走不同外形，媒体内部复用 Media。
    it('should render file and media card types with Media inside', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard, FileCardList } = this;
                <div>
                    <FileCard name="spec.pdf" type="file" byte={1024} src="https://example.com/spec.pdf" />
                    <FileCard name="cover.png" type="image" src="https://example.com/cover.png" />
                    <FileCardList items={[
                        {key: 'video', name: 'demo.mp4', type: 'video', src: 'https://example.com/demo.mp4'},
                        {key: 'audio', name: 'voice.mp3', type: 'audio', src: 'https://example.com/voice.mp3'},
                    ]} />
                </div>
            `;

            FileCard = FileCard;
            FileCardList = FileCardList;
        }

        const [, element] = mount(Demo);

        expect(element.querySelectorAll('.k-file-card').length).to.eql(4);
        expect(element.querySelector('.k-file-card-file')).not.to.eql(null);
        expect(element.querySelectorAll('.k-file-card-media').length).to.eql(3);
        expect(element.querySelector('.k-file-card-type-image .k-media-image')).not.to.eql(null);
        expect(element.querySelector('.k-file-card-type-video .k-media-video')).not.to.eql(null);
        expect(element.querySelector('.k-file-card-type-audio .k-media-audio')).not.to.eql(null);
    });

    // 显式媒体卡片可开启名称 Tooltip，文件行左侧媒体缩略图固定关闭。
    it('should pass name tooltip setting to media cards only', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard, FileCardList } = this;
                <div>
                    <FileCard className="image-tooltip" name="cover.png" type="image" src="https://example.com/cover.png" showNameTooltip />
                    <FileCard className="video-tooltip" name="demo.mp4" type="video" src="https://example.com/demo.mp4" showNameTooltip />
                    <FileCard className="audio-tooltip" name="voice.mp3" type="audio" src="https://example.com/voice.mp3" showNameTooltip />
                    <FileCard className="default-media-tooltip" name="default.png" type="image" src="https://example.com/default.png" />
                    <FileCard className="file-row-tooltip" name="row.png" type="file" src="https://example.com/row.png" showNameTooltip />
                    <FileCardList className="list-tooltip" showNameTooltip items={[
                        {key: 'audio', name: 'list.mp3', type: 'audio', src: 'https://example.com/list.mp3'},
                        {key: 'image', name: 'list.png', type: 'image', src: 'https://example.com/list.png'},
                        {key: 'video-off', name: 'off.mp4', type: 'video', src: 'https://example.com/off.mp4', showNameTooltip: false},
                        {key: 'file-row', name: 'row-list.png', type: 'file', src: 'https://example.com/row-list.png'},
                    ]} />
                </div>
            `;

            FileCard = FileCard;
            FileCardList = FileCardList;
        }

        const [, element] = mount(Demo);
        const imageMedia = element.querySelector('.image-tooltip .k-file-card-media-view') as HTMLElement;
        const videoMedia = element.querySelector('.video-tooltip .k-file-card-media-view') as HTMLElement;
        const audioMedia = element.querySelector('.audio-tooltip .k-file-card-media-view') as HTMLElement;
        const listMedia = element.querySelector('.list-tooltip .k-file-card-media-view') as HTMLElement;
        const listMediaViews = element.querySelectorAll('.list-tooltip .k-file-card-media-view');
        const listFileRowMedia = element.querySelector('.list-tooltip .k-file-card-file-media-view') as HTMLElement;
        const defaultMedia = element.querySelector('.default-media-tooltip .k-file-card-media-view') as HTMLElement;
        const fileRowMedia = element.querySelector('.file-row-tooltip .k-file-card-file-media-view') as HTMLElement;

        [imageMedia, videoMedia, audioMedia, listMedia, listMediaViews[1]].forEach(media => {
            expect(media.querySelector('.k-media-name-tooltip-trigger')).not.to.eql(null);
            expect(media.getAttribute('title')).to.eql(null);
        });

        expect(listMediaViews[2].querySelector('.k-media-name-tooltip-trigger')).to.eql(null);
        expect(listMediaViews[2].getAttribute('title')).to.eql('off.mp4');
        expect(listFileRowMedia.querySelector('.k-media-name-tooltip-trigger')).to.eql(null);
        expect(listFileRowMedia.getAttribute('title')).to.eql('row-list.png');
        expect(defaultMedia.querySelector('.k-media-name-tooltip-trigger')).to.eql(null);
        expect(defaultMedia.getAttribute('title')).to.eql('default.png');
        expect(fileRowMedia.querySelector('.k-media-name-tooltip-trigger')).to.eql(null);
        expect(fileRowMedia.getAttribute('title')).to.eql('row.png');
    });

    // 普通文件按扩展名使用内置设计图标。
    it('should render builtin file icons by extension', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard className="word" name="a.docx" type="file" />
                    <FileCard className="sheet" name="b.csv" type="file" />
                    <FileCard className="txt" name="c.txt" type="file" />
                    <FileCard className="pdf" name="d.pdf" type="file" />
                    <FileCard className="md" name="e.md" type="file" />
                    <FileCard className="code" name="f.ts" type="file" />
                    <FileCard className="ppt" name="g.pptx" type="file" />
                    <FileCard className="zip" name="h.zip" type="file" />
                    <FileCard className="fallback" name="i.unknown" type="file" />
                    <FileCard className="image-no-src" name="k.png" type="file" />
                    <FileCard className="video-no-preview" name="l.mp4" type="file" showPreview={false} src="https://example.com/l.mp4" />
                    <FileCard className="audio-no-preview" name="m.mp3" type="file" showPreview={false} src="https://example.com/m.mp3" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const word = (element.querySelector('.word .k-file-card-file-icon-img') as HTMLImageElement).src;
        const sheet = (element.querySelector('.sheet .k-file-card-file-icon-img') as HTMLImageElement).src;
        const txt = (element.querySelector('.txt .k-file-card-file-icon-img') as HTMLImageElement).src;
        const pdf = (element.querySelector('.pdf .k-file-card-file-icon-img') as HTMLImageElement).src;
        const md = (element.querySelector('.md .k-file-card-file-icon-img') as HTMLImageElement).src;
        const code = (element.querySelector('.code .k-file-card-file-icon-img') as HTMLImageElement).src;
        const ppt = (element.querySelector('.ppt .k-file-card-file-icon-img') as HTMLImageElement).src;
        const zip = (element.querySelector('.zip .k-file-card-file-icon-img') as HTMLImageElement).src;
        const fallback = (element.querySelector('.fallback .k-file-card-file-icon-img') as HTMLImageElement).src;
        const imageNoSrc = (element.querySelector('.image-no-src .k-file-card-file-icon-img') as HTMLImageElement).src;
        const videoNoPreview = (element.querySelector('.video-no-preview .k-file-card-file-icon-img') as HTMLImageElement).src;
        const audioNoPreview = (element.querySelector('.audio-no-preview .k-file-card-file-icon-img') as HTMLImageElement).src;

        [word, sheet, txt, pdf, md, code, ppt, zip, fallback, imageNoSrc, videoNoPreview, audioNoPreview].forEach(src => {
            expect(src).to.contain('data:image/svg+xml');
        });
        expect(word).not.to.eql(pdf);
        expect(sheet).not.to.eql(zip);
        expect(md).not.to.eql(code);
        expect(imageNoSrc).not.to.eql(videoNoPreview);
        expect(videoNoPreview).not.to.eql(audioNoPreview);
        expect(element.querySelector('.video-no-preview .k-file-card-file-media-view')).to.eql(null);
        expect(element.querySelector('.audio-no-preview .k-file-card-file-media-view')).to.eql(null);
    });

    // type=file 始终保持文件行外形，但媒体资源会用左侧小 Media 缩略图。
    it('should keep file layout and render media thumbnail for explicit file type', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="封面图.png"
                        type="file"
                        status="loading"
                        percent={30}
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;
        const media = element.querySelector('.k-file-card-file-media-view') as HTMLElement;

        expect(card.className).to.contain('k-file-card-file');
        expect(card.className).not.to.contain('k-file-card-media');
        expect(media).not.to.eql(null);
        expect(media.className).to.contain('k-media-loading');
        expect(media.className).not.to.contain('k-media-custom-loading');
        expect((element.querySelector('.k-file-card-file-shell') as HTMLElement).style.getPropertyValue('--file-card-progress-percent')).to.eql('30%');
        expect(element.querySelector('.k-file-card-description')?.textContent).to.contain('上传中... 30%');
        expect(element.querySelector('.k-file-card-description')?.textContent).not.to.contain('KB');
    });

    // 显式视频卡片 loading 时，进度展示在 loading 圈右侧，文案居中展示。
    it('should pass status to media card and show video progress beside spinner', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="result.mp4"
                        type="video"
                        status="loading"
                        percent={56}
                        loadingText="处理中"
                        src="https://example.com/result.mp4"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;
        const media = element.querySelector('.k-file-card-media-view') as HTMLElement;

        expect(card.className).to.contain('k-file-card-media');
        expect(card.className).to.contain('k-file-card-progressing');
        expect(media.className).to.contain('k-media-loading');
        expect(element.querySelector('.k-media-loading-indicator')).not.to.eql(null);
        expect(element.querySelector('.k-file-card-media-loading-text')?.textContent).to.contain('处理中');
        expect(element.querySelector('.k-file-card-media-progress-text')?.textContent).to.contain('56%');
    });

    // 显式图片卡片 loading 且有 percent 时，同样展示进度文案。
    it('should show image progress beside spinner when loading', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        status="loading"
                        percent={43}
                        src="https://example.com/cover.png"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-media-loading-indicator')).not.to.eql(null);
        expect(element.querySelector('.k-file-card-media-progress-text')?.textContent).to.contain('43%');
    });

    // 显式媒体卡片外层不额外定义尺寸，宽高完全跟随内部 Media。
    it('should let media card size follow inner Media', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="cover.png" type="image" size="small" src="https://example.com/cover.png" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;
        const media = element.querySelector('.k-media') as HTMLElement;

        expect(getComputedStyle(card).width).to.eql(getComputedStyle(media).width);
        expect(getComputedStyle(card).height).to.eql(getComputedStyle(media).height);
    });

    // 普通文件卡片默认宽度为 160px。
    it('should render default file card width as 160px', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="a.pdf" type="file" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;

        expect(getComputedStyle(card).width).to.eql('160px');
    });

    // 显式媒体 loading 文案仅在指定 loadingText 时展示。
    it('should show media loading text only when loadingText is specified', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="a.png" type="image" status="loading" src="https://example.com/a.png" />
                    <FileCard name="b.png" type="image" status="loading" loadingText="处理中" src="https://example.com/b.png" />
                    <FileCard name="a.mp4" type="video" status="loading" loadingText="" src="https://example.com/a.mp4" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelectorAll('.k-media-loading-indicator').length).to.eql(3);
        expect(element.querySelectorAll('.k-file-card-media-loading-text').length).to.eql(1);
        expect(element.querySelector('.k-file-card-media-loading-text')?.textContent).to.contain('处理中');
    });

    // mini 文件卡片默认只展示图标和文件名，不展示描述区。
    it('should hide description in mini file card', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="voice.mp3" type="file" size="mini" byte={1024} />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;

        expect(card.className).to.contain('k-file-card-mini');
        expect(element.querySelector('.k-file-card-title')?.textContent).to.contain('voice.mp3');
        expect(element.querySelector('.k-file-card-description')).to.eql(null);
    });

    // mini 文件卡片在 loading/error 时，状态文案占据标题位置。
    it('should show loading and error status text in mini file title area', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="uploading.pdf" type="file" size="mini" status="loading" percent={80} />
                    <FileCard name="error.pdf" type="file" size="mini" status="error" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const cards = element.querySelectorAll('.k-file-card');

        expect(cards[0].querySelector('.k-file-card-title')?.textContent).to.contain('上传中... 80%');
        expect(cards[0].querySelector('.k-file-card-title')?.textContent).not.to.contain('uploading.pdf');
        expect(cards[1].querySelector('.k-file-card-title')?.textContent).to.contain('上传失败');
        expect(cards[1].querySelector('.k-file-card-title')?.textContent).not.to.contain('error.pdf');
        expect(cards[1].querySelector('.k-file-card-title-status-error')).not.to.eql(null);
    });

    // type=file 的背景进度使用整张卡片底色，不再渲染 Progress 组件。
    it('should render file progress as card background instead of Progress component', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="assets.zip" type="file" status="loading" percent={62} byte={1024 * 20} />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;

        expect((element.querySelector('.k-file-card-file-shell') as HTMLElement).style.getPropertyValue('--file-card-progress-percent')).to.eql('62%');
        expect(element.querySelector('.k-progress')).to.eql(null);
        expect(element.querySelector('.k-file-card-description')?.textContent).to.contain('上传中... 62%');
        expect(element.querySelector('.k-file-card-description')?.textContent).not.to.contain('KB');
    });

    // errorText 在文件错误状态下优先于 description 和 byte。
    it('should prioritize errorText over description and byte when status is error', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="broken.pdf"
                        type="file"
                        status="error"
                        description="普通描述"
                        errorText="上传失败，请重试"
                        byte={1024 * 20}
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const text = element.querySelector('.k-file-card-description')?.textContent || '';

        expect(text).to.contain('上传失败，请重试');
        expect(text).not.to.contain('普通描述');
        expect(text).not.to.contain('20 KB');
    });

    // 显式图片/视频上传失败时，有 src 也展示错误占位，错误文案仅在指定 errorText 时展示。
    it('should render media error state with source and show text only when specified', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        src="https://example.com/cover.png"
                        status="error"
                    />
                    <FileCard
                        name="clip.mp4"
                        type="video"
                        src="https://example.com/clip.mp4"
                        status="error"
                        errorText="上传失败"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const cards = element.querySelectorAll('.k-file-card');
        const artwork = cards[1].querySelector('.k-file-card-media-error-artwork-content') as HTMLElement;
        const icon = artwork.querySelector('.k-file-card-media-error-artwork-icon') as HTMLImageElement;

        expect(cards[0].className).to.contain('k-file-card-error');
        expect(cards[0].querySelector('img.k-media-image')).to.eql(null);
        expect(cards[1].querySelector('video.k-media-video')).to.eql(null);
        expect(cards[0].querySelector('.k-media-error-card')).not.to.eql(null);
        expect(cards[1].querySelector('.k-media-error-card')).to.eql(null);
        expect(cards[0].querySelector('.k-file-card-error-text')).to.eql(null);
        expect(cards[1].querySelector('.k-file-card-error-text')?.textContent).to.contain('上传失败');
        expect(cards[1].className).to.contain('k-file-card-media-error-artwork');
        expect(icon.src).to.contain('ECECEC');
        expect(getComputedStyle(cards[0]).borderColor).not.to.eql('rgb(237, 64, 64)');
        expect(element.querySelector('.k-media-placeholder')).to.eql(null);
        expect(element.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // 显式图片上传失败时，不再等待 src 加载失败，直接展示上传失败 artwork。
    it('should render upload error artwork immediately for visual media with source', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        src="https://example.com/cover.png"
                        status="error"
                        errorText="上传失败"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const artwork = element.querySelector('.k-file-card-media-error-artwork-content') as HTMLElement;

        expect(artwork).not.to.eql(null);
        expect(element.querySelector('img.k-media-image')).to.eql(null);
        expect(element.querySelector('.k-file-card-media-status-layer')).to.eql(null);
        expect(artwork.querySelector('.k-file-card-error-text')?.textContent).to.contain('上传失败');
    });

    // 无 src 的显式媒体错误态使用灰色图标，错误文案仅在指定 errorText 时展示。
    it('should render gray media error icon and show text only when errorText is specified', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        status="error"
                        errorText="上传失败"
                    />
                    <FileCard
                        name="clip.mp4"
                        type="video"
                        status="error"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const cards = element.querySelectorAll('.k-file-card');
        const shell = cards[0].querySelector('.k-file-card-media-view .k-media-shell') as HTMLElement;
        const artwork = cards[0].querySelector('.k-file-card-media-error-artwork-content') as HTMLElement;
        const text = artwork.querySelector('.k-file-card-error-text') as HTMLElement;
        const icon = artwork.querySelector('.k-file-card-media-error-artwork-icon') as HTMLImageElement;
        const style = getComputedStyle(shell);
        const artworkStyle = getComputedStyle(artwork);

        expect(style.boxShadow).to.eql('none');
        expect(getComputedStyle(cards[0]).borderColor).not.to.eql('rgb(237, 64, 64)');
        expect(style.borderTopColor).not.to.eql('rgb(237, 64, 64)');
        expect(artwork).not.to.eql(null);
        expect(icon.src).to.contain('ECECEC');
        expect(text?.textContent).to.contain('上传失败');
        expect(artworkStyle.display).to.eql('flex');
        expect(artworkStyle.flexDirection).to.eql('column');
        expect(artworkStyle.alignItems).to.eql('center');
        expect(artworkStyle.justifyContent).to.eql('center');
        expect(artworkStyle.gap).to.eql('4px');
        expect(getComputedStyle(icon).width).to.eql('32px');
        expect(getComputedStyle(icon).height).to.eql('32px');
        expect(getComputedStyle(text).color).to.eql('rgb(255, 68, 51)');
        expect(cards[0].className).to.contain('k-file-card-media-error-artwork');
        expect(cards[1].querySelector('.k-file-card-error-text')).to.eql(null);
        expect(cards[1].querySelector('.k-file-card-media-error-artwork-content')).to.eql(null);
        expect(cards[1].querySelector('.k-media-error-card')).not.to.eql(null);
    });

    // 显式视频在 mini 尺寸下，percent 仍会展示进度文本。
    it('should show video progress text in mini size when percent is provided', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="result.mp4"
                        type="video"
                        size="mini"
                        status="loading"
                        percent={56}
                        src="https://example.com/result.mp4"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-file-card-media-progress-text')?.textContent).to.contain('56%');
    });

    // 文件行卡片 loading 时不展示 hover mask，避免和进度/状态层冲突。
    it('should not render file mask slot when status is loading', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="a.pdf"
                        type="file"
                        status="loading"
                    >
                        <b:mask>
                            <span class="mask-content">操作区</span>
                        </b:mask>
                    </FileCard>
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const mask = element.querySelector('.k-file-card-file-mask') as HTMLElement;

        expect(mask).to.eql(null);
        expect(element.querySelector('.mask-content')).to.eql(null);
    });

    // 文件行的 description/mask 插槽为空时，不保留空描述行和空遮罩层。
    it('should not render wrappers for empty file description and mask slots', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="a.pdf"
                        type="file"
                    >
                        <b:description>
                            <span v-if={false} class="empty-description">描述</span>
                        </b:description>
                        <b:mask>
                            <span v-if={false} class="empty-mask">操作</span>
                        </b:mask>
                    </FileCard>
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-file-card-description')).to.eql(null);
        expect(element.querySelector('.k-file-card-file-mask')).to.eql(null);
    });

    // 显式媒体卡片会将 mask 扩展点透传给 Media，并由自定义按钮触发预览。
    it('should forward mask slot to media card and open preview via mask action', async () => {
        class Demo extends Component<{previewCount: number}> {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        ev-preview={() => this.set('previewCount', this.get('previewCount') + 1)}
                    >
                        <b:mask args="media">
                            <button
                                class="media-mask-open"
                                type="button"
                                disabled={!media.canPreview}
                                ev-click={media.preview}
                            >open</button>
                        </b:mask>
                    </FileCard>
                </div>
            `;

            static defaults() {
                return {
                    previewCount: 0,
                };
            }

            FileCard = FileCard;
        }

        const [instance, element] = mount(Demo);
        const button = element.querySelector('.media-mask-open') as HTMLButtonElement;

        expect(button).not.to.eql(null);
        expect(element.querySelector('.k-media-preview-trigger')).to.eql(null);

        button.click();
        await wait();

        expect(instance.get('previewCount')).to.eql(1);
        expect(getElement('.k-media-viewer')).not.to.eql(null);
        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('cover.png');
    });

    // 显式音频媒体仅在有 loading 文案或进度时展示 loading 蒙层，文案颜色与图片/视频一致。
    it('should render audio loading overlay only when status text or progress is visible', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        className="audio-loading-empty"
                        name="plain.mp3"
                        type="audio"
                        status="loading"
                        src="https://example.com/plain.mp3"
                    />
                    <FileCard
                        className="audio-loading-text"
                        name="voice.mp3"
                        type="audio"
                        status="loading"
                        loadingText="上传中"
                        percent={37}
                        src="https://example.com/voice.mp3"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const emptyAudio = element.querySelector('.audio-loading-empty') as HTMLElement;
        const textAudio = element.querySelector('.audio-loading-text') as HTMLElement;
        const loadingText = textAudio.querySelector('.k-file-card-media-loading-text') as HTMLElement;

        expect(emptyAudio.querySelector('.k-file-card-media-loading-overlay')).to.eql(null);
        expect(textAudio.querySelector('.k-file-card-media-loading-overlay')).not.to.eql(null);
        expect(textAudio.querySelector('.k-media-loading-overlay')).to.eql(null);
        expect(textAudio.querySelector('.k-media-loading-indicator')).not.to.eql(null);
        expect(loadingText.textContent).to.contain('上传中');
        expect(getComputedStyle(loadingText).color).to.eql('rgb(255, 255, 255)');
        expect(textAudio.querySelector('.k-file-card-media-progress-text')?.textContent).to.contain('37%');
        expect(textAudio.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // 小尺寸媒体卡片不展示居中的 loading 文案。
    it('should hide loading text in compact image and video cards', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        size="small"
                        status="loading"
                        src="https://example.com/cover.png"
                    />
                    <FileCard
                        name="clip.mp4"
                        type="video"
                        size="mini"
                        status="loading"
                        src="https://example.com/clip.mp4"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelectorAll('.k-file-card-media-loading-text').length).to.eql(0);
        expect(getElement('.k-tooltip-content')).to.not.exist;
    });

    // 音频 error 文案仅在指定 errorText 时展示，mini 尺寸不展示文案。
    it('should render audio error artwork when errorText is specified and hide text in mini size', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="voice.mp3"
                        type="audio"
                        status="error"
                        errorText="上传失败"
                        src="https://example.com/voice.mp3"
                    />
                    <FileCard
                        name="voice-mini.mp3"
                        type="audio"
                        size="mini"
                        status="error"
                        errorText="上传失败"
                        src="https://example.com/voice-mini.mp3"
                    />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);
        const cards = element.querySelectorAll('.k-file-card');
        const artwork = cards[0].querySelector('.k-file-card-media-error-artwork-content') as HTMLElement;
        const icon = artwork.querySelector('.k-file-card-media-error-artwork-icon') as HTMLImageElement;

        expect(cards[0].querySelector('.k-file-card-error-text')?.textContent).to.contain('上传失败');
        expect(getComputedStyle(artwork).gap).to.eql('4px');
        expect(cards[0].querySelector('.k-file-card-media-status-layer')).to.eql(null);
        expect(cards[0].className).to.contain('k-file-card-media-error-artwork');
        expect(icon.src).to.contain('ECECEC');
        expect(cards[1].querySelector('.k-file-card-error-text')).to.eql(null);
        expect(cards[1].querySelector('.k-file-card-media-error-artwork-content')).to.eql(null);
    });

    // 删除按钮位于右上角外侧，并阻止触发卡片点击。
    it('should render corner delete button and trigger delete only', async () => {
        const calls: string[] = [];

        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="spec.pdf"
                        showDelIcon
                        ev-click={this.onClick}
                        ev-delete={this.onDelete}
                    />
                </div>
            `;

            FileCard = FileCard;

            onClick = () => {
                calls.push('click');
            };

            onDelete = () => {
                calls.push('delete');
            };
        }

        const [, element] = mount(Demo);
        const button = element.querySelector('.k-file-card-delete') as HTMLElement;
        const style = getComputedStyle(button);

        button.click();
        await wait();

        expect(button.tagName).to.eql('DIV');
        expect(button.className).not.to.contain('k-btn');
        expect(style.top).to.eql('2px');
        expect(style.right).to.eql('2px');
        expect(style.transform).to.eql('none');
        expect(calls).to.eql(['delete']);
    });

    // 媒体预览由内部 Media 负责，同时 FileCard 继续抛出 preview 事件。
    it('should preview media through Media viewer and trigger preview event', async () => {
        class Demo extends Component<{previewCount: number}> {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard
                        name="cover.png"
                        type="image"
                        status="done"
                        src="https://example.com/cover.png"
                        ev-preview={() => this.set('previewCount', this.get('previewCount') + 1)}
                    />
                </div>
            `;

            static defaults() {
                return {
                    previewCount: 0,
                };
            }

            FileCard = FileCard;
        }

        const [instance, element] = mount(Demo);
        const previewTrigger = element.querySelector('.k-media-preview-trigger') as HTMLElement;

        previewTrigger.click();
        await wait();

        expect(instance.get('previewCount')).to.eql(1);
        expect(getElement('.k-media-viewer')).not.to.eql(null);
        expect(getElement('.k-media-viewer-title')?.textContent).to.contain('cover.png');
    });

    // showPreview=false 会同步关闭显式媒体和文件行媒体缩略图的预览入口。
    it('should disable preview for media and file media thumbnail', async () => {
        class Demo extends Component {
            static template = `
                const { FileCard } = this;
                <div>
                    <FileCard name="cover.png" type="image" status="done" showPreview={false} src="https://example.com/cover.png" />
                    <FileCard name="clip.mp4" type="file" showPreview={false} src="https://example.com/clip.mp4" />
                </div>
            `;

            FileCard = FileCard;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-media-preview-trigger')).to.eql(null);
    });

    // FileCardList 继承默认尺寸、删除开关，并透传新增的 loadingText。
    it('should proxy FileCardList props and events', async () => {
        const calls: string[] = [];

        class Demo extends Component {
            static template = `
                const { FileCardList } = this;
                <FileCardList
                    size="small"
                    deleteable
                    items={[
                        {key: 'a', name: 'a.pdf', status: 'loading', percent: 10, loadingText: '上传中'},
                    ]}
                    ev-delete={this.onDelete}
                />
            `;

            FileCardList = FileCardList;

            onDelete = (item: any) => {
                calls.push(item.key);
            };
        }

        const [, element] = mount(Demo);
        const card = element.querySelector('.k-file-card') as HTMLElement;
        const button = element.querySelector('.k-file-card-delete') as HTMLElement;

        expect(card.className).to.contain('k-file-card-small');
        expect(element.querySelector('.k-file-card-description')?.textContent).to.contain('上传中... 10%');

        button.click();
        await wait();

        expect(calls).to.eql(['a']);
    });

    // FileCardList 的 extension 插槽为空时，不保留额外 flex item。
    it('should not render extension wrapper when extension slot is empty', async () => {
        class Demo extends Component {
            static template = `
                const { FileCardList } = this;
                <FileCardList
                    items={[{key: 'a', name: 'a.pdf'}]}
                >
                    <b:extension>
                        <button v-if={false} class="empty-extension" type="button">add</button>
                    </b:extension>
                </FileCardList>
            `;

            FileCardList = FileCardList;
        }

        const [, element] = mount(Demo);

        expect(element.querySelector('.k-file-card-list-extension')).to.eql(null);
    });

    // 删除角标回到卡片内后，列表容器不再需要额外顶部留白。
    it('should not add top padding for delete icon in lists', async () => {
        class Demo extends Component {
            static template = `
                const { FileCardList } = this;
                <div>
                    <FileCardList
                        className="wrap-list"
                        overflow="wrap"
                        deleteable
                        items={[
                            {key: 'c', name: 'c.pdf', type: 'file'},
                        ]}
                    />
                    <FileCardList
                        className="scroll-x-list"
                        overflow="scrollX"
                        deleteable
                        items={[
                            {key: 'a', name: 'a.pdf', type: 'file'},
                        ]}
                    />
                    <FileCardList
                        className="scroll-y-list"
                        overflow="scrollY"
                        deleteable
                        items={[
                            {key: 'b', name: 'b.pdf', type: 'file'},
                        ]}
                    />
                </div>
            `;

            FileCardList = FileCardList;
        }

        const [, element] = mount(Demo);
        const listWrap = element.querySelector('.wrap-list') as HTMLElement;
        const listX = element.querySelector('.scroll-x-list') as HTMLElement;
        const listY = element.querySelector('.scroll-y-list') as HTMLElement;

        expect(getComputedStyle(listWrap).paddingTop).to.eql('0px');
        expect(getComputedStyle(listX).paddingTop).to.eql('0px');
        expect(getComputedStyle(listY).paddingTop).to.eql('0px');
    });
});
