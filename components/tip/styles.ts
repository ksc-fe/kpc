import {theme, ThemeValue} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import {deepDefaults, palette}  from '../../styles/utils';

type ValueOf<T extends readonly any[]> = T[number]
type Types = ValueOf<typeof types>

type TypeStyles = {
    bgColor: ThemeValue<string>
    borderColor: ThemeValue<string>
    hoverColor: ThemeValue<string>
}

export const types = ['primary', 'warning', 'danger', 'success'] as const;

const tipTypeStyles = types.reduce((memo, type) => {
    const color = theme.color
    memo[type] = {
        get bgColor() { return palette(color[type], -4) },
        get borderColor() { return color[type] },
        get hoverColor() { return palette(color[type], -2) }
    }

    return memo
}, {} as {[key in Types]: TypeStyles});

const tip = deepDefaults(
    {
        bgColor: '#fff',
        title: {
            fontSize: '14px',
            marginBottom: '8px'
        },
        iconFont: '26px',
        get color() { return theme.color.text },
        get padding() { return `6px ${theme.default.padding}` },
        get borderColor() { return theme.color.border },
        get borderRadius() { return theme.borderRadius },
        get fontSize() { return theme.default.fontSize },
    },
    tipTypeStyles
);

export function makeStyles() {
    return css`
        // Tip extends Tag, so we add k-tip to increase the priority of class
        &.k-tip {
            display: flex;
            height: auto;
            padding: 0;
            color: ${tip.color} !important;
            align-items: flex-start;
        }
        .k-tip-wrapper {
            flex: 1;
            padding: ${tip.padding};
        }

        .k-tip-title {
            font-size: ${tip.title.fontSize};
            margin-bottom: ${tip.title.marginBottom};
        }

        &.k-fade-leave-active {
            position: relative;
        }
    `;
}
