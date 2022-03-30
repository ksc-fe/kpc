


const global = {

    contentWidth: 1200,

    fontFamily: 'PingFang SC'
    
}

export const mainBlock = (height: number) => {
    return `
        width: 100%;
        height: ${height}px;
        display: flex;
        justify-content: center;
        & > div:first-child {
            width: ${global.contentWidth}px;
        }
        @media (max-width: 768px) {
            & > div:first-child {
                width: 100%;
            }
        }
    `;
}

export const center = () => {
    return `
        display: flex;
        align-items: center;
        justify-content: center;
    `
}

export const fullfill = () => {
    return `
        width: 100%;
        height: 100%;
    `
}

export default global
