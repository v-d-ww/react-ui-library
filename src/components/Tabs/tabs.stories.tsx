import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Tabs, { TabsProps } from './tabs';
import TabsItem from './tabsItem';
import Icon from '../Icon/Icon';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Tabs> = {
  title: 'Tabs Component', // 在 Storybook 侧边栏中的显示标题
  component: Tabs, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  args: {
    defaultIndex: 0,
    styleType: 'underline',
    onSelect: action('onSelect'),
  },
  argTypes: {
    defaultIndex: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      description: '当前激活 tab 面板的索引，默认为 0',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    styleType: {
      control: 'select',
      options: ['underline', 'outline'],
      description: 'Tabs 的样式类型',
      table: {
        type: { summary: 'underline | outline' },
        defaultValue: { summary: 'underline' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: '点击 Tab 触发的回调函数',
      table: {
        type: { summary: '(selectedIndex: number) => void' },
      },
    },
    className: {
      control: 'text',
      description: '可以扩展的 className',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tabs 标签页组件，用于在不同内容区域之间进行切换，支持两种样式类型和禁用状态。',
      },
    },
  },

};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<TabsProps>;

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