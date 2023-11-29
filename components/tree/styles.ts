import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    fontSize: '12px',
    lineHeight: '24px',
    get hoverColor() { return theme.color.primary },
    get disabledColor() { return theme.color.disabled },

    textPadding: `0 3px`,
    marginLeft: '10px',
    paddingLeft: '6px',
    iconWidth: '21px',
    get iconColor() { return theme.color.placeholder },
    checkboxGap: `8px`,
    get leafIndent() { return tree.iconWidth },
    get borderRadius() { return theme.borderRadius },

    // selected
    selected: {
        get bgColor() { return palette(theme.color.primary, -4) },
    },

    // draggable
    dragging: {
        get border() { return `1px solid ${theme.color.primary}` },
        get bgColor() { return theme.color.bg },
        // get bgColor() { return palette(theme.color.warning, -4) },
    },

    get line() { return `1px dashed ${theme.color.border}` },
};

let tree: typeof defaults;
setDefault(() => {
    tree = deepDefaults(theme, {tree: defaults}).tree;
});

export function makeStyles(k: string) {
    return css`
        font-size: ${tree.fontSize};
        line-height: ${tree.lineHeight};
        position: relative;
        .${k}-tree-label {
            position: relative;
            display: flex;
            align-items: center;
            // dragging
            &.${k}-before,
            &.${k}-after {
                &:before {
                    position: absolute;
                    content: '';
                    display: block;
                    border-top: ${tree.dragging.border};
                    width: 100%;
                    left: 0;
                }
            }
            &.${k}-before:before {
                top: 0;
            }
            &.${k}-after:before {
                bottom: 0;
            }
            &.${k}-inner {
                background: ${tree.selected.bgColor};
            }
        }
        .${k}-tree-icon,
        .${k}-tree-text {
            cursor: pointer; 
        }
        .${k}-tree-text {
            padding: ${tree.textPadding};
            border-radius: ${tree.borderRadius};
            flex: 1;
            display: flex;
            align-items: center;
        }

        .${k}-tree-leaf {
            padding-left: ${tree.leafIndent};
        }

        .${k}-tree-icon {
            width: ${tree.iconWidth};
            text-align: center;
            color: ${tree.iconColor};
            &:before {
                transform: rotate(-90deg);
                transition: transform ${tree.transition};
            }
        }

        .${k}-tree-checkbox {
            margin-right: ${tree.checkboxGap};
        }

        // selectable
        &.${k}-selectable {
            .${k}-tree-node {
                &.${k}-selected {
                    > .${k}-tree-label .${k}-tree-text {
                        background: ${tree.selected.bgColor} !important;
                    }
                }
            }
        }

        .${k}-tree-node {
            background: #fff;
            &:not(.${k}-disabled) {
                > .${k}-tree-label .${k}-tree-text:hover {
                    background: ${theme.color.bg};
                }
            }
            &.${k}-expanded {
                > .${k}-tree-label .${k}-tree-icon:before {
                    transform: rotate(0);
                }
            }
            &.${k}-disabled {
                > .${k}-tree-label {
                    color: ${tree.disabledColor};
                    .${k}-tree-text {
                        cursor: not-allowed;
                    }
                }
            }

            &.${k}-dragging {
                background: ${tree.dragging.bgColor};
                // opacity: 0.4;
                .${k}-tree-node {
                    background: ${tree.dragging.bgColor};
                }
            }
        }

        .${k}-tree {
            margin-left: ${tree.marginLeft};
            padding-left: ${tree.paddingLeft};
        }

        // showLine
        &.${k}-line .${k}-tree {
            border-left: ${tree.line} 
        }
    `;
}
