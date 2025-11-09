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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import Icon from "../Icon/Icon";
import Input from "../Input/input";
import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import classNames from "classnames";
import { useClickOutside } from "../../hooks/useClickOutside";
library.add(fas);
/**
 * 页面中最常用的的输入框元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { AutoComplete } from 'vikingship-ui'
 * ~~~
 */
export default function AutoComplete(props) {
    var fetchSuggestions = props.fetchSuggestions, onSelect = props.onSelect, value = props.value, renderOption = props.renderOption, restProps = __rest(props, ["fetchSuggestions", "onSelect", "value", "renderOption"]);
    var _a = useState(''), inputValue = _a[0], setInputValue = _a[1];
    var _b = useState(false), loading = _b[0], setLoading = _b[1];
    var _c = useState([]), suggestions = _c[0], setSuggestions = _c[1];
    var _d = useState(-1), highIndex = _d[0], setHighIndex = _d[1];
    var DebounceValue = useDebounce(inputValue, 500);
    var triggerSearch = useRef(false);
    var componentRef = useRef(null);
    useClickOutside(componentRef, function () { return setSuggestions([]); });
    useEffect(function () {
        if (DebounceValue && triggerSearch.current) {
            var res = fetchSuggestions(DebounceValue);
            if (res instanceof Promise) {
                setLoading(true);
                res.then(function (data) {
                    setLoading(false);
                    setSuggestions(data);
                });
            }
            else
                setSuggestions(res);
        }
        else {
            setSuggestions([]);
        }
        setHighIndex(-1);
    }, [DebounceValue]);
    var handleChange = function (e) {
        var val = e.target.value.trim();
        setInputValue(val);
        triggerSearch.current = true;
    };
    var handleSelect = function (item) {
        setInputValue(item.value);
        setSuggestions([]);
        if (onSelect) {
            onSelect(item);
        }
        triggerSearch.current = false;
    };
    var handleLiClick = function (item) {
        return function () {
            handleSelect(item);
        };
    };
    var highlight = function (index) {
        if (index < 0)
            index = 0;
        else if (index >= suggestions.length - 1)
            index = suggestions.length - 1;
        setHighIndex(index);
    };
    var setShowDropdown = function () {
        setInputValue('');
        setSuggestions([]);
    };
    var handleKeyDown = function (e) {
        switch (e.key) {
            case 'Enter':
                if (suggestions[highIndex]) {
                    handleSelect(suggestions[highIndex]);
                }
                break;
            case 'ArrowUp':
                highlight(highIndex - 1);
                console.log(highIndex);
                break;
            case 'ArrowDown':
                highlight(highIndex + 1);
                break;
            case 'Escape':
                setShowDropdown();
                break;
            default:
                break;
        }
    };
    var renderTemplate = function (item) {
        if (renderOption) {
            return renderOption(item);
        }
        return item.value;
    };
    var generateDropdown = function () {
        return (React.createElement("ul", { className: "viking-suggestion-list" }, suggestions.map(function (item, index) {
            var cname = classNames('suggestion-item', {
                'is-active': index === highIndex
            });
            return (
            // <li key={index} onClick={() => handleSelect(item)}>
            React.createElement("li", { key: index, onClick: handleLiClick(item), className: cname, "data-testid": 'test-suggestion' }, renderTemplate(item)));
        })));
    };
    var renderDrop = function () {
        if (loading)
            return (React.createElement("ul", { className: "viking-suggestion-list" },
                " ",
                React.createElement("div", { className: "suggestions-loading-icon" },
                    " ",
                    React.createElement(Icon, { icon: "spinner", spin: true }))));
        else if (inputValue) {
            return generateDropdown();
        }
    };
    return (React.createElement("div", { className: "viking-auto-complete", ref: componentRef },
        React.createElement(Input, __assign({ value: inputValue, onChange: handleChange, onKeyDown: handleKeyDown }, restProps)),
        renderDrop()));
}
