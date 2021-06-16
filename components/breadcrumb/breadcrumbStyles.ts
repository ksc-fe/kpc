import {css, cx} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {bread} = deepDefaults(theme, {
    bread: {
        get breadcrumbFontSize() {
            return '.875rem';
        },
        get breadcrumbColor() {
            return theme.color.text;
        },
        breadcrumbHoverColor: '#4183c4',
        breadcrumbSeparatorMargin: '0 .5rem',
        breadcrumbActiveFontWeight: 'bold',
        get breadcrumbActiveColor() {
            return theme.color.text;
        }
    }
});

export default function makeStyles() {
    return cx(
        css`
        .k-breadcrumb {
            font-size: ${bread.breadcrumbFontSize};

            .k-item {
                display: inline-block;
                ${
                    bread.breadcrumbActiveFontWeight != 'normal' ? 
                    css`
                    &:last-of-type .k-item-link {
                        font-weight: ${bread.breadcrumbActiveFontWeight};
                    }
                    ` : bread.breadcrumbActiveColor != bread.breadcrumbColor ? 
                    css`
                    &:last-of-type .k-item-link {
                        color: ${bread.breadcrumbActiveColor};
                    }
                    ` : ''
                }
            
                .k-item-link {
                    color: ${bread.breadcrumbColor};
                }
                .k-item-link:hover {
                    color: ${bread.breadcrumbHoverColor};
                }
            }
            .k-item:last-of-type {
                .k-separator {
                    display: none;
                }
                .k-item-link:hover {
                    color: ${bread.breadcrumbColor};
                }
            }

            .separator {
                margin: ${bread.breadcrumbSeparatorMargin};
            }
        }`
    );
}
