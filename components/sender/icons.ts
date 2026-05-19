// 内联 SVG 资源：data URL 形式，与 fileCard 中的占位图保持一致策略，避免下游打包额外处理 SVG 资源。
// 三个发送态共用同一张图，hover/disabled 通过 CSS opacity 切换；附件用 currentColor，hover 时由 CSS 改色。

// 设计为 32×32 可点击主形（与 sendButtonSize 一致）；原先 48×48 导出版本中间才是 32px 圆，用 img 外溢对齐容易「撑不满 / 对不齐」。
// 将图形坐标归一到 viewBox 0 0 32 32，阴影用组件侧 CSS filter，与原有 SVG feDropShadow 观感接近且不占画布。
const SEND_SVG = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">',
    '<rect width="32" height="32" rx="16" fill="url(#b)"/>',
    // 路径由原 48 稿中 path 平移 (-8, -4) 到 0..32 坐标系
    '<path d="M22.3337 9.6666L17.9003 22.3333L16.0003 16L9.667 14.1L22.3337 9.6666Z" fill="white" stroke="white" stroke-linejoin="round"/>',
    '<defs>',
    '<linearGradient id="b" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">',
    '<stop stop-color="#00DDDD"/>',
    '<stop offset="0.538462" stop-color="#5370FF"/>',
    '<stop offset="1" stop-color="#712FFF"/>',
    '</linearGradient>',
    '</defs>',
    '</svg>',
].join('');

const STOP_SVG = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">',
    '<rect width="32" height="32" rx="16" fill="url(#b)"/>',
    '<rect x="10" y="10" width="12" height="12" rx="2" fill="white"/>',
    '<defs>',
    '<linearGradient id="b" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">',
    '<stop stop-color="#00DDDD"/>',
    '<stop offset="0.538462" stop-color="#5370FF"/>',
    '<stop offset="1" stop-color="#712FFF"/>',
    '</linearGradient>',
    '</defs>',
    '</svg>',
].join('');

// 附件回形针 16x16，stroke 用 currentColor，方便用 CSS color 控制颜色变化。
const ATTACH_SVG = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">',
    '<path d="M8.23567 3.18836L3.28591 8.13812C2.11433 9.30969 2.11433 11.2092 3.28591 12.3808C4.45747 13.5523 6.35697 13.5523 7.52854 12.3808L13.4211 6.48819C14.2021 5.70716 14.2021 4.44082 13.4211 3.65975C12.6401 2.87871 11.3737 2.87871 10.5927 3.65975L4.70014 9.55232C4.3096 9.94286 4.3096 10.576 4.70014 10.9665C5.09064 11.3571 5.7238 11.3571 6.11434 10.9665L11.0641 6.01679" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round"/>',
    '</svg>',
].join('');

function toDataUrl(svg: string) {
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const senderSendIcon = toDataUrl(SEND_SVG);
export const senderStopIcon = toDataUrl(STOP_SVG);
// 附件用 innerHTML 注入，因为 currentColor 在 <img src> 形式下无法继承 color。
export const senderAttachSvg = ATTACH_SVG;
