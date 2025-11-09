var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import classNames from "classnames";
import React, { useContext, useState } from "react";
import { MenuContext } from "./menu";
import Icon from "../Icon/Icon";
import Transition from "../Transition/transition";
export default function SubMenu(props) {
    var index = props.index, className = props.className, title = props.title, children = props.children;
    var context = useContext(MenuContext);
    var openedSubMenus = context.defaultOpenSubMenus || [];
    var isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false;
    var _a = useState(isOpened), subOpen = _a[0], setOpen = _a[1];
    var classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-vertical': context.mode === 'vertical',
        'is-opened': subOpen
    });
    var handleClick = function (e) {
        e.preventDefault();
        setOpen(!subOpen);
    };
    // 不是移入即打开，而是停留 300ms 再打开
    var timer;
    var handleMouse = function (e, toggle) {
        clearTimeout(timer);
        e.preventDefault();
        timer = setTimeout(function () {
            setOpen(toggle);
        }, 300);
    };
    var clickEvents = context.mode === 'vertical' ? {
        onClick: handleClick
    } : {};
    var hoverEvents = context.mode === 'horizontal' ? {
        onMouseEnter: function (e) { handleMouse(e, true); },
        onMouseLeave: function (e) { handleMouse(e, false); }
    } : {};
    var subMenuClasses = classNames('viking-submenu', {
        'menu-opened': subOpen
    });
    var renderChildren = function (children) {
        return React.Children.map(children, function (child, i) {
            var childElement = child;
            var displayName = childElement.type.displayName || '';
            if (displayName === 'MenuItem') {
                return React.cloneElement(childElement, { index: "".concat(index, "-").concat(i) });
            }
        });
    };
    return (React.createElement("li", __assign({ className: classes }, hoverEvents, { "data-testid": "submenu-container-".concat(index) }),
        React.createElement("div", __assign({ className: "submenu-title" }, clickEvents),
            title,
            React.createElement(Icon, { icon: 'angle-left', className: "arrow-icon" })),
        React.createElement(Transition, { in: subOpen, timeout: 300, animation: 'zoom-in-top' },
            React.createElement("ul", { className: subMenuClasses, "data-testid": "submenu-ul" }, renderChildren(children)))));
}
SubMenu.displayName = 'SubMenu';
