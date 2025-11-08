import Tabs, { TabsProps } from './tabs'
import TabsItem, { TabsItemProps } from './tabsItem'


type ITabsComponent = ((props: TabsProps) => React.ReactNode) & {
  Item: (props: TabsItemProps) => React.ReactNode;  // 子组件 Item 的类型

};
const TransTabs = Tabs as ITabsComponent

TransTabs.Item = TabsItem

export default TransTabs