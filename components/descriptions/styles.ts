import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';


const defaults = {
    title: {
        get color() { return theme.color.title },
        weight: 500,
        size: '14px',
        height: '20px',
    },
    label: {
        get color() { return theme.color.lightBlack },
        padding: '0 16px 0 0',
        size: '12px',
        weight: 400,
    },
 
};

let descriptions: typeof defaults;
setDefault(() => {
    descriptions = deepDefaults(theme, {descriptions: defaults}).descriptions;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string, column: number) {
    const itemWidth = `${100 / column}%`;

    return css`
        &.${k}-descriptions {
            &.${k}-vertical {
                .${k}-description-item {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;

                    .${k}-description-centent {
                        width: auto;
                    }
                }
            }
        }

        .${k}-descriptions-title {
            color: ${descriptions.title.color};
            font-weight: ${descriptions.title.weight};
            font-size: ${descriptions.title.size};
            height: ${descriptions.title.height};
        }

        .${k}-descriptions-content {
            display: flex;
            flex-wrap: wrap;
            padding-top: 16px;
        }

        .${k}-description-item {
            display: flex;
            align-items: center;
            padding-bottom: 16px;
            flex: 0 0 ${itemWidth};
            width: ${itemWidth};

            .${k}-description-centent {
                display: flex;
                align-items: center;
                max-width: 60%;
            }

            .${k}-description-item-label {
                color: ${descriptions.label.color};
                padding: ${descriptions.label.padding};
                font-weight: ${descriptions.label.weight};
                font-size: ${descriptions.label.size};
            }

            .${k}-description-option {
                display: inline-block;
                margin-left: 8px;
            }
        }
    `
});
