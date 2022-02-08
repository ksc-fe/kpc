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
        get borderColor() { return theme.color.border },
        borderWidth: '1px',
        get border() { return `${tabs.borderWidth} solid ${tabs.borderColor}` },
        margin: `0 10px`,
        get color() { return theme.color.text },
        closeGutter: `8px`,

        // vertical
        verticalPadding: `0 25px`,

        //active
        get activeColor() { return theme.color.primary },
        highlight: {
            height: `2px`,
            // get bottom() { return `calc(-${tabs.highlight.height} / 2)` },
            get bgColor() { return theme.color.primary },
        },

        // scroll
        navigatorWidth: `20px`,

        // border-card
        borderCard: {
            get bgColor() { return theme.color.bg },
        },

        // no-border-card
        noBorderCard: {
            bgColor: `#eee`,
            gutter: `4px`,
        }
    },
    sizes.reduce((memo, size) => {
        memo[size] = {
            get fontSize() { return theme[size].fontSize },
            get height() { return theme[size].height },
            get padding() { return `0 ${theme[size].padding}` },
            get closeFontSize() { return closeFontSizeMap[size] },
        };

        return memo;
    }, {} as Record<Sizes, SizeStyles>)
);

let tabs: any;
setDefault(() => {
    tabs = deepDefaults(theme, {tabs: defaults}).tabs;
});

export function makeStyles() {
    return css`
        border-bottom: ${tabs.border};
        position: relative;
        line-height: 1;
        .k-tab {
            margin: ${tabs.margin};
            cursor: pointer;
            display: inline-block;
            text-align: center;
            color: ${tabs.color};
            position: relative;
            vertical-align: middle;
            &:hover,
            &.k-active {
                color: ${tabs.activeColor};
            }
            &.k-disabled {
                color: ${theme.color.disabled};
                cursor: not-allowed;
            }
        }
        .k-tab-close {
            margin-right: -${tabs.closeGutter};
            margin-left: ${tabs.closeGutter};
            position: relative;
            top: -1px;
        }

        // active-bar
        .k-tabs-active-bar {
            transition: all ${theme.transition};
            position: absolute;
            left: 0;
            height: ${tabs.highlight.height};
            background: ${tabs.highlight.bgColor};
            bottom: calc(-${tabs.highlight.height} / 2); 
        }

        // vertical
        &.k-vertical {
            display: inline-block;
            border-bottom: none;
            border-right: ${tabs.border};
            .k-tab {
                display: block;
                margin: 0;
                padding: ${tabs.verticalPadding};
            }
            .k-tabs-active-bar {
                left: auto;
                top: 0;
                right: calc(-${tabs.highlight.height} / 2); 
                width: ${tabs.highlight.height};
                height: auto;
            }
        }

        // card
        &.k-tabs-card {
            .k-tab {
                margin: 0;
            }
            .k-tabs-active-bar {
                background: #fff;
                top: 0;
                height: auto;
                z-index: -1;
                border-left: ${tabs.border};
                border-right: ${tabs.border};
                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    height: ${tabs.highlight.height};
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
                        width: ${tabs.highlight.height};
                        left: 0;
                        right: auto;
                        bottom: 0;
                        height: auto;
                    }
                }
            }
        }

        // border-card
        &.k-tabs-border-card {
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
        }

        // no-border-card
        &.k-tabs-no-border-card {
            border-bottom: none;
            .k-tab {
                margin-right: ${tabs.noBorderCard.gutter};
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
            .k-tabs-acitve-bar {
                border: none;
                &:before {
                    left: 0;
                    right: 0;
                }
            }
            .k-vertical {
                border-right: none;
                .k-tab {
                    margin-top: ${tabs.noBorderCard.gutter};
                }
                .k-tabs-active-bar {
                    border: none;
                }
            }
        }

        // scroll
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
                transition: transform ${theme.transition};
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

        // size
        ${sizes.map(size => {
            const styles = tabs[size];
            return `
                &.k-${size} {
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
    `;
}
