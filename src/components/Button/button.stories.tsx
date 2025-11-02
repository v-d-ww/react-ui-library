import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';
import React from 'react';

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Button> = {
  title: 'Button Component', // 在 Storybook 侧边栏中的显示标题
  component: Button, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  args: {
    // 定义组件的默认参数
    onClick: () => {
      console.log('button clicked');
      action('button-clicked')();
    }
    // action('button-clicked') // 统一处理点击事件
  },
  parameters: {
    docs: {
      inlineStories: true, // 这个特定故事使用非内联模式
      description: {
        component: [
          'this is a very nice component',
          '',
          '## this is a header',
          '',
          '```js',
          'const a = "hello"',
          '```',
        ].join('\n'),
      },
    },
  },

};

export default meta;

// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Button>;

// 不同类型
export const PrimaryButton: Story = {
  args: {
    // 按钮的文本内容
    children: 'Default button'
  }
};
//不同尺寸
export const ButtonWithSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size='lg'>大按钮 (Large)</Button>
      <Button>默认按钮 (Default)</Button>
      <Button size='sm'>小按钮 (Small)</Button>
    </div>
  ),
  // 替代故事级别的 info 参数
  parameters: {
    docs: {
      inlineStories: true, // 这个特定故事使用非内联模式
      description: {
        story: '展示不同尺寸的按钮',
      },
    },
  },
};
// 方式3：结合 args 和 render（最佳实践）
export const InteractiveButton: Story = {
  args: {
    children: '可交互按钮',
    // ✅ 这些可以在 Controls 面板中修改
  },
  render: (args) => (
    <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '8px' }}>
      <Button {...args} />
      <p style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
        这个按钮的 props 可以在 Controls 面板中修改
      </p>
    </div>
  ),
};

// 方式4：args 配合自定义布局
export const ButtonGroups: Story = {
  render: (args) => (
    <>
      <div style={{ marginBottom: '10px' }}>
        <Button {...args} size='lg'>大</Button>
      </div>
      <div>
        <Button {...args} size='sm'>小</Button>
      </div>
    </>
  ),
  args: {
    children: '按钮文本', // ✅ 可以修改，会应用到两个按钮
  },
};