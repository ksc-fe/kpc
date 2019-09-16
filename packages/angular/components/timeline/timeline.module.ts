import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TimelineComponent} from './timeline.component';
import {TimelineItemComponent} from './timeline-item.component';

const components = [TimelineComponent, TimelineItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TimelineModule {}