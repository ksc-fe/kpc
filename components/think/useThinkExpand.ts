import {useInstance} from 'intact';
import {_$} from '../../i18n';
import type {Think} from './think';

export function useThinkExpand() {
    const instance = useInstance() as Think;

    function setExpandedState(value: boolean) {
        (instance as any).set('$expanded', value);
    }

    function bootstrap() {
        if (instance.get('expanded') === undefined) {
            setExpandedState(instance.get('defaultExpanded') !== false);
        }
    }

    bootstrap();

    function hasContentProp() {
        const content = instance.get('content');
        return content !== undefined && content !== null && String(content) !== '';
    }

    function isExpanded() {
        const fromProp = instance.get('expanded');
        if (fromProp !== undefined) {
            return !!fromProp;
        }
        return !!instance.get<boolean>('$expanded');
    }

    function getTitleText() {
        return instance.get('title') || _$('思考中');
    }

    function getContentText() {
        const content = instance.get('content');
        return content === undefined || content === null ? '' : String(content);
    }

    function getRootStyle() {
        const maxWidthString = instance.get('maxWidthString');
        if (!maxWidthString) return;

        return {maxWidth: maxWidthString};
    }

    function onToggle() {
        const nextValue = !isExpanded();
        if (instance.get('expanded') !== undefined) {
            (instance as any).set('expanded', nextValue);
        } else {
            setExpandedState(nextValue);
        }
        instance.trigger('expand', nextValue);
    }

    return {
        hasContentProp,
        isExpanded,
        getTitleText,
        getContentText,
        getRootStyle,
        onToggle,
    };
}
