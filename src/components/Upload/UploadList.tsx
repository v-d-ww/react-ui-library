import React from 'react'
import { Icon } from '../Icon/Icon'
import { UploadFile } from './upload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Progress } from '../Progress/progress'
library.add(fas)

interface uploadListProps {
  UploadList: UploadFile[],
  onRemove: (_file: UploadFile) => void
}
export function UploadList(props: uploadListProps) {
  const {
    UploadList,
    onRemove
  } = props
  return (
    <ul className="viking-upload-list">
      {UploadList.map(item => {
        return (
          <li className="viking-upload-list-item" key={item.uid}>
            <span className={`file-name file-name-${item.status}`}>
              <Icon icon="file-alt" theme="secondary" />
              {item.name}
            </span>
            <span className="file-status">
              {(item.status === 'uploading' || item.status === 'ready') && <Icon icon="spinner" spin theme="primary" />}
              {item.status === 'success' && <Icon icon="check-circle" theme="success" />}
              {item.status === 'error' && <Icon icon="times-circle" theme="danger" />}
            </span>
            <span className="file-actions">
              <Icon icon="times" onClick={() => { onRemove(item) }} />
            </span>
            {item.status === 'uploading' && <Progress percent={item.percent}></Progress>}
          </li>

        )
      })}
    </ul>
  )
}