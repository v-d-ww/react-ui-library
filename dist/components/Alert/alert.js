import classNames from "classnames";
import { useState } from "react";
import Icon from "../Icon/Icon";
import Transition from "../Transition";
import React from 'react';
export default function Alert(props) {
    var _a;
    var title = props.title, _b = props.closable, closable = _b === void 0 ? true : _b, customClose = props.customClose, onClose = props.onClose, children = props.children, _c = props.type, type = _c === void 0 ? 'primary' : _c;
    var _d = useState(true), visible = _d[0], setVisible = _d[1];
    var classes = classNames('alert', (_a = {},
        _a["alert-".concat(type)] = type,
        _a));
    var customCloseP = customClose || React.createElement(Icon, { icon: "times", className: "window-close", size: 'lg' });
    var handleClick = function () {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };
    return (React.createElement(Transition, { in: visible, timeout: 300, animation: "zoom-in-left", wrapper: true },
        React.createElement("div", { className: classes, "data-testId": "test-alert" },
            title ? React.createElement("h4", { className: "alert-title" }, title) : null,
            React.createElement("p", { className: "alert-message" }, children),
            closable ? React.createElement("i", { onClick: handleClick }, customCloseP) : null)));
}
