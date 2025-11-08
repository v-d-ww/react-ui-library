import React, { ReactElement, ReactNode, useState } from 'react'
import classNames from 'classnames'
import { TabsItemProps } from './tabsItem'


type TabStyle = "underline" | "outline"

export interface TabsProps {
  /** 当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /** Tabs的样式，两种可选，默认为 underline */
  styleType?: TabStyle;
  /** 点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /** 可以扩展的 className */
  className?: string;
  children?: ReactNode
}
export default function Tabs(props: TabsProps) {
  const {
    defaultIndex = 0,
    styleType = 'underline',
    onSelect,
    className,
    children
  } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  const classes = classNames('tabs-nav', className, {
    'tabs-underline': styleType === 'underline',
    'tabs-outline': styleType === 'outline'
  })
  const handleClick = (index: number, disabled: boolean) => {
    if (disabled) return
    setActiveIndex(index)
    if (typeof onSelect === 'function') {
      console.log('用户点击触发 onSelect，参数：', index);
      onSelect(index)
    }

  }

  const childrenComponent = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as ReactElement<TabsItemProps>
      const tabsLabelClasses = classNames('tabs-label', {
        'tabs-label-active': activeIndex === index,
        'tabs-label-disabled': childElement.props.disabled
      })
      const isDisabled = childElement.props.disabled || false
      const handleChildClick = () => {
        handleClick(index, isDisabled)

      }
      return (
        <li
          key={index}
          className={tabsLabelClasses}
          onClick={handleChildClick}
        >
          {childElement.props.label}
        </li>
      )

    })
  }
  const renderChildren = () => {
    return (
      React.Children.map(children, (child, index) => {
        const childElement = child as ReactElement<TabsItemProps>
        // const {displayName} = childElement.type
        const displayName = (childElement.type as { displayName?: string }).displayName || '';
        if (displayName === 'TabsItem') {
          return React.cloneElement(childElement, {
            isActive: activeIndex === index
          })

        }
        else {
          console.error('不是tabsItem类型')
        }
      })

    )
  }
  return (
    <div>
      <nav className={classes}>
        <ul className="tabs-ul">
          {childrenComponent()}
        </ul>
      </nav>
      {renderChildren()}
    </div>
  )
}