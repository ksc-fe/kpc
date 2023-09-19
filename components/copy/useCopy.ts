import { Message } from '../message';
import { useInstance } from 'intact';
import type { Copy } from './';
import { selectValue } from '../utils';
import { useState } from '../../hooks/useState';
import { _$ } from '../../i18n';

export function useCopy() {
    const instance = useInstance() as Copy;
    const success = useState(false);
    let timer: number;

    return {
        startCopy: () => {
            const { text } = instance.get();

            if (clipboardCopy(text) || commandCopy(text)) {
                Message.success({ content: _$('复制成功') });
                success.set(true);
                clearTimeout(timer);
                timer = window.setTimeout(() => {
                    success.set(false);
                }, 1000);
                instance.trigger('success', text);
            } else {
                Message.error({ content: _$('复制失败') });
                success.set(false);
                instance.trigger('error');
            }
        },
        success,
    };
}

// @reference: https://github.com/zenorocha/clipboard.js/blob/master/src/common/create-fake-element.js
function createFakeElement(value: string) {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const fakeElement = document.createElement('textarea');
    // Prevent zooming on iOS
    fakeElement.style.fontSize = '12pt';
    // Reset box model
    fakeElement.style.border = '0';
    fakeElement.style.padding = '0';
    fakeElement.style.margin = '0';
    // Move element out of screen horizontally
    fakeElement.style.position = 'absolute';
    fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px';
    // Move element to the same position vertically
    let yPosition = window.pageYOffset || document.documentElement.scrollTop;
    fakeElement.style.top = `${yPosition}px`;

    fakeElement.setAttribute('readonly', '');
    fakeElement.value = value;

    return fakeElement;
}

function clipboardCopy(text: string) {
    try {
        navigator.clipboard.writeText(text);

        return true;
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.log(e);
        }
        return false;
    }
}

function commandCopy(text: string) {
    const fakeElement = createFakeElement(text);
    document.body.appendChild(fakeElement);
    selectValue(fakeElement);

    let result: boolean;
    try {
        document.execCommand('copy');
        result = true;
    } catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.log(e);
        }
        result = false;
    }

    document.body.removeChild(fakeElement);

    return result;
}

