import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Icon from '../Icon/Icon';
import Button from '../Button';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Icon> = {
  title: 'Icon Component', // 在 Storybook 侧边栏中的显示标题
  component: Icon, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Icon>;

// 不同类型
export const DefaultIcon: Story = {

  render: () => {
    return (
      <>
        <Icon icon="check" size="3x" />
        <Icon icon="anchor" size="3x" />
        <Icon icon="trash" size="3x" />
        <Icon icon="times" size="3x" />
        <Button
          btnType="primary"
          disabled={false}
          size="lg"
        >
          <Icon icon="check" />
          check
        </Button>
      </>
    )
  }

};
export const IconWithTheme: Story = {
  render: () => {
    return (
      <>
        <Icon icon="check" size="3x" theme="success" />
        <Icon icon="times" size="3x" theme="danger" />
        <Icon icon="anchor" size="3x" theme="primary" />
        <Icon icon="exclamation-circle" size="3x" theme="warning" />
      </>)

  }

}
export const IconWithAction: Story = {
  render: () => {
    return (
      <>
        <Icon icon="spinner" size="3x" spin theme="primary" />
        <Icon icon="spinner" pulse size="3x" theme="success" />
      </>)

  }

}