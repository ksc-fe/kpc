import {css} from '@emotion/css';
import {theme} from '../../styles/theme';
import {deepDefaults, palette} from '../../styles/utils';
import '../../styles/global';

const {upload} = deepDefaults(theme, {
    upload: {
        fontSize: '12px',
        tip: {
            gap: '16px',
            get color() { return theme.color.lightBlack }
        },
        closeFontSize: '24px',

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
                gap: '8px',
                get errorColor() { return theme.color.danger },
            },
            get errorColor() { return theme.color.danger },
        },

        // drag
        drag: {
            get color() { return theme.color.lightBlack },
            get border() { return `1px dashed ${theme.color.border}` },
            get borderRadius() { return theme.borderRadius },
            get hoverBorderColor() { return theme.color.primary },
            padding: `20px 0 40px 0`,
            icon: {
                fontSize: '80px',
                get color() { return theme.color.placeholder },
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
            close: {
                top: '-8px',
                right: '-8px',
                fontSize: '18px',
            },
            add: {
                get border() { return `1px dashed ${theme.color.border}` },
                fontSize: '44px',
                get hoverBorderColor() { return theme.color.primary },
            }
        },

        // overlap
        overlap: {
            bgColor: 'rgba(0, 0, 0, .35)',
            color: '#fff',
            zoomFontSize: '24px',
        }
    }
});

export function makeStyles() {
    return css`
        font-size: ${upload.fontSize};
        position: relative;
        .k-upload-handle,
        .k-upload-tip {
            display: inline-block;
            vertical-align: middle;
        }
        .k-upload-tip {
            margin-left: ${upload.tip.gap};
            color: ${upload.tip.color};
        }

        // filelist
        .k-upload-files {
            margin-top: ${upload.filesGap};
        }
        .k-upload-file {
            margin: ${upload.file.margin};
            padding: ${upload.file.padding};
            border-radius: ${upload.file.borderRadius};
            &:hover {
                background: ${upload.file.bgColor};
                .k-upload-close {
                    display: inline-flex;
                } 
            }
        }
        .k-upload-name {
            display: flex;
            align-items: center;
            height: ${upload.file.height};
        }
        .k-upload-file-icon {
            margin-right: ${upload.file.fileIconGap};
        }
        .k-upload-file-name {
            flex: 1;
        }
        .k-upload-status-icon {
            color: ${upload.file.status.color};
            margin-left: ${upload.file.status.gap};
        }
        .k-upload-close {
            display: none;
            .k-icon {
                font-size: ${upload.closeFontSize};
            }
        }
        .k-upload-file.k-error {
            color: ${upload.file.errorColor};
            .k-upload-status-icon {
                color: ${upload.file.status.errorColor};
            }
        }
        .k-upload-progress {
            .k-progress-text {
                width: auto !important;
            }
        }

        // drag
        &.k-drag {
            .k-upload-handle {
                color: ${upload.drag.color};
                display: block;
                border: ${upload.drag.border};
                border-radius: ${upload.drag.borderRadius};
                cursor: pointer;
                text-align: center;
                transition: border-color ${theme.transition};
                &:hover {
                    border-color: ${upload.drag.hoverBorderColor};
                }
            }
            .k-upload-area {
                padding: ${upload.drag.padding};
                .k-icon {
                    font-size: ${upload.drag.icon.fontSize};
                    color: ${upload.drag.icon.color};
                    line-height: 1;
                }
            }
            &.k-dragover {
                .k-upload-handle {
                    border-color: ${upload.drag.overBorderColor};
                }
            }
        }

        // gallery
        .k-upload-pictures {
            display: inline-block;
            vertical-align: middle;
        }
        .k-upload-picture {
            padding: ${upload.gallery.padding};
            position: relative;
            vertical-align: middle;
            &.k-error {
                border-color: ${upload.gallery.errorBorderColor};
            }
            &:hover {
                .k-upload-close {
                    opacity: 1;
                    pointer-events: all;
                }
            }
            .k-upload-img {
                display: inline-block;
                width: 100%;
                height: 100%;
            }
            .k-upload-close {
                position: absolute;
                top: ${upload.gallery.close.top};
                right: ${upload.gallery.close.right};
                display: inline-block;
                opacity: 0;
                transition: opacity ${theme.transition};
                pointer-events: none;
                .k-icon {
                    font-size: ${upload.gallery.close.fontSize};
                }
                &:before {
                    content: '';
                    position: absolute;
                    display: block;
                    width: calc(${upload.file.status.width} / 2);
                    height: calc(${upload.file.status.width} / 2);
                    top: calc(${upload.file.status.width} / 4);
                    left: calc(${upload.file.status.width} / 4);
                    border-radius: 50%;
                    background: #fff;
                }
            }
            .k-upload-icons {
                opacity: 0;
                transition: opacity ${theme.transition};
            }
            &:hover {
                .k-upload-icons {
                    opacity: 1; 
                }
            }
        }

        .k-upload-picture-card {
            display: inline-block;
            width: ${upload.gallery.width};
            height: ${upload.gallery.height};
            border-radius: ${upload.gallery.borderRadius};
            border: ${upload.gallery.border};
            text-align: center;
            cursor: pointer;
            margin: ${upload.gallery.margin};
            background: ${upload.gallery.bgColor};
        }
        .k-upload-add {
            border: ${upload.gallery.add.border};
            font-size: ${upload.gallery.add.fontSize};
            line-height: calc(${upload.gallery.height} - 2px);
            &:hover {
                border-color: ${upload.gallery.add.hoverBorderColor};
            }
        }

        .k-upload-overlap {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            right: 0;
            color: ${upload.overlap.color};
            background: ${upload.overlap.bgColor};
            .k-upload-progress {
                position: absolute;
                width: 100%;
                top: 50%;
                padding: ${upload.gallery.padding};
                transform: translateY(-50%);
            }
        }
        .k-upload-zoom {
            display: inline-block;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            font-size: ${upload.overlap.zoomFontSize};
        }
    `;
}

export function makeUploadDialogStyles() {
    return css`
        img {
            width: 100%;
        }
    `
}
