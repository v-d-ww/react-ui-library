import React from "react";
type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectNumber: string) => void;
export interface MenuProps {
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    defaultIndex?: string;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
}
interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
export default function Menu(props: MenuProps): React.JSX.Element;
export {};
