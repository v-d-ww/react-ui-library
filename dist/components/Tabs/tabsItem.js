import React from 'react';
import classNames from 'classnames';
export default function TabsItem(props) {
    var label = props.label, className = props.className, _a = props.isActive, isActive = _a === void 0 ? false : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, children = props.children;
    var classes = classNames('tabs-content', className, {
        'tabs-content-active': isActive
    });
    return (React.createElement("div", { key: label, className: classes }, children));
}
TabsItem.displayName = 'TabsItem';
