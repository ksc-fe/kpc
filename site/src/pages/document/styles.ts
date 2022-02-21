import {css} from '@emotion/css';
import {theme} from 'kpc/styles/theme';

export function makeStyles() {
    return css`
        a {
            color: ${theme.color.link};
            text-decoration: none;
            &:hover {
                color: ${theme.color.linkHover};
            }
        }
        h1, h2, h3, h4, h5 {
            font-weight: 400;
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
                border-radius: 100%;
                text-align: center;
                background: #ff4133;
                color: #fff;
                line-height: 20px;
                left: -11px;
            }
        }
        .k-layout-aside {
            background: #fff;
            font-size: 14px;
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
                }
                span {
                    margin-left: 5px;
                    color: #666;
                    font-size: 12px;
                }
            }
        }
        .k-layout-body {
            font-size: 14px;
            article {
                padding: 15px 0;
                width: 990px;
                margin: 0 auto;
            }
            .article-head {
                display: flex;
                border-bottom: 1px solid #c4c4c4;
                align-items: center;
                margin-bottom: 27px;
                .title {
                    font-size: 26px;
                    line-height: 28px;
                    font-weight: 400;
                    color: #000;
                    margin: 19px 0;
                    flex: 1;
                }
                .edit-link {
                    color: #999;
                    font-style: italic;
                    font-size: 12px;
                }
            }
        }
        .example {
            padding: 0 20px 20px 20px;
            margin-bottom: 20px;
            border: 1px solid #eee;
            font-size: 12px;
            position: relative;
            .title {
                position: absolute;
                top: -13px;
                left: 15px;
                background: #fff;
                padding: 0 10px;
                font-size: 16px;
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
    `;
}
