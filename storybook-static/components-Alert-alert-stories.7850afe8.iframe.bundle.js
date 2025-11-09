"use strict";(self.webpackChunkv_d_ww_react_ui_library=self.webpackChunkv_d_ww_react_ui_library||[]).push([[631],{"./src/components/Alert/alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertTypes:()=>AlertTypes,ClosableAndNonClosable:()=>ClosableAndNonClosable,DefaultAlert:()=>DefaultAlert,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_stories});var dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__("./src/components/Icon/Icon.tsx");let components_Transition=__webpack_require__("./src/components/Transition/transition.tsx").A;try{Transition.displayName="Transition",Transition.__docgenInfo={description:"",displayName:"Transition",props:{classNames:{defaultValue:null,description:`The animation \`classNames\` applied to the component as it enters or exits.
A single name can be provided and it will be suffixed for each stage: e.g.

\`classNames="fade"\` applies \`fade-enter\`, \`fade-enter-active\`,
\`fade-exit\`, \`fade-exit-active\`, \`fade-appear\`, and \`fade-appear-active\`.

Each individual classNames can also be specified independently like:

\`\`\`js
classNames={{
  appear: 'my-appear',
  appearActive: 'my-appear-active',
  appearDone: 'my-appear-done',
  enter: 'my-enter',
  enterActive: 'my-enter-active',
  enterDone: 'my-enter-done',
  exit: 'my-exit',
  exitActive: 'my-exit-active',
  exitDone: 'my-exit-done'
}}
\`\`\``,name:"classNames",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"},{value:"CSSTransitionClassNames"}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"false"},{value:"true"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Transition/index.tsx#Transition"]={docgenInfo:Transition.__docgenInfo,name:"Transition",path:"src/components/Transition/index.tsx#Transition"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function Alert(props){var title=props.title,_props_closable=props.closable,customClose=props.customClose,onClose=props.onClose,children=props.children,_props_type=props.type,type=void 0===_props_type?"primary":_props_type,_useState=_sliced_to_array((0,react.useState)(!0),2),visible=_useState[0],setVisible=_useState[1],classes=classnames_default()("alert",_define_property({},"alert-".concat(type),type)),customCloseP=customClose||react.createElement(Icon.A,{icon:"times",className:"window-close",size:"lg"});return react.createElement(components_Transition,{in:visible,timeout:300,animation:"zoom-in-left",wrapper:!0},react.createElement("div",{className:classes,"data-testid":"test-alert"},title?react.createElement("h4",{className:"alert-title"},title):null,react.createElement("p",{className:"alert-message"},children),void 0===_props_closable||_props_closable?react.createElement("i",{onClick:function(){setVisible(!1),onClose&&onClose()}},customCloseP):null))}try{alert.displayName="alert",alert.__docgenInfo={description:"",displayName:"alert",props:{title:{defaultValue:null,description:"标题",name:"title",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"}]}},closable:{defaultValue:null,description:"是否显示关闭图标",name:"closable",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"false"},{value:"true"}]}},customClose:{defaultValue:null,description:"the close icon",name:"customClose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"}]}},onClose:{defaultValue:null,description:"关闭alert时触发的事件",name:"onClose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"() => void"}]}},children:{defaultValue:null,description:"描述",name:"children",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"null"},{value:"string"},{value:"number"},{value:"false"},{value:"true"},{value:"ReactElement<any, string | JSXElementConstructor<any>>"},{value:"Iterable<ReactNode>"},{value:"ReactPortal"}]}},type:{defaultValue:null,description:"类型 四种可选 针对四种不同的场景",name:"type",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'},{value:'"default"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/alert.tsx#alert"]={docgenInfo:alert.__docgenInfo,name:"alert",path:"src/components/Alert/alert.tsx#alert"})}catch(__react_docgen_typescript_loader_error){}let alert_stories={title:"Alter Component",component:Alert,tags:["autodocs"],argTypes:{type:{control:"select",options:["success","primary","warning","danger","default"],description:"Alert 的类型，针对不同的场景",table:{type:{summary:"success | primary | warning | danger | default"},defaultValue:{summary:"primary"}}},title:{control:"text",description:"Alert 的标题",table:{type:{summary:"string"}}},closable:{control:"boolean",description:"是否显示关闭图标",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},customClose:{control:"text",description:"自定义关闭图标",table:{type:{summary:"string"}}},onClose:{action:"onClose",description:"关闭 Alert 时触发的事件",table:{type:{summary:"() => void"}}}},parameters:{docs:{description:{component:"Alert 组件用于显示重要的提示信息，支持多种类型和关闭功能。组件带有淡入动画效果。"}}}};var DefaultAlert={args:{type:"primary",title:"默认 Alert",closable:!0,children:"这是默认的 Alert 组件",onClose:(0,dist.XI)("onClose")}},AlertTypes={render:function(){return react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},react.createElement(Alert,{type:"success",closable:!0,title:"成功提示",onClose:(0,dist.XI)("onClose")},"操作成功完成！"),react.createElement(Alert,{type:"primary",closable:!0,title:"主要提示",onClose:(0,dist.XI)("onClose")},"这是一条主要信息。"),react.createElement(Alert,{type:"warning",closable:!0,title:"警告提示",onClose:(0,dist.XI)("onClose")},"请注意这个警告信息。"),react.createElement(Alert,{type:"danger",closable:!0,title:"危险提示",onClose:(0,dist.XI)("onClose")},"这是一个危险操作，请谨慎处理！"),react.createElement(Alert,{type:"default",closable:!0,title:"默认提示",onClose:(0,dist.XI)("onClose")},"这是一条默认信息。"))}},ClosableAndNonClosable={render:function(){return react.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},react.createElement(Alert,{type:"primary",closable:!0,title:"可关闭的 Alert"},"这个 Alert 可以关闭，点击右上角的关闭图标即可。"),react.createElement(Alert,{type:"warning",closable:!1,title:"不可关闭的 Alert"},"这个 Alert 不能关闭，没有关闭图标。"))},parameters:{docs:{inlineStories:!0,description:{story:"展示可关闭（closable=true）和不可关闭（closable=false）的 Alert。"}}}};DefaultAlert.parameters={...DefaultAlert.parameters,docs:{...DefaultAlert.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    title: '默认 Alert',
    closable: true,
    children: '这是默认的 Alert 组件',
    onClose: action('onClose')
  }
}`,...DefaultAlert.parameters?.docs?.source}}},AlertTypes.parameters={...AlertTypes.parameters,docs:{...AlertTypes.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>\r
        <Alert type="success" closable title="成功提示" onClose={action('onClose')}>\r
          操作成功完成！\r
        </Alert>\r
        <Alert type="primary" closable title="主要提示" onClose={action('onClose')}>\r
          这是一条主要信息。\r
        </Alert>\r
        <Alert type="warning" closable title="警告提示" onClose={action('onClose')}>\r
          请注意这个警告信息。\r
        </Alert>\r
        <Alert type="danger" closable title="危险提示" onClose={action('onClose')}>\r
          这是一个危险操作，请谨慎处理！\r
        </Alert>\r
        <Alert type="default" closable title="默认提示" onClose={action('onClose')}>\r
          这是一条默认信息。\r
        </Alert>\r
      </div>;
  }
}`,...AlertTypes.parameters?.docs?.source}}},ClosableAndNonClosable.parameters={...ClosableAndNonClosable.parameters,docs:{...ClosableAndNonClosable.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>\r
      <Alert type="primary" closable title="可关闭的 Alert">\r
        这个 Alert 可以关闭，点击右上角的关闭图标即可。\r
      </Alert>\r
      <Alert type="warning" closable={false} title="不可关闭的 Alert">\r
        这个 Alert 不能关闭，没有关闭图标。\r
      </Alert>\r
    </div>,
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示可关闭（closable=true）和不可关闭（closable=false）的 Alert。'
      }
    }
  }
}`,...ClosableAndNonClosable.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultAlert","AlertTypes","ClosableAndNonClosable"]},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Icon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@fortawesome/fontawesome-svg-core/index.mjs"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.mjs"),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/dist/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Icon(props){var className=props.className,theme=props.theme,resetProps=_object_without_properties(props,["className","theme"]),classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("viking-icon",className,_define_property({},"icon-".concat(theme),theme));return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.gc,_object_spread({className:classes},resetProps))}_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__.Yv.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.X7I);try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Transition/transition.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Transition1});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_transition_group__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function Transition1(props){var children=props.children,classNames=props.classNames,animation=props.animation,wrapper=props.wrapper,_props_unmountOnExit=props.unmountOnExit,_props_appear=props.appear,restProps=_object_without_properties(props,["children","classNames","animation","wrapper","unmountOnExit","appear"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__.A,_object_spread({classNames:classNames||animation,unmountOnExit:void 0===_props_unmountOnExit||_props_unmountOnExit,appear:void 0===_props_appear||_props_appear,wrapper:wrapper},restProps),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,children))}try{transition.displayName="transition",transition.__docgenInfo={description:"",displayName:"transition",props:{classNames:{defaultValue:null,description:`The animation \`classNames\` applied to the component as it enters or exits.
A single name can be provided and it will be suffixed for each stage: e.g.

\`classNames="fade"\` applies \`fade-enter\`, \`fade-enter-active\`,
\`fade-exit\`, \`fade-exit-active\`, \`fade-appear\`, and \`fade-appear-active\`.

Each individual classNames can also be specified independently like:

\`\`\`js
classNames={{
  appear: 'my-appear',
  appearActive: 'my-appear-active',
  appearDone: 'my-appear-done',
  enter: 'my-enter',
  enterActive: 'my-enter-active',
  enterDone: 'my-enter-done',
  exit: 'my-exit',
  exitActive: 'my-exit-active',
  exitDone: 'my-exit-done'
}}
\`\`\``,name:"classNames",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"string"},{value:"CSSTransitionClassNames"}]}},animation:{defaultValue:null,description:"",name:"animation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"zoom-in-top"'},{value:'"zoom-in-left"'},{value:'"zoom-in-bottom"'},{value:'"zoom-in-right"'}]}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"false"},{value:"true"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Transition/transition.tsx#transition"]={docgenInfo:transition.__docgenInfo,name:"transition",path:"src/components/Transition/transition.tsx#transition"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Alert-alert-stories.7850afe8.iframe.bundle.js.map