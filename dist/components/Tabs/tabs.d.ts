import React, { ReactNode } from 'react';
type TabStyle = "underline" | "outline";
export interface TabsProps {
    /** 当前激活 tab 面板的 index，默认为0 */
    defaultIndex?: number;
    /** Tabs的样式，两种可选，默认为 underline */
    styleType?: TabStyle;
    /** 点击 Tab 触发的回调函数 */
    onSelect?: (selectedIndex: number) => void;
    /** 可以扩展的 className */
    className?: string;
    children?: ReactNode;
}
export default function Tabs(props: TabsProps): React.JSX.Element;
export {};
