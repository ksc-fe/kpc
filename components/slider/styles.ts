import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    height: '6px',

    bgColor: '#F0F2F4',
    get barColor() { return theme.color.primary },
    borderRadius: '2px',

    thumb: {
        height: '12px',
        width: '12px',
        get border() { return `3px solid #fff` },
        borderRadius: '50%',
        get bgColor() { return slider.barColor },
        hoverTransform: 'scale(1.25)',
        get hoverBgColor() { return slider.barColor },
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.08)',
    },

    endPadding: '10px 0 0',

    disabled: {
        get color() { return theme.color.disabled },
        // might be calculate according to the bar color
        bgColor: '#B5E3FF',
    },

    // spinnerWidth: '124px',
    spinnerGap: '16px',

    point: {
        width: '10px',
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
            box-sizing: content-box;
            height: ${slider.thumb.height};
            width: ${slider.thumb.width};
            transition: all ${slider.transition};
            border: ${slider.thumb.border};
            border-radius: ${slider.thumb.borderRadius};
            background-color: ${slider.thumb.bgColor};
            box-shadow: ${slider.thumb.boxShadow};
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
                background-color: ${slider.disabled.bgColor};
            }
            .k-slider-thumb {
                border-color: #fff;
                background-color: ${slider.disabled.bgColor};
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
