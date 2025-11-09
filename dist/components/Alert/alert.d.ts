import React from 'react';
export type AlertType = 'success' | 'primary' | 'warning' | 'danger' | 'default';
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
export default function Alert(props: AlertProps): React.JSX.Element;
