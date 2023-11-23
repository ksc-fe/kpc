import {css} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const defaults = {
    get transition() { return theme.transition.middle },
    fontSize: '12px',
    get color() { return theme.color.lightBlack },
    tip: {
        gap: '8px',
    },

    // files list
    filesGap: '16px',
    file: {
        margin: '4px 0',
        get borderRadius() { return theme.borderRadius },
        get bgColor() { return theme.color.bg },
        padding: '0 4px',
        get height() { return theme.default.height },
        fileIconGap: '8px',
        status: {
            // width: '16px',
            get color() { return theme.color.success },
            get errorColor() { return theme.color.danger },
            offsetRight: '2px',
        },
        delete: {
            width: '20px',
            top: '7px',
            right: '2px',
        },
        get errorColor() { return theme.color.danger },
    },

    // drag
    drag: {
        get border() { return `1px dashed ${theme.color.border}` },
        get borderRadius() { return theme.borderRadius },
        get hoverBorderColor() { return theme.color.primary },
        get bgColor() { return theme.color.bg },
        padding: `42px 0`,
        icon: {
            fontSize: '40px',
            gap: '16px',
        },
        get overBorderColor() { return theme.color.primary },
    },

    // gallery
    gallery: {
        width: '100px',
        height: '100px',
        get borderRadius() { return theme.borderRadius },
        get border() { return `1px solid ${theme.color.border}` },
        margin: '0px 8px 8px 0',
        padding: '8px',
        bgColor: '#fff',
        get errorBorderColor() { return theme.color.danger },
        add: {
            get border() { return `1px dashed ${theme.color.border}` },
            get hoverBorderColor() { return theme.color.primary },
        }
    },

    // overlap
    overlap: {
        bgColor: 'rgba(21, 27, 30, .5)',
        color: '#fff',
        iconGap: '16px',
    }
};

let upload: typeof defaults;
setDefault(() => {
    upload = deepDefaults(theme, {upload: defaults}).upload;
});

export function makeStyles(k: string) {
    return css`
        font-size: ${upload.fontSize};
        position: relative;

        // keep vertical align middle
        .${k}-icon-upload {
            position: relative;
            top: -1px;
        }
        .${k}-upload-handle {
            display: inline-block;
            vertical-align: middle;
            color: ${upload.color};
        }
        .${k}-upload-tip {
            margin-top: ${upload.tip.gap};
            color: ${upload.color};
        }

        // filelist
        .${k}-upload-files {
            margin-top: ${upload.filesGap};
        }
        .${k}-upload-file {
            margin: ${upload.file.margin};
            padding-right: ${upload.file.delete.width};
            position: relative;
            &:hover {
                .${k}-upload-close {
                    display: inline-flex;
                    position: absolute;
                    right: ${upload.file.delete.right};
                    top: ${upload.file.delete.top};
                } 
                .${k}-upload-file-main { 
                    background: ${upload.file.bgColor};
                }
            }
        }
        .${k}-upload-file-main {
            padding: ${upload.file.padding};
            border-radius: ${upload.file.borderRadius};
        }
        .${k}-upload-name {
            display: flex;
            align-items: center;
            height: ${upload.file.height};
        }
        .${k}-upload-file-icon {
            margin-right: ${upload.file.fileIconGap};
        }
        .${k}-upload-file-name {
            flex: 1;
        }
        .${k}-upload-status-icon {
            color: ${upload.file.status.color};
            margin-right: ${upload.file.status.offsetRight};
        }
        .${k}-upload-close {
            display: none;
        }
        .${k}-upload-file.${k}-error {
            color: ${upload.file.errorColor};
            .${k}-upload-status-icon {
                color: ${upload.file.status.errorColor};
            }
        }
        .${k}-upload-progress {
            .${k}-progress-text {
                width: auto !important;
            }
        }

        // drag
        &.${k}-drag {
            .${k}-upload-handle {
                display: block;
                border: ${upload.drag.border};
                border-radius: ${upload.drag.borderRadius};
                cursor: pointer;
                text-align: center;
                transition: border-color ${upload.transition};
                background: ${upload.drag.bgColor};
                &:hover {
                    border-color: ${upload.drag.hoverBorderColor};
                }
            }
            .${k}-upload-area {
                padding: ${upload.drag.padding};
                .${k}-icon {
                    display: inline-block;
                    font-size: ${upload.drag.icon.fontSize};
                    margin-bottom: ${upload.drag.icon.gap};
                }
            }
            &.${k}-dragover {
                .${k}-upload-handle {
                    border-color: ${upload.drag.overBorderColor};
                }
            }
        }

        // gallery
        .${k}-upload-pictures {
            display: inline-block;
            vertical-align: middle;
        }
        .${k}-upload-picture {
            padding: ${upload.gallery.padding};
            position: relative;
            vertical-align: middle;
            &.${k}-error {
                border-color: ${upload.gallery.errorBorderColor};
            }
            .${k}-upload-close {
                display: inline-flex;
            }
            &:hover {
                .${k}-upload-icons {
                    opacity: 1; 
                }
            }
            .${k}-upload-img {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            .${k}-upload-icons {
                opacity: 0;
                transition: opacity ${upload.transition};
            }
        }

        .${k}-upload-picture-card {
            display: inline-flex;
            width: ${upload.gallery.width};
            height: ${upload.gallery.height};
            border-radius: ${upload.gallery.borderRadius};
            border: ${upload.gallery.border};
            margin: ${upload.gallery.margin};
            background: ${upload.gallery.bgColor};
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        .${k}-upload-add {
            border: ${upload.gallery.add.border};
            cursor: pointer;
            &:hover {
                border-color: ${upload.gallery.add.hoverBorderColor};
            }
        }
        .${k}-upload-overlap {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: ${upload.overlap.bgColor};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: ${upload.overlap.iconGap};
            color: ${upload.overlap.color};
            .${k}-icon:not(:hover) {
                color: inherit;
            }
            .${k}-upload-progress {
                position: absolute;
                width: 100%;
                top: 50%;
                padding: ${upload.gallery.padding};
                transform: translateY(-50%);
            }
        }
    `;
}

export function makeUploadDialogStyles(k: string) {
    return css`
        img {
            width: 100%;
        }
    `
}
