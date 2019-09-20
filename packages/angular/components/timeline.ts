import Intact from 'intact-angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {Timeline, TimelineItem} from '../../../components/timeline';

export const TimelineComponent = Intact.decorate(Timeline, 'k-timeline');
export const TimelineItemComponent = Intact.decorate(TimelineItem, 'k-timeline-item');

const components = [TimelineComponent, TimelineItemComponent];

@NgModule({
    declarations: components,
    exports: components,
    schemas: [NO_ERRORS_SCHEMA]
})
export class TimelineModule {}