import { ReactNode } from 'react';
import { MenuProps } from './menu';
import { SubMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';
type IMenuComponent = ((props: MenuProps) => ReactNode) & {
    Item: (props: MenuItemProps) => ReactNode;
    SubMenu: (props: SubMenuProps) => ReactNode;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
