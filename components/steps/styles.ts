import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    get height() { return theme.default.height }, 
    get bgColor() { return theme.color.bg },
    get darkColor() {return theme.color.dark},
    get lightDesColor () {return theme.color.desText},

    lightColor:'#ffffff',
    gutter: '10px',
    gapTop: '-2px',

    // head
    head: {
        innerWidth: '16px',
        get innerBorder() { return `1px solid ${theme.color.placeholder}` },
        iconFontSize: '24px',
        paddingRight: '10px',
    },

    main: {
        get color() { return theme.color.text }, 
        get titlePaddingRight() { return steps.head.paddingRight },
        contentFontSize: '12px',
    },

    // done
    done: {
       get headColor() { return theme.color.primary }, 
       get headInnerBorderColor() { return theme.color.primary },
       headInnerBgColor: 'transparent',
       get mainColor() { return theme.color.primary },
       get simpleColor() { return theme.color.text },
       get doneDesColor() { return theme.color.primary } 
    },

    // active
    active: {
        headColor: '#fff',
        get headInnerBorderColor() { return theme.color.primary }, 
        get headInnerBgColor() { return theme.color.primary },
        get mainColor() { return theme.color.primary }, 
        get simpleColor() { return theme.color.primary },
        get activeDesColor() {return theme.color.primary} 
    },

    // error
    error: {
        get headColor() { return theme.color.danger }, 
        get headInnerBorderColor() { return theme.color.danger }, 
        headInnerBgColor: 'transparent',
        get mainColor() { return theme.color.danger }, 
        get simpleColor() { return theme.color.danger }, 
        get errorDesColor() {return theme.color.danger }
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
        tailTop: '16px',
        width: '160px',
    },

    // simple
    simple: {
        fontSize: '14px',
        get color() { return theme.color.disabled }, 
        headPaddingRight: '6px',
    }
};

let steps: typeof defaults;
setDefault(() => {
    steps = deepDefaults(theme, {steps: defaults}).steps;
});

const stepStatus = ['done', 'active', 'error'] as const; 

