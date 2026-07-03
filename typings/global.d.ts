declare module "*.vdt" {
    import {Template} from 'vdt';

    const template: Template | string;

    export = template
}

declare module "*.eot" {}
declare module "*.ttf" {}
declare module "*.woff2" {}
declare module "*.woff" {}
declare module "*.css" {}
declare module "*.svg" {}
declare module "*.png" {}
declare module "*.jpg" {}
declare module "*.mp4" {}

declare const expect: Chai.ExpectStatic
declare const sinon: Sinon

namespace Chai {
    interface Assertion {
        matchSnapshot(): Assertion
    }
}

declare module 'mxgraphx' {
    export = any
}

declare module 'dompurify' {
    const DOMPurify: {
        sanitize(dirty: string, config?: any): string
    };

    export default DOMPurify;
}

declare module 'markdown-it' {
    const MarkdownIt: any;

    export default MarkdownIt;
}

declare module 'markdown-it-texmath' {
    const texmath: any;

    export default texmath;
}

declare module 'mermaid/dist/mermaid.min.js' {
    const mermaid: any;

    export default mermaid;
}

declare module 'highlight.js/lib/core' {
    const hljs: any;
    export default hljs;
}

declare module 'highlight.js/lib/languages/*' {
    const language: any;
    export default language;
}
