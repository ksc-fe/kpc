import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, sizes, Sizes} from '../../styles/utils';
import '../../styles/global';

const {colorpicker} = deepDefaults(theme, {
    colorpicker: {
        get height() { return theme.default.height },
        width: '100px',
        get border() { return `1px solid ${theme.color.border}` },
        get borderRadius() { return theme.borderRadius },
        cursor: 'pointer',
        bgColor: '#fff',
        padding: '4px',
        get innerBorderRadius() { return theme.borderRadius },

        // size
        large: {
            get height() { return theme.large.height },
            width: '120px',
        },
        small: {
            get height() { return theme.small.height },
            width: '70px',
        },
        mini: {
            get height() { return theme.mini.height },
            width: '50px',
            padding: '2px',
        },

        // panel
        panel: {
            padding: '10px',
            width: '220px',
            fontSize: '11px',
            saturationHeight: '150px',
            circle: {
                width: '4px',
                boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(167, 41, 41, 0.4)',
            },
            gutter: '4px',
        },
        slider: {
            height: '10px',
            borderRadius: '0',
            cursor: 'default',
            thumb: {
                width: '4px',
                height: '8px',
                border: 'none',
                borderRadius: '1px',
                boxShadow: 'rgba(0, 0, 0, .6) 0 0 2px',
                hover: {
                    transform: 'none',
                    cursor: 'default',
                    bgColor: '#fff',
                }
            }
        },
        color: {
            width: '24px',
            height: '24px',
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25)',
        },
        input: {
            height: '20px',
            padding: '0 3px',
            textPadding: '3px 0', 
        },
        presets: {
            delimiter: `1px solid #eee`,
            width: '16px',
            height: '16px',
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .15)',
        }
    }
});

export function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        .k-colorpicker-color {
            height: ${colorpicker.height};
            width: ${colorpicker.width};
            border: ${colorpicker.border};
            cursor: ${colorpicker.cursor};
            border-radius: ${colorpicker.borderRadius};
            background: ${colorpicker.bgColor};
            padding: ${colorpicker.padding};
        }
        .k-colorpicker-inner {
            border-radius: ${colorpicker.innerBorderRadius};
            height: 100%;
        }
    `;
}

export function makePanelStyles() {
    return css`
        padding: ${colorpicker.panel.padding};
        width: ${colorpicker.panel.width};
        .k-colorpicker-saturation {
            height: ${colorpicker.panel.saturationHeight};
            position: relative;
            overflow: hidden;
            user-select: none
        }
        .k-colorpicker-white,
        .k-colorpicker-black {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .k-colorpicker-white {
            background: linear-gradient(90deg, #fff, rgba(255, 255, 255, 0));
        }
        .k-colorpicker-black {
            background: linear-gradient(0, #000, rgba(0, 0, 0, 0));
        }
        .k-colorpicker-pointer {
            position: absolute;
        }
        .k-colorpicker-circle {
            width: ${colorpicker.panel.circle.width};
            height: ${colorpicker.panel.circle.width};
            box-shadow: ${colorpicker.panel.circle.boxShadow};
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        .k-colorpicker-controls {
            display: flex;
            margin-top: ${colorpicker.panel.gutter};
        }
        .k-colorpicker-sliders {
            flex: 1;
            .k-slider {
                margin-bottom: ${colorpicker.panel.gutter};
            }
            .k-slider-track-wrapper,
            .k-slider-track {
                height: ${colorpicker.slider.height};
            }
            .k-slider-track-wrapper {
                cursor: ${colorpicker.slider.cursor};
            }
            .k-slider-track {
                border-radius: ${colorpicker.slider.borderRadius};
                margin: 0 calc(${colorpicker.slider.thumb.width} / 2 + 1px);
                background-color: transparent;
            }
            .k-slider-bar {
                background: transparent;
            }
            .k-slider-thumb {
                height: ${colorpicker.slider.thumb.height};
                width: ${colorpicker.slider.thumb.width};
                border: ${colorpicker.slider.thumb.border};
                border-radius: ${colorpicker.slider.thumb.borderRadius};
                box-shadow: ${colorpicker.slider.thumb.boxShadow};
                &:focus,
                &:hover {
                    transform: ${colorpicker.slider.thumb.hover.transform};
                    cursor: ${colorpicker.slider.thumb.hover.cursor};
                    background-color: ${colorpicker.slider.thumb.hover.bgColor};
                }
            }
        }
        .k-colorpicker-hue {
            .k-slider-track-wrapper {
                background: linear-gradient(90deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red);
            }
        }
        .k-colorpicker-alpha {
            background-size: contain;
            .k-slider-track-wrapper {
                background: linear-gradient(to right, rgba(54, 48, 55, 0) 0%, rgb(54, 48, 55) 100%);
            }
        }
        .k-colorpicker-alpha-bg {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC");
        }
        .k-colorpicker-color-wrapper {
            width: ${colorpicker.color.width};
            height: ${colorpicker.color.height};
            border-radius: ${colorpicker.color.borderRadius};
            margin-left: ${colorpicker.panel.gutter};
            overflow: hidden;
        }
        .k-colorpicker-color {
            height: 100%;
            box-shadow: ${colorpicker.color.boxShadow};
        }

        // input
        .k-colorpicker-input.k-small {
            .k-input-inner {
                height: ${colorpicker.input.height};
                line-height: ${colorpicker.input.height};
                padding: ${colorpicker.input.padding};
                font-size: ${colorpicker.panel.fontSize};
            }
        }
        .k-colorpicker-text {
            text-align: center;
            font-size: ${colorpicker.panel.fontSize};
            padding: ${colorpicker.input.textPadding};
        }

        // presets
        .k-colorpicker-presets {
            border-top: ${colorpicker.presets.delimiter};
            margin: 0 -${colorpicker.panel.padding};
            overflow: hidden;
        }
        .k-colorpicker-preset-color-wrapper {
            float: left;
            border-radius: ${colorpicker.presets.borderRadius};
            cursor: pointer;
            overflow: hidden;
            margin: ${colorpicker.panel.padding} 0 0 ${colorpicker.panel.padding};
        }
        .k-colorpicker-preset-color {
            width: ${colorpicker.presets.width};
            height: ${colorpicker.presets.height};
            box-shadow: ${colorpicker.presets.boxShadow};
        }

        .k-colorpicker-drag {
            cursor: ew-resize;
            user-select: none;
        }
    `
}
