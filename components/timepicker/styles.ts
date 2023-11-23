import {css, cx} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, sizes, Sizes, getRight, getLeft, palette} from '../../styles/utils';
import '../../styles/global';
import {datepicker, makePanelStyles as makePanelStylesBase} from '../datepicker/styles';

const defaults = {
    get border() { return datepicker.border; },
    padding: `16px`,
    scrollHeight: `160px`,

    // range
    range: {
        width: `200px`,
        padding: `16px`,
        titleGap: `8px`,
        scrollHeight: `140px`,
    },
};

let timepicker: typeof defaults;
setDefault(() => {
    timepicker = deepDefaults(theme, {timepicker: defaults}).timepicker;
});

export function makePanelStyles(k: string) {
    return cx(
        makePanelStylesBase(k),
        css`
            &.${k}-time-content {
                .${k}-datepicker-time {
                    padding: ${timepicker.padding};
                }
                .${k}-scroll-select {
                    height: ${timepicker.scrollHeight};
                }   
            }
            &.${k}-range {
                .${k}-datepicker-time {
                    width: auto;
                    border: ${timepicker.border};
                }
                .${k}-scroll-select {
                    height: ${timepicker.range.scrollHeight};
                }
                .${k}-datepicker-calendar-wrapper {
                    padding: ${timepicker.range.padding};
                    width: ${timepicker.range.width};
                    border: none;
                }
                .${k}-timepicker-title {
                    text-align: center;
                    margin-bottom: ${timepicker.range.titleGap};
                }
            }
        `,
    );
}
