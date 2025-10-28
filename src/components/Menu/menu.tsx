import classNames from "classnames"
import React, { useState, createContext, ReactNode, ReactElement } from "react"
import { MenuItemProps } from './menuItem'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectNumber: number) => void
export interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  defaultIndex?: number;
  onSelect?: SelectCallback
}
interface IMenuContext {
  index: number;
  onSelect?: SelectCallback;

}
export const MenuContext = createContext<IMenuContext>({ index: 0 })


export function Menu(props: MenuProps) {
  const {
    className,
    mode = 'horizontal',
    style,
    children,
    defaultIndex = 0,
    onSelect
  } = props
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive | 0,
    onSelect: handleClick
  }
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const renderChildren = (children: ReactNode) => React.Children.map(children, (child, index) => {
    const childElement = child as ReactElement<MenuItemProps>
    const displayName = (childElement.type as { displayName?: string }).displayName || '';
    // const {displayName} = childElement.type
    if (displayName === 'MenuItem') {
      return React.cloneElement(childElement, {
        index: index
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