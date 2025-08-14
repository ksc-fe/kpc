import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import {cache} from '../utils';

const defaults = {
    minWidth: '280px',
    maxWidth: '400px',
    gap: '8px',
    get color() { return theme.color.text },
    bgColor: '#fff',
    padding: {
        body: '16px',
        header: '12px 16px',
        footer: '12px 16px',
    },
    fontSize: {
        title: '16px',
        content: '12px',
    },
    border: '1px solid var(--kui-color-border)',
    arrow: {
        size: '8px',
        offset: '10px',
        borderColor: 'rgba(221, 221, 221, .5)',
    },
    
    mask: {
        color: 'rgba(0, 0, 0, 0.5)',
        targetPadding: '8px',
        targetBorderRadius: '4px',
    },

    // dark
    dark: {
        get bgColor() { return theme.color.title },
        color: '#fff',
        get arrowBorderColor() { return theme.color.title },
    },
};

let tour: typeof defaults;
setDefault(() => {
    tour = deepDefaults(theme, {tour: defaults}).tour;
    makeStyles?.clearCache();
});

export type Theme = 'dark' | 'light';
export const themes: Theme[] = ['dark', 'light'];

const directionMap = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
};

export const makeStyles = cache(function makeStyles(k: string) {
    const arrowLong = tour.arrow.size;
    const arrowShort = `calc(${arrowLong} - 1px)`;

    return css`
        .${k}-tour {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000;
            pointer-events: none;
        }

        .${k}-tour-target-highlight {
            position: fixed;
            box-shadow: 0 0 0 9999px ${tour.mask.color};
            border-radius: ${tour.mask.targetBorderRadius};
            z-index: 999;
            pointer-events: none;
            transition: all 0.3s ease;
            
            &.${k}-hoverable {
                pointer-events: auto;
                cursor: pointer;
                
                &:hover {
                    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.65);
                    &:after {
                        content: '';
                        position: absolute;
                        top: -4px;
                        left: -4px;
                        right: -4px;
                        bottom: -4px;
                        border: 2px solid rgba(255, 255, 255, 0.5);
                        border-radius: ${tour.mask.targetBorderRadius};
                        animation: pulse 1.5s infinite;
                    }
                }
            }
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.8;
            }
            50% {
                transform: scale(1.05);
                opacity: 0.5;
            }
            100% {
                transform: scale(1);
                opacity: 0.8;
            }
        }

        .${k}-tour-step-wrapper {
            position: absolute;
            z-index: 1000;
            filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));
            pointer-events: auto;
            
            /* 居中显示样式 */
            &.${k}-tour-centered {
                position: fixed !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
            }
        }

        .${k}-tour-step {
            background: #fff;
            border-radius: 4px;
            padding: 0;
            min-width: 240px;
            max-width: 400px;
            position: relative;
        }

        .${k}-tour-step-container {
            display: flex;
            flex-direction: column;
        }

        .${k}-tour-step-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 16px 8px;
            border-bottom: 1px solid #f0f0f0;
        }

        .${k}-tour-step-title {
            font-weight: 500;
            font-size: 16px;
            color: #262626;
        }

        .${k}-tour-step-close {
            cursor: pointer;
            color: #999;
            &:hover {
                color: #666;
            }
        }

        .${k}-tour-step-body {
            font-size: ${tour.fontSize.content};
            padding: 16px;
            color: #595959;
        }

        .${k}-tour-step-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px 16px;
        }

        .${k}-tour-step-indicator {
            color: #8c8c8c;
        }

        .${k}-tour-step-buttons {
            display: flex;
            gap: 8px;
        }

        /* 箭头样式 */
        .${k}-tour-arrow {
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
            &.${k}-top,
            &.${k}-bottom {
                &:before, & {
                    border-width: ${arrowLong} ${arrowShort};
                }
                &:before {
                    left: calc(-1 * ${arrowShort});
                }
            }
            &.${k}-top {
                top: calc(-2 * ${arrowLong});
                &:before {
                    top: calc(-${arrowLong} + 1px);
                }
            }
            &.${k}-bottom {
                bottom: calc(-2 * ${arrowLong});
                &:before {
                    bottom: calc(-${arrowLong} + 1px);
                }
            }
            &.${k}-left,
            &.${k}-right {
                &:before, & {
                    border-width: ${arrowShort} ${arrowLong};
                }
                &:before {
                    top: calc(-1 * ${arrowShort});
                }
            }
            &.${k}-left {
                left: calc(-2 * ${arrowLong});
                &:before {
                    left: calc(-${arrowLong} + 1px);
                }
            }
            &.${k}-right {
                right: calc(-2 * ${arrowLong});
                &:before {
                    right: calc(-${arrowLong} + 1px);
                }
            }
        }

        ${themes.map(theme => {
            let borderColor: string;
            let bgColor: string;
            let color: string;
            if (theme === 'dark') {
                borderColor = tour.dark.arrowBorderColor;
                bgColor = tour.dark.bgColor;
                color = tour.dark.color;
            } else {
                borderColor = tour.arrow.borderColor;
                bgColor = tour.bgColor;
                color = tour.color;
            }

            return css`
                &.${k}-${theme}  {
                    background: ${bgColor};
                    color: ${color};
                    .${k}-tour-step-wrapper .${k}-tour-arrow {
                        ${Object.keys(directionMap).map(direction => {
                            const borderDirection = directionMap[direction as keyof typeof directionMap];
                            return css`
                                &.${k}-${direction} {
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
    `;
});

// 让样式能被导入
export default makeStyles; 