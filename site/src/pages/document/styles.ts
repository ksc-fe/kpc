import {css} from '@emotion/css';
import {theme} from 'kpc/styles/theme';
import {makeStyles as makeTableStyles} from 'kpc/components/table/styles';

export function makeStyles(k: string) {
    return css`
        h1, h2, h3, h4, h5 {
            font-weight: 400;
            color: #000;
        }
        h1 {
            font-size: 2em;
        }
        blockquote {
            margin: 1em 0;
            padding: 1px 2em;
            background: #f8f8f8;
            border-left: 2px solid #ff4133;
            position: relative;
            line-height: 2em;
            &:before {
                content: "!";
                display: block;
                position: absolute;
                top: 50%;
                margin-top: -10px;
                width: 20px;
                height: 20px;
                border-radius: 100%
                text-align: center;
                background: #ff4133;
                color: #fff;
                line-height: 20px;
                left: -11px;
            }
        }
        .${k}-layout-aside {
            font-size: 14px;
            overflow: visible !important;
            .aside-wrapper {
                overflow: auto;
                padding-bottom: 10px;
            }
            .catalog-section {
                margin-top: 10px
            }
            h5 {
                font-size: 16px;
                margin: 15px 0 15px 20px;
                color: #999;
            }
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            a {
                display: flex;
                align-items: center;
                height: 40px;
                padding-left: 25px;
                color: #333;
                &:hover {
                    background: #f3f3f3;
                    color: #333;
                }
                span {
                    margin-left: 5px;
                    color: #666;
                    font-size: 12px;
                }
            }
            .active {
                & > a, & span {
                    color: #ffffff !important;
                    background-color: ${theme.color.primary};
                }
            }
            .${k}-btn {
                display: none;
            }
        }
        .${k}-layout-body {
            font-size: 14px;
            max-width: 100%;
            article {
                position: relative;
                padding: 15px 40px;
                margin-right: 200px;
                border-rardius: 50%;
            }
            .article-head {
                display: flex;
                border-bottom: 1px solid #e4e4e4;
                align-items: center;
                margin-bottom: 27px;
                .title {
                    font-size: 30px;
                    line-height: 28px;
                    font-weight: 400;
                    color: ${theme.color.title};
                    margin: 19px 0;
                    flex: 1;
                    white-space: nowrap;
                    margin-right: 16px;
                }
                .edit-link {
                    color: #999;
                    font-style: italic;
                    font-size: 12px;
                }
            }
            .browser-mockup {
                border-top: 30px solid #eee;
                position: relative;
                border-radius: ${theme.largeBorderRadius};
                box-shadow: ${theme.boxShadow};
                &:before {
                    display: block;
                    content: '';
                    box-shadow: 0 0 0 2px ${theme.color.danger}, 21px 0 0 2px ${theme.color.success}, 42px 0 0 2px ${theme.color.warning};
                    background: ${theme.color.danger};
                    position: absolute;
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    top: -19px;
                    left: 19px;
                }
                &:after {
                    content: '';
                    display: block;
                    height: 20px;
                    background: #fff;
                    position: absolute;
                    top: -26px;
                    left: 85px;
                    width: calc(100% - 90px);
                    border-radius: ${theme.borderRadius};
                }
            }
            iframe {
                width: 100%;
                border: none;
                display: block;
            }
        }
        .example {
            padding: 0 20px 20px 20px;
            margin-bottom: 20px;
            border: 1px solid #eee;
            font-size: 12px;
            position: relative;
            .example-title {
                position: absolute;
                top: -13px;
                left: 15px;
                background: #fff;
                padding: 0 10px;
                font-size: 16px;
                color: #000;
            }
        }
        .example-opera {
            padding: 40px 0 20px;
        }
        .example-desc {
            padding: 5px;
            border-bottom: 1px dashed #eee;
            border-top: 1px dashed #eee;
            position: relative;
        }
        .example-code {
            position: relative;
            code {
                border: none;
                border-radius: 0;
            }
            .open {
                position: absolute;
                padding: 3px 10px;
                right: 0;
                top: 33px;
                cursor: pointer;
                &:hover {
                    color: ${theme.color.primary};
                }
            }
        }
        .api {
            font-size: 12px;
            .${k}-table {
                ${makeTableStyles('k')}
            }
            table {
                table-layout: auto !important;
            }
        }

        @media (max-width: 768px) {
            .table-of-contents {
                display: none;
            }
            .${k}-layout-aside {
                transform: translateX(-260px);
                transition: transform ${theme.transition.middle};
                &.expanded {
                    transform: translateX(0);
                    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
                }
                .${k}-btn {
                    display: block;
                    position: absolute;
                    top: 66px;
                    right: 0;
                    transform: translateX(100%);
                    border: none;
                    box-shadow: 3px 0 4px 0 rgba(0, 0, 0, 0.3);
                }
            }
            .${k}-layout-body {
                padding: 0 !important;
                article {
                    margin-right: 0;
                }
                .catalogue {
                    display: none;
                }
            }
        }
    `;
}

