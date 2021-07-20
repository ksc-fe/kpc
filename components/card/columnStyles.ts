import {css, cx} from '@emotion/css';
import {card} from './styles';
import '../../styles/global';

export default function makeStyles() {
    return css`
        display: flex;
        align-items: center;
        padding: ${card.padding}; 
        &.k-fluid {
            flex: 1;
        }
        &.k-center {
            justify-content: center;
        }
    `;
}