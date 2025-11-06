import { render, screen } from "@testing-library/react"
import { Upload, UploadProps } from './upload'
import { fireEvent } from "@testing-library/react"
import axios from "axios"
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const createDt = (...initFiles: File[]) => {
  const store: File[] = [];                 // 内部可变数组
  const dt = {
    items: {
      add: (file: File) => { store.push(file); },
      remove: jest.fn(),
      clear: () => { store.length = 0; },
      get length() { return store.length; },
    },
    get files() {                          // 只读 FileList 接口的最小实现
      return store as unknown as FileList;
    },
    types: ['Files'],
  } as unknown as DataTransfer;

  initFiles.forEach(f => dt.items.add(f));
  return dt;
};
beforeEach(() => {
  mockedAxios.post.mockReset();
  mockedAxios.post.mockResolvedValue({ data: 'cool' });
});
const testProps: UploadProps = {
  action: 'fakeurl.com',
  onSuccess: jest.fn(),
  onChange: jest.fn(),
  onRemove: jest.fn(),
  drag: true
}
// 模拟 Icon 组件（简化实现）- 注意是命名导出
jest.mock('../Icon/Icon', () => ({
  __esModule: true,
  Icon: ({ icon, onClick }: { icon: string; onClick?: () => void }) => (
    <span data-testid={`icon-${icon}`} onClick={onClick}>
      {icon}
    </span>
  ),
}));
// jest.mock('axios')
// const mockedAxios = axios as jest.Mocked<typeof axios>
const testFile = new File(['xyz'], 'test.png', { type: 'image/png' })
const renderUpload = (props: UploadProps) => {
  return (
    <Upload {...props}>
      Click to upload
    </Upload>

  )
}
describe('test upload component', () => {
  it('upload process should works fine', async () => {
    render(renderUpload(testProps))
    // mockedAxios.post.mockImplementation(() => {
    //   return Promise.resolve({ 'data': 'cool' })
    // })
    mockedAxios.post.mockResolvedValue({ data: 'cool' })
    const fileInput = screen.getByTestId('test-input')
    const uploadArea = screen.getByText('Click to upload')
    expect(uploadArea).toBeInTheDocument()
    expect(fileInput).not.toBeVisible()
    fireEvent.change(fileInput, { target: { files: [testFile] } })
    expect(screen.getByTestId('icon-spinner')).toBeInTheDocument();
    const pngElement = await screen.findByText('test.png')
    expect(pngElement).toBeInTheDocument();
    expect(screen.getByTestId('icon-check-circle')).toBeInTheDocument();

    // 验证回调触发
    expect(testProps.onSuccess).toHaveBeenCalledWith(
      'cool',
      expect.objectContaining({ name: 'test.png' })
    );
    expect(testProps.onChange).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'test.png' })
    );

    // remove the uploaded file
    expect(screen.getByText('times')).toBeInTheDocument()
    fireEvent.click(screen.getByText('times'))
    expect(screen.queryByText('test.png')).not.toBeInTheDocument()
    expect(testProps.onRemove).toHaveBeenCalledWith(expect.objectContaining({
      raw: testFile,
      status: 'success',
      name: 'test.png'
    }))

  });
  it('drag and drop files works correctly', async () => {
    render(renderUpload(testProps))
    mockedAxios.post.mockResolvedValue({ data: 'cool' })
    const uploadArea = screen.getByText('Click to upload');
    const dt = createDt(testFile);        // 使用 polyfill

    // 模拟拖拽进入
    fireEvent.dragOver(uploadArea, { dataTransfer: dt });
    expect(uploadArea).toHaveClass('is-dragover');

    // 模拟拖拽离开
    fireEvent.dragLeave(uploadArea, { dataTransfer: dt });
    expect(uploadArea).not.toHaveClass('is-dragover');

    // 模拟拖放文件
    fireEvent.drop(uploadArea, { dataTransfer: dt });

    // 验证拖放后上传成功
    const pngElement = await screen.findByText('test.png')
    expect(pngElement).toBeInTheDocument();
  })
})