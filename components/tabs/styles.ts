import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';

type SizeStyles = {
    fontSize: string,
    height: string,
    padding: string,
    closeFontSize: string,
}

const closeFontSizeMap: Record<Sizes, string> = {
    large: '24px',
    default: '20px',
    small: '18px',
    mini: '16px',
}

const defaults = deepDefaults(
    {
        get transition() { return theme.transition.middle },
        get borderColor() { return theme.color.border },
        borderWidth: '1px',
        get border() { return `${tabs.borderWidth} solid ${tabs.borderColor}` },
        get color() { return theme.color.text },
        closeGap: `8px`,

        // scroll
        navigatorWidth: `20px`,

        //active
        active: {
            get color() { return theme.color.primary },
            bar: {
                height: '2px',
                get bgColor() { return theme.color.primary },
            }
        },

        // border-card
        borderCard: {
            get bgColor() { return theme.color.bg },
        },

        // no-border-card
        noBorderCard: {
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
            ${makeDefaultStyles()}
            ${makeCardStyles()};
        }

        &.k-type-border-card {
            ${makeBorderCardStyles()};
        }

        &.k-type-no-border-card {
            ${makeNoBorderCardStyles()};
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
            color:${theme.color.lightBlack};
        }

        // active-bar
        .k-tabs-active-bar {
            transition: all ${tabs.transition};
            position: absolute;
            left: 0;
            height: ${bar.height};
            background: ${bar.bgColor};
            bottom: calc(-${bar.height} / 2); 
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
                right: calc(-${bar.height} / 2); 
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
                }
            `
        })}
    `
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
            &.k-tabs-border-card,
            &.k-tabs-no-border-card {
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
                width: ${tabs.navigatorWidth} !important;
            }
            .k-tabs-prev {
                left: 0;
            }
            .k-tabs-next {
                right: 0;
            }
            &.k-is-scroll {
                padding: 0 ${tabs.navigatorWidth};
            }
        }
    `
}

function makeDefaultStyles() {
    return css`
        border-bottom: ${tabs.border};
        &.k-vertical {
            border-bottom: none;
            border-right: ${tabs.border};
        }
    `
}

function makeCardActiveBarCommonStyles() {
    return css`
        background: #fff;
        top: 0;
        height: auto;
        z-index: -1;
    `
}

function makeCardStyles() {
    return css`
        .k-tab {
            margin: 0;
        }
        .k-tabs-active-bar {
            ${makeCardActiveBarCommonStyles()};
            border-left: ${tabs.border};
            border-right: ${tabs.border};
            &:before {
                content: '';
                display: block;
                position: absolute;
                height: ${tabs.active.bar.height};
                background: ${theme.color.primary};
                top: 0;
                left: -${tabs.borderWidth};
                right: -${tabs.borderWidth};
            }
        }

        // vertical card
        &.k-vertical {
            .k-tabs-active-bar {
                left: 0;
                width: auto;
                border-left: none;
                border-right: none;
                border-top: ${tabs.border};
                border-bottom: ${tabs.border};
                &:before {
                    width: ${tabs.active.bar.height};
                    left: 0;
                    right: auto;
                    bottom: 0;
                    height: auto;
                }
            }
        }
    `
}

function makeBorderCardStyles() {
    return css`
        border: ${tabs.border};
        border-bottom: none;
        background: ${tabs.borderCard.bgColor};
        .k-tab {
            margin: 0;
        }
        .k-tabs-active-bar {
            background: #fff;
            top: 0;
            height: auto;
            z-index: -1;
        }

        &.k-vertical {
            border-right: none;
            border-bottom: ${tabs.border};
            .k-tabs-active-bar {
                width: auto;
                height: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
        }
    `
}

function makeNoBorderCardStyles() {
    return css`
        border-radius: ${theme.borderRadius};
        .k-tab {
            &:before {
                content: '';
                display: block;
                position: absolute;
                background: ${tabs.noBorderCard.bgColor};
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: -1;
            }
        }
        .k-tabs-active-bar {
            background: #fff;
            top: 0;
            height: auto;
            z-index: -1;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
            border-radius: 4px 4px 0px 0px;
        }
        &.k-vertical {
            border-right: none;
            .k-tabs-active-bar {
                width: auto;
                height: 0;
                left: 0;
                bottom: 0;
                right: 0;
            }
        }
    `
}
