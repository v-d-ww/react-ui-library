import { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './input';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Input> = {
  title: 'Input Component', // 在 Storybook 侧边栏中的显示标题
  component: Input, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    placeholder: {
      control: 'text',
      description: '输入框占位符',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'select',
      options: ['lg', 'sm', undefined],
      description: '输入框尺寸',
      table: {
        type: { summary: 'lg | sm' },
      },
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      description: '输入框类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    value: {
      control: 'text',
      description: '输入框的值（受控组件）',
      table: {
        type: { summary: 'string' },
      },
    },
    prepend: {
      control: 'text', // ✅ 限制只能输入文本，不能输入对象
      description: '输入框前缀（字符串）',
    },
    append: {
      control: 'text', // ✅ 限制只能输入文本，不能输入对象
      description: '输入框后缀（字符串）',
    },
    icon: {
      control: false, // ✅ 禁用 Controls，避免复杂类型问题
      description: '图标（在 Controls 中不支持修改）',
    },
  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        component: '展示带图标的 Input 组件。图标显示在输入框左侧。',
      },
    },
  },

};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<InputProps>;

// 默认 Input
export const DefaultInput: Story = {
  args: {
    placeholder: '默认输入框',
  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '默认的 Input 组件示例。',
      },
    },
  },
};
// 不同尺寸
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          大尺寸 (lg)
        </label>
        <Input placeholder="大尺寸输入框" size="lg" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          默认尺寸
        </label>
        <Input placeholder="默认尺寸输入框" />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          小尺寸 (sm)
        </label>
        <Input placeholder="小尺寸输入框" size="sm" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同尺寸的 Input 组件。',
      },
    },
  },
};
// 不同类型
export const WithPrependAndAppend: Story = {

  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <Input placeholder="邮箱" prepend="@" />
        <Input placeholder="网址"
          prepend="https://"
          defaultValue="prepend text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            action('input-changed')()
          }} />
        <Input placeholder="金额" size='lg' append=".00" />
      </div>
    )

  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示带前缀、后缀或同时带前缀和后缀的 Input 组件。',
      },
    },
  },

};