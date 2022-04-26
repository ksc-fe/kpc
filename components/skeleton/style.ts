import {deepDefaults}  from '../../styles/utils';
import {theme, setDefault} from '../../styles/theme';
import {css, keyframes} from '@emotion/css';
import '../../styles/global';

export const kls = (className: string) => `k-skeleton-${className}`;

const defaults = {
    get transition() { return theme.transition.large },
    fontSize: '12px',
    titleMarginRight: '8px',
    borderPadding: '0 24px',
    collBorder: '1px solid #eee',

    item: {
        bgColor: '#dcdde0'
    }
};

let skeleton: typeof defaults;
setDefault(() => {
    skeleton = deepDefaults(theme, {skeleton: defaults}).skeleton;
});

export function makeStyles() {
    return css`
        border: 1px dotted #000;
        &.k-animated {
            .${kls('item')} > * {
                background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                background-size: 400% 100%;
                animation: ${skeletonLoading} 1.4s ease infinite;
            }
        }
        .${kls('item')}:first-child {
            .skeleton-item-text {
                width: 33%;
            }
        }
        .${kls('item')}:last-child {
            .skeleton-item-text {
                width: 61%;
            }
        }
        .${kls('avator-box')} {
            display: flex;
            & > div:last-child {
                flex-grow: 1;
                padding-left: 20px;
            }
        }
    `;
}

const skeletonLoading = keyframes`
    0% {
        background-position: 100% 50%;
    }
    to {
        background-position: 0 50%;
    }
`;

export function makeItemStyles() {
    const skeletonItem = skeleton.item;
    return css`
        & > div {
            background: ${skeletonItem.bgColor}
        }        
        .skeleton-item-text {
            width: 100%;
            height: 16px;
            border-radius: 4px;
            margin-top: 16px;
        }
        .skeleton-item-avator {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .skeleton-item-image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 200px;
            & > svg {
                width: 48px;
                height: 48px;
                fill: ${skeletonItem.bgColor};
            }
        }
        .skeleton-item-button {
            width: 64px;
            height: 32px;
            background: ${skeletonItem.bgColor};
        }
        .skeleton-item-input {
            width: 160px;
            height: 32px;
            background: ${skeletonItem.bgColor};
        }
    `;
}
