import React, { ReactNode } from "react";
export interface DraggerProps {
    onFile: (file: FileList) => void;
    children?: ReactNode;
}
export default function Dragger(props: DraggerProps): React.JSX.Element;
