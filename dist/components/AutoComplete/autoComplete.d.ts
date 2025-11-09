import { InputProps } from "../Input/input";
import React, { ReactElement } from "react";
interface DataSourceObject {
    value: string;
}
export type DataSourceType<T = {}> = T & DataSourceObject;
export interface AutoCompleteProps<T = {}> extends Omit<InputProps, 'onSelect'> {
    /** 返回推荐结果 */
    fetchSuggestions: (str: string) => DataSourceType<T>[] | Promise<DataSourceType<T>[]>;
    /** 选择选中某一项 */
    onSelect?: (item: DataSourceType<T>) => void;
    /** 自定义渲染样式 */
    renderOption?: (item: DataSourceType<T>) => ReactElement;
}
/**
 * 页面中最常用的的输入框元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { AutoComplete } from 'vikingship-ui'
 * ~~~
 */
export default function AutoComplete<T = {}>(props: AutoCompleteProps<T>): React.JSX.Element;
export {};
