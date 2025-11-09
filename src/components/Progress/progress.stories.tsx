import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Progress from './progress';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Progress> = {
  title: 'Progress Component', // 在 Storybook 侧边栏中的显示标题
  component: Progress, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    percent: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: '当前百分比（0-100）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    strokeHeight: {
      control: { type: 'range', min: 5, max: 100, step: 5 },
      description: '进度条高度（像素）',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '15' },
      },
    },
    showText: {
      control: 'boolean',
      description: '是否显示百分比数字',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
      description: '进度条主题颜色',
      table: {
        type: { summary: 'primary | secondary | success | info | warning | danger | light | dark' },
        defaultValue: { summary: 'primary' },
      },
    },
    styles: {
      control: 'object',
      description: '额外的样式',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Progress 进度条组件，用于展示操作进度，支持自定义高度、主题颜色和是否显示百分比。',
      },
    },
  },
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

export const WithoutTextProcess: Story = {
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            小高度 (10px)
          </label>
          <Progress percent={50} strokeHeight={10} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            默认高度 (15px)
          </label>
          <Progress percent={50} strokeHeight={15} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            中等高度 (30px)
          </label>
          <Progress percent={50} strokeHeight={30} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
            大高度 (50px)
          </label>
          <Progress percent={50} strokeHeight={50} />
        </div>
      </div>)

  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同高度的进度条。',
      },
    },
  },

}
export const DifferentThemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Primary（主要）
        </label>
        <Progress percent={60} theme="primary" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Secondary（次要）
        </label>
        <Progress percent={60} theme="secondary" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Success（成功）
        </label>
        <Progress percent={60} theme="success" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Info（信息）
        </label>
        <Progress percent={60} theme="info" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Warning（警告）
        </label>
        <Progress percent={60} theme="warning" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Danger（危险）
        </label>
        <Progress percent={60} theme="danger" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Light（浅色）
        </label>
        <Progress percent={60} theme="light" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          Dark（深色）
        </label>
        <Progress percent={60} theme="dark" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同主题颜色的进度条。',
      },
    },
  },
};