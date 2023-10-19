export type Sizes = 'large' | 'default' | 'small' | 'mini';
export type Colors = 'default' | 'primary' | 'warning' | 'danger' | 'success';

export interface CommonInputHTMLAttributes {
    autocomplete?: string 
    autofocus?: boolean
    // disabled?: boolean
    form?: string
    name?: string
    required?: boolean
    maxlength?: string | number
    // value?: string
}

export type Events<T> = Record<keyof T, true>; 
