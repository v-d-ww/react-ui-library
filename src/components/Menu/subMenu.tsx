import classNames from "classnames"
import React, { useContext, ReactElement, useState } from "react"
import { MenuContext } from "./menu"
import { MenuItemProps } from "./menuItem"

interface subMenuProps {
  index?: string,
  title: string
  className?: string,
  children?: React.ReactNode
}


export function SubMenu(props: subMenuProps) {

  const { index, className, title, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [subOpen, setOpen] = useState(isOpened)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-vertical': context.mode === 'vertical'
  })
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(!subOpen)
    alert(12345)
  }
  // 不是移入即打开，而是停留 300ms 再打开
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setOpen(toggle)
    }, 300)

  }
  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}
  const hoverEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}

  const subMenuClasses = classNames('viking-submenu', {
    'menu-opened': subOpen
  })
  const renderChildren = (children: React.ReactNode) => {
    return React.Children.map(children, (child, i) => {
      const childElement = child as ReactElement<MenuItemProps>
      const displayName = (childElement.type as { displayName?: string }).displayName || '';
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index: `${index}-${i}` })
      }
    })


  }
  return (
    <li className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {/* li里面不能直接加一些children */}
      <ul className={subMenuClasses} data-testid="submenu-ul">
        {renderChildren(children)}
      </ul>

    </li>

  )

}
SubMenu.displayName = 'SubMenu';