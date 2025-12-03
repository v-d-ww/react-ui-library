"use strict";(self.webpackChunkv_d_ww_react_ui_library=self.webpackChunkv_d_ww_react_ui_library||[]).push([[983],{"./src/components/Progress/progress.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultProgress:()=>DefaultProgress,DifferentThemes:()=>DifferentThemes,StrokeHeightProcess:()=>StrokeHeightProcess,WithoutTextProcess:()=>WithoutTextProcess,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_progress__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Progress/progress.tsx");let __WEBPACK_DEFAULT_EXPORT__={title:"Progress Component",component:_progress__WEBPACK_IMPORTED_MODULE_1__.A,tags:["autodocs"],argTypes:{percent:{control:{type:"range",min:0,max:100,step:1},description:"当前百分比（0-100）",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},strokeHeight:{control:{type:"range",min:5,max:100,step:5},description:"进度条高度（像素）",table:{type:{summary:"number"},defaultValue:{summary:"15"}}},showText:{control:"boolean",description:"是否显示百分比数字",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},theme:{control:"select",options:["primary","secondary","success","info","warning","danger","light","dark"],description:"进度条主题颜色",table:{type:{summary:"primary | secondary | success | info | warning | danger | light | dark"},defaultValue:{summary:"primary"}}},styles:{control:"object",description:"额外的样式",table:{type:{summary:"React.CSSProperties"}}}},parameters:{docs:{description:{component:"Progress 进度条组件，用于展示操作进度，支持自定义高度、主题颜色和是否显示百分比。"}}}};var DefaultProgress={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:20}))}},WithoutTextProcess={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:50,showText:!1}))}},StrokeHeightProcess={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"小高度 (10px)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:50,strokeHeight:10})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"默认高度 (15px)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:50,strokeHeight:15})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"中等高度 (30px)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:50,strokeHeight:30})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"大高度 (50px)"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:50,strokeHeight:50})))},parameters:{docs:{inlineStories:!0,description:{story:"展示不同高度的进度条。"}}}},DifferentThemes={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Primary（主要）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"primary"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Secondary（次要）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"secondary"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Success（成功）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"success"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Info（信息）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"info"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Warning（警告）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"warning"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Danger（危险）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"danger"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Light（浅色）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"light"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("label",{style:{display:"block",marginBottom:"8px",fontSize:"12px",color:"#666"}},"Dark（深色）"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_progress__WEBPACK_IMPORTED_MODULE_1__.A,{percent:60,theme:"dark"})))},parameters:{docs:{inlineStories:!0,description:{story:"展示不同主题颜色的进度条。"}}}};DefaultProgress.parameters={...DefaultProgress.parameters,docs:{...DefaultProgress.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Progress percent={20} />
      </>;
  }
}`,...DefaultProgress.parameters?.docs?.source}}},WithoutTextProcess.parameters={...WithoutTextProcess.parameters,docs:{...WithoutTextProcess.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <>
        <Progress percent={50} showText={false} />
      </>;
  }
}`,...WithoutTextProcess.parameters?.docs?.source}}},StrokeHeightProcess.parameters={...StrokeHeightProcess.parameters,docs:{...StrokeHeightProcess.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '400px'
    }}>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            小高度 (10px)
          </label>
          <Progress percent={50} strokeHeight={10} />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            默认高度 (15px)
          </label>
          <Progress percent={50} strokeHeight={15} />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            中等高度 (30px)
          </label>
          <Progress percent={50} strokeHeight={30} />
        </div>
        <div>
          <label style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            大高度 (50px)
          </label>
          <Progress percent={50} strokeHeight={50} />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同高度的进度条。'
      }
    }
  }
}`,...StrokeHeightProcess.parameters?.docs?.source}}},DifferentThemes.parameters={...DifferentThemes.parameters,docs:{...DifferentThemes.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '400px'
  }}>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Primary（主要）
        </label>
        <Progress percent={60} theme="primary" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Secondary（次要）
        </label>
        <Progress percent={60} theme="secondary" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Success（成功）
        </label>
        <Progress percent={60} theme="success" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Info（信息）
        </label>
        <Progress percent={60} theme="info" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Warning（警告）
        </label>
        <Progress percent={60} theme="warning" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Danger（危险）
        </label>
        <Progress percent={60} theme="danger" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Light（浅色）
        </label>
        <Progress percent={60} theme="light" />
      </div>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          Dark（深色）
        </label>
        <Progress percent={60} theme="dark" />
      </div>
    </div>,
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示不同主题颜色的进度条。'
      }
    }
  }
}`,...DifferentThemes.parameters?.docs?.source}}};let __namedExportsOrder=["DefaultProgress","WithoutTextProcess","StrokeHeightProcess","DifferentThemes"]},"./src/components/Progress/progress.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Progress});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function Progress(props){var percent=props.percent,_props_strokeHeight=props.strokeHeight,_props_showText=props.showText,styles=props.styles,_props_theme=props.theme;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"viking-progress-bar",style:styles},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"viking-progress-bar-outer",style:{height:"".concat(void 0===_props_strokeHeight?15:_props_strokeHeight,"px")}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"viking-progress-bar-inner color-".concat(void 0===_props_theme?"primary":_props_theme),style:{width:"".concat(percent,"%")}},(void 0===_props_showText||_props_showText)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"inner-text"},"".concat(percent,"%")))))}try{progress.displayName="progress",progress.__docgenInfo={description:"",displayName:"progress",props:{percent:{defaultValue:null,description:"当前百分比",name:"percent",required:!0,type:{name:"number"}},strokeHeight:{defaultValue:null,description:"高度",name:"strokeHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"number"}]}},showText:{defaultValue:null,description:"是否显示百分比数字",name:"showText",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"false"},{value:"true"}]}},styles:{defaultValue:null,description:"额外的样式",name:"styles",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"CSSProperties"}]}},theme:{defaultValue:null,description:"主题",name:"theme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"light"'},{value:'"dark"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/progress.tsx#progress"]={docgenInfo:progress.__docgenInfo,name:"progress",path:"src/components/Progress/progress.tsx#progress"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Progress-progress-stories.3f21c178.iframe.bundle.js.map