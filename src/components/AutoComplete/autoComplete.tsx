import Icon from "../Icon/Icon";
import Input, { InputProps } from "../Input/input";
import React, { ChangeEvent, ReactElement, useEffect, useState, KeyboardEvent, useRef } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import classNames from "classnames";
import { useClickOutside } from "../../hooks/useClickOutside";
library.add(fas)

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject
export interface AutoCompleteProps<T = {}> extends Omit<InputProps, 'onSelect'> {
  /** 返回推荐结果 */
  fetchSuggestions: (str: string) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>,
  /** 选择选中某一项 */
  onSelect?: (item: DataSourceType<T>) => void,
  /** 自定义渲染样式 */
  renderOption?: (item: DataSourceType<T>) => ReactElement
}

/**
 * 页面中最常用的的输入框元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { AutoComplete } from 'vikingship-ui'
 * ~~~
 */
export default function AutoComplete<T = {}>(props: AutoCompleteProps<T>) {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps

  } = props
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<DataSourceType<T>[]>([])
  const [highIndex, setHighIndex] = useState(-1)
  const DebounceValue = useDebounce(inputValue, 500)
  const triggerSearch = useRef(false)
  const componentRef = useRef<HTMLDivElement>(null)
  useClickOutside(componentRef, () => setSuggestions([]))
  useEffect(() => {
    if (DebounceValue && triggerSearch.current) {
      const res = fetchSuggestions(DebounceValue)
      if (res instanceof Promise) {
        setLoading(true)
        res.then(data => {
          setLoading(false)
          setSuggestions(data)
        })
      }
      else setSuggestions(res)
    }
    else {
      setSuggestions([])

    }
    setHighIndex(-1)
  }, [DebounceValue])
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim()
    setInputValue(val)
    triggerSearch.current = true
  }
  const handleSelect = (item: DataSourceType<T>) => {
    setInputValue(item.value)
    setSuggestions([])
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false

  }
  const handleLiClick = (item: DataSourceType<T>) => {
    return () => {
      handleSelect(item);
    };
  };
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    else if (index >= suggestions.length - 1) index = suggestions.length - 1;
    setHighIndex(index)

  }
  const setShowDropdown = () => {
    setInputValue('')
    setSuggestions([])

  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        if (suggestions[highIndex]) {
          handleSelect(suggestions[highIndex])
        }
        break
      case 'ArrowUp':
        highlight(highIndex - 1)
        console.log(highIndex);
        break
      case 'ArrowDown':
        highlight(highIndex + 1)
        break
      case 'Escape':
        setShowDropdown()
        break
      default:
        break

    }

  }
  const renderTemplate = (item: DataSourceType<T>) => {
    if (renderOption) {
      return renderOption(item)
    }
    return item.value

  }
  const generateDropdown = () => {
    return (
      <ul className="viking-suggestion-list">
        {
          suggestions.map((item, index) => {
            let cname = classNames('suggestion-item', {
              'is-active': index === highIndex
            })
            return (
              // <li key={index} onClick={() => handleSelect(item)}>
              < li key={index} onClick={handleLiClick(item)} className={cname} data-testid='test-suggestion'>
                {renderTemplate(item)}
              </li>
            )
          })
        }
      </ul >
    )
  }

  const renderDrop = () => {
    if (loading)
      return (
        <ul className="viking-suggestion-list"> {/* 添加类名 */}
          <div className="suggestions-loading-icon"> {/* 使用 CSS 中定义的加载样式类 */}
            <Icon icon="spinner" spin />
          </div>
        </ul>
      )
    else if (inputValue) {
      return generateDropdown()
    }
  }

  return (
    <div className="viking-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      ></Input>
      {renderDrop()}
    </div>
  )
}