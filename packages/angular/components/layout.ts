import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Layout, Aside, Header, Body, Footer} from 'kpc/components/layout'

export const LayoutComponent = Intact.decorate(Layout, 'k-layout');
export const AsideComponent = Intact.decorate(Aside, 'k-aside');
export const HeaderComponent = Intact.decorate(Header, 'k-header');
export const BodyComponent = Intact.decorate(Body, 'k-body');
export const FooterComponent = Intact.decorate(Footer, 'k-footer');

const components = [LayoutComponent, AsideComponent, HeaderComponent, BodyComponent, FooterComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule {}