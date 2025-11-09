/// <reference types="react" />
import { TabsProps } from './tabs';
import { TabsItemProps } from './tabsItem';
type ITabsComponent = ((props: TabsProps) => React.ReactNode) & {
    Item: (props: TabsItemProps) => React.ReactNode;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
