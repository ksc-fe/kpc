import {Component} from 'intact';
import {dispatchEvent, mount, unmount, wait} from '../../test/utils';
import {BubbleList} from '.';

describe('BubbleList', () => {
    afterEach(() => {
        unmount();
    });

    it('should render items with role defaults and forward bubble footer, extra and bottom slots', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 240px;"
                    items={this.get('items')}
                    roles={this.get('roles')}
                >
                    <b:bottom args="scope">
                        <span class="custom-bubble-bottom">{scope.item.role}</span>
                    </b:bottom>
                    <b:footer args="scope">
                        <span class="custom-bubble-footer">{scope.item.key}</span>
                    </b:footer>
                    <b:extra args="scope">
                        <span class="custom-bubble-extra">{scope.item.content}</span>
                    </b:extra>
                </BubbleList>
            `;

            static defaults() {
                return {
                    roles: {
                        ai: {
                            placement: 'start',
                            avatar: true,
                            roleName: 'AI',
                        },
                        user: {
                            placement: 'end',
                            avatar: true,
                            roleName: 'Me',
                            variant: 'outlined',
                        },
                    },
                    items: [
                        {key: 1, role: 'ai', content: 'hello'},
                        {key: 2, role: 'user', content: 'world'},
                    ],
                };
            }

            BubbleList = BubbleList;
        }

        const [, element] = mount(Demo);
        await wait(50);

        const bubbles = element.querySelectorAll('.k-bubble');
        const bottoms = element.querySelectorAll('.custom-bubble-bottom');
        const footers = element.querySelectorAll('.custom-bubble-footer');
        const extras = element.querySelectorAll('.custom-bubble-extra');
        const texts = element.querySelectorAll('.k-bubble-text');
        const firstBubble = bubbles[0] as HTMLElement;
        const firstFooter = firstBubble.querySelector('.custom-bubble-footer')!;
        const firstExtra = firstBubble.querySelector('.custom-bubble-extra')!;

        expect(bubbles.length).to.eql(2);
        expect(bubbles[0].classList.contains('k-bubble-start')).to.be.true;
        expect(bubbles[1].classList.contains('k-bubble-end')).to.be.true;
        expect(bubbles[1].classList.contains('k-bubble-outlined')).to.be.true;
        expect(texts.length).to.eql(2);
        expect(texts[0].textContent).to.contain('hello');
        expect(texts[1].textContent).to.contain('world');
        expect(bottoms.length).to.eql(2);
        expect(bottoms[0].textContent).to.eql('ai');
        expect(bottoms[1].textContent).to.eql('user');
        expect(footers.length).to.eql(2);
        expect(footers[0].textContent).to.eql('1');
        expect(footers[1].textContent).to.eql('2');
        expect(extras.length).to.eql(2);
        expect(extras[0].textContent).to.eql('hello');
        expect(extras[1].textContent).to.eql('world');
        expect(firstFooter.compareDocumentPosition(firstExtra) & Node.DOCUMENT_POSITION_FOLLOWING).to.not.eql(0);
    });

    it('should stay at bottom when the last bubble keeps growing', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 220px;"
                    items={this.get('items')}
                    roles={this.get('roles')}
                />
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                const items = Array.from({length: 12}).map((_, index) => ({
                    key: index,
                    role: index % 2 ? 'ai' : 'user',
                    content: `line ${index}`,
                }));

                return {
                    roles: {
                        ai: {placement: 'start', avatar: true, roleName: 'AI'},
                        user: {placement: 'end', avatar: true, roleName: 'Me', variant: 'outlined'},
                    },
                    items,
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        expect(scrollBox.scrollTop).to.be.greaterThan(0);
        expect(instance.listRef!.isAtBottom()).to.be.true;

        const nextItems = instance.get('items').slice();
        nextItems[nextItems.length - 1] = {
            ...nextItems[nextItems.length - 1],
            content: Array.from({length: 32}).map((_, index) => `grow ${index}`).join('\n'),
            typing: true,
        };
        instance.set('items', nextItems);
        await wait(120);

        expect(instance.listRef!.isAtBottom()).to.be.true;
        expect(
            scrollBox.scrollHeight - scrollBox.scrollTop - scrollBox.clientHeight
        ).to.be.lessThan(90);
    });

    it('should keep short content at the top when list has fixed height', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 400px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="short-row" style="height: 40px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [
                        {key: 1, content: 'first'},
                        {key: 2, content: 'second'},
                    ],
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(50);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        const firstRow = element.querySelector<HTMLElement>('.short-row')!;
        const offset = firstRow.getBoundingClientRect().top - scrollBox.getBoundingClientRect().top;

        expect(offset).to.be.lessThan(16);
    });

    it('should scroll to bottom on mount when initial content overflows', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 160px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="initial-row" style="height: 48px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: Array.from({length: 8}).map((_, index) => ({
                        key: index,
                        content: `initial-${index}`,
                    })),
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;

        expect(scrollBox.scrollTop).to.be.greaterThan(0);
        expect(
            scrollBox.scrollHeight - scrollBox.scrollTop - scrollBox.clientHeight
        ).to.be.lessThan(4);
    });

    it('should stop sticky scrolling after user scrolls away from the bottom', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 220px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="custom-row" style="height: 48px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: Array.from({length: 10}).map((_, index) => ({
                        key: index,
                        content: `row-${index}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        scrollBox.scrollTop = 40;
        dispatchEvent(scrollBox, 'scroll');
        await wait(30);

        expect(instance.listRef!.isAtBottom()).to.be.false;

        const nextItems = instance.get('items').slice();
        nextItems[nextItems.length - 1] = {
            ...nextItems[nextItems.length - 1],
            content: Array.from({length: 8}).map((_, index) => `row-9-${index}`).join(' '),
        };
        instance.set('items', nextItems);
        await wait(100);

        expect(instance.listRef!.isAtBottom()).to.be.false;
        expect(scrollBox.scrollTop).to.be.lessThan(120);
    });

    it('should preserve viewport position when prepending history while reading older messages', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 160px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="history-row" style="height: 40px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: Array.from({length: 8}).map((_, index) => ({
                        key: index,
                        content: `history-${index}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        scrollBox.scrollTop = 40;
        dispatchEvent(scrollBox, 'scroll');
        await wait(30);

        const prevScrollTop = scrollBox.scrollTop;
        instance.set('items', [
            {key: -2, content: 'history--2'},
            {key: -1, content: 'history--1'},
            ...instance.get('items'),
        ]);
        await wait(120);

        expect(scrollBox.scrollTop).to.be.greaterThan(prevScrollTop + 40);
    });

    it('should keep existing item dom nodes stable when prepending history without explicit keys', async () => {
        class Demo extends Component<{items: Array<{content: string}>}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 180px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="fallback-key-row" style="height: 40px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [
                        {content: 'row-1'},
                        {content: 'row-2'},
                        {content: 'row-3'},
                    ],
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const initialRows = element.querySelectorAll<HTMLElement>('.fallback-key-row');
        const firstExistingRow = initialRows[0];
        const secondExistingRow = initialRows[1];
        const currentItems = instance.get('items');

        instance.set('items', [
            {content: 'history-a'},
            {content: 'history-b'},
            ...currentItems,
        ]);
        await wait(80);

        const rowsAfterPrepend = element.querySelectorAll<HTMLElement>('.fallback-key-row');

        expect(rowsAfterPrepend[2]).to.eql(firstExistingRow);
        expect(rowsAfterPrepend[3]).to.eql(secondExistingRow);
        expect(rowsAfterPrepend[2].textContent).to.eql('row-1');
        expect(rowsAfterPrepend[3].textContent).to.eql('row-2');
    });

    it('should limit the root height when maxHeight is set', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="border: 1px solid transparent;"
                    maxHeight={180}
                    items={this.get('items')}
                    roles={this.get('roles')}
                />
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    roles: {
                        ai: {placement: 'start', avatar: true, roleName: 'AI'},
                        user: {placement: 'end', avatar: true, roleName: 'Me', variant: 'outlined'},
                    },
                    items: Array.from({length: 12}).map((_, index) => ({
                        key: index + 1,
                        role: index % 2 ? 'user' : 'ai',
                        content: `row-${index + 1}`,
                    })),
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(80);

        const root = element as HTMLElement;
        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;

        expect(root.getBoundingClientRect().height).to.be.lessThan(181);
        expect(scrollBox.scrollHeight).to.be.greaterThan(scrollBox.clientHeight);
    });

    it('should keep scroll content flush and add gap only when scrollbar appears', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 120px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="scrollbar-gap-row" style="height: 48px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: Array.from({length: 6}).map((_, index) => ({
                        key: index,
                        content: `row-${index}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        const scrollContent = element.querySelector<HTMLElement>('.k-bubble-list-scroll-content')!;
        let contentStyle = getComputedStyle(scrollContent);

        expect(scrollBox.scrollHeight).to.be.greaterThan(scrollBox.clientHeight);
        expect(scrollBox.classList.contains('k-bubble-list-scroll-has-scrollbar')).to.be.true;
        expect(getComputedStyle(scrollBox).paddingInlineEnd).to.eql('6px');
        expect(contentStyle.paddingInlineStart).to.eql('0px');
        expect(contentStyle.paddingInlineEnd).to.eql('0px');

        instance.set('items', [{key: 'short', content: 'short'}]);
        await wait(120);
        contentStyle = getComputedStyle(scrollContent);

        expect(scrollBox.scrollHeight - scrollBox.clientHeight).to.be.lessThan(2);
        expect(scrollBox.classList.contains('k-bubble-list-scroll-has-scrollbar')).to.be.false;
        expect(getComputedStyle(scrollBox).paddingInlineEnd).to.eql('0px');
        expect(contentStyle.paddingInlineStart).to.eql('0px');
        expect(contentStyle.paddingInlineEnd).to.eql('0px');
    });

    it('should scroll correctly when using a custom item slot', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 180px;"
                    items={this.get('items')}
                >
                    <b:item args="scope">
                        <div class="custom-item-shell" style="height: 48px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: Array.from({length: 12}).map((_, index) => ({
                        key: index + 1,
                        content: `row-${index + 1}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        instance.listRef!.scrollToKey(6, 'auto');
        await wait(30);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        const targetRow = element.querySelectorAll<HTMLElement>('.custom-item-shell')[5];
        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const targetRect = targetRow.getBoundingClientRect();

        expect(Math.abs(targetRect.top - scrollBoxRect.top)).to.be.lessThan(4);
    });

    it('should scroll the target item near the top when calling scrollToKey', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 180px;"
                    items={this.get('items')}
                    roles={this.get('roles')}
                />
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    roles: {
                        ai: {placement: 'start', avatar: true, roleName: 'AI'},
                        user: {placement: 'end', avatar: true, roleName: 'Me', variant: 'outlined'},
                    },
                    items: Array.from({length: 12}).map((_, index) => ({
                        key: index + 1,
                        role: index % 2 ? 'user' : 'ai',
                        content: `row-${index + 1}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        instance.listRef!.scrollToKey(6, 'auto');
        await wait(30);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        const targetRow = element.querySelectorAll<HTMLElement>('.k-bubble-list-item')[5];
        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const targetRect = targetRow.getBoundingClientRect();

        expect(Math.abs(targetRect.top - scrollBoxRect.top)).to.be.lessThan(4);
    });

    it('should support resolving keys from itemKey function when scrolling to a message', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 180px;"
                    items={this.get('items')}
                    itemKey={(item) => item.id}
                    roles={this.get('roles')}
                />
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    roles: {
                        ai: {placement: 'start', avatar: true, roleName: 'AI'},
                        user: {placement: 'end', avatar: true, roleName: 'Me', variant: 'outlined'},
                    },
                    items: Array.from({length: 12}).map((_, index) => ({
                        id: `msg-${index + 1}`,
                        role: index % 2 ? 'user' : 'ai',
                        content: `row-${index + 1}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        instance.listRef!.scrollToKey('msg-6', 'auto');
        await wait(30);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        const targetRow = element.querySelectorAll<HTMLElement>('.k-bubble-list-item')[5];
        const scrollBoxRect = scrollBox.getBoundingClientRect();
        const targetRect = targetRow.getBoundingClientRect();

        expect(Math.abs(targetRect.top - scrollBoxRect.top)).to.be.lessThan(4);
    });

    it('should keep per-item slot updates working when list boundaries change', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList items={this.get('items')}>
                    <b:footer args="scope">
                        <span class="last-flag">{scope.item.key}:{scope.isLast ? 'last' : 'normal'}</span>
                    </b:footer>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [
                        {key: 1, content: 'first'},
                        {key: 2, content: 'second'},
                    ],
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(50);

        expect(Array.from(element.querySelectorAll('.last-flag')).map((item) => item.textContent)).to.eql([
            '1:normal',
            '2:last',
        ]);

        instance.set('items', [
            ...instance.get('items'),
            {key: 3, content: 'third'},
        ]);
        await wait(50);

        expect(Array.from(element.querySelectorAll('.last-flag')).map((item) => item.textContent)).to.eql([
            '1:normal',
            '2:normal',
            '3:last',
        ]);
    });

    it('should trigger loadHistory once when scrolling near the top', async () => {
        class Demo extends Component<{count: number; loadingHistory: boolean}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 180px;"
                    items={this.get('items')}
                    hasMoreHistory={true}
                    loadingHistory={this.get('loadingHistory')}
                    ev-loadHistory={() => this.set({count: this.get('count') + 1, loadingHistory: true})}
                >
                    <b:item args="scope">
                        <div style="height: 44px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    count: 0,
                    loadingHistory: false,
                    items: Array.from({length: 10}).map((_, index) => ({
                        key: index,
                        content: `history-${index}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        scrollBox.scrollTop = 0;
        dispatchEvent(scrollBox, 'scroll');
        dispatchEvent(scrollBox, 'scroll');
        await wait(40);

        expect(instance.get('count')).to.eql(1);
    });

    it('should show the default history loading text only while loadingHistory is true', async () => {
        class Demo extends Component<{loadingHistory: boolean}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 180px;"
                    items={this.get('items')}
                    loadingHistory={this.get('loadingHistory')}
                />
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    loadingHistory: false,
                    items: [{key: 1, content: 'hello'}],
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.k-bubble-list-history')).to.be.null;

        instance.set('loadingHistory', true);
        await wait(50);

        expect(element.querySelector('.k-bubble-list-history span')!.textContent).to.eql('加载历史中...');

        instance.set('loadingHistory', false);
        await wait(50);

        expect(element.querySelector('.k-bubble-list-history')).to.be.null;
    });

    it('should warn only once when items are missing stable keys', async () => {
        const warn = console.warn;
        const spy = sinon.spy();
        console.warn = spy;

        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList items={this.get('items')}>
                    <b:item args="scope">
                        <div style="height: 40px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [
                        {content: 'a'},
                        {content: 'b'},
                    ],
                };
            }
        }

        try {
            mount(Demo);
            await wait(50);

            expect(spy.callCount).to.eql(1);
            expect(spy.args[0][0]).to.contain('stable `key`');
        } finally {
            console.warn = warn;
        }
    });

    it('should render empty slot only when there are no items', async () => {
        class Demo extends Component<{items: any[]}> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    items={this.get('items')}
                >
                    <b:empty>
                        <div class="custom-empty">empty</div>
                    </b:empty>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [],
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.custom-empty')!.textContent).to.eql('empty');

        instance.set('items', [{key: 1, content: 'hello'}]);
        await wait(50);

        expect(element.querySelector('.custom-empty')).to.be.null;
    });

    it('should keep custom historyLoading slot visible for final no-more-history text', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    style="height: 180px;"
                    items={this.get('items')}
                    hasMoreHistory={false}
                    loadingHistory={false}
                >
                    <b:historyLoading args="scope">
                        <div class="history-status">
                            {scope.loadingHistory ? 'loading' : scope.hasMoreHistory ? 'more' : 'done'}
                        </div>
                    </b:historyLoading>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [{key: 1, content: 'hello'}],
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.history-status')!.textContent).to.eql('done');
    });

    it('should not render bubble wrappers for empty scoped slots', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    items={this.get('items')}
                    roles={this.get('roles')}
                >
                    <b:extra args="scope">
                        <span v-if={scope.item.completed} class="scoped-extra">已完成</span>
                    </b:extra>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    roles: {
                        ai: {
                            placement: 'start',
                        },
                    },
                    items: [
                        {key: 1, role: 'ai', content: '生成中', completed: false},
                        {key: 2, role: 'ai', content: '已完成', completed: true},
                    ],
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(50);

        expect(element.querySelectorAll('.k-bubble-extra').length).to.eql(1);
        expect(element.querySelector('.scoped-extra')!.textContent).to.eql('已完成');
    });

    it('should not render wrappers for empty outer slots', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    items={this.get('items')}
                    loadingHistory={true}
                >
                    <b:header>
                        <span v-if={false} class="empty-header">header</span>
                    </b:header>
                    <b:historyLoading>
                        <span v-if={false} class="empty-history">history</span>
                    </b:historyLoading>
                    <b:listFooter>
                        <span v-if={false} class="empty-footer">footer</span>
                    </b:listFooter>
                </BubbleList>
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    items: [{key: 1, content: 'hello'}],
                };
            }
        }

        const [, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.k-bubble-list-header')).to.eql(null);
        expect(element.querySelector('.k-bubble-list-history')).to.eql(null);
        expect(element.querySelector('.k-bubble-list-footer')).to.eql(null);
        expect(element.querySelector('.k-bubble')).not.to.eql(null);
    });

    it('should not render empty wrapper when empty slot is empty', async () => {
        class Demo extends Component {
            static template = `
                const { BubbleList } = this;
                <BubbleList items={[]}>
                    <b:empty>
                        <span v-if={false} class="empty-content">empty</span>
                    </b:empty>
                </BubbleList>
            `;

            BubbleList = BubbleList;
        }

        const [, element] = mount(Demo);
        await wait(50);

        expect(element.querySelector('.k-bubble-list-empty')).to.eql(null);
        expect(element.querySelector('.k-bubble-list-items')).not.to.eql(null);
    });

    it('should emit scroll state events and honor showScrollToBottom=false', async () => {
        class Demo extends Component<{
            scrollCount: number
            items: any[]
            bottomStates: boolean[]
            autoStates: boolean[]
        }> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    ref={(i) => this.listRef = i}
                    style="height: 180px;"
                    items={this.get('items')}
                    showScrollToBottom={false}
                    ev-scroll={() => this.set('scrollCount', this.get('scrollCount') + 1)}
                    ev-scrollBottomChange={(value) => this.set('bottomStates', [...this.get('bottomStates'), value])}
                    ev-autoScrollChange={(value) => this.set('autoStates', [...this.get('autoStates'), value])}
                >
                    <b:item args="scope">
                        <div style="height: 44px;">{scope.item.content}</div>
                    </b:item>
                </BubbleList>
            `;

            listRef: BubbleList | null = null;
            BubbleList = BubbleList;

            static defaults() {
                return {
                    scrollCount: 0,
                    bottomStates: [],
                    autoStates: [],
                    items: Array.from({length: 12}).map((_, index) => ({
                        key: index,
                        content: `row-${index}`,
                    })),
                };
            }
        }

        const [instance, element] = mount(Demo);
        await wait(80);

        instance.set({
            scrollCount: 0,
            bottomStates: [],
            autoStates: [],
        });

        const scrollBox = element.querySelector<HTMLElement>('.k-bubble-list-scroll')!;
        scrollBox.scrollTop = 40;
        dispatchEvent(scrollBox, 'scroll');
        dispatchEvent(scrollBox, 'scroll');
        await wait(40);

        expect(instance.get('scrollCount')).to.be.at.least(2);
        expect(instance.get('bottomStates')).to.eql([false]);
        expect(instance.get('autoStates')).to.eql([false]);
        expect(element.querySelector('.k-bubble-list-scroll-to-bottom')).to.be.null;

        instance.listRef!.scrollToBottom('auto');
        await wait(50);

        expect(instance.get('bottomStates').slice(-1)[0]).to.eql(true);
        expect(instance.get('autoStates').slice(-1)[0]).to.eql(true);
        expect(instance.listRef!.isAtBottom()).to.be.true;
        expect(element.querySelector('.k-bubble-list-scroll-to-bottom')).to.be.null;
    });

    it('should forward typing events to role handlers and component events', async () => {
        let roleTypingPayload: any = null;
        let roleTypingCompletePayload: any = null;

        class Demo extends Component<{
            typingCount: number
            completeCount: number
            completedContent: string
        }> {
            static template = `
                const { BubbleList } = this;
                <BubbleList
                    items={this.get('items')}
                    roles={this.get('roles')}
                    ev-typing={() => this.set('typingCount', this.get('typingCount') + 1)}
                    ev-typingComplete={(item, content) => this.set({
                        completeCount: this.get('completeCount') + 1,
                        completedContent: item.key + ':' + content,
                    })}
                />
            `;

            BubbleList = BubbleList;

            static defaults() {
                return {
                    typingCount: 0,
                    completeCount: 0,
                    completedContent: '',
                    roles: {
                        ai: {
                            placement: 'start',
                            onTyping(renderedContent: string, currentContent: string, item: any, index: number) {
                                roleTypingPayload = {renderedContent, currentContent, item, index};
                            },
                            onTypingComplete(content: string, item: any, index: number) {
                                roleTypingCompletePayload = {content, item, index};
                            },
                        },
                    },
                    items: [{
                        key: 1,
                        role: 'ai',
                        content: 'abcd',
                        typing: {interval: 16, step: 1},
                    }],
                };
            }
        }

        const [instance] = mount(Demo);
        await wait(120);

        expect(instance.get('typingCount')).to.be.greaterThan(0);
        expect(instance.get('completeCount')).to.eql(1);
        expect(instance.get('completedContent')).to.eql('1:abcd');
        expect(roleTypingPayload.currentContent).to.eql('abcd');
        expect(roleTypingPayload.item.key).to.eql(1);
        expect(roleTypingPayload.index).to.eql(0);
        expect(roleTypingCompletePayload.content).to.eql('abcd');
        expect(roleTypingCompletePayload.item.key).to.eql(1);
        expect(roleTypingCompletePayload.index).to.eql(0);
    });
});
