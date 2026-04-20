export type Sizes = 'large' | 'default' | 'small' | 'mini';
export type Colors = 'default' | 'primary' | 'warning' | 'danger' | 'success';

export interface CommonFormElementAttributes {
    autofocus?: boolean
    // disabled?: boolean
    form?: string
    name?: string
    required?: boolean
}
export interface CommonInputHTMLAttributes extends CommonFormElementAttributes {
    autocomplete?: string 
    maxlength?: string | number
    // value?: string
}

export type Events<T> = Record<keyof T, true>; 
