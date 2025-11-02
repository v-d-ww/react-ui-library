import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react';
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface iconProps extends FontAwesomeIconProps {
  theme?: ThemeProps

}

export function Icon(props: iconProps) {
  const { className, theme, ...resetProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...resetProps}></FontAwesomeIcon>
  )

}