import classNames from "classnames"
import React, { ReactNode, useState } from "react"

export interface draggerProps {
  onFile: (file: FileList) => void,
  children?: ReactNode
}
export function Dragger(props: draggerProps) {
  const { onFile, children } = props
  const [dragOver, setDragOver] = useState(false)
  const handleDrag = (e: React.DragEvent<HTMLElement>, over: boolean) => {
    e.preventDefault()
    setDragOver(over)
  }
  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault()
    setDragOver(false)
    onFile(e.dataTransfer.files)

  }
  const classes = classNames('viking-uploader-dragger', {
    'is-dragover': dragOver
  })
  return (
    <div
      className={classes}
      onDragOver={e => { handleDrag(e, true) }}
      onDragLeave={e => { handleDrag(e, false) }}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}