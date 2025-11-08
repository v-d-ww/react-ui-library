import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import classNames from "classnames";

// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm'
// }
export type ButtonSize = 'lg' | 'sm';
// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link',
// }
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  /**设置 Button 的链接 */
  href?: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement> //a标签
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>
// 笔记
// 类型 A：有属性 name
// type A = { name: string };
// 类型 B：有属性 age
// type B = { age: number };
// 交叉类型 C：同时有 A 和 B 的所有属性
// type C = A & B; 
// C 的结构等价于：{ name: string; age: number }

// 原始类型：name 和 age 都是必填的
// type Person = { name: string; age: number };
// Partial 处理后：name 和 age 都变成可选（带 ?）
// type PartialPerson = Partial<Person>;
// 等价于：{ name?: string; age?: number }


export default function Button({
  className,
  disabled = false,
  size,
  btnType = 'default',
  children,
  href,
  ...restProps//比如onClick
}: ButtonProps) {
  // 中括号 [] 包裹的表达式会被当作对象的属性名 等价于"btn-primary": true 
  // classNames 动态拼接类名
  const classes = classNames('btn', className, {//用户自定义className
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === 'link' && disabled
  })
  if (btnType === 'link' && href)
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >{children}
      </a>
    )
  else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button >
    )
  }
}