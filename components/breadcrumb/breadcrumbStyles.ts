import {css, cx} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {breadcrumb} = deepDefaults(theme, {
    breadcrumb: {
        fontSize: '14px',
        get color() {
            return theme.color.text;
        },
        hoverColor: '#4183c4',
        separatorMargin: '0 16px',
        activeFontWeight: 'bold',
        get activeColor() {
            return theme.color.text;
        }
    }
});

export default function makeStyles() {
    return cx(
        css`
        .k-breadcrumb {
            font-size: ${breadcrumb.fontSize};

            .k-item {
                display: inline-block;
                ${
                    breadcrumb.activeFontWeight != 'normal' ? 
                    css`
                    &:last-of-type .k-item-link {
                        font-weight: ${breadcrumb.activeFontWeight};
                    }
                    ` : breadcrumb.activeColor != breadcrumb.color ? 
                    css`
                    &:last-of-type .k-item-link {
                        color: ${breadcrumb.activeColor};
                    }
                    ` : ''
                }
            
                .k-item-link {
                    color: ${breadcrumb.color};
                }
                .k-item-link:hover {
                    color: ${breadcrumb.hoverColor};
                }
            }
            .k-item:last-of-type {
                .k-separator {
                    display: none;
                }
                .k-item-link:hover {
                    color: ${breadcrumb.color};
                }
            }

            .separator {
                margin: ${breadcrumb.separatorMargin};
            }
        }`
    );
}
