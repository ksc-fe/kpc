import {useInstance} from 'intact';
import type {Upload} from './';

export function useAccept() {
    const instance = useInstance() as Upload;
    let extensions: string[] = [];
    let mimeTypes: string[] = [];
    let groupTypes: string[] = [];

    instance.on('$receive:accept', parseAccept);

    function parseAccept(accept?: string) {
        extensions = [];
        mimeTypes = [];
        groupTypes = [];

        if (accept) {
            accept.split(',').forEach(item => {
                item = item.trim().toLowerCase();
                if (item[0] === '.') {
                    extensions.push(item.substring(1));
                } else {
                    const [type, extension] = item.split('/');
                    if (extension === '*') {
                        groupTypes.push(type);
                    } else {
                        mimeTypes.push(item);
                    }
                }
            });
        }
    }

    function isValidType(type: string, name: string): boolean {
        if (mimeTypes.includes(type)) return true;

        const index = name.lastIndexOf('.');
        type = type.split('/')[0];
        if (index > -1) {
            const extension = name.substring(index + 1).toLowerCase();
            if (extensions.includes(extension)) return true;
        }

        return groupTypes.includes(type);
    }

    return {isValidType};
}
