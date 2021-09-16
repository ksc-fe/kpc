import {deepDefaults}  from '../../styles/utils';
import {theme} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';

export const kls = (className: string) => `k-collapse-${className}`;

const {collapse} = deepDefaults(theme, {
    collapse: {
        fontSize: '12px',
        titleMarginRight: '8px',
        borderPadding: '0 24px',
        collBorder: '1px solid #eee'
    }
});

export function makeStyles() {
    return css`
        font-size: ${collapse.fontSize};
        
        &.k-left {
            .${kls('arrow')} {
                float: left;
                margin-right: ${collapse.titleMarginRight};
                transform-origin: center center 0;
            }
        }

        &.k-border {
            border-radius: ${theme.borderRadius};
            padding: ${collapse.borderPadding};
            border: ${collapse.collBorder};
        }
    `;
}