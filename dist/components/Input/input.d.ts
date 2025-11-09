import { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { InputHTMLAttributes, ReactElement } from 'react';
import React from 'react';
type InputSize = 'lg' | 'sm';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    disabled?: boolean;
    size?: InputSize;
    icon?: IconProp;
    prepend?: string | ReactElement;
    append?: string | ReactElement;
}
export default function Input(props: InputProps): React.JSX.Element;
export {};
