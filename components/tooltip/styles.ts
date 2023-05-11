import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    padding: '8px 12px',
    get color() { return theme.color.text },
    bgColor: '#fff',
    lineHeight: 1.4,
    maxWidth: '312px',
    get boxShadow() { return tooltip.middleBoxShadow },

    // arrow
    arrow: {
        borderColor: 'rgba(221, 221, 221, .5)',
        width: '6px',
    },

    // confirm
    confirm: {
        gaps: '8px',
    },

    // dark
    dark: {
        get bgColor() { return theme.color.title },
        color: '#fff',
        get arrowBorderColor() { return theme.color.title },
    },

    smallPadding: '4px',
};

let tooltip: typeof defaults;
setDefault(() => {
    tooltip = deepDefaults(theme, {tooltip: defaults}).tooltip;
});

export type Theme = 'dark' | 'light';
export const themes: Theme[] = ['dark', 'light'];

const directionMap = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
};

export default function makeStyles() {
    const arrowLong = tooltip.arrow.width;
    const arrowShort = `calc(${arrowLong} - 1px)`;

    // use &.k-tooltip-content to override css in dropdown menu
    return css`
        &.k-tooltip-content {
            max-width: ${tooltip.maxWidth};
            min-width: 0;
            padding: ${tooltip.padding};
            line-height: ${tooltip.lineHeight};
            word-wrap: break-word;
            pointer-events: none;
            box-shadow: ${tooltip.boxShadow};

            // hoverable
            &.k-hoverable,
            &.k-always {
                pointer-events: all;
            }

            // arrow
            .k-tooltip-arrow {
                pointer-events: none;
                &:before, & {
                    position: absolute;
                    display: block;
                    border-style: solid;
                    border-color: transparent;
                }
                &:before {
                    content: ' ';
                }
                &.k-top,
                &.k-bottom {
                    &:before, & {
                        border-width: ${arrowLong} ${arrowShort};
                    }
                    &:before {
                        left: calc(-1 * ${arrowShort});
                    }
                }
                &.k-top {
                    top: calc(-2 * ${arrowLong});
                    &:before {
                        top: calc(-${arrowLong} + 1px);
                    }
                }
                &.k-bottom {
                    bottom: calc(-2 * ${arrowLong});
                    &:before {
                        bottom: calc(-${arrowLong} + 1px);
                    }
                }
                &.k-left,
                &.k-right {
                    &:before, & {
                        border-width: ${arrowShort} ${arrowLong};
                    }
                    &:before {
                        top: calc(-1 * ${arrowShort});
                    }
                }
                &.k-left {
                    left: calc(-2 * ${arrowLong});
                    &:before {
                        left: calc(-${arrowLong} + 1px);
                    }
                }
                &.k-right {
                    right: calc(-2 * ${arrowLong});
                    &:before {
                        right: calc(-${arrowLong} + 1px);
                    }
                }
            }

            // theme
            ${themes.map(theme => {
                let borderColor: string;
                let bgColor: string;
                let color: string;
                if (theme === 'dark') {
                    borderColor = tooltip.dark.arrowBorderColor;
                    bgColor = tooltip.dark.bgColor;
                    color = tooltip.dark.color;
                } else {
                    borderColor = tooltip.arrow.borderColor;
                    bgColor = tooltip.bgColor;
                    color = tooltip.color;
                }

                return css`
                    &.k-${theme} {
                        background: ${bgColor};
                        color: ${color};
                        .k-tooltip-arrow {
                            ${Object.keys(directionMap).map(direction => {
                                const borderDirection = directionMap[direction as keyof typeof directionMap];
                                return css`
                                    &.k-${direction} {
                                        border-${borderDirection}-color: ${borderColor};
                                        &:before {
                                            border-${borderDirection}-color: ${bgColor};
                                        }
                                    }
                                `
                            })}
                        }
                    }
                `
            })}

            // confirm
            .k-tooltip-buttons {
                padding-top: ${tooltip.confirm.gaps};
                .k-btn:last-of-type {
                    margin-left: ${tooltip.confirm.gaps};
                }
            }

            // size
            &.k-small {
                padding: ${tooltip.smallPadding};
            }
        }
    `
}
