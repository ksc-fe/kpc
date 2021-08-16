import {findDomFromVNode, createVNode as h, mount, ComponentClass} from 'intact';
import type {useColumns} from './useColumns';
import {loopDataWithChildrenKey} from './useTree';
import {get, noop, isNullOrUndefined} from 'intact-shared';
import type {TableProps} from './table';

export async function exportTable(
    getData: ReturnType<typeof useColumns>['getData'],
    data: any[] | undefined,
    childrenKey: string | undefined,
    parentComponet: ComponentClass,
    filename: string,
) {
    const download = (await import('downloadjs')).default;
    const collection: string[] = [];
    const {columns, cols} = getData();

    // head
    columns.forEach(column => {
        const rows: string[] = [];
        // TODO: support grouped header
        column.forEach(vNode => {
            const props = vNode.props!;
            if (props.ignore) return;

            const dom = findDomFromVNode(vNode, true) as HTMLElement;
            pushTextContext(rows, dom, props.exportTitle);
        });
        collection.push(rows.join(','));
    });

    // body
    loopDataWithChildrenKey(
        data,
        childrenKey,
        (data, index) => {
            const rows: string[] = [];
            cols.forEach((col) => {
                if (col.ignore) return;

                const blocks = col.$blocks;
                let children = get(data, col.key);
                if (blocks) {
                    const template = blocks.template || blocks.default;
                    if (template) {
                        children = template(noop as any, [data, index]);
                    }
                }
                const td = h('td', null, children);
                mount(td, null, parentComponet, false, null, []);
                const exportCell = col.exportCell;
                const content = exportCell && exportCell(data, index);
                pushTextContext(rows, td.dom as HTMLElement, content);
            });
            collection.push(rows.join(','));
        },
        false,
    );

    const content = collection.join('\r\n');
    download(
        '\uFEFF' + content,
        filename + '.csv',
        'text/comma-separated-values;charset=utf-8'
    );
}

function pushTextContext(rows: string[], dom: HTMLElement, content: string | undefined) {
    let text = isNullOrUndefined(content) ? dom!.textContent : content;
    text = '"' + String(text!.trim()).replace(/"/g, '""') + '"';
    rows.push(text);
}
