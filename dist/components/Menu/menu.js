import classNames from "classnames";
import React, { useState, createContext } from "react";
export var MenuContext = createContext({ index: '0' });
export default function Menu(props) {
    var className = props.className, _a = props.mode, mode = _a === void 0 ? 'horizontal' : _a, style = props.style, children = props.children, _b = props.defaultIndex, defaultIndex = _b === void 0 ? '0' : _b, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _c = useState(defaultIndex), currentActive = _c[0], setActive = _c[1];
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    });
    var renderChildren = function (children) { return React.Children.map(children, function (child, index) {
        var childElement = child;
        var displayName = childElement.type.displayName || '';
        // const {displayName} = childElement.type
        if (displayName === 'MenuItem' || displayName === 'SubMenu') {
            return React.cloneElement(childElement, {
                index: index.toString()
            });
        }
        else {
            console.error("Warning: Menu has a child which is not a MenuItem component");
        }
    }); };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren(children))));
}
