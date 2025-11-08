import { Meta, StoryObj } from "@storybook/react";
import AutoComplete, { DataSourceType, AutoCompleteProps } from "./autoComplete";
import React from "react";
import { action } from '@storybook/addon-actions'


const meta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete Component',
  component: AutoComplete,
  tags: ['autodocs'],


}
export default meta

type Story = StoryObj<typeof AutoComplete>;

export const Default: Story = {
  render: () => {
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
        fetchSuggestions={handleSuggestions}
        onSelect={onSelect}
      // renderOption={renderOption}
      />
    )
  }
}