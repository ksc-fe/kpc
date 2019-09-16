import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MessageComponent} from './message.component';

const components = [MessageComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MessageModule {}