import { fireEvent, render, screen } from "@testing-library/react"
import { Menu, MenuProps } from './menu'
import { MenuItem } from "./menuItem"

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test'
}
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
    </Menu>
  )

}
describe('menu compent', () => {

  it('should render correct Menu and MenuItem based on default props', () => {
    render(generateMenu(testProps));
    const menuElement = screen.getByTestId('test-menu');
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    expect(menuElement).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(disabledElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('test', 'viking-menu');
    expect(activeElement).toHaveClass('is-active', 'menu-item');
    expect(disabledElement).toHaveClass('is-disabled', 'menu-item');

  })
  it('click items should change active and call the right callback', () => {
    render(generateMenu(testProps));
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    const thirdItem = screen.getByText('xyz');
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    expect(disabledElement).not.toHaveClass('is-active')

  })
  it('should render vertical mode when mode is set to vertical', () => {
    render(generateMenu(testVerProps));
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')

  })
})