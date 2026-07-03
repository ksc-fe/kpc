import {createContext} from '../context';
import type {MediaGroupContextValue} from './types';

export const MediaGroupContext = createContext<MediaGroupContextValue | null>(null);
