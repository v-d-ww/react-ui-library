import { DraggerProps } from "./dragger";
import { UploadProps } from "./upload";
import { uploadListProps } from "./UploadList";
import { ReactNode } from 'react';
type IUploadComponent = ((props: UploadProps) => ReactNode) & {
    List: (props: uploadListProps) => ReactNode;
    Dragger: (props: DraggerProps) => ReactNode;
};
declare const TransUpload: IUploadComponent;
export default TransUpload;
