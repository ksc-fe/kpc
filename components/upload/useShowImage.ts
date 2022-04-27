import {useInstance} from 'intact';
import {Upload, UploadFile} from './';
import {useState} from '../../hooks/useState';

export function useShowImage() {
    const instance = useInstance() as Upload;
    const isShow = useState(false);
    const image = useState<UploadFile | null>(null);

    function show(file: UploadFile) {
        isShow.set(true);
        image.set(file);
    }

    function close() {
        isShow.set(false);
    }

    return {show, close, image, isShow};
}
