import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import {input} from './styles';
import '../../styles/global';

const {search} = deepDefaults(theme, {
    search: {
        suffixMarginRight: '15px' 
    }
});

export default function makeStyles() {
    return css`
        position: relative;
        display: inline-block;
        .k-input {
            transition: width ${theme.transition};
        }
        .k-btn {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }
        .k-input-suffix {
            margin-right: ${search.suffixMarginRight};
        }

        // hide
        &.k-hide {
            .k-input {
                width: ${input.default.height};
            }
            .k-input-inner {
                padding: 0 !important;
            }
            ${sizes.map(size => {
                if (size == 'default') return;
                return css`
                    .k-input.k-${size} {
                        width: ${input[size].height};
                    }
                `
            })}
        }

        // line
        &.k-line {
            .k-input-inner {
                border-width: 0;
            }
            &.k-open {
                .k-input-inner {
                    border-bottom-width: 1px;
                }
            }
        }
    `
}
