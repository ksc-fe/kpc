import { IntactAngularBrowserModule  } from 'intact-angular';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ButtonModule } from '../../components/button';
// import { BreadcrumbModule } from '../../components/breadcrumb';
import { KpcModule } from '../../components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IntactAngularBrowserModule,
    AppRoutingModule,
    // ButtonModule,
    // BreadcrumbModule,
    KpcModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
