import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults}  from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    border: '1px solid #e5e5e5',
    padding: '24px',
    get boxShadow() { return theme.boxShadow },
    get borderRadius() {return theme.largeBorderRadius},
    headerHeight: '48px',
    headerFontSize: '14px',
    bgColor: '#fff',
    large: {
        padding: '32px',
        headerHeight: '48px',
    },
    small: {
        padding: '16px',
        headerHeight: '48px',
    },
    mini: {
        padding: '8px',
        headerHeight: '32px',
    }
};

let card: typeof defaults;
setDefault(() => {
    card = deepDefaults(theme, {card: defaults}).card;
    makeStyles?.clearCache();
});

const sizes = ['large', 'small', 'mini'] as const;

export const makeStyles = cache(function makeStyles(k: string) {
    return css`
        border-radius: ${card.borderRadius};
        background: ${card.bgColor};
        .${k}-card-header {
            height: ${card.headerHeight};
            padding: 0 ${card.padding};
            display: flex;
            align-items: center;
        }
        .${k}-card-title {
            font-size: ${card.headerFontSize};
            flex: 1;
        }
        .${k}-card-extra {
            display: flex;
            align-items: center;
        }

        .${k}-card-body {
            padding: 0 ${card.padding} ${card.padding};
        }

        // type
        &.${k}-shadow {
            box-shadow: ${card.boxShadow};
        }
        &.${k}-none {
            box-shadow: none;
        }
        &.${k}-border {
            border: ${card.border};
            .${k}-card-header {
                border-bottom: ${card.border};
            }
            .${k}-card-body {
                padding-top: ${card.padding};
            }
        }
        &.${k}-no-header {
            .${k}-card-body {
                padding-top: ${card.padding};
            }
        }  
    
        // grid
        &.${k}-card-grid {
            .${k}-card-body {
                display: flex;
                padding: 0;
            }
            &.${k}-border {
                .${k}-card-column:not(:last-of-type) {
                    border-right: ${card.border};
                }
            }
        }

        .${k}-card-column {
            display: flex;
            align-items: center;
            padding: ${card.padding}; 
            &.${k}-fluid {
                flex: 1;
            }
            &.${k}-center {
                justify-content: center;
            }
        }

        // size
        ${sizes.map(size => {
            const { padding, headerHeight } = card[size];
            return css`
                &.${k}-${size} {
                    .${k}-card-header {
                        padding: 0 ${padding};
                        height: ${headerHeight};
                    }
                    .${k}-card-body {
                        padding: 0 ${padding} ${padding};
                    }
                    &.${k}-border,
                    &.${k}-no-header {
                        .${k}-card-body {
                            padding-top: ${padding};
                        }
                    }
                    .${k}-card-column {
                        padding: ${padding};
                    }
                }
            `
        })} 
    `;
});
