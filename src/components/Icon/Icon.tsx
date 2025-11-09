import classNames from 'classnames'
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
library.add(fas)

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
export interface IconProps extends FontAwesomeIconProps {
  theme?: ThemeProps

}

export default function Icon(props: IconProps) {
  const { className, theme, ...resetProps } = props
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...resetProps}></FontAwesomeIcon>
  )

}