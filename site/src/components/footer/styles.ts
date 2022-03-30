import {css} from '@emotion/css';
import footer_logo from '../../imgs/footer_logo.png';
import {mainBlock} from '../../styles/default';

export function makeStyles() {
    const tableBorder = '1px solid #C4C4C4';
    const leftPadding = '16px';

    return css`
        background: #FFFFFF;
        ${mainBlock(337)};
        letter-spacing: -0.05em;
        color: #5B5A5A;
        font-size: 14px;
        a {
            color: #5B5A5A;
            text-decoration: none;
        }
        .footer-box {
            width: 100%;
            display: flex;
            align-items: center;
        }
        .footer-table {
            width: 100%;
            height: 300px;
            border: ${tableBorder};
            .info-box {
                height: 209px;
                border-bottom: ${tableBorder}; 
            }
            .info-left {
                border-right: ${tableBorder};
                padding-left: ${leftPadding};
                padding-top: 37px;
                .title {
                    font-size: 30px;
                    color: #000000;
                    margin-bottom: 30px;
                }
                span {
                    margin-right: 50px;
                }
            }
            .info-right {
                .k-row:first-child {
                    border-bottom: ${tableBorder}; 
                }
                .k-row {
                    padding: 25px 0 0 30px;
                }
                .title {
                    color: #000000;
                }
            }
            .quick-access-box {
                height: 101px;
            }
            .link-list {
                margin-top: 15px;
                display: flex;
                & > div {
                    margin-right: 25px;
                }
            }
        }
        .copy-right-info {
            display: flex;
            align-items: center;
            padding-left: ${leftPadding};
            height: 30px;
            font-size: 12px;
        }
        .footer-logo-box {
            height: 60px;
            display: flex;
            align-items: center;
            padding-left: 16px;
            border-bottom: ${tableBorder};
            .logo {
                width: 173px;
                height: 33px;
                background-image: url(${footer_logo});
            }
        }

        @media (max-width: 768px) {
            height: auto; 
            .footer-table {
                height: auto;
                .info-box {
                    height: auto;
                }
                .info-left {
                    border: none;
                    .title {
                        font-size: 24px;
                    }
                    span {
                        display: block;
                    }
                }
                .info-right {
                    .k-row {
                        padding: 20px;
                        &:first-child {
                            border: none;
                        }
                    }
                }
                .link-list {
                    gap: 20px;
                    > div {
                        margin-right: 0;
                    }
                }
            }
            .copy-right-info {
                padding: 20px;
                height: auto;
            }
        }
    `
}
