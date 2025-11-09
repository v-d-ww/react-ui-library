import classNames from "classnames";
import { MenuContext } from "./menu";
import { useContext } from "react";
import React from 'react';
export default function MenuItem(props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children;
    var context = useContext(MenuContext);
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && index !== undefined) {
            context.onSelect(index);
        }
    };
    return (React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
}
MenuItem.displayName = 'MenuItem';
