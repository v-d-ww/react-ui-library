import classNames from "classnames"
import React, { useState, createContext, ReactNode, ReactElement } from "react"
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectNumber: string) => void
export interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  defaultIndex?: string;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[]
}
interface IMenuContext {
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[]

}
export const MenuContext = createContext<IMenuContext>({ index: '0' })


export function Menu(props: MenuProps) {
  const {
    className,
    mode = 'horizontal',
    style,
    children,
    defaultIndex = '0',
    onSelect,
    defaultOpenSubMenus
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus,
  }
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const renderChildren = (children: ReactNode) => React.Children.map(children, (child, index) => {
    const childElement = child as ReactElement<MenuItemProps>
    const displayName = (childElement.type as { displayName?: string }).displayName || '';
    // const {displayName} = childElement.type
    if (displayName === 'MenuItem' || displayName === 'SubMenu') {
      return React.cloneElement(childElement, {
        index: index.toString()
      });
    } else {
      console.error("Warning: Menu has a child which is not a MenuItem component");
    }

  })
  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren(children)}
      </MenuContext.Provider>
    </ul>

  )
}