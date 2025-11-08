import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Alert from './alert';


// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Alert> = {
  title: 'Alter Component', // 在 Storybook 侧边栏中的显示标题
  component: Alert, // 关联的组件
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
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<typeof Alert>;

// 不同类型
export const InteractiveAlert: Story = {
  args: {
    type: 'primary',
    title: '可交互的 Alert',
    closable: true,
    children: '这是描述内容',
    onClose: action('onClose'),
  },
};
export const DefaultAlert: Story = {

  render: () => {
    return (
      <>
        <Alert type="success" closable title="this is Success" />
        <Alert type="danger" closable title="this is Danger!" />
        <Alert type="warning" closable={false} title="this is Warning!" />
      </>
    )
  }

};
export const AlertWithChildren: Story = {
  render: () => {
    return (
      <Alert
        type="primary"
        closable
        title="提示标题欧亲"
        children="this is a long description"
        onClose={function noRefCheck() { }}
      />)

  }

}