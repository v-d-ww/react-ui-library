import { fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import { Menu, MenuProps } from './menu'
import { MenuItem } from "./menuItem"
import { SubMenu } from "./subMenu"

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: ['3']
}
const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props} >
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        xyz
      </MenuItem>
      <SubMenu title="dropdown" >
        <MenuItem>
          drop1
        </MenuItem>
        <MenuItem>
          drop2
        </MenuItem>
      </SubMenu>
      <SubMenu title="opened">
        <MenuItem>
          opened1
        </MenuItem>
      </SubMenu>
    </Menu>
  )

}
describe('test Menu and MenuItem component in default(horizontal) mode', () => {

  it('should render correct Menu and MenuItem based on default props', () => {
    render(generateMenu(testProps));
    const menuElement = screen.getByTestId('test-menu');
    const activeElement = screen.getByText('active');
    const disabledElement = screen.getByText('disabled');
    expect(menuElement).toBeInTheDocument();
    expect(activeElement).toBeInTheDocument();
    expect(disabledElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('test', 'viking-menu');
    // const listItems = screen.getAllByRole('listitem')
    // expect(listItems.length).toEqual(3)
    // expect(screen.getElementsByTagName('li').length).toEqual(3)
    // 只统计 menuElement 下的直接子 <li>（顶级元素）
    // const directChildren = menuElement.querySelectorAll(':scope > li');
    // expect(directChildren.length).toEqual(5);
    // const allListItems = within(menuElement).getAllByRole('listitem');
    // 过滤出父元素是 menuElement 的 <li>（即直接子元素）
    // const directListItems = allListItems.filter(item => item.parentElement === menuElement);
    // expect(menuElement.children.length).toEqual(5);


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
    expect(testProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledElement)
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    expect(disabledElement).not.toHaveClass('is-active')

  })

  it('should show dropdown items when hover on subMenu', async () => {
    render(generateMenu(testProps));

    const dropdownElement = screen.getByTestId('submenu-container-3')
    const submenuUl = within(dropdownElement).getByTestId('submenu-ul');
    expect(submenuUl).not.toHaveClass('menu-opened')
    fireEvent.mouseEnter(dropdownElement)
    // 因为移入移出用了timer异步
    await waitFor(() => {
      expect(submenuUl).toHaveClass('menu-opened')
    })
    fireEvent.click(screen.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownElement)
    await waitFor(() => {
      expect(submenuUl).not.toHaveClass('menu-opened')
    })
  })
})
describe('test Menu and MenuItem component in vertical mode', () => {
  it('should render vertical mode when mode is set to vertical', () => {
    render(generateMenu(testVerProps));
    const menuElement = screen.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')

  })
  it('should show dropdown items when click on subMenu for vertical mode', () => {
    render(generateMenu(testVerProps));
    const dropdownTitle = screen.getByText('opened')
    const dropdownElement = screen.getByTestId('submenu-container-4')
    const submenuUl = within(dropdownElement).getByTestId('submenu-ul');
    expect(submenuUl).not.toHaveClass('menu-opened')
    fireEvent.click(dropdownTitle)
    expect(submenuUl).toHaveClass('menu-opened')
  })
  it('should show subMenu dropdown when defaultOpenSubMenus contains SubMenu index', () => {
    render(generateMenu(testVerProps));
    const dropdownElement = screen.getByTestId('submenu-container-3')
    const submenuUl = within(dropdownElement).getByTestId('submenu-ul');
    expect(submenuUl).toHaveClass('menu-opened')
  })

})