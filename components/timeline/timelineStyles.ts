import {css} from '@emotion/css';
import {theme, ThemeValue} from '../../styles/theme';
import {deepDefaults, palette}  from '../../styles/utils';
import '../../styles/global';

const {timeline} = deepDefaults(theme, {
    timeline: {
        fontSize: '12px'
    },
});

export {timeline};

export default function makeStyles() {
    return css`
        font-size: ${timeline.fontSize};    
        padding-top: calc(${theme.lineHeight}em / 2);
    `;
}