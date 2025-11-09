import React from "react";
export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
}
declare function SubMenu(props: SubMenuProps): React.JSX.Element;
declare namespace SubMenu {
    var displayName: string;
}
export default SubMenu;
