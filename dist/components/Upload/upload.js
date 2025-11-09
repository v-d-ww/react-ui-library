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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import UploadList from "./UploadList";
import Dragger from "./dragger";
export default function Upload(props) {
    var action = props.action, defaultUploadList = props.defaultUploadList, beforeUpload = props.beforeUpload, onProgress = props.onProgress, onSuccess = props.onSuccess, onError = props.onError, onChange = props.onChange, onRemove = props.onRemove, _a = props.name, name = _a === void 0 ? 'file' : _a, headers = props.headers, data = props.data, withCredentials = props.withCredentials, accept = props.accept, multiple = props.multiple, children = props.children, drag = props.drag;
    var fileInput = useRef(null);
    var _b = useState(defaultUploadList || []), fileList = _b[0], setFileList = _b[1];
    var updateFileList = function (updateFile, updateObj) {
        setFileList(function (prevList) {
            return prevList.map(function (file) {
                if (file.uid === updateFile.uid) {
                    return __assign(__assign({}, file), updateObj);
                }
                else {
                    return file;
                }
            });
        });
    };
    useEffect(function () {
        console.log('fileList 已更新:', fileList);
    }, [fileList]);
    var handleClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    var post = function (file) {
        var _file = {
            uid: Date.now() + 'upload-file',
            status: 'ready',
            name: file.name,
            size: file.size,
            percent: 0,
            raw: file
        };
        // setFileList([_file, ...fileList])
        setFileList(function (prevList) {
            return __spreadArray([_file], prevList, true);
        });
        var formData = new FormData();
        formData.append(name, file);
        if (data) {
            Object.keys(data).forEach(function (key) {
                formData.append(key, data[key]);
            });
        }
        axios.post(action, formData, {
            headers: __assign(__assign({}, headers), { 'Content-Type': 'multipart/form-data' }),
            withCredentials: withCredentials,
            onUploadProgress: function (e) {
                if (e.total) {
                    var percentage = Math.round((e.loaded * 100) / e.total) || 0;
                    if (percentage < 100) {
                        // console.log(fileList);
                        // prevList更新频率快
                        // setFileList((prevList) => {
                        //   console.log(prevList);
                        //   return prevList
                        // })
                        updateFileList(_file, { percent: percentage, status: 'uploading' });
                        if (onProgress) {
                            onProgress(percentage, _file);
                        }
                    }
                }
            }
        }).then(function (res) {
            if (onSuccess) {
                onSuccess(res.data, _file);
                updateFileList(_file, { status: 'success', response: res.data });
            }
            if (onChange) {
                onChange(_file);
            }
        }).catch(function (err) {
            console.error(err);
            if (onError) {
                onError(err, _file);
                updateFileList(_file, { status: 'error', response: err });
            }
            if (onChange) {
                onChange(_file);
            }
        });
    };
    var UploadFiles = function (files) {
        var postFiles = Array.from(files);
        postFiles.forEach(function (file) {
            if (!beforeUpload) {
                post(file);
            }
            else {
                var res = beforeUpload(file);
                if (res && res instanceof Promise) {
                    res.then(function (processedFile) {
                        post(processedFile);
                    });
                }
                else if (res === true) {
                    post(file);
                }
            }
        });
    };
    var handleChange = function (e) {
        var files = e.target.files;
        if (!files)
            return;
        UploadFiles(files);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };
    var handleRemove = function (item) {
        setFileList(function (prevList) {
            return prevList.filter(function (file) { return file.uid !== item.uid; });
        });
        if (onRemove) {
            onRemove(item);
        }
    };
    return (React.createElement("div", { className: "viking-upload-component" },
        React.createElement("div", { className: "viking-upload-input", style: { display: 'inline-block' }, onClick: handleClick }, drag ? React.createElement(Dragger, { onFile: function (files) { UploadFiles(files); } }, children) : children),
        React.createElement("input", { className: "viking-file-input", style: { display: 'none' }, type: "file", ref: fileInput, onChange: handleChange, accept: accept, multiple: multiple, "data-testid": "test-input" }),
        React.createElement(UploadList, { UploadList: fileList, onRemove: handleRemove })));
}
