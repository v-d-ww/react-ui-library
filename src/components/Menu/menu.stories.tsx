import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Menu> = {
  title: 'Menu Component', // 在 Storybook 侧边栏中的显示标题
  component: Menu, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Menu>;

// 不同类型
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