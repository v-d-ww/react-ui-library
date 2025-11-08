import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
import type { InputHTMLAttributes, ReactElement } from 'react';
import Icon from '../Icon/Icon';
import React from 'react';

type InputSize = 'lg' | 'sm'
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  disabled?: boolean,
  size?: InputSize,
  icon?: IconProp,
  prepend?: string | ReactElement,
  append?: string | ReactElement,
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
export default function Input(props: InputProps) {
  const {
    disabled = false,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  } = props
  const cName = classNames('viking-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepend': !!prepend,
  })
  return (
    <div
      className={cName}
      style={style}
      data-testid='test-container'
    >
      {prepend && <div className="viking-input-group-prepend">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="viking-input-inner"
        disabled={disabled}
        {...restProps} />
      {append && <div className="viking-input-group-append">{append}</div>}

    </div>
  )
}
