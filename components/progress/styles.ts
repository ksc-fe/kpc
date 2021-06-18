import {css, keyframes} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

export const types = ['active', 'normal', 'error', 'success', 'warning'] as const;

const sizes = ['small', 'mini'] as const;

const progressBarAnimation = keyframes`
    from {
        opacity: 0.2;
        width: 14px;
        margin-left: 14px;
    }
    to {
        opacity: 0;
        width: 100%;
    }
`

const procesStyles = {
    stokeColor: {
        get normal() { return theme.color.primary },
        get success() { return theme.color.success },
        get error() { return theme.color.danger },
        get warning() { return theme.color.warning },
        color: '#eaeef2'
    },
    animation: {
        transition: 'all .6s ease'
    },
    bar: {
        fontColor: '#404040',
        height: '16px',
        textWidth: '40px',
        textMarginLeft: '16px',
        innerText: {
            fontSize: '12px',
            margin: '1px 3px',
            paddingRight: '10px'
        },
        small: {
            height: '10px',
            fontSize: '12px'
        },
        mini: {
            height: '4px',
            fontSize: '12px'
        }
    },
    circle: {
        width: '104px',
        fontSize: '16px',
        small: {
            width: '80px',
            fontSize: '14px'
        },
        mini: {
            width: '40px',
            fontSize: '12px'
        }
    }
}; 

const {progress} = deepDefaults(theme, {
    progress: procesStyles
});
export {progress};

export default function makeStyles() {
    return css`
        position: relative;
        line-height: 1;

        // bar
        &.k-bar {
            display: flex;
            align-items: center;
            .k-container {
                height: ${progress.bar.height};
                border-radius: ${progress.bar.height};
                background-color: ${progress.stokeColor.color};
                overflow: hidden;
                position: relative;
                vertical-align: middle;
                font-size: ${progress.bar.innerText.fontSize};
                flex: 1;
            }
            .k-content {
                position: relative;
                left: 0;
                top: 0;
                white-space: nowrap;
                width: 100%;
                height: 100%;
                border-radius: ${progress.bar.height};
            }
            .k-bg {
                background-color: ${progress.stokeColor.normal};
                height: 100%;
                border-radius: ${progress.bar.height};
                transition: ${progress.animation.transition};
                position: relative;
            }
            .k-inner-text {
                display: inline-block;
                vertical-align: middle;
                color: #ffffff;
                margin: ${progress.bar.innerText.margin};
                width: 100%;
                text-align: right;
                padding-right: ${progress.bar.innerText.paddingRight};
            }
            
            // status
            &.k-success {
                .k-bg {
                    background: ${progress.stokeColor.success};
                }
                .k-icon {
                    color: ${progress.stokeColor.success};
                }
            }
            &.k-error {
                .k-bg {
                    background: ${progress.stokeColor.error};
                }
                .k-icon {
                    color: ${progress.stokeColor.error};
                }
            }
            &.k-warning {
                .k-bg {
                    background: ${progress.stokeColor.warning};
                }
            }
            &.k-active {
                .k-bg {
                    &:before
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: #fff;
                    animation: ${progressBarAnimation} 2s ease infinite;
                    border-radius: ${progress.bar.height};
                }
            }
            ${sizes.map(size => {
                return css`
                    &.k-${size} {
                        font-size: ${progress.bar[size].fontSize};
                        .k-container {
                            height ${progress.bar[size].height};
                        }
                    }
                `
            })}
            .k-text {
                margin-left: ${progress.bar.textMarginLeft};
                width: ${progress.bar.textWidth};
            }
        };

        // circle
        &.k-circle {
            width: ${progress.circle.width};
            height: ${progress.circle.width};
            font-size: ${progress.circle.fontSize};
            .k-canvas
                transform: rotate(-90deg);
            .k-meter
            .k-value
            .k-animate {
                fill: none;
            };
            .k-meter {
                stroke: ${progress.stokeColor.color};
            };
            .k-value {
                stroke ${progress.stokeColor.normal};
                stroke-linecap: round;
                transition: ${progress.animation.transition};
            };
            .k-animate {
                stroke: #fff;
                stroke-linecap: round;
            };
            .k-text {
                position: absolute;
                top: 50%;
                text-align: center;
                width: 100%;
                transform: translateY(-50%); 
            };

            // status 
            &.k-success {
                .k-value {
                    stroke ${progress.stokeColor.success};
                }
            };
            &.k-error {
                .k-value {
                    stroke ${progress.stokeColor.error};
                }
            };
            ${sizes.map(size => {
                return css`
                    &.k-${size} {
                        width: ${progress.circle[size].width};
                        height: ${progress.circle[size].width};
                        font-size: ${progress.circle[size].fontSize};
                    }
                `
            })}
        }
    `
}


