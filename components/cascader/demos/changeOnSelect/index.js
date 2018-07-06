export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'haidian',
                            label: '海淀区'
                        },
                        {
                            value: 'chaoyang',
                            label: '朝阳区'
                        },
                        {
                            value: 'fengtai',
                            label: '丰台区'
                        }
                    ]
                },
                {
                    value: 'hunan',
                    label: '湖南',
                    children: [
                        {
                            value: 'changsha',
                            label: '长沙市',
                            children: [
                                {
                                    value: 'yuelu',
                                    label: '岳麓区',
                                }
                            ]
                        },
                        {
                            value: 'yueyang',
                            label: '岳阳市',
                            children: [
                                {
                                    value: 'yueyanglou',
                                    label: '岳阳楼区',
                                },
                                {
                                    value: 'yueyangxian',
                                    label: '岳阳县',
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
}