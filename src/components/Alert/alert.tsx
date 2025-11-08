import classNames from "classnames";
import { useState } from "react";
import Icon from "../Icon/Icon";
import Transition from "../Transition";
import React from 'react';

export type AlertType = 'success' | 'primary' | 'warning' | 'danger' | 'default'
export interface AlertProps {
  /** 标题 */
  title?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
  /** the close icon */
  customClose?: string;
  /** 关闭alert时触发的事件 */
  onClose?: (() => void);
  /** 描述 */
  children?: React.ReactNode;
  /** 	类型 四种可选 针对四种不同的场景 */
  type: AlertType;
}

export default function Alert(props: AlertProps) {
  const { title, closable = true, customClose, onClose, children, type = 'primary' } = props
  const [visible, setVisible] = useState(true)
  const classes = classNames('alert', {
    [`alert-${type}`]: type

  })
  const customCloseP = customClose || <Icon icon="times" className="window-close" size='lg' />
  const handleClick = () => {
    setVisible(false)
    if (onClose) {
      onClose()
    }
  }
  return (
    <Transition
      in={visible}
      timeout={300}
      animation="zoom-in-left"
      wrapper
    >
      <div className={classes} data-testId="test-alert">
        {title ? <h4 className="alert-title">{title}</h4> : null}
        <p className="alert-message">{children}</p>
        {closable ? <i onClick={handleClick}>{customCloseP}</i> : null}
      </div>
    </Transition>
  )

}