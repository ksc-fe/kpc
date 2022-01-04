import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    transition: `.5s ease`,
    height: `300px`,

    indicator: {
        bottom: `8px`,
        height: `20px`,
    },
    dot: {
        paddingTop: `8px`,
        margin: `0 2px`,
        height: `3px`,
        width: `16px`,
        opacity: `.3`,
        bgColor: `#fff`,
        active: {
            opacity: `1`,
            width: `24px`,
        }
    },

    arrow: {
        bgColor: `rgba(0, 0, 0, .5)`,
        color: `#fff`,
        opacity: `.5`,
        hoverOpacity: `1`,
        left: `10px`,
        right: `10px`,
    }
};

let carousel: any;
setDefault(() => {
    carousel = deepDefaults(theme, {carousel: defaults}).carousel;
});

export function makeStyles() {
    return css`
        height: ${carousel.height};
        position: relative;
        overflow: hidden;
        .k-carousel-indicator {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: ${carousel.indicator.bottom};
        }
        .k-carousel-dot {
            height: ${carousel.indicator.height};
            float: left;
            margin: ${carousel.dot.margin};
            cursor: pointer;
            padding-top: ${carousel.dot.paddingTop};
            &:before {
                content: '';
                display: block;
                width: ${carousel.dot.width};
                height: ${carousel.dot.height};
                background: ${carousel.dot.bgColor};
                opacity: ${carousel.dot.opacity};
                transition: width ${carousel.transition};
            }
            &.k-active:before {
                opacity: ${carousel.dot.active.opacity};
                width: ${carousel.dot.active.width};
            }
        }

        .k-carousel-btn {
            position: absolute;
            background: ${carousel.arrow.bgColor} !important;
            top: 50%;
            transform: translateY(-50%);
            color: ${carousel.arrow.color};
            opacity: ${carousel.arrow.opacity};
            &:hover {
                color: #fff;
                opacity: ${carousel.arrow.hoverOpacity} !important;
                background: ${carousel.arrow.bgColor};
            }
            &.k-prev {
                left: ${carousel.arrow.left};
            }
            &.k-next {
                right: ${carousel.arrow.right};
            }
        }

        // hover
        &.k-hover {
            .k-carousel-btn {
                opacity: 0;
            }
            &:hover {
                .k-carousel-btn {
                    opacity: ${carousel.arrow.opacity};
                }
            }
        }

        // never
        &.k-never {
            .k-carousel-btn {
                display: none;
            }
        }

        &.k-slide {
            .k-carousel-wrapper {
                transition: transform ${carousel.transition};
                white-space: nowrap;
            }
        }

        &.k-stop {
            .k-carousel-wrapper {
                transition: none;
            }
        }

        &.k-fade {
            .k-carousel-item {
                position: absolute;
            }
        }
    `;
}

export function makeItemStyles() {
    return css`
        display: inline-block;
        width: 100%;
        height: 100%;

        // fade
        &.k-carousel-fade-enter-active,
        &.k-carousel-fade-leave-active {
            transition: opacity ${carousel.transition};
        }
        &.k-carousel-fade-enter-from,
        &.k-carousel-fade-leave-to {
            opacity: 0;
        }
    `
}
