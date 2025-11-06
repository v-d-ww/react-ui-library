import React, { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react"
import { Button } from "../Button/button"
import axios from "axios"
import { UploadList } from "./UploadList"
import { Dragger } from "./dragger"

export interface UploadProps {
  action: string,
  defaultUploadList?: UploadFile[],
  beforeUpload?: (file: File) => boolean | Promise<File>,
  onProgress?: (percentage: number, file: UploadFile) => void
  onSuccess?: (percentage: number, file: UploadFile) => void
  onError?: (percentage: number, file: UploadFile) => void
  onChange?: (file: UploadFile) => void
  onRemove?: (_file: UploadFile) => void,
  headers?: { [key: string]: any },
  name?: string,
  data?: { [key: string]: any },
  withCredentials?: boolean,
  accept?: string,
  multiple?: boolean,
  children?: ReactNode,
  drag?: boolean
}
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string,
  size: number,
  name: string,
  status?: UploadFileStatus,
  percent: number,
  raw?: File,
  response?: any,
  error?: any,

}
export function Upload(props: UploadProps) {
  const {
    action,
    defaultUploadList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name = 'file',
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [fileList, setFileList] = useState<UploadFile[]>(defaultUploadList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  useEffect(() => {
    console.log('fileList 已更新:', fileList);
  }, [fileList]);
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    // setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name, file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    }
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        if (e.total) {
          let percentage = Math.round((e.loaded * 100) / e.total) || 0
          if (percentage < 100) {
            // console.log(fileList);
            // prevList更新频率快
            // setFileList((prevList) => {
            //   console.log(prevList);
            //   return prevList
            // })
            updateFileList(_file, { percent: percentage, status: 'uploading' })

            if (onProgress) {
              onProgress(percentage, _file)
            }
          }

        }
      }
    }).then(res => {
      if (onSuccess) {
        onSuccess(res.data, _file)
        updateFileList(_file, { status: 'success', response: res.data })
      }

      if (onChange) {
        onChange(_file)
      }
    }).catch(err => {
      console.error(err)
      if (onError) {
        onError(err, _file)
        updateFileList(_file, { status: 'error', response: err })
      }
      if (onChange) {
        onChange(_file)
      }
    })

  }
  const UploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)

      } else {
        const res = beforeUpload(file)
        if (res && res instanceof Promise) {
          res.then(processedFile => {
            post(processedFile)
          })
        } else if (res === true) {
          post(file)
        }
      }
    })


  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    UploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }

  }
  const handleRemove = (item: UploadFile) => {
    setFileList(prevList => {
      return prevList.filter(file => file.uid !== item.uid)
    })
    if (onRemove) {
      onRemove(item)
    }
  }
  return (
    <div className="viking-upload-component">
      <div
        className="viking-upload-input"
        style={{ display: 'inline-block' }}
        onClick={handleClick}
      >
        {drag ? <Dragger onFile={(files) => { UploadFiles(files) }}>
          {children}
        </Dragger> : children}
      </div>
      <input
        className="viking-file-input"
        style={{ display: 'none' }}
        type="file"
        ref={fileInput}
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        data-testid="test-input"
      />
      <UploadList
        UploadList={fileList}
        onRemove={handleRemove} />
    </div>
  )
}