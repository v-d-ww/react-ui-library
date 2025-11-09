import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Alert, { AlertProps } from './alert';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Alert> = {
  title: 'Alter Component', // 在 Storybook 侧边栏中的显示标题
  component: Alert, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'primary', 'warning', 'danger', 'default'],
      description: 'Alert 的类型，针对不同的场景',
      table: {
        type: { summary: 'success | primary | warning | danger | default' },
        defaultValue: { summary: 'primary' },
      },
    },
    title: {
      control: 'text',
      description: 'Alert 的标题',
      table: {
        type: { summary: 'string' },
      },
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭图标',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    customClose: {
      control: 'text',
      description: '自定义关闭图标',
      table: {
        type: { summary: 'string' },
      },
    },
    onClose: {
      action: 'onClose',
      description: '关闭 Alert 时触发的事件',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Alert 组件用于显示重要的提示信息，支持多种类型和关闭功能。组件带有淡入动画效果。',
      },
    },
  },
};

export default meta;

type Story = StoryObj<AlertProps>;

// 默认 Alert
export const DefaultAlert: Story = {
  args: {
    type: 'primary',
    title: '默认 Alert',
    closable: true,
    children: '这是默认的 Alert 组件',
    onClose: action('onClose'),
  },
};
// 不同类型
export const AlertTypes: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Alert type="success" closable title="成功提示" onClose={action('onClose')}>
          操作成功完成！
        </Alert>
        <Alert type="primary" closable title="主要提示" onClose={action('onClose')}>
          这是一条主要信息。
        </Alert>
        <Alert type="warning" closable title="警告提示" onClose={action('onClose')}>
          请注意这个警告信息。
        </Alert>
        <Alert type="danger" closable title="危险提示" onClose={action('onClose')}>
          这是一个危险操作，请谨慎处理！
        </Alert>
        <Alert type="default" closable title="默认提示" onClose={action('onClose')}>
          这是一条默认信息。
        </Alert>
      </div>
    )
  }

};
// 可关闭和不可关闭的 Alert
export const ClosableAndNonClosable: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert type="primary" closable title="可关闭的 Alert">
        这个 Alert 可以关闭，点击右上角的关闭图标即可。
      </Alert>
      <Alert type="warning" closable={false} title="不可关闭的 Alert">
        这个 Alert 不能关闭，没有关闭图标。
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示可关闭（closable=true）和不可关闭（closable=false）的 Alert。',
      },
    },
  },
};