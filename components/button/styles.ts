import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette, getLeft, darken}  from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

type ValueOf<T extends readonly any[]> = T[number]

type Types = ValueOf<typeof types>

type Sizes = ValueOf<typeof sizes>

type TypeStyles = {
    color: string
    bgColor: string
    borderColor: string
    hoverBorderColor: string
    ghostColor: string
}

type SizeStyles = {
    fontSize: string
    height: string
    padding: string
}

export const types = ['primary', 'warning', 'danger', 'active', 'success'] as const;

const sizes = ['large', 'small', 'mini'] as const;

const btnStyles = {
    get color() { return theme.color.text },
    bgColor: '#fff',
    lineHeight: '1',
    get padding() { return `0 16px` },
    get borderColor() { return theme.color.border },
    get borderRadius() { return theme.borderRadius },
    get fontSize() { return theme.default.fontSize },
    get height() { return theme.default.height },
    get hoverBorderColor() { return theme.color.primary },
    get hoverColor() { return theme.color.primary },

    // ghost
    ghost: {
        color: '#fff',
        get hoverColor() { return palette(theme.color.primary, -1) },
        borderColor: '#fff',
        get hoverBorderColor() { return palette(theme.color.primary, -1) },
    },

    // icon
    icon: {
        gap: '5px',
        fontSize: '16px',
    },

    // disabled
    disabled: {
        get color() { return theme.color.disabled },
        get bgColor() { return theme.color.disabledBg },
        get borderColor() { return theme.color.disabledBorder },
        get ghostBorderColor() { return theme.color.disabled },
    },
};

