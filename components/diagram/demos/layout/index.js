export {default as data} from './index.json';
import Intact from 'intact';
import template from './index.vdt';
import './index.styl'; 

import {DFlowLayout, DTreeLayout, DRadialLayout, DStackLayout, DPartitionLayout, DCircleLayout, DOrganicLayout} from 'kpc/components/diagram';

export default class extends Intact {
    @Intact.template()
    static template = template;

    defaults() {
        return {
            layout: 'tree',
            layouts: {
                stack: {
                    props: {spacing: 20, fill: true, type: 'vertical', resizeParent: true, border: 10, wrap: 600},
                    Layout: DStackLayout,
                },
                partition: {
                    props: {spacing: 20, type: 'vertical', resizeVertices: true, border: 10},
                    Layout: DPartitionLayout,
                },
                tree: {
                    props: {type: 'vertical', resizeParent: true, levelDistance: 30, nodeDistance: 16, groupPadding: 10},
                    Layout: DTreeLayout,
                },
                radial: {
                    props: {levelDistance: 60, nodeDistance: 16, rootx: 10, rooty: 150},
                    Layout: DRadialLayout,
                },
                flow: {
                    props: {intraCellSpacing: 20, interHierarchySpacing: 30, interRankCellSpacing: 50, type: 'vertical', resizeParent: true, parentBorder: 10},
                    Layout: DFlowLayout,
                },
                circle: {
                    props: {x0: 0, y0: 0}, 
                    Layout: DCircleLayout,
                },
                organic: {
                    props: {forceConstant: 50},
                    Layout: DOrganicLayout,
                },
            },
        };
    }
}