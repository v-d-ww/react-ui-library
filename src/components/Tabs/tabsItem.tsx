import React, { ReactNode } from 'react'
import classNames from 'classnames'

export interface TabsItemProps {
  /** Tab选项上面的文字 */
  label: any;
  /** 可以扩展的 className */
  className?: string;
  /** Tab选项是否被激活 */
  isActive?: boolean;
  /** Tab选项是否被禁用 */
  disabled?: boolean;
  children?: ReactNode
}
export default function TabsItem(props: TabsItemProps) {
  const {
    label,
    className,
    isActive = false,
    disabled = false,
    children
  } = props
  const classes = classNames('tabs-content', className, {
    'tabs-content-active': isActive
  })
  return (
    <div
      key={label}
      className={classes}
    >
      {children}
    </div>

  )
}
TabsItem.displayName = 'TabsItem'