type TypesWithoutActive = Exclude<Types, 'active'>
const btnTypeStyles = types.reduce((memo, type) => {
    if (type !== 'active') {
        // const color = theme.color;
        memo[type] = {
            color: '#fff',
            get bgColor() {
                return theme.color[type as TypesWithoutActive]
            },
            get borderColor() { return theme.color[type as TypesWithoutActive] },
            get hoverBorderColor() { return palette(theme.color[type as TypesWithoutActive], -1) },
            get ghostColor() { return theme.color[type as TypesWithoutActive] },
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
    // const defaultStyle = theme[size];
    memo[size] = {
        get fontSize() { return theme[size].fontSize },
        get height() { return theme[size].height },
        get padding() { return `0 ${theme[size].padding}` },
    };
    if (size === 'large') {
        Object.defineProperty(memo[size], 'padding', {
            value: `0 24px`,
        });
    }

    return memo; 
}, {} as {[key in Sizes]: SizeStyles});

const defaults = deepDefaults(
    {
        get transition() { return theme.transition.middle },
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
            hoverBgColor: 'transparent',
            // get hoverBgColor() { return theme.color.hoverBg },
        },

        none: {
            get hoverBgColor() { return theme.color.bg },
        },

        // ButtonGroup
        group: {
            primary: {
                get borderColor() { return darken(button.primary.borderColor, 3) }
            },
            warning: {
                get borderColor() { return darken(button.warning.borderColor, 3) },
            },
            danger: {
                get borderColor() { return darken(button.danger.borderColor, 3) },
            },
            success: {
                get borderColor() { return darken(button.success.borderColor, 3) },
            },
        }
    },
    btnStyles,
    btnTypeStyles,
    btnSizeStyles,
);

let button: typeof defaults;
setDefault(() => {
    button = deepDefaults(theme, {button: defaults}).button;
    makeButtonStyles?.clearCache();
    makeButtonGroupStyles?.clearCache();
});

export {button};

export const makeButtonStyles = cache(function makeButtonStyles(k: string, iconSide?: string, color?: string) {
    const {secondary, link} = button;

    return cx(
        // extract static styles to individual css method for performance
        css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            height: ${button.height};
            padding: ${button.padding};
            outline: none;
            vertical-align: middle;
            color: ${button.color};
            background: ${button.bgColor};
            border-radius: ${button.borderRadius};
            border: 1px solid ${button.borderColor};
            font-size: ${button.fontSize};
            white-space: nowrap;
            transition: all ${button.transition};
            line-height: ${button.lineHeight};
            .${k}-icon {
                color: inherit;
            }
            &.${k}-default,
            &.${k}-none,
            &.${k}-flat {
                .${k}-icon {
                    color: ${theme.color.lightBlack}; 
                }
                &:hover {
                    .${k}-icon {
                        color: inherit;
                    }
                }
            }

            &:hover,
            &:focus {
                border-color: ${button.hoverBorderColor};
                color: ${button.hoverColor};
            }
            &:active {
                background: ${palette(theme.color.primary, -4)};
            }

            .${k}-button-input {
                position: absolute;
                opacity: 0;
                width: 0;
                height: 0;
            }

            // types
            ${types.map(type => {
                const typeStyles = button[type];

                return css`
                    &.${k}-${type} {
                        background: ${typeStyles.bgColor};
                        color: ${typeStyles.color};
                        border-color: ${typeStyles.borderColor};
                        &:hover,
                        &:focus {
                            background: ${palette(typeStyles.bgColor, -1)};
                            border-color: ${typeStyles.hoverBorderColor};
                            color: ${typeStyles.color};
                        }
                        &:active {
                            background: ${palette(typeStyles.bgColor, 1)};
                            border-color: ${palette(typeStyles.borderColor, 1)};
                        }
                        &.${k}-disabled {
                            &, &:hover {
                                background: ${palette(typeStyles.bgColor, -2)};
                                color: ${palette(typeStyles.color, -2)};
                                border-color: ${palette(typeStyles.borderColor, -2)};
                            }
                        }
                    }
                `;
            })}

            // secondary type
            &.${k}-secondary {
                color: ${secondary.color};
                border-color: ${secondary.borderColor};
                &:hover,
                &:focus {
                    background: ${secondary.hoverBgColor};
                }
                &:active {
                    background: ${secondary.activeBgColor};
                }
                &.${k}-disabled {
                    border: none;
                }
            }

            

            ${color && css`
                &.${k}-custom {
                    color: ${color};
                    border-color: ${color};
                    &:hover,
                    &:focus {
                        background: ${palette(color, -4)};
                    }
                    &:active {
                        background: ${palette(color, -3)};
                    }
                    &.${k}-disabled {
                        border: none;
                    }
                }
            `}

            &.${k}-link {
                color: ${link.color};
                &:hover {
                    color: ${link.hoverColor};
                    background: ${link.hoverBgColor};
                }
            }

            &.${k}-none,
            &.${k}-link,
            &.${k}-flat {
                background: transparent;
                &, &:hover {
                    border: none;
                }
                &.${k}-active {
                    color: ${theme.color.primary};
                }
            }
            &.${k}-none:hover {
                background: ${button.none.hoverBgColor};
            }
            &.${k}-flat {
                background: ${button.none.hoverBgColor};
            }

            // disabled
            &.${k}-disabled {
                .${k}-icon {
                    color: inherit;
                }
                &, &:hover {
                    color: ${button.disabled.color};
                    background: ${button.disabled.bgColor};
                    border-color: ${button.disabled.borderColor};
                    cursor: not-allowed
                }
            }
            &.${k}-none.${k}-disabled,
            &.${k}-link.${k}-disabled {
                &, &:hover {
                    background: transparent;
                }
            }

            ${sizes.map(size => {
                const styles = button[size];

                return css`
                    &.${k}-${size} {
                        font-size: ${styles.fontSize};
                        height: ${styles.height};
                        padding: ${styles.padding};
                        &.${k}-btn-icon {
                            width: ${styles.height};
                        }
                    }
                `;
            })}

            // icon
            &.${k}-btn-icon {
                width: ${button.height};
                padding: 0;
                .${k}-icon {
                    margin: 0
                }
            }

            // fluid
            &.${k}-fluid {
                width: 100%;
                padding: 0;
            }

            // shape
            &.${k}-circle {
                border-radius: calc(${button.large.height} / 2);
            }

            // loading
            &.${k}-loading {
                &, &:hover {
                    background: ${palette(button.bgColor, -2)};
                    color: ${palette(button.color, -2)};
                    border-color: ${palette(button.borderColor, -2)};
                }
                .${k}-icon:not(.${k}-icon-loading) {
                    display: none;
                }
                ${types.map(type => {
                    const styles = button[type];
                    return css`
                        &.${k}-${type} {
                            &, &:hover {
                                background: ${palette(styles.bgColor, -2)};
                                color: ${palette(styles.color, -2)};
                                border-color: ${palette(styles.borderColor, -2)};
                            }
                        }
                    `
                })}
            }

            // let non-button element vertical align middle
            &:not(button) {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            // ghost
            &.${k}-ghost {
                background: transparent;
                color: ${button.ghost.color};
                border-color: ${button.ghost.borderColor};
                .${k}-icon {
                    color: inherit;
                }
                &:hover,
                &:active {
                    background: transparent;
                }
                &:hover {
                    color: ${button.ghost.hoverColor};
                    border-color: ${button.ghost.hoverBorderColor};
                }
                &:active {
                    color: ${theme.color.primary};
                    border-color: ${theme.color.primary};
                }
                ${types.map(type => {
                    const {ghostColor, borderColor} = button[type];
                    return css`
                        &.${k}-${type} {
                            color: ${ghostColor};
                            border-color: ${borderColor};
                            &:hover {
                                color: ${palette(ghostColor, -1)};
                                border-color: ${palette(ghostColor, -1)};
                            }
                            &:active {
                                color: ${palette(ghostColor, 1)};
                                border-color: ${palette(ghostColor, 1)};
                            }
                        }
                    `
                })}
                ${color && css`
                    &.${k}-custom {
                        color: ${color};
                        border-color: ${color};
                        &:hover {
                            color: ${palette(color, -1)};
                            border-color: ${palette(color, -1)};
                        }
                        &:active {
                            color: ${palette(color, 1)};
                            border-color: ${palette(color, 1)};
                        }
                    }
                `}
                // disabled
                &.${k}-disabled {
                    &, &:hover {
                        color: ${button.disabled.color};
                        border-color: ${button.disabled.ghostBorderColor};
                        background: transparent;
                    }
                }
            }
        `,

        // dynamic styles
        css`
            .${k}-icon {
                ${iconSide === 'right' ? 
                    `margin-left: ${button.icon.gap};` :
                    `margin-right: ${button.icon.gap};`
                }
            } 

            ${!iconSide && css`
                &.${k}-loading {
                    &:not(.${k}-btn-icon) {
                        padding-left: calc(${getLeft(button.padding)} + 1em);
                        .${k}-icon-loading {
                            margin-left: -1em;
                        }
                        ${sizes.map(size => {
                            return css`
                                &.${k}-${size} {
                                    padding-left: calc(${getLeft(button[size].padding)} + 1em);
                                }
                            `
                        })}
                    }
                }
            `}
        `
    );
});

export const makeButtonGroupStyles = cache(function makeButtonGroupStyles(k: string) {
    return css`
        display: inline-flex;
        align-items: center;
        flex-wrap: wrap;
        vertical-align: middle;
        .${k}-btn {
            margin: 0;
            vertical-align: middle;
            &:hover,
            &:focus,
            &.${k}-active {
                z-index: 1;
                position: relative;
            }
        }

        // fluid
        &.${k}-fluid {
            width: 100%;
        }

        // horizontal
        &:not(.${k}-vertical):not(.${k}-separate) {
            > .${k}-btn {
                &:not(:first-child) {
                    margin-left: -1px;
                    &:not(:last-child) {
                        border-radius: 0;
                    }
                }
                &:not(:only-child):first-child {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:only-child):last-child {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
                ${types.map(type => {
                    if (type === 'active') return;
                    const {borderColor} = button.group[type];
                    return css`
                        &.${k}-${type}:not(:first-child) {
                            border-left-color: ${borderColor};
                        }
                        &.${k}-${type}:not(:last-child) {
                            border-right-color: ${borderColor};
                        }
                    `;
                })}
            }
            &.${k}-fluid {
                display: flex;
                > .${k}-btn {
                    flex: 1;
                }
            }
        }
            
        // vertical
        &.${k}-vertical:not(.${k}-separate) {
            flex-direction: column;
            > .${k}-btn {
                &:not(.${k}-btn-icon) {
                    width: 100%;
                }
                &:not(:first-child) {
                    margin-top: -1px;
                    &:not(:last-child) {
                        border-radius: 0;
                    }
                }
                &:not(:only-child):first-child {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:only-child):last-child {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
                ${types.map(type => {
                    if (type === 'active') return;
                    const {borderColor} = button.group[type];
                    return css`
                        &.${k}-${type}:not(:first-child) {
                            border-top-color: ${borderColor};
                        }
                        &.${k}-${type}:not(:last-child) {
                            border-bottom-color: ${borderColor};
                        }
                    `;
                })}
            }
        }

        // separate
        &.${k}-separate {
            gap: 8px;
        }
    `;
});
