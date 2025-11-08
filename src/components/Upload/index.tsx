import Dragger, { DraggerProps } from "./dragger";
import Upload, { UploadProps } from "./upload";
import UploadList, { uploadListProps } from "./UploadList";
import { ReactNode } from 'react'
type IUploadComponent = ((props: UploadProps) => ReactNode) & {
  List: (props: uploadListProps) => ReactNode;  // 子组件 Item 的类型
  Dragger: (props: DraggerProps) => ReactNode;  // 子组件 SubMenu 的类型
};
const TransUpload = Upload as IUploadComponent
TransUpload.List = UploadList
TransUpload.Dragger = Dragger
export default TransUpload