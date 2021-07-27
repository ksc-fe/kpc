import {css, cx} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';
import {step} from './stepStyles';

const {steps} = deepDefaults(theme, {
    steps: {
        get height() { return theme.default.height }, 
        get bgColor() { return theme.color.bg }, 
        gutter: '10px',
        gapTop: '-2px',

        // done
        done: {
           get headColor() { return theme.color.primary }, 
           get headInnerBorderColor() { return theme.color.primary },
           headInnerBgColor: 'transparent',
           get mainColor() { return theme.color.primary },
           get simpleColor() { return theme.color.text }, 
        },

        // active
        active: {
            headColor: '#fff',
            get headInnerBorderColor() { return theme.color.primary }, 
            get headInnerBgColor() { return theme.color.primary },
            get mainColor() { return theme.color.primary }, 
            get simpleColor() { return theme.color.primary }, 
        },

        // error
        error: {
            get headColor() { return theme.color.danger }, 
            get headInnerBorderColor() { return theme.color.danger }, 
            headInnerBgColor: 'transparent',
            get mainColor() { return theme.color.danger }, 
            get simpleColor() { return theme.color.danger }, 
        },

        // line
        line: {
            bgColor: '#fff',
            mainContentGap: '5px 0 0',
            get tailBgColor() { return theme.color.placeholder },
            get doneTailBgColor() { return theme.color.primary }, 
            innerWidth: '32px',
            innerLineHeight: '30px',
            innerFontSize: '18px',
            headTop: '16px',
            titleFontSize: '14px',
            titleGopTop: '16px',
            iconLineHeight: '30px',
            tailTop: '16px'
        },

        // simple
        simple: {
            fontSize: '14px',
            get color() { return theme.color.disabled }, 
            headPaddingRight: '6px',
        }
    },
});

export {steps};

const stepStatus = ['done', 'active', 'error'] as const; 

export default function makeStyles() {
    return css`
        display: flex;
        // default and line type
        &.k-default,
        &.k-line {
            .k-step-head {
                padding-right: ${step.head.paddingRight};
                .k-step-inner {
                    width: ${step.head.innerWidth};
                    height: ${step.head.innerWidth}; 
                    line-height: calc(${step.head.innerWidth} - 2px);
                    border-radius: 50%;
                    text-align: center;
                    border: ${step.head.innerBorder};
                }
            }
            .k-step-icon:before {
                line-height: calc(${step.head.innerWidth} - 2px);
            }
            .k-step-main {
                color: ${step.main.color}; 
            }
            .k-step-tail {
                position: absolute;
            }
            .k-step:last-of-type {
                .k-step-tail {
                    display: none;
                }
            } 
            // step
            ${stepStatus.map(status => {
                const styles = steps[status];
                return css`
                    .k-${status} {
                        .k-step-inner {
                            color: ${styles.headColor};
                            border-color: ${styles.headInnerBorderColor} !important;
                            background: ${styles.headInnerBgColor};
                        }
                        .k-step-main {
                            color: ${styles.mainColor};
                        }
                    }
                `
            })} 
        }
            
        // default and simple type
        &.k-simple,
        &.k-default {
            text-align: center;
            height: ${steps.height}; 
            line-height: ${steps.height}; 
            overflow: hidden;
            .k-step-head,
            .k-step-main,
            .k-step-content {
                display: inline-block;
            }
            .k-step-head {
                .k-step-inner {
                    display: inline-block;
                }
            }
            .k-step {
                white-space: nowrap;
            }
            .k-step-wrapper {
                overflow: hidden;
            }
        }
    
        // default
        &.k-default {
            background: ${steps.bgColor};
            .k-step-tail {
                top: 0;
                right: calc(-1 * (${steps.height} / 2 + ${steps.gutter}));
                width: calc(${steps.height} / 2 + ${steps.gutter});
                height: ${steps.height}; 
                overflow: hidden;
                z-index: 1;
                &:after, &:before {
                    content: '';
                    border-width: calc(${steps.height} / 2 + ${steps.gutter});
                    border-style: solid;
                    border-color: transparent;
                    position: absolute;
                    top: calc(-1 * ${steps.gutter});
                }
                &:after {
                    border-left-color: ${steps.bgColor};
                    left: calc(-1 * ${step.head.paddingRight});
                }
                &:before {
                    border-left-color: ${steps.line.bgColor};
                    left: 0;
                }
            }
            .k-step-head,
            .k-step-inner {
                vertical-align: middle;
                margin-top: ${steps.gapTop};
            }
            .k-step:not(:first-of-type) {
                padding-left: calc(${steps.height} / 2 + ${steps.gutter});
            }
        }
        
        // line type
        &.k-line {
            .k-step {
                width: auto !important;
                &:last-of-type {
                    flex: 0 0 auto;
                    .k-step-wrapper {
                        display: flex;
                    }
                    .k-step-title {
                        padding-right: 0;
                    }
                }
            }
            .k-step-head {
                background: ${steps.line.bgColor};
                position: relative;
                display: flex;
                padding: 0;
                .k-step-inner {
                    width: ${steps.line.innerWidth};
                    height: ${steps.line.innerWidth};
                    line-height: ${steps.line.innerLineHeight};
                    font-size: ${steps.line.innerFontSize};
                }
                &:before,
                &:after {
                    content: '';
                    display: block;
                    flex: 1;
                    height: 1px;
                    background: ${theme.color.placeholder};
                    top: ${steps.line.headTop};
                    position: relative;
                }
            }
            .k-step-main {
                position: relative;
            }
            .k-step-title {
                line-height: ${step.head.innerWidth};
                background: ${steps.line.bgColor};
                font-size: ${steps.line.titleFontSize};
                padding: 0;
                margin-top: ${steps.line.titleGopTop};
            }
            .k-step-content {
                margin: ${steps.line.mainContentGap};
            }
            .k-step-tail {
                left: 0;
                right: ${step.head.paddingRight}; 
                top: calc(${step.head.innerWidth} / 2);
                height: 1px;
                background: ${steps.line.tailBgColor};
            }
            .k-step:first-of-type .k-step-head:before,
            .k-step:last-of-type .k-step-head:after {
                background: transparent;
            }
            // done
            .k-done {
                .k-step-tail {
                    background: ${steps.line.doneTailBgColor};
                }
                .k-step-head {
                    &:before,
                    &:after {
                        background: ${theme.color.primary};
                    }
                }
            }
            .k-active {
                .k-step-head {
                    &:before {
                        background: ${theme.color.primary};
                    }
                }
            }
            .k-step-icon:before {
                line-height: ${steps.line.iconLineHeight};
            }
            .k-step-wrapper {
                display: inline-block !important;
                text-align: center;
            }
            .k-step-tail {
                right: 0;
                top: ${steps.line.tailTop};
            }
        }
    
        // simple type
        &.k-simple {
            font-size: ${steps.simple.fontSize};
            .k-step,
            .k-step-main {
                color: ${steps.simple.color}; 
            }
            .k-step-head {
                padding-right: ${steps.simple.headPaddingRight};
                vertical-align: top;
            }
            ${stepStatus.map(status => {
                const styles = steps[status];
                return css`
                    .k-${status} {
                        .k-step-main,
                        .k-step-inner {
                            color: ${styles.simpleColor}; 
                        }
                    }
                `
            })} 
        }
    
        // clickable
        &.k-clickable {
            .k-done {
                cursor: pointer;
            }
        }
    `;
}