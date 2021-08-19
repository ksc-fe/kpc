import {useInstance} from 'intact';
import type {Steps} from './index';
import {createContext} from '../context';

export const context = createContext();

export function useClickable() {
    const steps = useInstance() as Steps;

    function onChangeIndex(index: number){
        const {value, clickable} = steps.get();
        if(value! > index && clickable) {
            steps.set('value', index);
        }
    }

    return {onChangeIndex};
}