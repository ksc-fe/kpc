import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {LayoutComponent} from './layout.component';
import {AsideComponent} from './aside.component';
import {HeaderComponent} from './header.component';
import {BodyComponent} from './body.component';
import {FooterComponent} from './footer.component';

const components = [LayoutComponent, AsideComponent, HeaderComponent, BodyComponent, FooterComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class LayoutModule {}