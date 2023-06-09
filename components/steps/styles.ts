import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    gap: '10px',
    get titleColor() { return theme.color.title },
    get desColor() { return theme.color.lightBlack },
    get markColor() { return theme.color.placeholder },
    get markborder() { return `1px solid ${theme.color.placeholder}` },
    markBgColor: '#fff',

    default: {
        get height() { return theme.default.height }, 
        get bgColor() { return theme.color.bg },
        markWidth: '16px',
    },

    // done
    done: {
        get markColor() { return theme.color.primary }, 
        get markBorderColor() { return theme.color.primary },
        markBgColor: '#fff',
        get mainColor() { return theme.color.primary },
    },

    // active
    active: {
        markColor: '#fff',
        get markBorderColor() { return theme.color.primary }, 
        get markBgColor() { return theme.color.primary },
        get mainColor() { return theme.color.primary }, 
    },

    // error
    error: {
        get markColor() { return theme.color.danger }, 
        get markBorderColor() { return theme.color.danger }, 
        markBgColor: '#fff',
        get mainColor() { return theme.color.danger }, 
    },

    // line
    line: {
        markWidth: '32px',
        markFontSize: '18px',
        get lineColor() { return theme.color.border},
        titleGap: '16px',
        descGap: '4px',

        get doneTailBgColor() { return theme.color.primary }, 
        gap: '5px',
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

        ${makeCommonStyles()};

        &.k-default {
            ${makeDefaultStyles()};
        }
            
        &.k-line,
        &.k-line-compact {
            ${makeLineStyles()};
        }

        &.k-line-compact {
            ${makeLineCompactStyles()};
        }
    `;
}

function makeDefaultStyles() {
    const defaults = steps.default;

    return css`
        text-align: center;
        height: ${defaults.height}; 
        background: ${defaults.bgColor};

        .k-step-wrapper {
            ${center()};
            height: 100%;
        }
        .k-step-mark {
            width: ${defaults.markWidth};
            height: ${defaults.markWidth}; 
            margin-right: ${steps.gap};
        }
        .k-step-main {
            display: flex;
            overflow: hidden;
            white-space: nowrap;
        }
        .k-step-title {
            padding-right: ${steps.gap};
        }

        // tail
        .k-step:last-of-type {
            .k-step-tail {
                display: none;
            }
        } 
        .k-step-tail {
            position: absolute;
            top: 0;
            right: calc(-1 * (${defaults.height} / 2 + ${steps.gap}));
            width: calc(${defaults.height} / 2 + ${steps.gap});
            height: ${defaults.height}; 
            overflow: hidden;
            z-index: 1;
            &:after, &:before {
                content: '';
                border-width: calc(${defaults.height} / 2 + ${steps.gap});
                border-style: solid;
                border-color: transparent;
                position: absolute;
                top: calc(-1 * ${steps.gap});
            }
            &:after {
                border-left-color: ${defaults.bgColor};
                left: calc(-1 * ${steps.gap});
            }
            &:before {
                border-left-color: #fff;
                left: 0;
            }
        }
        .k-step:not(:first-of-type) {
            padding-left: calc(${defaults.height} / 2 + ${steps.gap});
        }
    `
}

function makeLineStyles() {
    const line = defaults.line;
    return css`
        .k-step {
            display: flex;
        }
        .k-step-wrapper {
            display: inline-block;
            text-align: center;
            position: relative;
        }
        .k-step:last-of-type {
            flex: 0 0 auto;
        }
        .k-step-mark {
            width: ${line.markWidth};
            height: ${line.markWidth};
            position: relative;
            z-index: 1;
            &, .k-icon {
                font-size: ${line.markFontSize};
            }
        }
        .k-step-main {
            padding-top: ${line.titleGap};
        }
        .k-step-title {
            font-size: 14px;
            color: ${theme.color.text};
        }
        .k-step-content {
            margin-top: ${line.descGap};
            color: ${theme.color.placeholder};
        }
        
        // draw connected line
        .k-step-wrapper {
            &:before,
            &:after {
                content: '';
                display: block;
                height: 1px;
                background: ${line.lineColor};
                width: 50%;
                position: absolute;
                top: calc(${line.markWidth} / 2);
            }
            &:after {
                right: 0;
            }
        }
        .k-step {
            &:first-of-type .k-step-wrapper:before,
            &:last-of-type .k-step-wrapper:after {
                background: transparent;
            }
        }
        .k-step-tail {
            flex: 1;
            height: 1px;
            background: ${line.lineColor};
            margin-top: calc(${line.markWidth} / 2);
        }
        
        // status
        .k-step {
            &.k-done {
                .k-step-tail,
                &:not(:last-of-type) .k-step-wrapper:after,
                &:not(:first-of-type) .k-step-wrapper:before {
                    background: ${theme.color.primary};
                }
            }
            &:not(:first-of-type).k-active {
                .k-step-wrapper:before {
                    background: ${theme.color.primary};
                }
            }
            &.k-active .k-step-title {
                color: ${theme.color.primary};
            }
            &.k-error .k-step-title {
                color: ${theme.color.danger};
            }
        }
    `;
}

function makeLineCompactStyles() {
    return css`
        .k-step-wrapper {
            display: inline-flex;
            text-align: left;
            &:before, &:after {
                display: none;
            }
        }
        .k-step-main {
            padding: 6px 16px 0;
        }
        .k-step-tail {
            margin-right: 16px;
        }
    `;
}

function center(flex: 'flex' | 'inline-flex' = 'flex') {
    return css`
        display: ${flex};
        align-items: center;
        justify-content: center;
    `;
}

export function makeCommonStyles() {
    return css`
        .k-step {
            position: relative; 
            flex: 1;

            // status 
            ${stepStatus.map(status => {
                const styles = steps[status];
                return css`
                    &.k-${status} {
                        .k-step-mark {
                            color: ${styles.markColor};
                            border-color: ${styles.markBorderColor};
                            background: ${styles.markBgColor};
                        }
                        .k-step-main {
                            color: ${styles.mainColor};
                        }
                    }
                `
            })} 
        }
        .k-step-mark {
            ${center('inline-flex')};
            border: ${steps.markborder};
            border-radius: 50%;
            vertical-align: top;
            color: ${steps.markColor};
            background: ${steps.markBgColor};
        }
    `;
}
