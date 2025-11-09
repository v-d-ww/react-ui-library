import React from 'react';
import { UploadFile } from './upload';
export interface uploadListProps {
    UploadList: UploadFile[];
    onRemove: (_file: UploadFile) => void;
}
export default function UploadList(props: uploadListProps): React.JSX.Element;
