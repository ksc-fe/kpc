import {css} from '@emotion/css';
import {ButtonProps} from './index';
import theme from '../styles/default';
import {deepDefaults, palette}  from '../styles/utils';

const types = ['primary', 'warning', 'danger', 'active', 'success'] as const;

const btnStyles = {
    color: theme.color.lightBlack,
    bgColor: '#fff',
    padding: `0 ${theme.default.padding}`,
    borderColor: theme.color.border,
    borderRadius: theme.borderRadius,
    fontSize: theme.default.fontSize,
    height: theme.default.height,
    hoverBorderColor: theme.color.primary,
};

type ValueOf<T extends readonly any[]> = T[number];

type Types = ValueOf<typeof types>

type TypeStyles = {
    color: string,
    bgColor: string,
    borderColor: string,
    hoverBorderColor: string,
    ghostColor: string,
}

const btnTypeStyles = types.reduce((memo, type) => {
    const color = theme.color[type === 'active' ? 'primary': type];
    memo[type] = {
        color: '#fff',
        bgColor: color,
        borderColor: color,
        hoverBorderColor: palette(color, 1),
        ghostColor: color,
    };

    return memo;
}, {} as {[key in Types]: TypeStyles});

const themeWithBtn = deepDefaults(theme, {
    btn: {
        ...btnStyles,
        ...btnTypeStyles,
    }
});

function isTypes(t: any): t is Types {
    return types.indexOf(t) > -1;
} 

export default function makeStyles(props: ButtonProps, theme: typeof themeWithBtn) {
    const type = props.type!;
    const btn = theme.btn;

    return css`
        cursor: pointer;
        display: inline-block;
        height: ${btn.height};
        padding: ${btn.padding};
        outline: none;
        vertical-align: middle;
        color: ${btn.color};
        background-color: ${btn.bgColor};
        text-align: center;
        border-radius: ${btn.borderRadius};
        border: 1px solid ${btn.borderColor};
        font-size: ${btn.fontSize};
        white-space: nowrap;
        button& > span {
            vertical-align: middle;
            line-height: calc(${btn.height} - 2px);
        }
        &:hover,
        &:focus {
            border-color: ${btn.hoverBorderColor};
        }
        &:active {
            background-color: ${palette(theme.color.primary, -4)};
        }

        // types
        ${isTypes(type) && `
            background-color: ${btn[type].bgColor};
            color: ${btn[type].color};
            border-color: ${btn[type].borderColor};
            &:hover,
            &:focus {
                background-color: ${palette(btn[type].bgColor, -1)};
                border-color: ${btn[type as 'primary'].hoverBorderColor};
            }
            &:active {
                background-color: ${palette(btn[type].bgColor, 1)};
                border-color: ${palette(btn[type].borderColor, 1)};
            }
        `}
        
        // radio
        .k-button-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
    `;
}
