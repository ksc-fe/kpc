/** @format */

import { Message } from '../message';
import { useState } from '../../hooks/useState';

export function useCopy(text: string) {
  const succeeded = useState<boolean>(false);

  const onSuccess = () => {
    Message.success({
      content: 'success',
    });
  };
  const onError = () => {
    Message.error({
      content: 'errorTip',
    });
  };

  const startCopy = () => {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const $textarea = document.createElement('textarea');
    $textarea.style.fontSize = '12pt';
    $textarea.style.border = '0';
    $textarea.style.padding = '0';
    $textarea.style.margin = '0';
    $textarea.style.position = 'absolute';
    $textarea.style[isRTL ? 'right' : 'left'] = '-9999px';
    let yPosition = window.pageYOffset || document.documentElement.scrollTop;
    $textarea.style.top = `${yPosition}px`;
    $textarea.setAttribute('readonly', '');
    $textarea.value = text;
    document.body.appendChild($textarea);
    try {
      if (navigator.clipboard) {
        succeeded.set(Boolean(navigator.clipboard.writeText(text)));
      } else {
        succeeded.set(Boolean(document.execCommand('copy')));
      }
      onSuccess();
      document.body.removeChild($textarea);
      // if (success) success.call();
    } catch (err) {
      succeeded.set(false);
      onError();
      document.body.removeChild($textarea);
      // if (error) error.call();
    }
  };

  return {
    succeeded,
    startCopy,
    onSuccess,
    onError,
  };
}
