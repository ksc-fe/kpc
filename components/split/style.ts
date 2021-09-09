import {theme} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import {deepDefaults}  from '../../styles/utils';
import {Mode} from './index';

export const kls = (className: string): string => `k-split-${className}`;

const {split} = deepDefaults(theme, {
    split: {
        splitLineSize: '6px',
        dragLinesSize: '1px',
        dragLinesCount: 5,
        dragLiensGutter: 5,
        get bgColor() { return theme.color.bg },
        get baseBorder() { return `1px solid ${theme.color.border}` },
        get transition() { return theme.transition },
        get boderColor() { return theme.color.border },
        get dragLineMargin(): string {
            return `-${split.dragLinesCount * (split.dragLiensGutter + 1) / 2}px`;
        },
        boxShadow(direction: Mode) {
            let i = 1;
            let tmp = [];
            while(i <= split.dragLinesCount) {
                const shadowVal = direction === 'horizontal'
                    ? `0 ${i * split.dragLiensGutter}px 0 0`
                    : `${i * split.dragLiensGutter}px 0 0 0`;
                tmp.push(`${shadowVal} ${split.boderColor}`);
                i++;
            }
            
            return `${tmp.join(',')}`;
        }
    } 
});

export function makeStyles() {
    return css`
        display: flex;
        height: 100%;

        & > .${kls('first')},
        & > .${kls('last')} {
            overflow: auto;
            position: relative;
        }

        & > .${kls('first')} {
            flex: 0 0 auto;
        }

        & > .${kls('last')} {
            flex: auto;
        }

        &.k-first-auto {
            & > .${kls('first')} {
                flex: auto;
            }
            & > .${kls('last')} {
                flex: 0 0 auto;
            }
        }

        &:not(.k-resizing) {
            & > .${kls('first')},
            & > .${kls('last')} {
                transition: all ${split.transition};
            }
        }

        & > .${kls('line-wrapper')} {
            flex: 0 0 auto;
            text-align: center;
            .${kls('line')} {
                height: 100%;
                background: ${split.bgColor};
                position: relative;
            }
            .${kls('drag-lines')} {
                background: ${split.boderColor};
                position: absolute;
            }
        }

        &.${kls('horizontal')} {
            & > .${kls('line-wrapper')} {
                cursor: row-resize;
                width: ${split.splitLineSize};
                .${kls('line')} {
                    border-left: ${split.baseBorder};
                    border-right: ${split.baseBorder};
                }
                .${kls('drag-lines')} {
                    height: ${split.dragLinesSize};
                    width: 100%;
                    top: 50%;
                    margin-top: ${split.dragLineMargin};
                    box-shadow: ${split.boxShadow('horizontal')};
                }
            }
        }

        &.${kls('vertical')} {
            flex-direction: column;
            & > .${kls('line-wrapper')} {
                cursor: row-resize;
                height: ${split.splitLineSize};
                .${kls('line')} {
                    border-top: ${split.baseBorder};
                    border-bottom: ${split.baseBorder};
                }
                .${kls('drag-lines')} {
                    width: ${split.dragLinesSize};
                    height: 100%;
                    left: 50%;
                    margin-left: ${split.dragLineMargin};
                    box-shadow: ${split.boxShadow('vertical')};
                }
            }
        }
    `;
}