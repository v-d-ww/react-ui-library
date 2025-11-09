import { Meta, StoryObj } from "@storybook/react";
import AutoComplete, { DataSourceType, AutoCompleteProps } from "./autoComplete";
import React from "react";
import { action } from '@storybook/addon-actions'


const meta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete Component',
  component: AutoComplete,
  tags: ['autodocs'],
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
      options: ['lg', 'sm'],
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
    fetchSuggestions: {
      control: false,
      description: '返回推荐结果的函数，支持同步和异步',
      table: {
        type: { summary: '(str: string) => DataSourceType[] | Promise<DataSourceType[]>' },
      },
    },
    onSelect: {
      action: 'onSelect',
      description: '选择某一项时触发',
      table: {
        type: { summary: '(item: DataSourceType) => void' },
      },
    },
    renderOption: {
      control: false,
      description: '自定义渲染选项的样式',
      table: {
        type: { summary: '(item: DataSourceType) => ReactElement' },
      },
    }
  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同尺寸的 AutoComplete 组件。',
      },
    },
  },


}
export default meta

type Story = StoryObj<AutoCompleteProps>;

export const Default: Story = {
  render: (args) => {
    // const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    interface lakerProps {
      value: string;
      number: number
    }
    interface GithubUserProps {
      login: string;
      url: string;
      avatar_url: string;
    }
    const lakersWithNumber = [
      { value: 'bradley', number: 11 },
      { value: 'pope', number: 1 },
      { value: 'caruso', number: 4 },
      { value: 'cook', number: 2 },
      { value: 'cousins', number: 15 },
      { value: 'james', number: 23 },
      { value: 'AD', number: 3 },
      { value: 'green', number: 14 },
      { value: 'howard', number: 39 },
      { value: 'kuzma', number: 0 },
    ]


    // const handleSuggestions = (key: string) => {
    //   // return lakers.filter(item => item.includes(key))
    //   return lakersWithNumber.filter(item => item.value.includes(key))
    // }
    const handleSuggestions = (query: string) => {
      return fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(({ items }) => {
          console.log(items)
          return (items as GithubUserProps[]).slice(0, 10).map(item => {
            return { value: item.login, ...item }
          })
        })
    }
    const onSelect = (item: DataSourceType<GithubUserProps>) => {
      console.log(item);
      action('click')()

    }
    // const renderOption = (item: DataSourceType<lakerProps>) => {
    //   return (
    //     <>
    //       <h2>{item.value}</h2>
    //       <h5>{item.number}</h5>
    //     </>

    //   )
    // }
    return (
      <AutoComplete
        {...args}
        fetchSuggestions={handleSuggestions}
        onSelect={onSelect}

      // renderOption={renderOption}
      />
    )
  }
}