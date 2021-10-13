import {useInstance} from 'intact';
import type {Slider} from './';

export function useStop() {
    const instance = useInstance() as Slider;
}
