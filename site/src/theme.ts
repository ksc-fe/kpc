import {render, createVNode as h} from 'intact';

const container = document.getElementById('page');

const refresh = async (vNode?: any) => {
    render(vNode || h((await import('./theme/index')).default), container!);
}

refresh();

(window as any).refresh = (vNode: any) => {
    refresh(vNode)
}

