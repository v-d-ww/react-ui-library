import { fireEvent, render, screen } from "@testing-library/react"
import { Button, ButtonSize, ButtonType, ButtonProps } from "./button"

const defaultProps = {
  onClick: jest.fn()

}
const testProps: ButtonProps = {
  className: 'klass',
  /**设置 Button 的尺寸 */
  size: ButtonSize.Large,
  /**设置 Button 的类型 */
  btnType: ButtonType.Primary
}
const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('button compnent', () => {
  it('renders default button correctly', () => {
    render(<Button {...defaultProps}>Nice</Button>);
    const button = screen.getByRole('button', { name: 'Nice' });
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveClass('btn', 'btn-default'); // 拆分类名检查更清晰
    expect(button).not.toBeDisabled(); // 替代 disabled: false
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled(); //被调用
  })
  it('renders correct styles based on props', () => {
    render(<Button {...testProps}>Nice</Button>);
    const button = screen.getByRole('button', { name: 'Nice' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-lg', 'btn-primary', 'klass');
    expect(button).not.toBeDisabled();

  })
  it('renders as a link when btnType is "link" and href is provided', () => {
    render(<Button btnType={ButtonType.Link} href="http://dummyurl">Link</Button>);
    const link = screen.getByRole('link', { name: 'Link' });

    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    expect(link).toHaveClass('btn', 'btn-link');
    expect(link).toHaveAttribute('href', 'http://dummyurl'); // 新增 href 检查
  })
  it('disables button when disabled prop is true', () => {
    render(<Button {...disabledProps}>Nice</Button>);
    const button = screen.getByRole('button', { name: 'Nice' });

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled(); // 替代 disabled: true

    fireEvent.click(button);
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
})