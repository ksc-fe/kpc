import {theme, ThemeValue} from '../../styles/theme';
import {css} from '@emotion/css';
import '../../styles/global';
import {deepDefaults, palette}  from '../../styles/utils';

type ValueOf<T extends readonly any[]> = T[number]
type Types = ValueOf<typeof types>

type TypeStyles = {
    bgColor: ThemeValue<string>
    borderColor: ThemeValue<string>
	hoverColor: ThemeValue<string>
}

export const types = ['primary', 'warning', 'danger', 'success'] as const;

const tipTypeStyles = types.reduce((memo, type) => {
	const color = theme.color
	memo[type] = {
		get bgColor() { return palette(color[type], -4) },
		get borderColor() { return color[type] },
		get hoverColor() { return palette(color[type], -2) }
	}

	return memo
}, {} as {[key in Types]: TypeStyles});

const tip = deepDefaults(
	{
		default: {
			get borderColor() { return theme.color.border },
			get bgColor() { return '#fff' },
			get hoverColor() { return '#fff' }
		}
	},
	{
		bgColor: '#fff',
		title: {
			fontSize: '14px',
			marginBottom: '8px'
		},
		iconFont: '26px',
		get color() { return theme.color.text },
		get padding() { return `6px ${theme.default.padding}` },
		get borderColor() { return theme.color.border },
		get borderRadius() { return theme.borderRadius },
		get fontSize() { return theme.default.fontSize },
		get height() { return theme.default.height }
	},
	tipTypeStyles
);

export function makeStyles() {
  	return css`
		background: #fff;
		border: 1px solid #ccc;
		border-radius: ${tip.borderRadius};
		padding: ${tip.padding};
		vertical-align: middle;
		font-size: ${tip.fontSize};
		white-space: nowrap;
		color: ${tip.color};
		position: relative;
		
		& .k-tip-close {
			position: absolute;
			right: -1px;
			top: -1px;
			font-size: ${tip.iconFont};
		}

		& .k-custom {
			color: ${theme.color.primary};
			width: auto;
			padding: 0 ${theme.default.padding};
			&: hover {
				color: ${palette(theme.color.primary, -1)};
			}
		}
		
		& .k-title {
			font-size: ${tip.title.fontSize};
			margin-bottom: ${tip.title.marginBottom};
		}

		${types.map(type => {
			const typeStyles = tip[type as Types];
			return css`
				&.k-${type} {
					background: ${typeStyles.bgColor};
					border-color: ${typeStyles.borderColor};
					.k-tip-close {
						color: ${typeStyles.borderColor};
					}
					.k-tip-close:hover {
						color: ${typeStyles.hoverColor};
					}
				}
			`;
		})};
	`;
}