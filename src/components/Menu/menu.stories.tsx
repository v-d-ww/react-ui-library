import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Menu> = {
  title: 'Menu Component', // 在 Storybook 侧边栏中的显示标题
  component: Menu, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  args: {
    mode: 'horizontal',
    defaultIndex: '0',
    onSelect: action('onSelect'),
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '菜单模式：水平或垂直',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    defaultIndex: {
      control: 'text',
      description: '默认激活的菜单项索引',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '0' },
      },
    },
    defaultOpenSubMenus: {
      control: 'object',
      description: '默认展开的子菜单索引数组',
      table: {
        type: { summary: 'string[]' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: '选择菜单项时触发的回调函数',
      table: {
        type: { summary: '(index: string) => void' },
      },
    },
    className: {
      control: 'text',
      description: '可以扩展的 className',
      table: {
        type: { summary: 'string' },
      },
    },
    style: {
      control: 'object',
      description: '自定义样式',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Menu 菜单组件，支持水平和垂直两种模式，可以包含菜单项和子菜单，支持禁用状态和默认展开。',
      },
    },
  },
};


export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<MenuProps>;


export const DefaultMenu: Story = {
  render: () => {
    return (
      <Menu onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          disabled
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <SubMenu title="下拉选项">
          <MenuItem>
            下拉选项一
          </MenuItem>
          <MenuItem>
            下拉选项二
          </MenuItem>
        </SubMenu>
      </Menu>
    )
  }

};

export const MenuWithVertical: Story = {
  render: () => {
    return (
      <Menu mode="vertical" onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <SubMenu title="点击下拉选项">
          <MenuItem>
            下拉选项一
          </MenuItem>
          <MenuItem>
            下拉选项二
          </MenuItem>
        </SubMenu>
      </Menu>
    )

  }

}
export const MenuWithOpened: Story = {
  render: () => {
    return (
      <Menu mode="vertical" defaultOpenSubMenus={['2']} onSelect={(index) => { action(`clicked ${index} item`) }} >
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem>
          cool link 2
        </MenuItem>
        <SubMenu title="默认展开下拉选项">
          <MenuItem>
            下拉选项一
          </MenuItem>
          <MenuItem>
            下拉选项二
          </MenuItem>
        </SubMenu>
      </Menu>
    )

  }

}