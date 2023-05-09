import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';

const defaults = {
    border: '1px solid #e5e5e5',
    padding: '16px',
    get boxShadow() { return theme.boxShadow },
    get borderRadius() {return theme.largeBorderRadius},
    headerHeight: '48px',
    headerFontSize: '14px',
    bgColor: '#fff',
};

let card: typeof defaults;
setDefault(() => {
    card = deepDefaults(theme, {card: defaults}).card;
});

export function makeStyles() {
    return css`
        border-radius: ${card.borderRadius};
        background: ${card.bgColor};
        .k-card-header {
            height: ${card.headerHeight};
            line-height: ${card.headerHeight};
            padding: 0 ${card.padding};
        }
        .k-card-title {
            font-size: ${card.headerFontSize};
            display: inline-block;
        }
        .k-card-extra {
            float: right;
            height: 100%;
            display: flex;
            align-items: center;
        }

        .k-card-body {
            padding: 0 ${card.padding} ${card.padding};
        }

        // type
        &.k-shadow {
            box-shadow: ${card.boxShadow};
        }
        &.k-none {
            box-shadow: none;
        }
        &.k-border {
            border: ${card.border};
            .k-card-header {
                border-bottom: ${card.border};
            }
            .k-card-body {
                padding-top: ${card.padding};
            }
        }
        &.k-no-header {
            .k-card-body {
                padding-top: ${card.padding};
            }
        }  
    
        // grid
        &.k-card-grid {
            .k-card-body {
                display: flex;
                padding: 0;
            }
            &.k-border {
                .k-card-column:not(:last-of-type) {
                    border-right: ${card.border};
                }
            }
        }

        .k-card-column {
            display: flex;
            align-items: center;
            padding: ${card.padding}; 
            &.k-fluid {
                flex: 1;
            }
            &.k-center {
                justify-content: center;
            }
        }
    `;
}
