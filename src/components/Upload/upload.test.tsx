import { render } from "@testing-library/react"
import { Upload, UploadProps } from './upload'
const testProps: UploadProps = {
  action: 'fakeurl.com',
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true
}
const renderUpload = (props: UploadProps) => {
  return (
    <Upload {...props}>

    </Upload>

  )
}
describe('test upload component', () => {
  it('upload process should works fine', async () => {
    render(renderUpload(testProps))

  })
})