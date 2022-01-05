declare module "*.vdt" {
    import {Template} from 'vdt';

    const template: Template | string;

    export = template
}

declare module "*.eot" {}
declare module "*.ttf" {}
declare module "*.woff" {}
declare module "*.svg" {}
declare module "*.png" {}

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
