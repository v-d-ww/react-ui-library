import { FC, ReactNode } from 'react'
import Menu, { MenuProps } from './menu'
import SubMenu, { SubMenuProps } from './subMenu'
import MenuItem, { MenuItemProps } from './menuItem'

// 交叉类型定义
// export type IMenuComponent = FC<MenuProps> & {
//   Item: FC<MenuItemProps>,
//   SubMenu: FC<SubMenuProps>
// }

type IMenuComponent = ((props: MenuProps) => ReactNode) & {
  Item: (props: MenuItemProps) => ReactNode;  // 子组件 Item 的类型
  SubMenu: (props: SubMenuProps) => ReactNode;  // 子组件 SubMenu 的类型
};
const TransMenu = Menu as IMenuComponent

TransMenu.Item = MenuItem
TransMenu.SubMenu = SubMenu

export default TransMenu