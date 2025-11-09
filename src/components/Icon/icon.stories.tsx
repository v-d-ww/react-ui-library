import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Icon, { IconProps } from '../Icon/Icon';
import Button from '../Button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

// 元数据配置 - 定义组件的基本信息
const meta: Meta<typeof Icon> = {
  title: 'Icon Component', // 在 Storybook 侧边栏中的显示标题
  component: Icon, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  args: {
    icon: 'check',
    size: '1x',
  },
  argTypes: {
    icon: {
      control: 'text',
      description: 'FontAwesome 图标名称',
      table: {
        type: { summary: 'IconProp' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'lg', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'],
      description: '图标尺寸',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '1x' },
      },
    },
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', undefined],
      description: '图标主题颜色',
      table: {
        type: { summary: 'primary | secondary | success | info | warning | danger | light | dark' },
      },
    },
    spin: {
      control: 'boolean',
      description: '是否旋转动画',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pulse: {
      control: 'boolean',
      description: '是否脉冲动画',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: 'text',
      description: '自定义样式类名',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Icon 图标组件，基于 FontAwesome，支持丰富的图标库和主题颜色。',
      },
    },
  },
};

export default meta;
// 定义故事类型，基于 Button 组件的 props 类型
type Story = StoryObj<IconProps>;

export const DefaultIcon: Story = {
  args: {
    icon: 'check',
    size: '3x',
  },
};
// 常用图标
export const CommonIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="check" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>check</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="times" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>times</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="trash" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>trash</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="edit" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>edit</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="search" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>search</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="user" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>user</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="heart" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>heart</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>star</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="download" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>download</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="upload" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>upload</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="lock" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>lock</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="unlock" size="3x" />
        <span style={{ fontSize: '12px', color: '#666' }}>unlock</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示一些常用的图标。',
      },
    },
  },
};
// 不同尺寸
export const DifferentSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="xs" />
        <span style={{ fontSize: '11px', color: '#666' }}>xs</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="sm" />
        <span style={{ fontSize: '11px', color: '#666' }}>sm</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="1x" />
        <span style={{ fontSize: '11px', color: '#666' }}>1x</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="lg" />
        <span style={{ fontSize: '11px', color: '#666' }}>lg</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="2x" />
        <span style={{ fontSize: '11px', color: '#666' }}>2x</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="3x" />
        <span style={{ fontSize: '11px', color: '#666' }}>3x</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="4x" />
        <span style={{ fontSize: '11px', color: '#666' }}>4x</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon {...args} icon="star" size="5x" />
        <span style={{ fontSize: '11px', color: '#666' }}>5x</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同尺寸的图标。',
      },
    },
  },
};
// 不同主题
export const IconWithTheme: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="check-circle" size="3x" theme="primary" />
        <span style={{ fontSize: '12px', color: '#666' }}>Primary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="check-circle" size="3x" theme="secondary" />
        <span style={{ fontSize: '12px', color: '#666' }}>Secondary</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="check-circle" size="3x" theme="success" />
        <span style={{ fontSize: '12px', color: '#666' }}>Success</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="check-circle" size="3x" theme="info" />
        <span style={{ fontSize: '12px', color: '#666' }}>Info</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="exclamation-circle" size="3x" theme="warning" />
        <span style={{ fontSize: '12px', color: '#666' }}>Warning</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="times-circle" size="3x" theme="danger" />
        <span style={{ fontSize: '12px', color: '#666' }}>Danger</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="circle" size="3x" theme="light" />
        <span style={{ fontSize: '12px', color: '#666' }}>Light</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon icon="circle" size="3x" theme="dark" />
        <span style={{ fontSize: '12px', color: '#666' }}>Dark</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同主题颜色的图标。',
      },
    },
  },
};
// 动画效果
export const IconWithAnimation: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          旋转动画 (spin)
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="spinner" size="3x" spin theme="primary" />
          <Icon icon="sync" size="3x" spin theme="success" />
          <Icon icon="circle-notch" size="3x" spin theme="info" />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          脉冲动画 (pulse)
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="spinner" size="3x" pulse theme="primary" />
          <Icon icon="heart" size="3x" pulse theme="danger" />
          <Icon icon="bell" size="3x" pulse theme="warning" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示带有旋转（spin）和脉冲（pulse）动画效果的图标。',
      },
    },
  },
};
// 在按钮中使用
export const IconInButton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          带图标的按钮
        </label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button btnType="primary">
            <Icon icon="check" /> 确认
          </Button>
          <Button btnType="danger">
            <Icon icon="trash" /> 删除
          </Button>
          <Button btnType="default">
            <Icon icon="download" /> 下载
          </Button>
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          仅图标按钮
        </label>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button btnType="primary" size="lg">
            <Icon icon="check" />
          </Button>
          <Button btnType="danger" size="lg">
            <Icon icon="trash" />
          </Button>
          <Button btnType="default" size="lg">
            <Icon icon="edit" />
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示在按钮中使用图标的示例。',
      },
    },
  },
};
// 状态图标
export const StatusIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          成功状态
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="check-circle" size="2x" theme="success" />
          <Icon icon="check" size="2x" theme="success" />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          错误状态
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="times-circle" size="2x" theme="danger" />
          <Icon icon="times" size="2x" theme="danger" />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          警告状态
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="exclamation-circle" size="2x" theme="warning" />
          <Icon icon="exclamation-triangle" size="2x" theme="warning" />
        </div>
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '12px', fontSize: '12px', color: '#666' }}>
          信息状态
        </label>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Icon icon="info-circle" size="2x" theme="info" />
          <Icon icon="question-circle" size="2x" theme="info" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示用于表示不同状态的图标。',
      },
    },
  },
};