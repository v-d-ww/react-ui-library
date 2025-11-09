import React, { useState } from 'react';
import classNames from 'classnames';
export default function Tabs(props) {
    var _a = props.defaultIndex, defaultIndex = _a === void 0 ? 0 : _a, _b = props.styleType, styleType = _b === void 0 ? 'underline' : _b, onSelect = props.onSelect, className = props.className, children = props.children;
    var _c = useState(defaultIndex), activeIndex = _c[0], setActiveIndex = _c[1];
    var classes = classNames('tabs-nav', className, {
        'tabs-underline': styleType === 'underline',
        'tabs-outline': styleType === 'outline'
    });
    var handleClick = function (index, disabled) {
        if (disabled)
            return;
        setActiveIndex(index);
        if (typeof onSelect === 'function') {
            console.log('用户点击触发 onSelect，参数：', index);
            onSelect(index);
        }
    };
    var childrenComponent = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var tabsLabelClasses = classNames('tabs-label', {
                'tabs-label-active': activeIndex === index,
                'tabs-label-disabled': childElement.props.disabled
            });
            var isDisabled = childElement.props.disabled || false;
            var handleChildClick = function () {
                handleClick(index, isDisabled);
            };
            return (React.createElement("li", { key: index, className: tabsLabelClasses, onClick: handleChildClick }, childElement.props.label));
        });
    };
    var renderChildren = function () {
        return (React.Children.map(children, function (child, index) {
            var childElement = child;
            // const {displayName} = childElement.type
            var displayName = childElement.type.displayName || '';
            if (displayName === 'TabsItem') {
                return React.cloneElement(childElement, {
                    isActive: activeIndex === index
                });
            }
            else {
                console.error('不是tabsItem类型');
            }
        }));
    };
    return (React.createElement("div", null,
        React.createElement("nav", { className: classes },
            React.createElement("ul", { className: "tabs-ul" }, childrenComponent())),
        renderChildren()));
}
