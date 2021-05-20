import {css, cx} from '@emotion/css';
import {ButtonProps} from './index';
import {theme, getValue as $, ThemeValue} from '../styles/theme';
import {deepDefaults, palette}  from '../styles/utils';

type ValueOf<T extends readonly any[]> = T[number]

type Types = ValueOf<typeof types>

type Sizes = ValueOf<typeof sizes>

type TypeStyles = {
    color: ThemeValue<string>
    bgColor: ThemeValue<string>
    borderColor: ThemeValue<string>
    hoverBorderColor: ThemeValue<string>
    ghostColor: ThemeValue<string>
}

type SizeStyles = {
    fontSize: ThemeValue<string>
    height: ThemeValue<string>
    padding: ThemeValue<string>
}

const types = ['primary', 'warning', 'danger', 'active', 'success'] as const;

const sizes = ['large', 'small', 'mini'] as const;

const btnStyles = {
    color: () => theme.color.text,
    bgColor: '#fff',
    padding: () => `0 ${$(theme.default.padding)}`,
    borderColor: () => theme.color.border,
    borderRadius: () => theme.borderRadius,
    fontSize: () => theme.default.fontSize,
    height: () => theme.default.height,
    hoverBorderColor: () => theme.color.primary,
    hoverColor: () => theme.color.primary,
    ghostColor: '#fff',
    ghostHoverColor: () => palette($(theme.color.primary), -1),
};

const btnTypeStyles = types.reduce((memo, type) => {
    if (type !== 'active') {
        const color = theme.color;
        memo[type] = {
            color: '#fff',
            bgColor: () => color[type],
            borderColor: () => color[type],
            hoverBorderColor: () => palette($(color[type]), -1),
            ghostColor: () => color[type],
        };

    }

    return memo;
}, {} as {[key in Types]: TypeStyles});

const btnActiveStyles: TypeStyles = {
    color: () => theme.color.primary,
    bgColor: () => palette($(theme.color.primary), -4),
    borderColor: () => btnTypeStyles.primary.borderColor,
    hoverBorderColor: () => btnTypeStyles.primary.hoverBorderColor,
    ghostColor: () => btnTypeStyles.primary.ghostColor,
};

const btnSizeStyles = sizes.reduce((memo, size) => {
    const defaultStyle = theme[size];
    memo[size] = {
        fontSize: () => defaultStyle.fontSize,
        height: () => defaultStyle.height,
        padding: () => `0 ${$(defaultStyle.padding)}`,
    };

    return memo; 
}, {} as {[key in Sizes]: SizeStyles});

const themeWithBtn = deepDefaults(theme, {
    btn: {
        ...btnStyles,
        ...btnTypeStyles,
        active: btnActiveStyles,
        secondary: {
            color: () => theme.color.primary,
            borderColor: () => theme.color.primary,
            hoverBgColor: () => palette($(theme.color.primary), -4),
            activeBgColor: () => palette($(theme.color.primary), -3),
        },
        link: {
            color: () => theme.color.link,
            hoverColor: () => theme.color.linkHover,
        },
        ...btnSizeStyles,
    }
});

export default function makeStyles(props: ButtonProps & {checked: boolean, iconSide: string}) {
    const {secondary, link} = themeWithBtn.btn;
    const type = props.type!;
    const size = props.size!;

    return cx(
        makeRootStyles(),
        (isTypes(type) || props.checked) && makeTypeStyles(props.checked ? 'active' : type as Types),
        props.type === 'secondary' && css`
            color: ${$(secondary.color)};
            border-color: ${$(secondary.borderColor)};
            &:hover,
            &:focus {
                background-color: ${$(secondary.hoverBgColor)};
            }
            &:active {
                background-color: ${$(secondary.activeBgColor)};
            }
        `,
        type === 'link' && css`
            color: ${$(link.color)};
            &:hover {
                color: ${$(link.hoverColor)};
            }
        `,
        (type === 'link' || type === 'none') && css`
            &, &:hover {
                border: none;
                background-color: transparent;
            }
        `,
        size !== 'default' && makeSizeStyles(size, props.icon!),
    );
}

function makeRootStyles() {
    const btn = themeWithBtn.btn;

    return css`
        cursor: pointer;
        display: inline-block;
        height: ${$(btn.height)};
        padding: ${$(btn.padding)};
        outline: none;
        vertical-align: middle;
        color: ${$(btn.color)};
        background-color: ${$(btn.bgColor)};
        text-align: center;
        border-radius: ${$(btn.borderRadius)};
        border: 1px solid ${$(btn.borderColor)};
        font-size: ${$(btn.fontSize)};
        white-space: nowrap;
        transition: all .25s ease-in-out;
        button& > span {
            vertical-align: middle;
            line-height: calc(${$(btn.height)} - 2px);
        }
        &:hover,
        &:focus {
            border-color: ${$(btn.hoverBorderColor)};
            color: ${$(btn.hoverColor)};
        }
        &:active {
            background-color: ${palette($(theme.color.primary), -4)};
        }

        .k-button-input {
            position: absolute;
            opacity: 0;
            width: 0;
            height: 0;
        }
    `;
}

function isTypes(t: any): t is Types {
    return types.indexOf(t) > -1;
} 

function makeTypeStyles(type: Types) {
    const typeStyles = themeWithBtn.btn[type];

    return css`
        background-color: ${$(typeStyles.bgColor)};
        color: ${$(typeStyles.color)};
        border-color: ${$(typeStyles.borderColor)};
        &:hover,
        &:focus {
            background-color: ${$(palette($(typeStyles.bgColor), -1))};
            border-color: ${$(typeStyles.hoverBorderColor)};
            color: ${$(typeStyles.color)};
        }
        &:active {
            background-color: ${$(palette($(typeStyles.bgColor), 1))};
            border-color: ${$(palette($(typeStyles.borderColor), 1))};
        }
    `;
}

function makeSizeStyles(size: Sizes, icon: boolean) {
    const styles = themeWithBtn.btn[size];

    return css`
        font-size: ${$(styles.fontSize)};
        height: ${$(styles.height)};
        padding: ${$(styles.padding)};
        .k-icon {
            line-height: calc(${$(styles.height)} - 2px);
        }
        ${icon && `width: ${$(styles.height)}`}
        button& > span {
            line-height: calc(${$(styles.height)} - 2px);
        }
    `;
}
