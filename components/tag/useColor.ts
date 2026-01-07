import { useInstance } from 'intact';
import type { Tag } from './base';
import { palette } from '../../styles/utils';
import { useState } from '../../hooks/useState';
import { useReceive } from '../../hooks/useReceive';
import { theme } from '../../styles/theme';

// type 支持的颜色
const TYPE_COLORS = ['default', 'primary', 'danger', 'success', 'warning'] as const;
// color 支持的扩展内置颜色
const EXTENDED_COLORS = ['purple', 'teal', 'blue', 'yellow'] as const;
// 所有内置颜色
const BUILT_IN_COLORS = [...TYPE_COLORS, ...EXTENDED_COLORS] as const;

export function getIconColorValue(color: string | undefined, disabled: boolean | undefined): string | undefined {
    if (disabled) return theme.color.disabled;
    if (!color || color === 'default') return 'default';
    if (BUILT_IN_COLORS.includes(color as any)) {
        const themeColor = theme.color[color as keyof typeof theme.color];
        return themeColor;
    }
    return color;
}

export function useColor() {
    const instance = useInstance() as Tag;
    
    const effectiveColor = useState<string | undefined>(undefined);
    const colorClassName = useState<string | undefined>(undefined);
    const customStyle = useState<Record<string, string>>({});
    const iconColor = useState<string | undefined>(undefined);

    function updateColor() {
        const { color, type, disabled } = instance.get();
        const _effectiveColor = color || (TYPE_COLORS.includes(type as any) ? type : undefined); // color优先

        effectiveColor.set(_effectiveColor);

        const isBuiltIn = _effectiveColor ? BUILT_IN_COLORS.includes(_effectiveColor as any) : false;

        // 内置颜色 - 更新 colorClassName
        if (_effectiveColor && isBuiltIn && _effectiveColor !== 'default') {
            colorClassName.set(_effectiveColor);
        } else {
            colorClassName.set(undefined);
        }

        // 自定义颜色 - 更新 customStyle
        if (_effectiveColor && !isBuiltIn && !disabled) {
            const bgColor = palette(_effectiveColor, -4);
            customStyle.set({
                color: _effectiveColor,
                borderColor: _effectiveColor,
                backgroundColor: bgColor
            });
        } else {
            customStyle.set({});
        }

        // 更新 iconColor
        if (!_effectiveColor && !disabled) {
            iconColor.set('default');
        } else {
            const _iconColor = getIconColorValue(_effectiveColor, disabled);
            iconColor.set(_iconColor);
        }
    }

    useReceive<Tag>(['color', 'type', 'disabled'], updateColor);

    updateColor();

    return {
        effectiveColor,
        colorClassName,
        customStyle,
        iconColor,
    };
}