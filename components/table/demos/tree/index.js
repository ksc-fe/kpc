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
                    name: 'Audios', 
                    size: 12,
                    children: [
                        {
                            name: 'Fly.mp3',
                            size: 7 
                        },
                        {
                            name: 'Fade.aac',
                            size: 5
                        },
                    ]
                },
                {
                    name: 'Images', 
                    size: 14,
                    children: [
                        {
                            name: 'Photos',
                            size: 8,
                            children: [
                                {
                                    name: 'file.png',
                                    size: 8  
                                }
                            ]
                        },
                        {
                            name: 'image.png',
                            size: 6 
                        },
                    ]
                },
                {
                    name: 'doc.pdf', 
                    size: 18,
                },
            ]
        }
    }
}