import {css} from '@emotion/css';
import {deepDefaults, darken} from '../../styles/utils';
import {types, button} from './styles';
import {theme} from '../../styles/theme';
import '../../styles/global';

const {buttonGroup} = deepDefaults(theme, {
    buttonGroup: {
        primary: {
            get borderColor() { return darken(button.primary.borderColor, 0.2) }
        },
        warning: {
            get borderColor() { return darken(button.warning.borderColor, 0.2) },
        },
        danger: {
            get borderColor() { return darken(button.danger.borderColor, 0.2) },
        },
        success: {
            get borderColor() { return darken(button.success.borderColor, 0.2) },
        },
    }
});

export default function makeStyles() {
    return css`
        display: inline-block;
        vertical-align: middle;
        .k-btn {
            margin: 0;
            vertical-align: middle;
            &:hover,
            &:focus,
            &.k-active {
                z-index: 1;
                position: relative;
            }
        }

        // fluid
        &.k-fluid {
            width: 100%;
        }

        // horizontal
        &:not(.k-vertical) {
            > .k-btn {
                &:not(:first-child) {
                    margin-left: -1px;
                    &:not(:last-child) {
                        border-radius: 0;
                    }
                }
                &:not(:only-child):first-child {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:only-child):last-child {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
                ${types.map(type => {
                    if (type === 'active') return;
                    const {borderColor} = buttonGroup[type];
                    return css`
                        &.k-${type}:not(:first-child) {
                            border-left-color: ${borderColor};
                        }
                        &.k-${type}:not(:last-child) {
                            border-right-color: ${borderColor};
                        }
                    `;
                })}
            }
            &.k-fluid {
                display: flex;
                > .k-btn {
                    flex: 1;
                }
            }
        }
            
        // vertical
        &.k-vertical {
            > .k-btn {
                display: block;
                &:not(.k-btn-icon) {
                    width: 100%;
                }
                &:not(:first-child) {
                    margin-top: -1px;
                    &:not(:last-child) {
                        border-radius: 0;
                    }
                }
                &:not(:only-child):first-child {
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                }
                &:not(:only-child):last-child {
                    border-top-left-radius: 0;
                    border-top-right-radius: 0;
                }
                ${types.map(type => {
                    if (type === 'active') return;
                    const {borderColor} = buttonGroup[type];
                    return css`
                        &.k-${type}:not(:first-child) {
                            border-top-color: ${borderColor};
                        }
                        &.k-${type}:not(:last-child) {
                            border-bottom-color: ${borderColor};
                        }
                    `;
                })}
            }
        }
    `;
}
