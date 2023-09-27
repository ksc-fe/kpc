import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';

export default function makeStyles() {
    return css`
        &.k-popover {
            display: flex;

            .k-popover-icon-wrapper {
                display: inline-block;
                margin-top: 2px;
                margin-right: 8px;
                vertical-align: center;
                line-height: 20px;
                width: 16px;
                flex-shrink: 0;
            }
            ${(['info', 'error', 'success', 'warning'] as const).map(type => {
                const color = theme.color[type === 'error' ? 'danger' : type];
                return css`
                    &.k-${type} {
                        .k-popover-icon {
                            color: ${color};
                        }
                    }
                `
            })}

            .k-popover-content-wrapper {
                flex: 1;
            }

            .k-popover-title {
                font-size: 14px;
                line-height: 20px;
                font-weight: 500;
            }

            .k-popover-title + .k-popover-content {
                margin-top: 8px;
            }
        }
    `;
}
