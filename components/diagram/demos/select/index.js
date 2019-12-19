export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';

import Message from 'kpc/components/message';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            data: {
                key: 'Database',
                children: [
                    {
                        key: 'Table1',
                        children: [
                            {
                                key: 'Column1-1',
                            },
                            {
                                key: 'Column1-2',
                            }
                        ]
                     },
                     {
                        key: 'Table2',
                        disabled: true,
                        children: [
                            {
                                key: 'Column2-1',
                            },
                            {
                                key: 'Column2-2',
                            }
                        ]
                     },
                ] 
            }
        }
    }

    _onSelect(shapes) {
        if (!shapes.length) {
            Message.info('You selected nothing.');
        } else {
            const data = shapes[0].data;
            Message.info(`You selected ${data.key}.`);
        }
    }
}