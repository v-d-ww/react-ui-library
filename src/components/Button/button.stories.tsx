import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonProps } from './button';
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
  argTypes: {
    btnType: {
      control: 'select',
      options: ['primary', 'default', 'danger', 'link'],
      description: '设置 Button 的类型',
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
      description: '设置 Button 的尺寸',
    },
    disabled: {
      control: 'boolean',
      description: '设置 Button 的禁用',
    },
    href: {
      control: 'text',
      description: '设置 Button 的链接（当 btnType 为 link 时生效）',
    },
    className: {
      control: 'text',
      description: '自定义样式类名',
    },
  },
  parameters: {
    docs: {
      description: {
        component: '按钮组件，支持多种类型、尺寸和状态。当 `btnType` 为 `link` 且提供了 `href` 时，会渲染为 `<a>` 标签。',
      },
    },
  },
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
type Story = StoryObj<ButtonProps>;


export const DefaultButton: Story = {
  args: {
    children: 'Default button',
    disabled: false,
    size: 'lg',
    btnType: 'default',
  },
  render: (args) => {
    return (
      <Button {...args}></Button>
    )

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
// 不同类型的按钮
export const ButtonTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button btnType='primary'>Primary</Button>
      <Button btnType='default'>Default</Button>
      <Button btnType='danger'>Danger</Button>
      <Button btnType='link' href='https://example.com'>Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同类型的按钮：主要按钮、默认按钮、危险按钮和链接按钮。',
      },
    },
  },
};
// 链接按钮示例
export const LinkButton: Story = {
  args: {
    btnType: 'link',
    href: 'https://example.com',
    children: '访问示例网站',
    onClick: (e) => {
      e.preventDefault();
      action('link-clicked')();
    },
  },
  parameters: {
    docs: {
      description: {
        story: '当 `btnType` 为 `link` 且提供了 `href` 时，按钮会渲染为 `<a>` 标签。',
      },
    },
  },
};