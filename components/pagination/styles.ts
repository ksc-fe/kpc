import {css, cx} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, Sizes}  from '../../styles/utils';
import '../../styles/global';
import {button}  from '../button/styles';

type SizeStyles = {
    fontSize: string,
    btnGap: string,
    iconFontSize: string,
}

const btnGapMap: Record<Exclude<Sizes, 'default'>, string> = {
    large: '8px',
    small: '4px',
    mini: '2px',
}

const iconFontSizeMap: Record<Exclude<Sizes, 'default'>, string> = {
    large: '18px',
    small: '16px',
    mini: '14px',
}

const sizes = ['large', 'small', 'mini'] as const;

const {pagination} = deepDefaults(theme, {
    pagination: deepDefaults(
        {
            get fontSize() { return theme.default.fontSize }, 
            gutter: '16px',

            btn: {
                gap: '6px',
                padding: '0 3px',
            },

            // goto
            goto: {
                width: '60px',
                gap: '0 10px'
            }  
        },
        sizes.reduce((memo, size) => {
            const styles = theme[size];
            memo[size] = {
                get fontSize() { return styles.fontSize },
                get btnGap() { return btnGapMap[size] },
                get iconFontSize() { return iconFontSizeMap[size] },
            };

            return memo;
        }, {} as Record<Sizes, SizeStyles>)
    )
});

export {pagination};

export default function makeStyles() {
    return css`
        font-size: ${pagination.fontSize};
        .k-pagination-limits,
        .k-pagination-goto,
        .k-pagination-total {
            margin-left: ${pagination.gutter};
            display: inline-block;
            vertical-align: middle;
        }
        .k-pagination-ellipsis {
            background-color: transparent;
            border: none;
        }
        .k-btns {
            .k-btn {
                width: auto !important;
                min-width: ${button.height};
                padding: ${pagination.btn.padding};
                margin-right: ${pagination.btn.gap};
                &:last-of-type {
                    margin: 0 !important;
                }
            }
            .k-icon {
                font-size: 18px;
            }
        }

        // goto   
        .k-pagination-goto {
            .k-input {
                font-size: inherit;
                width: ${pagination.goto.width};
                margin: ${pagination.goto.gap};
            }
        }
            
        .k-select {
            width: auto;
        }

        // sizes
        ${sizes.map(size => {
            const styles = pagination[size];
            const btnStyles = button[size];
            return css`
                &.k-${size} {
                    font-size: ${styles.fontSize};
                    .k-btn {
                        margin-right: ${styles.btnGap};
                        min-width: ${btnStyles.height};
                        .k-icon {
                            font-size: ${styles.iconFontSize}; 
                        }
                    }
                }
            `
        })}

        // noBorder
        &.k-no-border {
            .k-select {
                &,
                &:hover,
                &.k-show {
                    border-color: transparent;
                }
            }
        }
            
        // simple
        &.k-simple {
            .k-btn {
                margin: 0;
            }
            .k-input-inner {
                text-align: center;
            }
            .k-pagination-text {
                vertical-align: middle;
            }
        }
    `;
}