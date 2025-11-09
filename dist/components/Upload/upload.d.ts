import React, { ReactNode } from "react";
export interface UploadProps {
    action: string;
    defaultUploadList?: UploadFile[];
    beforeUpload?: (file: File) => boolean | Promise<File>;
    onProgress?: (percentage: number, file: UploadFile) => void;
    onSuccess?: (percentage: number, file: UploadFile) => void;
    onError?: (percentage: number, file: UploadFile) => void;
    onChange?: (file: UploadFile) => void;
    onRemove?: (_file: UploadFile) => void;
    headers?: {
        [key: string]: any;
    };
    name?: string;
    data?: {
        [key: string]: any;
    };
    withCredentials?: boolean;
    accept?: string;
    multiple?: boolean;
    children?: ReactNode;
    drag?: boolean;
}
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent: number;
    raw?: File;
    response?: any;
    error?: any;
}
export default function Upload(props: UploadProps): React.JSX.Element;