export function makeStepsStyles() {
    return css`
        display: flex;
        // default and line type
        &.k-line-compact,
        &.k-default,
        &.k-dot,
        &.k-line {
            .k-step-head {
                padding-right: ${steps.head.paddingRight};
            }
            .k-step-inner {
                width: ${steps.head.innerWidth};
                height: ${steps.head.innerWidth}; 
                line-height: calc(${steps.head.innerWidth} - 2px);
                border-radius: 50%;
                text-align: center;
                border: ${steps.head.innerBorder};
                span {
                    color: #b2b9bd;
                }
            }
            .k-step-icon:before {
                line-height: calc(${steps.head.innerWidth} - 2px);
            }
            .k-step-main {
                color: ${steps.main.color}; 
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
                            overflow: hidden;
                        }
                        .k-step-main {
                            color: ${styles.mainColor} !important;
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
            .k-step-content,
            .k-step-inner {
                display: inline-block;
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
                    left: calc(-1 * ${steps.head.paddingRight});
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
            // done
            .k-done {
                .k-step-inner {
                    span {
                        color: ${steps.done.doneDesColor};
                    }
                }
            }
            //active
            .k-active
            .k-step-inner {
                span {
                    color: ${steps.lightColor};
                }
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
            .k-step-inner {
                width: ${steps.line.innerWidth};
                height: ${steps.line.innerWidth};
                line-height: ${steps.line.innerLineHeight};
                font-size: ${steps.line.innerFontSize};
            }
            .k-step-main {
                position: relative;
                width: ${steps.line.width};
            }
            .k-step-title {
                line-height: ${steps.head.innerWidth};
                background: ${steps.line.bgColor};
                font-size: ${steps.line.titleFontSize};
                padding: 0;
                margin-top: ${steps.line.titleGopTop};
                color: ${steps.lightDesColor}
            }
            .k-step-content {
                margin: ${steps.line.mainContentGap};
                color: ${steps.lightDesColor}
            }
            .k-step-tail {
                left: 0;
                right: ${steps.head.paddingRight}; 
                top: calc(${steps.head.innerWidth} / 2);
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
                        background: ${steps.done.doneDesColor};
                    }
                }
                .k-step-title{
                    color: ${steps.darkColor} !important;
                }
                .k-step-inner {
                    span {
                        color: ${steps.done.doneDesColor};
                    }
                }
            }
            .k-active {
                .k-step-head {
                    &:before {
                        background: ${steps.active.activeDesColor};
                    }
                }
                .k-step-title {
                    color: ${steps.active.activeDesColor}
                }
                .k-step-inner {
                    span{
                        color: ${steps.lightColor};
                    }
                }
            }
            .k-error {
                .k-step-wrapper {
                    .k-step-title, .k-step-content {
                        color: ${steps.error.errorDesColor}
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
                            color: ${styles.simpleColor} !important; 
                        }
                    }
                `
            })} 
        }
    
        // clickable
        &.k-clickable {
            .k-done {
                cursor: pointer;
                .k-step-title {
                    &:hover {
                        color: ${steps.done.doneDesColor}; 
                    }
                }
                .k-step-inner{
                    &:hover {
                        background: #E6F7FF; 
                    }
                }
            }
        }

        // line-compact
        &.k-line-compact{
            .k-step {
                width: auto !important;
                &:last-of-type {
                    flex: 0 0 auto;
                    .k-step-wrapper {
                        display: flex;
                        margion-top: 5px;
                    }
                    .k-step-title {
                        padding-right: 0;
                        &:after {
                          display:none;
                        }
                    }
                    .k-step-head {
                        margin-top: 5px;
                    }
                }
            }
            .k-done {
                .k-step-inner {
                    padding: 2px;
                    border: 2px solid;
                }
                .k-step-wrapper:after,.k-step-title:after {
                    background: ${steps.done.doneDesColor};
                    height:2px;
                }
                .k-step-title {
                    color: ${steps.darkColor};
                }
            }
            .k-active {
                .k-step-title {
                    color: ${steps.active.activeDesColor};
                }
                .k-step-inner {
                    span{
                        color: ${steps.lightColor};
                    }
                }
            }
            .k-error {
              .k-step-wrapper {
                  .k-step-title, .k-step-content {
                      color: ${steps.error.errorDesColor}
                  }
                  .k-step-inner {
                     font-size:24px
                  }
              }
            }
            .k-step-wrapper {
                display: flex;
                align-items: center;
            }
            .k-step-wrapper:after {
                content: '';
                flex: 1;
                height: 1px;
                background: ${theme.color.placeholder};
            }
            .k-step-head {
                background: ${steps.line.bgColor};
                position: relative;
                display: flex;
                padding: 10px
              
            }
            .k-step-inner {
                width: ${steps.line.innerWidth};
                height: ${steps.line.innerWidth};
                line-height: ${steps.line.innerLineHeight};
                font-size: ${steps.line.innerFontSize};

            }
            .k-step-main {
                position: relative;
                width: ${steps.line.width};
                margin-top: 7px;
            }
            .k-step-title {
                line-height: ${steps.head.innerWidth};
                background: ${steps.line.bgColor};
                font-size: ${steps.line.titleFontSize};
                padding: 0;
                margin-top: ${steps.line.titleGopTop};
                color:  ${steps.lightDesColor};
                display:flex;
                align-items: center;
                justify-content: space-between;
                &:after{
                    content: '';
                    height: 1px;
                    width:50%;
                    background: ${theme.color.placeholder};
                }
            }
            .k-step-content {
                margin: ${steps.line.mainContentGap};
                color:  ${steps.lightDesColor};
            }
        }
        // dot
        &.k-dot {
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
                &:before,
                &:after {
                    content: '';
                    display: block;
                    flex: 1;
                    height: 1px;
                    background: ${theme.color.placeholder};
                    top: 7px;
                    position: relative;
                }
            }
            .k-step-inner {
                width: 14px;
                height: 14px;
                line-height: ${steps.line.innerLineHeight};
                font-size: ${steps.line.innerFontSize};
                span {
                    display: none
                }
            }
            .k-step-main {
                position: relative;
                width: ${steps.line.width};
            }
            .k-step-title {
                line-height: ${steps.head.innerWidth};
                background: ${steps.line.bgColor};
                font-size: ${steps.line.titleFontSize};
                padding: 0;
                margin-top: ${steps.line.titleGopTop};
                color:  ${steps.lightDesColor};
            }
            .k-step-content {
                margin: ${steps.line.mainContentGap};
                color:  ${steps.lightDesColor};
            }
            .k-step-tail {
                left: 0;
                right: ${steps.head.paddingRight}; 
                top: 7px !important;
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
                        background: ${steps.done.doneDesColor};
                    }
                }
                .k-step-title{
                    color:${steps.darkColor} !important;
                }
            }
            .k-active {
                .k-step-head {
                    &:before {
                        background: ${steps.active.activeDesColor};
                    }
                }
                .k-step-title {
                    color: ${steps.active.activeDesColor}
                }
            }
            .k-error {
                .k-step-wrapper {
                    .k-step-title, .k-step-content {
                        color: ${steps.error.errorDesColor}
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
    `;
}

export function makeStepStyles() {
    return css`
        position: relative; 
        flex: 1;
        .k-step-icon:before {
            font-size: ${steps.head.iconFontSize};
        }
        .k-step-title {
            display: inline-block;
            padding-right: ${steps.main.titlePaddingRight};
            white-space: nowrap;
        }
        .k-step-content {
            font-size: ${steps.main.contentFontSize};
        }
        .k-step-inner,
        .k-step-main {
            transition: all ${steps.transition};
        }
    `;
}


