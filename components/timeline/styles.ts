import {css} from '@emotion/css';
import {theme, ThemeValue} from '../../styles/theme';
import {deepDefaults, Sizes, sizes, palette}  from '../../styles/utils';
import '../../styles/global';

type ValueOf<T extends readonly any[]> = T[number]

export type Types = ValueOf<typeof types>

type TypeStyles = {
    color: ThemeValue<string>
}

type SizeStyles = {
    width: string
}

const widthMap: Record<Sizes, string> = {
    large: '13px',
    default: '9px',
    small: '7px',
    mini: '5px',
}

export const types = ['primary', 'warning', 'danger', 'success'] as const;

const typeStyles = types.reduce((memo, type) => {
    const color = theme.color;
    memo[type] = {
        get color() { return color[type as Types] },
    };
    return memo;
}, {} as {[key in Types]: TypeStyles});

const sizeStyles = sizes.reduce((memo, size) => {
    const styles = theme[size];
    memo[size] = {
        get width() { return widthMap[size] },
    };

    return memo;
}, {} as Record<Sizes, SizeStyles>);

const {timeline} = deepDefaults(theme, {
    timeline: deepDefaults(
        {
            fontSize: '12px',
            padding: '0 0 16px 24px',
            get lineBorder() { return `1px solid ${theme.color.border}` },

            indicator: {
                width: '16px',
            },
        },
        typeStyles,
        sizeStyles
    )
});

export function makeStyles() {
    return css`
        font-size: ${timeline.fontSize};
        padding-top: calc(${theme.lineHeight}em / 2);
    `;
}

export function makeItemStyles() {
    return css`
        position: relative;
        padding: ${timeline.padding};
       
        .k-timeline-indicator {
            width: ${timeline.indicator.width};
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            text-align: center;
        }
        .k-timeline-dot {
            position: relative;
            z-index: 1;
            transform: translateY(-50%);
        }
           
        .k-timeline-circle {
            position: relative;
            background: ${theme.color.primary};
            border-radius: 50%;
            left: 50%;
        }
           
        .k-timeline-line {
            position: absolute;
            height: 100%;
            border-left: ${timeline.lineBorder};
            top: 0;
            left: 50%;
        }

        .k-timeline-content {
            position: relative;
            top: calc(-0.5 * ${theme.lineHeight}em);
        }
     
        &:last-of-type {
            .k-timeline-line {
                display: none;
            }
        }

        // types
        ${types.map(type => {
            const typeStyles = timeline[type];

            return css`
                &.k-${type} {
                    .k-timeline-indicator {
                        color: ${typeStyles.color};
                    }
                    .k-timeline-circle {
                        background: ${typeStyles.color};
                    }
                }
            `;
        })}

        // sizes
        ${sizes.map(size => {
            const styles = timeline[size];
            const sizeClassName = css`
                .k-timeline-circle {
                    width: ${styles.width};
                    height: ${styles.width};
                    // when we use translateX(-50%) the line can not position at center of dot
                    margin-left: calc(-0.5 * ${styles.width});
                }
            `;
            if (size === 'default') return sizeClassName;

            return css`
                &.k-${size} {
                    ${sizeClassName};
                }
            `
        })}
    `;
};

