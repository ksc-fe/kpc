import {createApp, defineComponent, nextTick, render, ref} from 'vue';
import {getElement, wait} from '@/test/utils';
import {Button, Cascader, Datepicker, Select, Option, TreeSelect} from '../../';

describe('Select', () => {
    it('handle trigger without props', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        const vue = createApp({
            template: `
                <div>
                    <Select>
                        <Option v-for="item in [1, 2]" :value="item">{{ item }}</Option>
                    </Select>
                </div>
            `,
            components: {
                Select, Option
            },
        }).mount(container);

        vue.$el.querySelector('.k-select').click();
        await wait();
        expect(getElement('.k-select-menu').textContent).to.eql('12');

        render(null, container);
        document.body.removeChild(container);
    });

    it('should control value move animation when select list shifts', async function () {
        this.timeout(30000);

        type DemoType =
            | 'select'
            | 'multipleSelect'
            | 'treeSelect'
            | 'multipleTreeSelect'
            | 'cascader'
            | 'multipleCascader'
            | 'datepicker'
            | 'multipleDatepicker';
        const count = 20;
        const hiddenCount = 10;

        const mountDemo = (type: DemoType, valueAnimation: boolean) => {
            const container = document.createElement('div');
            document.body.appendChild(container);
            const Demo = defineComponent({
                components: {Button, Cascader, Datepicker, Select, Option, TreeSelect},
                setup() {
                    const hideFirstTen = ref(false);
                    const selectValues = ref<string[]>(Array.from({length: count}, () => ''));
                    const multipleValues = ref<string[][]>(Array.from({length: count}, () => ['1', '2']));
                    const cascaderValues = ref<string[][]>(
                        Array.from({length: count}, () => ['beijing', 'haidian'])
                    );
                    const multipleCascaderValues = ref<string[][][]>(
                        Array.from({length: count}, () => [
                            ['beijing', 'haidian'],
                            ['hunan', 'changsha', 'yuelu'],
                        ])
                    );
                    const datepickerValues = ref<string[]>(Array.from({length: count}, () => ''));
                    const multipleDatepickerValues = ref<string[][]>(
                        Array.from({length: count}, () => ['2024-01-01', '2024-01-02'])
                    );
                    const options = [
                        {label: '选项 1', value: '1'},
                        {label: '选项 2', value: '2'},
                        {label: '选项 3', value: '3'},
                    ];
                    const treeData = options.map(({label, value}) => ({label, key: value}));
                    const cascaderData = [
                        {
                            value: 'beijing',
                            label: '北京',
                            children: [
                                {value: 'haidian', label: '海淀区'},
                                {value: 'chaoyang', label: '朝阳区'},
                            ],
                        },
                        {
                            value: 'hunan',
                            label: '湖南',
                            children: [
                                {
                                    value: 'changsha',
                                    label: '长沙市',
                                    children: [{value: 'yuelu', label: '岳麓区'}],
                                },
                            ],
                        },
                    ];
                    const toggleFirstTen = () => {
                        hideFirstTen.value = !hideFirstTen.value;
                    };

                    return {
                        hideFirstTen,
                        cascaderData,
                        cascaderValues,
                        datepickerValues,
                        multipleCascaderValues,
                        multipleDatepickerValues,
                        selectValues,
                        multipleValues,
                        options,
                        treeData,
                        toggleFirstTen,
                    };
                },
                template: `
                    <div style="padding: 24px">
                        <Button type="primary" @click="toggleFirstTen">
                            {{ hideFirstTen ? '显示前 ${hiddenCount} 个 Select' : '隐藏前 ${hiddenCount} 个 Select' }}
                        </Button>
                        <div style="margin-top: 16px" class="select-list">
                            <div
                                v-for="(val, index) in selectValues"
                                :key="index"
                                class="select-item no-fade"
                                v-show="!hideFirstTen || index >= ${hiddenCount}"
                                style="display: flex; align-items: center; margin-bottom: 8px"
                            >
                                <span style="width: 120px">Select {{ index + 1 }}：</span>
                                <Select v-if="'${type}' === 'select'"
                                    v-model="selectValues[index]"
                                    :width="200"
                                    :valueAnimation="${valueAnimation}"
                                >
                                    <Option v-for="opt in options" :key="opt.value" :value="opt.value">
                                        {{ opt.label }}
                                    </Option>
                                </Select>
                                <Select v-else-if="'${type}' === 'multipleSelect'"
                                    v-model="multipleValues[index]"
                                    :width="260"
                                    multiple
                                    :valueAnimation="${valueAnimation}"
                                >
                                    <Option v-for="opt in options" :key="opt.value" :value="opt.value">
                                        {{ opt.label }}
                                    </Option>
                                </Select>
                                <TreeSelect v-else-if="'${type}' === 'treeSelect'"
                                    v-model="selectValues[index]"
                                    :data="treeData"
                                    :width="200"
                                    :valueAnimation="${valueAnimation}"
                                />
                                <TreeSelect v-else-if="'${type}' === 'multipleTreeSelect'"
                                    v-model="multipleValues[index]"
                                    :data="treeData"
                                    :width="260"
                                    multiple
                                    :valueAnimation="${valueAnimation}"
                                />
                                <Cascader v-else-if="'${type}' === 'cascader'"
                                    v-model="cascaderValues[index]"
                                    :data="cascaderData"
                                    :width="260"
                                    :valueAnimation="${valueAnimation}"
                                />
                                <Cascader v-else-if="'${type}' === 'multipleCascader'"
                                    v-model="multipleCascaderValues[index]"
                                    :data="cascaderData"
                                    :width="260"
                                    multiple
                                    :valueAnimation="${valueAnimation}"
                                />
                                <Datepicker v-else-if="'${type}' === 'datepicker'"
                                    v-model="datepickerValues[index]"
                                    :width="260"
                                    :valueAnimation="${valueAnimation}"
                                />
                                <Datepicker v-else
                                    v-model="multipleDatepickerValues[index]"
                                    :width="260"
                                    multiple
                                    :valueAnimation="${valueAnimation}"
                                />
                            </div>
                        </div>
                        <Select></Select>
                    </div>
                `,
            });

            const app = createApp(Demo);
            app.mount(container);
            return {
                container,
                unmount() {
                    app.unmount();
                    document.body.removeChild(container);
                },
            };
        };

        const triggerShift = async (container: HTMLElement) => {
            container.querySelector<HTMLElement>('.k-btn')!.click();
            await nextTick();
        };

        const watchMoveAnimation = (container: HTMLElement) => {
            if (container.querySelector('[class*="-move"]')) return Promise.resolve(true);

            return new Promise<boolean>(resolve => {
                let settled = false;
                const cleanup = (hasMove: boolean) => {
                    if (settled) return;
                    settled = true;
                    observer.disconnect();
                    clearTimeout(timer);
                    resolve(hasMove);
                };
                const observer = new MutationObserver(() => {
                    const hasMove = !!container.querySelector('[class*="-move"]');
                    const hasTransform = Array.from(container.querySelectorAll<HTMLElement>('*'))
                        .some(el => !!el.style.transform && el.style.transform !== 'none');
                    if (hasMove || hasTransform) {
                        cleanup(true);
                    }
                });
                const timer = setTimeout(() => cleanup(false), 300);

                observer.observe(container, {
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['class', 'style'],
                });
            });
        };

        const assertMoveAnimation = async (
            type: DemoType,
            valueAnimation: boolean,
            shouldHaveMove: boolean,
        ) => {
            const demo = mountDemo(type, valueAnimation);
            try {
                const moveAnimation = watchMoveAnimation(demo.container);
                await triggerShift(demo.container);
                const hasMove = await moveAnimation;
                if (shouldHaveMove) {
                    expect(hasMove, `${type} should have the move animation`).to.be.true;
                } else {
                    expect(hasMove, `${type} should not have the move animation`).to.be.false;
                }
            } finally {
                demo.unmount();
            }
        };

        await assertMoveAnimation('select', true, true);
        await assertMoveAnimation('select', false, false);
        await assertMoveAnimation('multipleSelect', false, false);
        await assertMoveAnimation('treeSelect', false, false);
        await assertMoveAnimation('multipleTreeSelect', false, false);
        await assertMoveAnimation('cascader', false, false);
        await assertMoveAnimation('multipleCascader', false, false);
        await assertMoveAnimation('datepicker', false, false);
        await assertMoveAnimation('multipleDatepicker', false, false);
    });
});
