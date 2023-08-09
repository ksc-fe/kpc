import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
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

    point: {
        width: '8px',
        get height() { return slider.point.width },
        bgColor: '#fff',
        borderRadius: '50%',
        get border() { return `2px solid ${slider.bgColor}` },
        get activeBorderColor() { return slider.barColor },
    },

    marks: {
        height: '26px',
        get activeColor() { return theme.color.primary },
    }
};

let slider: typeof defaults;
setDefault(() => {
    slider = deepDefaults(theme, {slider: defaults}).slider;
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
            transition: all ${slider.transition};
        }
        .k-slider-thumb-wrapper {
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: left ${slider.transition};
            z-index: 1;
        }
        .k-slider-thumb {
            height: ${slider.thumb.height};
            width: ${slider.thumb.width};
            transition: all ${slider.transition};
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
        .k-slider-spinner-sep {
            display: inline-block;
            margin: auto 8px;
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

        // disabled
        &.k-disabled {
            color: ${slider.disabled.color};
            .k-slider-track-wrapper {
                cursor: not-allowed;
            }
            .k-slider-bar {
                background-color: ${slider.disabled.color};
            }
            .k-slider-thumb {
                border-color: ${slider.disabled.color};
                &:hover,
                &:focus {
                    background-color: ${slider.disabled.bgColor};
                    cursor: not-allowed;
                    transform: none;
                }
            }
            .k-slider-ends {
                span {
                    cursor: not-allowed;
                }
            }
        }

        // stop point
        .k-slider-point {
            position: absolute;
            top: calc((${slider.height} - ${slider.point.height}) / 2 );
            width: ${slider.point.width};
            height: ${slider.point.height};
            background: ${slider.point.bgColor};
            transform: translateX(-50%);
            border-radius: ${slider.point.borderRadius};
            border: ${slider.point.border};
            &.k-active {
                border-color: ${slider.point.activeBorderColor};
            }
        }

        // marks
        .k-slider-marks {
            position: relative;
            height: ${slider.marks.height};
            > span {
                position: absolute;
                transform: translateX(-50%);
                white-space: nowrap;
                cursor: pointer;
                &:first-child {
                    transform: none;
                }
                &:last-child {
                    transform: translateX(-100%);
                }
                &.k-active {
                    color: ${slider.marks.activeColor};
                }
            }
        }

        .k-slider-tooltip {
            white-space: nowrap;
        }
    `;
}
