(self.webpackChunkv_d_ww_react_ui_library=self.webpackChunkv_d_ww_react_ui_library||[]).push([[161],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof a&&a&&findProto(a,proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name))&&"function"==typeof a.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&view?.constructor.name==="Window"&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}return a};function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find(render=>"playing"===render.phase||"rendering"===render.phase);if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(deprecated)console.warn(error);else throw error}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id="object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2),serializedArgs=args.map(serializeArg),actionDisplayToEmit={id,count:0,data:{name,args:args.length>1?serializedArgs:serializedArgs[0]},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit("storybook/actions/action-event",actionDisplayToEmit)};return handler.isAction=!0,handler}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonTypes:()=>ButtonTypes,ButtonWithSize:()=>ButtonWithSize,DefaultButton:()=>DefaultButton,LinkButton:()=>LinkButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/button.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js");let __WEBPACK_DEFAULT_EXPORT__={title:"Button Component",component:_button__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],args:{onClick:function(){console.log("button clicked"),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("button-clicked")()}},argTypes:{btnType:{control:"select",options:["primary","default","danger","link"],description:"设置 Button 的类型"},size:{control:"select",options:["lg","sm"],description:"设置 Button 的尺寸"},disabled:{control:"boolean",description:"设置 Button 的禁用"},href:{control:"text",description:"设置 Button 的链接（当 btnType 为 link 时生效）"},className:{control:"text",description:"自定义样式类名"}},parameters:{docs:{description:{component:"按钮组件，支持多种类型、尺寸和状态。当 `btnType` 为 `link` 且提供了 `href` 时，会渲染为 `<a>` 标签。"}}}};var DefaultButton={args:{children:"Default button",disabled:!1,size:"lg",btnType:"default"},render:function(args){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,args)}},ButtonWithSize={render:function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{size:"lg"},"大按钮 (Large)"),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,null,"默认按钮 (Default)"),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{size:"sm"},"小按钮 (Small)"))},parameters:{docs:{inlineStories:!0,description:{story:"展示不同尺寸的按钮"}}}},ButtonTypes={render:function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"}},react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{btnType:"primary"},"Primary"),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{btnType:"default"},"Default"),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{btnType:"danger"},"Danger"),react__WEBPACK_IMPORTED_MODULE_2__.createElement(_button__WEBPACK_IMPORTED_MODULE_1__.A,{btnType:"link",href:"https://example.com"},"Link"))},parameters:{docs:{inlineStories:!0,description:{story:"展示不同类型的按钮：主要按钮、默认按钮、危险按钮和链接按钮。"}}}},LinkButton={args:{btnType:"link",href:"https://example.com",children:"访问示例网站",onClick:function(e){e.preventDefault(),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("link-clicked")()}},parameters:{docs:{description:{story:"当 `btnType` 为 `link` 且提供了 `href` 时，按钮会渲染为 `<a>` 标签。"}}}};DefaultButton.parameters={...DefaultButton.parameters,docs:{...DefaultButton.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default button',
    disabled: false,
    size: 'lg',
    btnType: 'default'
  },
  render: args => {
    return <Button {...args}></Button>;
  }
}`,...DefaultButton.parameters?.docs?.source}}},ButtonWithSize.parameters={...ButtonWithSize.parameters,docs:{...ButtonWithSize.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button size='lg'>大按钮 (Large)</Button>\r
      <Button>默认按钮 (Default)</Button>\r
      <Button size='sm'>小按钮 (Small)</Button>\r
    </div>,
  // 替代故事级别的 info 参数
  parameters: {
    docs: {
      inlineStories: true,
      // 这个特定故事使用非内联模式
      description: {
        story: '展示不同尺寸的按钮'
      }
    }
  }
}`,...ButtonWithSize.parameters?.docs?.source}}},ButtonTypes.parameters={...ButtonTypes.parameters,docs:{...ButtonTypes.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button btnType='primary'>Primary</Button>\r
      <Button btnType='default'>Default</Button>\r
      <Button btnType='danger'>Danger</Button>\r
      <Button btnType='link' href='https://example.com'>Link</Button>\r
    </div>,
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同类型的按钮：主要按钮、默认按钮、危险按钮和链接按钮。'
      }
    }
  }
}`,...ButtonTypes.parameters?.docs?.source}}},LinkButton.parameters={...LinkButton.parameters,docs:{...LinkButton.parameters?.docs,source:{originalSource:`{
  args: {
    btnType: 'link',
    href: 'https://example.com',
    children: '访问示例网站',
    onClick: e => {
      e.preventDefault();
      action('link-clicked')();
    }
  },
  parameters: {
    docs: {
      description: {
        story: '当 \`btnType\` 为 \`link\` 且提供了 \`href\` 时，按钮会渲染为 \`<a>\` 标签。'
      }
    }
  }
}`,...LinkButton.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultButton","ButtonWithSize","ButtonTypes","LinkButton"]},"./src/components/Button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Button(_param){var _obj,className=_param.className,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,size=_param.size,_param_btnType=_param.btnType,btnType=void 0===_param_btnType?"default":_param_btnType,children=_param.children,href=_param.href,restProps=_object_without_properties(_param,["className","disabled","size","btnType","children","href"]),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("btn",className,(_define_property(_obj={},"btn-".concat(btnType),btnType),_define_property(_obj,"btn-".concat(size),size),_define_property(_obj,"disabled","link"===btnType&&disabled),_obj));return"link"===btnType&&href?react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",_object_spread({className:classes,href:href},restProps),children):react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_object_spread({className:classes,disabled:disabled},restProps),children)}try{button.displayName="button",button.__docgenInfo={description:"",displayName:"button",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"}]}},disabled:{defaultValue:{value:"false"},description:"设置 Button 的禁用",name:"disabled",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"false"},{value:"true"}]}},size:{defaultValue:null,description:"设置 Button 的尺寸",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"lg"'},{value:'"sm"'}]}},btnType:{defaultValue:{value:"default"},description:"设置 Button 的类型",name:"btnType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"danger"'},{value:'"default"'},{value:'"link"'}]}},href:{defaultValue:null,description:"设置 Button 的链接",name:"href",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/button.tsx#button"]={docgenInfo:button.__docgenInfo,name:"button",path:"src/components/Button/button.tsx#button"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Button-button-stories.226f1d22.iframe.bundle.js.map