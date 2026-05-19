import {onMounted, onUnmounted, useInstance} from 'intact';
import {useFixBody} from '../../hooks/useFixBody';
import type {MediaViewer} from './viewer';
import {mediaAudioCardUrl} from './mediaAssets';

export function useMediaViewer() {
    const instance = useInstance() as MediaViewer;
    const fixBody = useFixBody();
    let isListening = false;

    function close() {
        const onClose = instance.get('onClose');
        if (onClose) onClose();
    }

    function prev() {
        const onPrev = instance.get('onPrev');
        if (onPrev && instance.get('hasPrev')) onPrev();
    }

    function next() {
        const onNext = instance.get('onNext');
        if (onNext && instance.get('hasNext')) onNext();
    }

    // 预览层支持 Esc 关闭和左右方向键切换。
    function onKeydown(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 27:
                close();
                break;
            case 37:
                prev();
                break;
            case 39:
                next();
                break;
        }
    }

    // 避免重复绑定全局键盘事件。
    function addKeydownListener() {
        if (isListening) return;

        document.addEventListener('keydown', onKeydown);
        isListening = true;
    }

    // Viewer 不可见或卸载时及时移除全局监听。
    function removeKeydownListener() {
        if (!isListening) return;

        document.removeEventListener('keydown', onKeydown);
        isListening = false;
    }

    onMounted(() => {
        if (instance.get('value')) {
            fixBody.onOpen();
            addKeydownListener();
        }
    });

    onUnmounted(() => {
        removeKeydownListener();
        fixBody.onClose();
    });

    instance.watch('value', (value) => {
        if (value) {
            fixBody.onOpen();
            addKeydownListener();
        } else {
            removeKeydownListener();
        }
    });

    // 点击遮罩关闭，内容区域在模板中会阻止冒泡。
    function onMaskClick() {
        close();
    }

    function onCloseClick(e: MouseEvent) {
        e.stopPropagation();
        close();
    }

    function onPrevClick(e: MouseEvent) {
        e.stopPropagation();
        prev();
    }

    function onNextClick(e: MouseEvent) {
        e.stopPropagation();
        next();
    }

    function isImage() {
        return instance.get('item')?.resolvedType === 'image';
    }

    function isVideo() {
        return instance.get('item')?.resolvedType === 'video';
    }

    function isAudio() {
        return instance.get('item')?.resolvedType === 'audio';
    }

    function getTitle() {
        return instance.get('item')?.name || '';
    }

    function getCounterText() {
        const total = instance.get('total') || 0;
        if (total <= 1) return '';

        return `${(instance.get('index') || 0) + 1} / ${total}`;
    }

    function shouldShowNavigation() {
        return (instance.get('total') || 0) > 1;
    }

    function getAudioCardAssetSrc() {
        return mediaAudioCardUrl;
    }

    // 离场动画完成后释放滚动锁并通知外层卸载。
    function onAfterLeave() {
        if (!instance.get('value')) {
            fixBody.onClose();
        }

        const onAfterClose = instance.get('onAfterClose');
        if (onAfterClose) onAfterClose();
    }

    return {
        onMaskClick,
        onCloseClick,
        onPrevClick,
        onNextClick,
        onAfterLeave,
        isImage,
        isVideo,
        isAudio,
        getTitle,
        getCounterText,
        shouldShowNavigation,
        getAudioCardAssetSrc,
    };
}
