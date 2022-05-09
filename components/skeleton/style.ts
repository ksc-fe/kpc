import {deepDefaults}  from '../../styles/utils';
import { theme, setDefault } from '../../styles/theme';
import {css, keyframes} from '@emotion/css';
import '../../styles/global';

export const kls = (className: string) => `k-skeleton-${className}`;

type ItemSize = 'default' | 'large' | 'small' | 'mini';

const defaults = {
    item: {
        bgColor: '#dcdde0'
    }
};

let skeleton: typeof defaults;
setDefault(() => {
    skeleton = deepDefaults(theme, {skeleton: defaults}).skeleton;
});

export function makeStyles(size: ItemSize) {
    return css`
        &.k-animated {
            .${kls('item')} > * {
                background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
                background-size: 400% 100%;
                animation: ${skeletonLoading} 1.4s ease infinite;
            }
        }
        .k-skeleton-items {
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
        }
        .${kls('avator-box')} {
            display: flex;
            & > div:last-child {
                flex-grow: 1;
                padding-left: 20px;
            }
        }
        .skeleton-item-button,
        .skeleton-item-input {
            height: ${theme[size].height}
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
            background: ${skeletonItem.bgColor};
        }
        .skeleton-item-input {
            width: 160px;
            background: ${skeletonItem.bgColor};
        }
    `;
}
