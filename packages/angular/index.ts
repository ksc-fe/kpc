/*!
 * kpc 1.1.5
 *
 * Copyright (c) Kingsoft Cloud
 * Released under the MIT License
 * 
 * Documentation available at
 * https://ksc-fe.github.io/kpc/
 */

import {NgModule} from '@angular/core';

import {AffixModule} from './components/affix';
import {AppModule} from './components/app';
import {BadgeModule} from './components/badge';
import {BreadcrumbModule} from './components/breadcrumb';
import {ButtonModule} from './components/button';
import {CardModule} from './components/card';
import {CarouselModule} from './components/carousel';
import {CascaderModule} from './components/cascader';
import {CheckboxModule} from './components/checkbox';
import {CodeModule} from './components/code';
import {CollapseModule} from './components/collapse';
import {DatepickerModule} from './components/datepicker';
import {DialogModule} from './components/dialog';
import {DrawerModule} from './components/drawer';
import {DropdownModule} from './components/dropdown';
import {EditableModule} from './components/editable';
import {FormModule} from './components/form';
import {GridModule} from './components/grid';
import {IconModule} from './components/icon';
import {InputModule} from './components/input';
import {LayoutModule} from './components/layout';
import {LinkModule} from './components/link';
import {MenuModule} from './components/menu';
import {MessageModule} from './components/message';
import {MoveWrapperModule} from './components/moveWrapper';
import {PaginationModule} from './components/pagination';
import {ProgressModule} from './components/progress';
import {RadioModule} from './components/radio';
import {RateModule} from './components/rate';
import {ScrollSelectModule} from './components/scrollSelect';
import {SelectModule} from './components/select';
import {SliderModule} from './components/slider';
import {SpinModule} from './components/spin';
import {SpinnerModule} from './components/spinner';
import {SplitModule} from './components/split';
import {StepsModule} from './components/steps';
import {SwitchModule} from './components/switch';
import {TableModule} from './components/table';
import {TabsModule} from './components/tabs';
import {TagModule} from './components/tag';
import {TimelineModule} from './components/timeline';
import {TimepickerModule} from './components/timepicker';
import {TipModule} from './components/tip';
import {TooltipModule} from './components/tooltip';
import {TransferModule} from './components/transfer';
import {TreeModule} from './components/tree';
import {UploadModule} from './components/upload';

export {_$, localize} from './components/utils';

export * from './components/affix';
export * from './components/app';
export * from './components/badge';
export * from './components/breadcrumb';
export * from './components/button';
export * from './components/card';
export * from './components/carousel';
export * from './components/cascader';
export * from './components/checkbox';
export * from './components/code';
export * from './components/collapse';
export * from './components/datepicker';
export * from './components/dialog';
export * from './components/drawer';
export * from './components/dropdown';
export * from './components/editable';
export * from './components/form';
export * from './components/grid';
export * from './components/icon';
export * from './components/input';
export * from './components/layout';
export * from './components/link';
export * from './components/menu';
export * from './components/message';
export * from './components/moveWrapper';
export * from './components/pagination';
export * from './components/progress';
export * from './components/radio';
export * from './components/rate';
export * from './components/scrollSelect';
export * from './components/select';
export * from './components/slider';
export * from './components/spin';
export * from './components/spinner';
export * from './components/split';
export * from './components/steps';
export * from './components/switch';
export * from './components/table';
export * from './components/tabs';
export * from './components/tag';
export * from './components/timeline';
export * from './components/timepicker';
export * from './components/tip';
export * from './components/tooltip';
export * from './components/transfer';
export * from './components/tree';
export * from './components/upload';

export const version = '1.1.5';

@NgModule({
    exports: [
        AffixModule,
        AppModule,
        BadgeModule,
        BreadcrumbModule,
        ButtonModule,
        CardModule,
        CarouselModule,
        CascaderModule,
        CheckboxModule,
        CodeModule,
        CollapseModule,
        DatepickerModule,
        DialogModule,
        DrawerModule,
        DropdownModule,
        EditableModule,
        FormModule,
        GridModule,
        IconModule,
        InputModule,
        LayoutModule,
        LinkModule,
        MenuModule,
        MessageModule,
        MoveWrapperModule,
        PaginationModule,
        ProgressModule,
        RadioModule,
        RateModule,
        ScrollSelectModule,
        SelectModule,
        SliderModule,
        SpinModule,
        SpinnerModule,
        SplitModule,
        StepsModule,
        SwitchModule,
        TableModule,
        TabsModule,
        TagModule,
        TimelineModule,
        TimepickerModule,
        TipModule,
        TooltipModule,
        TransferModule,
        TreeModule,
        UploadModule,
    ]
})
export class KpcModule {}