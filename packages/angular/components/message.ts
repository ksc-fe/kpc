import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Message} from 'kpc/components/message';

export const MessageComponent = Intact.decorate(Message, 'k-message');

const components = [MessageComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class MessageModule {}