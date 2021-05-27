import {css, cx} from '@emotion/css';
import {ButtonProps} from './index';
import {theme, ThemeValue} from '../../styles/theme';
import {deepDefaults, palette, getLeft}  from '../../styles/utils';
import '../../styles/global';

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

export const types = ['primary', 'warning', 'danger', 'active', 'success'] as const;

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

const {button} = deepDefaults(theme, {
    button: deepDefaults(
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

export {button};

export default function makeStyles({iconSide}: {iconSide?: string}) {
    const {secondary, link} = button;

    return cx(
        // extract static styles to individual css method for performance
        css`
            cursor: pointer;
            display: inline-block;
            height: ${button.height};
            padding: ${button.padding};
            outline: none;
            vertical-align: middle;
            color: ${button.color};
            background-color: ${button.bgColor};
            text-align: center;
            border-radius: ${button.borderRadius};
            border: 1px solid ${button.borderColor};
            font-size: ${button.fontSize};
            white-space: nowrap;
            transition: all .25s ease-in-out;
            button& > span {
                vertical-align: middle;
                line-height: calc(${button.height} - 2px);
            }
            &:hover,
            &:focus {
                border-color: ${button.hoverBorderColor};
                color: ${button.hoverColor};
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

            // types
            ${types.map(type => {
                const typeStyles = button[type];

                return css`
                    &.k-${type} {
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
                    }
                `;
            })}

            // secondary type
            &.k-secondary {
                color: ${secondary.color};
                border-color: ${secondary.borderColor};
                &:hover,
                &:focus {
                    background-color: ${secondary.hoverBgColor};
                }
                &:active {
                    background-color: ${secondary.activeBgColor};
                }
            }

            &.k-link {
                color: ${link.color};
                &:hover {
                    color: ${link.hoverColor};
                }
            }

            // disabled
            &.k-disabled {
                &, &:hover {
                    color: ${button.disabled.color};
                    background-color: ${button.disabled.bgColor};
                    border-color: ${button.disabled.borderColor};
                    cursor: not-allowed
                }
            }

            &.k-none,
            &.k-link {
                &, &:hover {
                    border: none;
                    background-color: transparent;
                }
                &.k-active {
                    color: ${theme.color.primary};
                }
            }

            ${sizes.map(size => {
                const styles = button[size];

                return css`
                    &.k-${size} {
                        font-size: ${styles.fontSize};
                        height: ${styles.height};
                        padding: ${styles.padding};
                        .k-icon {
                            line-height: calc(${styles.height} - 2px);
                        }
                        &.k-btn-icon {
                            width: ${styles.height};
                        }
                        button& > span {
                            line-height: calc(${styles.height} - 2px);
                        }
                    }
                `;
            })}

            // icon
            .k-icon {
                vertical-align: middle;
                line-height: calc(${button.height} - 2px);
            }
            &.k-btn-icon {
                width: ${button.height};
                padding: 0;
                .k-icon {
                    margin: 0
                }
            }

            // fluid
            &.k-fluid {
                width: 100%;
                padding: 0;
            }

            // shape
            &.k-circle {
                border-radius: calc(${button.large.height} / 2);
            }

            // loading
            &.k-loading {
                &, &:hover {
                    background-color: ${palette(button.bgColor, -2)};
                    color: ${palette(button.color, -2)};
                    border-color: ${palette(button.borderColor, -2)};
                }
                .k-icon:not(.k-icon-loading) {
                    display: none;
                }
                ${types.map(type => {
                    const styles = button[type];
                    return css`
                        &.k-${type} {
                            &, &:hover {
                                background-color: ${palette(styles.bgColor, -2)};
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
            &.k-ghost {
                background: transparent;
                color: ${button.ghost.color};
                border-color: ${button.ghost.borderColor};
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
                        &.k-${type} {
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
                // disabled
                &.k-disabled {
                    &, &:hover {
                        color: ${button.disabled.color};
                        border-color: ${button.disabled.ghostBorderColor};
                        background-color: transparent;
                    }
                }
            }
        `,

        // dynamic styles
        css`
            .k-icon {
                ${iconSide === 'right' ? 
                    `margin-left: ${button.icon.gap};` :
                    `margin-right: ${button.icon.gap};`
                }
            } 

            ${!iconSide && `
                &.k-loading {
                    &:not(.k-btn-icon) {
                        padding-left: calc(${getLeft(button.padding)} + 1em);
                        .k-icon-loading {
                            margin-left: -1em;
                        }
                        ${sizes.map(size => {
                            return css`
                                &.k-${size} {
                                    padding-left: calc(${getLeft(button[size].padding)} + 1em);
                                }
                            `
                        })}
                    }
                }
            `}
        `
    );
}
