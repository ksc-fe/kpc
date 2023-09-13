import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';

type SizeStyles = {
    fontSize: string;
    height: string;
    padding: string;
    closeFontSize: string;
    navigatorWidth: string;
};

const closeFontSizeMap: Record<Sizes, string> = {
    large: '24px',
    default: '20px',
    small: '18px',
    mini: '16px',
};

const navigatorWidthMap: Record<Sizes, string> = {
    large: theme.large.height,
    default: theme.default.height,
    small: theme.small.height,
    mini: theme.mini.height,
};

const defaults = deepDefaults(
    {
        get transition() { return theme.transition.middle },
        get borderColor() { return '#f0f2f4' },
        borderWidth: '1px',
        get border() { return `${tabs.borderWidth} solid ${tabs.borderColor}` },
        get color() { return theme.color.text },
        closeGap: `8px`,

        //active
        active: {
            get color() { return theme.color.primary },
            bar: {
                height: '2px',
                get bgColor() { return theme.color.primary },
            }
        },

        card: {
            get bgColor() { return theme.color.bg },
            get borderRadius() { return theme.borderRadius },
        },

        // flatCard: {
            // get bgColor() { return theme.color.bg },
            // get borderRadius() { return theme.borderRadius },
        // },

        // define size
        size: {
            large: {
                padding: '24px',
            },
            default: {
                padding: '16px',
            },
        },
    },
    sizes.reduce((memo, size) => {
        memo[size] = {
            get fontSize() { return theme[size].fontSize },
            get height() { return theme[size].height },
            get padding() { return `0 ${tabs.size[size as keyof typeof tabs.size]?.padding || theme[size].padding}` },
            get closeFontSize() { return closeFontSizeMap[size] },
            // scroll
            get navigatorWidth() { return navigatorWidthMap[size] },
        };

        return memo;
    }, {} as Record<Sizes, SizeStyles>)
);

let tabs: typeof defaults;
setDefault(() => {
    tabs = deepDefaults(theme, {tabs: defaults}).tabs;
});

export function makeStyles() {
    return css`
        ${makeCommonStyles()};
        ${makeScrollStyles()};

        &.k-type-default {
            ${makeDefaultStyles()}
        }

        &.k-type-card {
            ${makeCardStyles()};
        }

        &.k-type-flat-card {
            ${makeFlatCardStyles()};
        }
    `;
}

function makeCommonStyles() {
    const active = tabs.active;
    const bar = active.bar;
    return css`
        position: relative;
        .k-tab {
            display: inline-flex;
            cursor: pointer;
            text-align: center;
            align-items: center;
            color: ${tabs.color};
            white-space: nowrap;
            text-overflow: ellipsis;
            &:hover,
            &.k-active {
                color: ${active.color};
            }
            &.k-disabled {
                color: ${theme.color.disabled};
                cursor: not-allowed;
            }
        }
        .k-tab-close {
            margin-right: -${tabs.closeGap};
            margin-left: ${tabs.closeGap};
            color: ${theme.color.lightBlack};
        }

        // active-bar
        .k-tabs-active-bar {
            transition: all ${tabs.transition};
            position: absolute;
            left: 0;
            height: ${bar.height};
            background: ${bar.bgColor};
            bottom: 0;
        }

        // vertical
        &.k-vertical {
            display: inline-block;
            .k-tab {
                display: block;
            }
            .k-tabs-active-bar {
                left: auto;
                top: 0;
                right: 0;
                width: ${bar.height};
                height: auto;
            }
        }

        // size
        ${sizes.map(size => {
            const styles = tabs[size];
            return `
                &.k-size-${size} {
                    .k-tab {
                        font-size: ${styles.fontSize};
                        height: ${styles.height};
                        line-height: ${styles.height};
                        padding: ${styles.padding};
                    }
                    .k-tab-close .k-icon {
                        font-size: ${styles.closeFontSize};
                    }
                    &:not(.k-vertical).k-is-scroll {
                        padding: 0 ${styles.navigatorWidth};
                    }
                    &.k-vertical.k-is-scroll {
                        padding: ${styles.navigatorWidth} 0;
                    }
                }
            `;
        })}
    `;
}

function makeScrollStyles() {
    return css`
        overflow: hidden;
        .k-tabs-scroll {
            overflow: hidden;
            position: relative;
            // @referece https://stackoverflow.com/questions/6421966/css-overflow-x-visible-and-overflow-y-hidden-causing-scrollbar-issue
            padding-bottom: 1px;
            margin-bottom: -1px;
        }
        &.k-type-card,
        &.k-type-flat-card {
            .k-tabs-scroll {
                padding-bottom: 0;
                margin-bottom: 0;
            }
        }
        .k-tabs-wrapper {
            white-space: nowrap;
            transition: transform ${tabs.transition};
        }
        .k-tabs-prev,
        .k-tabs-next {
            position: absolute;
            &:not(.k-disabled) {
                box-shadow: ${theme.boxShadow};
            }
        }

        &:not(.k-vertical) {
            .k-tabs-wrapper {
                float: left;
            }
            .k-tabs-prev,
            .k-tabs-next {
                top: 0;
            }
            .k-tabs-prev {
                left: 0;
            }
            .k-tabs-next {
                right: 0;
            }
        }

        &.k-vertical {
            &,
            .k-tabs-scroll {
                height: 100%
            }

            /* increase specificity, making sure the width is working */
            .k-tabs-prev,
            .k-tabs-next {
                width: 100% !important;
                left: 0;
            }
            .k-tabs-prev {
                top: 0;
            }
            .k-tabs-next {
                bottom: 0;
            }
        }
    `;
}

function makeDefaultStyles() {
    return css`
        border-bottom: ${tabs.border};
        &.k-vertical {
            border-bottom: none;
            border-right: ${tabs.border};
        }
    `;
}

function makeCardCommonStyles() {
    return css`
        border-radius: ${tabs.card.borderRadius};
        background-color: ${tabs.card.bgColor};
        padding: 0 2px;
        &.k-vertical {
            padding: 2px 0;
        }
        .k-tabs-active-bar {
            background: #fff;
            top: 0;
            height: auto;
            z-index: -1;
        }
    `
}

function makeCardStyles() {
    const borderRadius = tabs.card.borderRadius;
    return css`
        ${makeCardCommonStyles()};
        .k-tabs-active-bar {
            border-radius: ${borderRadius} ${borderRadius} 0px 0px;
            box-shadow: ${theme.boxShadow};
        }

        // vertical card
        &.k-vertical {
            .k-tabs-active-bar {
                width: 100%;
                left: 0;
                border-radius: ${borderRadius} 0px 0px ${borderRadius};
            }
        }
    `;
}

function makeFlatCardStyles() {
    return css`
        ${makeCardCommonStyles()};
        .k-tabs-active-bar {
            top: 2px;
            height: calc(100% - 4px);
            border-radius: ${tabs.card.borderRadius};
        }

        // vertical card
        &.k-vertical {
            .k-tabs-active-bar {
                left: 2px;
                width: calc(100% - 4px);
            }
        }
    `;
}
