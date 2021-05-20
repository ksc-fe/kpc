import {css, cx} from '@emotion/css';
import {ButtonProps} from './index';
import {theme, ThemeValue} from '../styles/theme';
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
    get color() { return theme.color.text },
    bgColor: '#fff',
    get padding() { return `0 ${theme.default.padding}` },
    get borderColor() { return theme.color.border },
    get borderRadius() { return theme.borderRadius },
    get fontSize() { return theme.default.fontSize },
    get height() { return theme.default.height },
    get hoverBorderColor() { return theme.color.primary },
    get hoverColor() { return theme.color.primary },
    ghostColor: '#fff',
    get ghostHoverColor() { return palette(theme.color.primary, -1) },
};

type TypesWithoutActive = Exclude<Types, 'active'>
const btnTypeStyles = types.reduce((memo, type) => {
    if (type !== 'active') {
        const color = theme.color;
        memo[type] = {
            color: '#fff',
            get bgColor() { return color[type as TypesWithoutActive] },
            get borderColor() { return color[type as TypesWithoutActive] },
            get hoverBorderColor() { return palette(color[type as TypesWithoutActive], -1) },
            get ghostColor() { return color[type as TypesWithoutActive] },
        };

    }

    return memo;
}, {} as {[key in Types]: TypeStyles});

const btnActiveStyles: TypeStyles = {
    get color() { return theme.color.primary },
    get bgColor() { return palette(theme.color.primary, -4) },
    get borderColor() { return btnTypeStyles.primary.borderColor },
    get hoverBorderColor() { return btnTypeStyles.primary.hoverBorderColor },
    get ghostColor() { return btnTypeStyles.primary.ghostColor },
};

const btnSizeStyles = sizes.reduce((memo, size) => {
    const defaultStyle = theme[size];
    memo[size] = {
        get fontSize() { return defaultStyle.fontSize },
        get height() { return defaultStyle.height },
        get padding() { return `0 ${defaultStyle.padding}` },
    };

    return memo; 
}, {} as {[key in Sizes]: SizeStyles});

const themeWithBtn = deepDefaults(theme, {
    btn: deepDefaults(
        {
            active: btnActiveStyles,
            secondary: {
                get color() { return theme.color.primary },
                get borderColor() { return theme.color.primary },
                get hoverBgColor() { return palette(theme.color.primary, -4) },
                get activeBgColor() { return palette(theme.color.primary, -3) },
            },
            link: {
                get color() { return theme.color.link },
                get hoverColor() { return theme.color.linkHover },
            },
        },
        btnStyles,
        btnTypeStyles,
        btnSizeStyles,
    )
});

export default function makeStyles(props: ButtonProps & {checked: boolean, iconSide: string}) {
    const {secondary, link} = themeWithBtn.btn;
    const type = props.type!;
    const size = props.size!;

    return cx(
        makeRootStyles(),
        (isTypes(type) || props.checked) && makeTypeStyles(props.checked ? 'active' : type as Types),
        props.type === 'secondary' && css`
            color: ${secondary.color};
            border-color: ${secondary.borderColor};
            &:hover,
            &:focus {
                background-color: ${secondary.hoverBgColor};
            }
            &:active {
                background-color: ${secondary.activeBgColor};
            }
        `,
        type === 'link' && css`
            color: ${link.color};
            &:hover {
                color: ${link.hoverColor};
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
        transition: all .25s ease-in-out;
        button& > span {
            vertical-align: middle;
            line-height: calc(${btn.height} - 2px);
        }
        &:hover,
        &:focus {
            border-color: ${btn.hoverBorderColor};
            color: ${btn.hoverColor};
        }
        &:active {
            background-color: ${palette(theme.color.primary, -4)};
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
        background-color: ${typeStyles.bgColor};
        color: ${typeStyles.color};
        border-color: ${typeStyles.borderColor};
        &:hover,
        &:focus {
            background-color: ${palette(typeStyles.bgColor, -1)};
            border-color: ${typeStyles.hoverBorderColor};
            color: ${typeStyles.color};
        }
        &:active {
            background-color: ${palette(typeStyles.bgColor, 1)};
            border-color: ${palette(typeStyles.borderColor, 1)};
        }
    `;
}

function makeSizeStyles(size: Sizes, icon: boolean) {
    const styles = themeWithBtn.btn[size];

    return css`
        font-size: ${styles.fontSize};
        height: ${styles.height};
        padding: ${styles.padding};
        .k-icon {
            line-height: calc(${styles.height} - 2px);
        }
        ${icon && `width: ${styles.height}`}
        button& > span {
            line-height: calc(${styles.height} - 2px);
        }
    `;
}
