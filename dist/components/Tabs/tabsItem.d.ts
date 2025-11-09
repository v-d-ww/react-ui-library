import React, { ReactNode } from 'react';
export interface TabsItemProps {
    /** Tab选项上面的文字 */
    label: any;
    /** 可以扩展的 className */
    className?: string;
    /** Tab选项是否被激活 */
    isActive?: boolean;
    /** Tab选项是否被禁用 */
    disabled?: boolean;
    children?: ReactNode;
}
declare function TabsItem(props: TabsItemProps): React.JSX.Element;
declare namespace TabsItem {
    var displayName: string;
}
export default TabsItem;
