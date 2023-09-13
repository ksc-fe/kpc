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
        },

        flatCard: {
            get bgColor() { return theme.color.bg },
        },

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
            cursor: pointer;
            display: inline-block;
            text-align: center;
            color: ${tabs.color};
            position: relative;
            vertical-align: middle;
            white-space: nowrap;
            overflow: hidden;
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
            position: relative;
            top: -1px;
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
        &:not(.k-vertical) {
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
                float: left;
                transition: transform ${tabs.transition};
            }
            .k-tabs-prev,
            .k-tabs-next {
                position: absolute;
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
            height: 100%;

            .k-tabs-scroll {
                overflow: hidden;
                position: relative;
                // @referece https://stackoverflow.com/questions/6421966/css-overflow-x-visible-and-overflow-y-hidden-causing-scrollbar-issue
                padding-bottom: 1px;
                margin-bottom: -1px;
                height: 100%;
            }
            .k-tabs-wrapper {
                white-space: nowrap;
                /* float: left; */
                transition: transform ${tabs.transition};
            }
            /* increase specificity, making sure the width is working */
            &.k-is-scroll {
                .k-tabs-prev,
                .k-tabs-next {
                    position: absolute;
                    width: 100%;
                    left: 0;
                }
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
        &:not(.k-vertical) .k-tab {
            border-bottom: ${tabs.border};
        }
        &.k-vertical .k-tab {
            border-bottom: none;
            border-right: ${tabs.border};
        }
    `;
}

function makeCardActiveBarCommonStyles() {
    return css`
        background: #fff;
        top: 0;
        height: auto;
        z-index: -1;
    `;
}

function makeCardStyles() {
    return css`
        border-top-left-radius: ${theme.borderRadius};
        border-top-right-radius: ${theme.borderRadius};
        background-color: ${tabs.card.bgColor};
        .k-tab {
            margin: 0;
        }
        .k-tabs-active-bar {
            ${makeCardActiveBarCommonStyles()};
            border-radius: ${theme.borderRadius} ${theme.borderRadius} 0px 0px;
            box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.08);
        }

        // vertical card
        &.k-vertical {
            .k-tabs-active-bar {
                ${makeCardActiveBarCommonStyles()};
                width: 100%;
                left: 0;
                border-radius: ${theme.borderRadius} 0px 0px ${theme.borderRadius};
            }
        }
    `;
}

function makeFlatCardStyles() {
    return css`
        border-top-left-radius: ${theme.borderRadius};
        border-top-right-radius: ${theme.borderRadius};
        background-color: ${tabs.card.bgColor};
        .k-tab {
            margin: 0;
        }
        .k-tabs-active-bar {
            top: 0;
            height: auto;
            z-index: -1;
            background: transparent;

            &::before {
                content: '';
                display: block;
                position: absolute;
                background: #fff;
                top: 2px;
                height: calc(100% - 4px);
                left: 0;
                width: 100%;
                border-radius: ${theme.borderRadius};
            }
        }

        // vertical card
        &.k-vertical {
            .k-tabs-active-bar {
                left: 0;
                width: 100%;
            }
        }
    `;
}
