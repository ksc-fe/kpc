import {css} from '@emotion/css';
import {mainBlock} from '../../../styles/default'

export function makeStyles() {
    return css`
        background: #ffffff;
		${mainBlock(544)};
		.new-fn-box {
			.title-box {
				margin-top: 34px;
				& > div {
					text-align: center;
				}
				& > div:first-child {
					font-weight: 600;
					font-size: 24px;
					color: #000;
					line-height: 34px;
				}
				& > div:last-child {
					font-size: 16px;
					color: #7A7A7A;
					line-height: 22px;
					margin-top: 12px;
				}   
			}
			.card-wrapper {
				position: relative;
				height: 335px;
				margin-top: 62px;
				
				.card-box {
					height: 100%;
					white-space: nowrap;
					overflow: hidden;
				}

				.arrow-btn {
					position: absolute;
					top: 50%;
					width: 54px;
					height: 54px;
					line-height: 54px;
					transform: translateY(-50%);
					text-align: center;
					background: linear-gradient(110.56deg, #EFF3FA 33.16%, rgba(239, 243, 250, 0) 76.18%);
					border: 1px solid #D1D1D1;
					box-sizing: border-box;
					border-radius: 50%;
					.k-icon {
						color: #5A5A68;
						margin-right: 0;
					}
				}

				.next-arrow {
					right: -87px;
				}

				.prev-arrow {
					left: -87px;
				}
			}
		}
    `
}
