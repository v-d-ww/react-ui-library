import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Progress from './progress';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Progress> = {
  title: 'Progress Component', // 在 Storybook 侧边栏中的显示标题
  component: Progress, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Progress>;

// 不同类型
export const DefaultProgress: Story = {

  render: () => {
    return (
      <>
        <Progress percent={20} />
      </>
    )
  }

};

export const WithTextProcess: Story = {
  render: () => {
    return (
      <>
        <Progress percent={50} showText={false} />
      </>)

  }

}
export const StrokeHeightProcess: Story = {
  render: () => {
    return (
      <>
        <Progress percent={50} strokeHeight={50} />
      </>)

  }

}