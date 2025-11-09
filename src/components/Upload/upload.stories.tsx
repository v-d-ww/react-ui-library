import Upload, { UploadFile } from "./upload";
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import Icon from "../Icon/Icon";

const meta: Meta<typeof Upload> = {
  title: 'Upload Component', // 在 Storybook 侧边栏中的显示标题
  component: Upload, // 关联的组件
  tags: ['autodocs'], // 自动生成文档
  argTypes: {
    action: {
      control: 'text',
      description: '上传的地址（必需）',
      table: {
        type: { summary: 'string' },
      },
    },
    drag: {
      control: 'boolean',
      description: '是否支持拖拽上传',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: '是否支持多文件上传',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      control: 'text',
      description: '接受的文件类型，例如 ".jpg,.png" 或 "image/*"',
      table: {
        type: { summary: 'string' },
      },
    },
    name: {
      control: 'text',
      description: '上传文件的字段名',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'file' },
      },
    },
    data: {
      control: 'object',
      description: '上传时附带的额外参数',
      table: {
        type: { summary: '{ [key: string]: any }' },
      },
    },
    headers: {
      control: 'object',
      description: '设置上传的请求头部',
      table: {
        type: { summary: '{ [key: string]: any }' },
      },
    },
    withCredentials: {
      control: 'boolean',
      description: '上传请求时是否携带 cookie',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    beforeUpload: {
      control: false,
      description: '上传文件之前的钩子，参数为上传的文件，若返回 false 或 Promise 则停止上传',
      table: {
        type: { summary: '(file: File) => boolean | Promise<File>' },
      },
    },
    onProgress: {
      action: 'onProgress',
      description: '文件上传时的回调',
      table: {
        type: { summary: '(percentage: number, file: UploadFile) => void' },
      },
    },
    onSuccess: {
      action: 'onSuccess',
      description: '文件上传成功时的回调',
      table: {
        type: { summary: '(data: any, file: UploadFile) => void' },
      },
    },
    onError: {
      action: 'onError',
      description: '文件上传失败时的回调',
      table: {
        type: { summary: '(err: any, file: UploadFile) => void' },
      },
    },
    onChange: {
      action: 'onChange',
      description: '文件状态改变时的回调',
      table: {
        type: { summary: '(file: UploadFile) => void' },
      },
    },
    onRemove: {
      action: 'onRemove',
      description: '文件列表移除文件时的回调',
      table: {
        type: { summary: '(file: UploadFile) => void' },
      },
    },
    defaultUploadList: {
      control: false,
      description: '默认的文件列表',
      table: {
        type: { summary: 'UploadFile[]' },
      },
    },
  },
  parameters: {
    docs: {
      inlineStories: true,
      description: {
        story: '展示 Upload 组件的完整功能：拖拽上传、多文件、文件类型限制、上传前验证、自定义 headers 和 data。',
      },
    },
  },

}
export default meta;
type Story = StoryObj<typeof Upload>;
const checkFileSize = (file: File) => {
  if (Math.round(file.size / 1024) > 50) {
    alert('file too big')
    return false
  }
  return true
}
const defaultFileList: UploadFile[] = [
  { uid: '123', size: 1234, name: 'hello.md', status: 'uploading', percent: 30 },
  { uid: '122', size: 1234, name: 'xyz.md', status: 'success', percent: 30 },
  { uid: '121', size: 1234, name: 'eyiha.md', status: 'error', percent: 30 }
]
const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', { type: file.type })
  return Promise.resolve(newFile)
}
export const DefaultUpload: Story = {

  render: () => (

    <Upload
      // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      action="https://jsonplaceholder.typicode.com/posts/"
      // defaultUploadList={defaultFileList}
      // beforeUpload={filePromise}
      onProgress={action('onProgress')}
      onSuccess={action('onSuccess')}
      // onError={action('onError')}
      onChange={action('onChange')}
      name="fileName"
      data={{ 'key': 'value' }}
      accept=".png"
      multiple={true}
      drag={true}
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  )

};