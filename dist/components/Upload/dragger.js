import classNames from "classnames";
import React, { useState } from "react";
export default function Dragger(props) {
    var onFile = props.onFile, children = props.children;
    var _a = useState(false), dragOver = _a[0], setDragOver = _a[1];
    var handleDrag = function (e, over) {
        e.preventDefault();
        setDragOver(over);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        setDragOver(false);
        onFile(e.dataTransfer.files);
    };
    var classes = classNames('viking-uploader-dragger', {
        'is-dragover': dragOver
    });
    return (React.createElement("div", { className: classes, onDragOver: function (e) { handleDrag(e, true); }, onDragLeave: function (e) { handleDrag(e, false); }, onDrop: handleDrop }, children));
}
