import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {RowComponent} from './row.component';
import {ColComponent} from './col.component';

const components = [RowComponent, ColComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class GridModule {}