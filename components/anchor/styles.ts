import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';
import { cache } from '../utils';

const defaults = {
    get transition() { return theme.transition.middle },
    link: {
        padding: 16,
    },
};

let anchor: typeof defaults;
setDefault(() => {
    anchor = deepDefaults(theme, {anchor: defaults}).anchor;
    makeStyles?.clearCache();
});

export const makeStyles = cache(function makeStyles(k: string, vertical?: boolean) {
    return css`
        &.${k}-anchor-vertical {
            .${k}-tabs.${k}-vertical {
                border-right: none;
                border-left: 1px solid ${theme.color.border};
                .${k}-tabs-active-bar {
                    left: 0;
                    right: auto;
                }
            }
        }
        .${k}-anchor-link {
            &.${k}-tab {
                transition: color ${anchor.transition};
                text-align: ${vertical ? 'left' : 'center'};
            }
            
            ${Array.from({ length: 10 }, (_, i) => {
                const level = i + 1;
                const paddingLeft = anchor.link.padding + anchor.link.padding * level;
                return css`
                    &.${k}-anchor-link-level-${level}.${k}-tab {
                        padding-left: ${paddingLeft}px;
                    }
                `;
            })}
        }
    `;
});

