import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const {tree} = deepDefaults(theme, {
    tree: {
        fontSize: '12px',
        lineHeight: '24px',
        get hoverColor() { return theme.color.primary },
        get disabledColor() { return theme.color.disabled },

        textPadding: `0 3px`,
        indent: '16px',
        iconWidth: '21px',
        get iconColor() { return theme.color.placeholder },
        checkboxGap: `8px`,
        get leafIndent() { return tree.iconWidth },

        // selected
        selected: {
            get borderRadius() { return theme.borderRadius },
            get bgColor() { return palette(theme.color.primary, -3) },
        },

        // draggable
        dragging: {
            get border() { return `1px solid ${theme.color.primary}` },
            get bgColor() { return theme.color.bg },
        },
    }
});

export function makeStyles() {
    return css`
        font-size: ${tree.fontSize};
        line-height: ${tree.lineHeight};
        position: relative;
        .k-tree-label {
            position: relative;
        }
        .k-tree-icon,
        .k-tree-text {
            cursor: pointer; 
        }
        .k-tree-text {
            display: inline-block;
            vertical-align: middle;
            transition: background ${theme.transition};
            padding: ${tree.textPadding};
        }

        .k-tree-leaf {
            padding-left: ${tree.leafIndent};
        }

        .k-tree-icon {
            display: inline-block;
            width: ${tree.iconWidth};
            text-align: center;
            vertical-align: middle;
            color: ${tree.iconColor};
            transform: rotate(-90deg);
            transition: transform ${theme.transition};
        }

        .k-tree-checkbox {
            margin-right: ${tree.checkboxGap};
        }

        .k-tree-node {
            &:not(.k-disabled) {
                > .k-tree-label .k-tree-text:hover {
                    color: ${tree.hoverColor};
                }
            }
            .k-tree {
                padding-left: ${tree.indent};
                overflow: hidden;
            }
            &.k-expanded {
                > .k-tree-label .k-tree-icon {
                    transform: rotate(0);
                }
            }
            &.k-disabled {
                > .k-tree-label {
                    color: ${tree.disabledColor};
                    .k-tree-text {
                        cursor: not-allowed;
                    }
                }
            }

            &.k-selected {
                > .k-tree-label .k-tree-text {
                    background: ${tree.selected.bgColor};
                    border-radius: ${tree.selected.borderRadius};
                }
            }

            &.k-dragging {
                background: ${tree.dragging.bgColor};
            }
        }
    `;
}
