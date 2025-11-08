import { Meta, StoryObj } from '@storybook/react';
import Input from './input';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Input> = {
  title: 'Input Component', // 在 Storybook 侧边栏中的显示标题
  component: Input, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
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
  argTypes: {
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

};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Input>;

// 不同类型
export const DefaultInput: Story = {

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
  }

};