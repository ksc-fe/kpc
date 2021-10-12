import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const {slider} = deepDefaults(theme, {
    slider:  {
        height: '4px',
        
        bgColor: '#e5e5e5',
        get barColor() { return theme.color.primary },
        borderRadius: '2px',

        thumb: {
            height: '12px',
            width: '12px',
            get border() { return `2px solid ${slider.barColor}` },
            borderRadius: '50%',
            bgColor: '#fff',
            hoverTransform: 'scale(1.5)',
            hoverBgColor: '#fff',
            disabledBgColor: '#fff',
        },

        endPadding: '10px 0 0',

        disabled: {
            get color() { return theme.color.disabled },
            get bgColor() { return theme.color.disabledBg },
        },

        // spinnerWidth: '124px',
        spinnerGap: '16px',

        stop: {
            get width() { return slider.height },
            get height() { return slider.stop.width },
            bgColor: '#fff',
        },

        marks: {
            height: '26px',
            get activeColor() { return theme.color.primary },
        }
    }
});

export function makeStyles() {
    return css`
        position: relative;
        outline: none;
        display: flex;
        .k-slider-main {
            flex: 1;
        }
        .k-slider-track-wrapper {
            cursor: pointer;
            height: 32px;
            display: flex;
            align-items: center;
        }
        .k-slider-track {
            flex: 1;
            height: ${slider.height};
            background-color: ${slider.bgColor};
            border-radius: ${slider.borderRadius};
            position: relative;
            user-select: none;
        }
        .k-slider-bar {
            background-color: ${slider.barColor};
            position: absolute;
            height: 100%;
            border-radius: ${slider.borderRadius};
            transition: all ${theme.transition};
        }
        .k-slider-thumb-wrapper {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: left ${theme.transition};
            z-index: 1;
        }
        .k-slider-thumb {
            height: ${slider.thumb.height};
            width: ${slider.thumb.width};
            transition: all ${theme.transition};
            border: ${slider.thumb.border};
            border-radius: ${slider.thumb.borderRadius};
            background-color: ${slider.thumb.bgColor};
            outline: none;
            &:hover,
            &:focus {
                transform: ${slider.thumb.hoverTransform};
                cursor: grab;
                background-color: ${slider.thumb.hoverBgColor};
            }
        }
        .k-slider-ends {
            display: flex;
            justify-content: space-between;
            span {
                cursor: pointer;
            }
        }
        .k-slider-spinner {
            margin-left: ${slider.spinnerGap};
        }

        // dragging
        &.k-dragging {
            .k-slider-bar {
                transition: none;
            }
            .k-slider-thumb-wrapper {
                transition: none;
            }
        }
    `;
}
