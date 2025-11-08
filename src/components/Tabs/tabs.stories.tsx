import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Tabs from './tabs';
import TabsItem from './tabsItem';
import Icon from '../Icon/Icon';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Tabs> = {
  title: 'Tabs Component', // 在 Storybook 侧边栏中的显示标题
  component: Tabs, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  // parameters: {
  //   docs: {
  //     inlineStories: true, // 这个特定故事使用非内联模式
  //     description: {
  //       component: [
  //         'this is a very nice component',
  //         '',
  //         '## this is a header',
  //         '',
  //         '```js',
  //         'const a = "hello"',
  //         '```',
  //       ].join('\n'),
  //     },
  //   },
  // },
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Tabs>;

// 不同类型
export const DefaultAlert: Story = {

  render: () => {
    return (
      <>
        <Tabs
          onSelect={action('click')}
        >
          <TabsItem label="选项卡一">
            this is content one
          </TabsItem>
          <TabsItem label="选项卡二">
            this is content two
          </TabsItem>
          <TabsItem label="用户管理">
            this is content three
          </TabsItem>
        </Tabs>
      </>
    )
  }

};
export const TabsWithOutline: Story = {
  render: () => {
    return (
      <Tabs
        onSelect={action('click')}
        styleType="outline"
      >
        <TabsItem label="card1">
          this is card one
        </TabsItem>
        <TabsItem label="card2">
          this is content two
        </TabsItem>
        <TabsItem
          disabled
          label="disabled"
        >
          this is content three
        </TabsItem>
      </Tabs>)

  }

}
export const TabsWithCustom: Story = {
  render: () => {
    return (
      <Tabs
        onSelect={() => { }}
        styleType="outline"
      >
        <TabsItem label={<><Icon icon="exclamation-circle" />{'  '}自定义图标</>}>
          this is card one
        </TabsItem>
        <TabsItem label="tab2">
          this is content two
        </TabsItem>
      </Tabs>)

  }

}