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
import React from 'react';
import classNames from "classnames";
// 笔记
// 类型 A：有属性 name
// type A = { name: string };
// 类型 B：有属性 age
// type B = { age: number };
// 交叉类型 C：同时有 A 和 B 的所有属性
// type C = A & B; 
// C 的结构等价于：{ name: string; age: number }
// 原始类型：name 和 age 都是必填的
// type Person = { name: string; age: number };
// Partial 处理后：name 和 age 都变成可选（带 ?）
// type PartialPerson = Partial<Person>;
// 等价于：{ name?: string; age?: number }
export default function Button(_a) {
    var _b;
    var className = _a.className, _c = _a.disabled, disabled = _c === void 0 ? false : _c, size = _a.size, _d = _a.btnType, btnType = _d === void 0 ? 'default' : _d, children = _a.children, href = _a.href, restProps = __rest(_a, ["className", "disabled", "size", "btnType", "children", "href"]) //比如onClick
    ;
    // 中括号 [] 包裹的表达式会被当作对象的属性名 等价于"btn-primary": true 
    // classNames 动态拼接类名
    var classes = classNames('btn', className, (_b = {},
        _b["btn-".concat(btnType)] = btnType,
        _b["btn-".concat(size)] = size,
        _b.disabled = btnType === 'link' && disabled,
        _b));
    if (btnType === 'link' && href)
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
}
