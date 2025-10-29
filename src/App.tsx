import { Button, ButtonSize, ButtonType } from "./components/Button/button";
import { Menu } from "./components/Menu/menu";
import { MenuItem } from "./components/Menu/menuItem";
import { SubMenu } from "./components/Menu/subMenu";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(index: string) => { alert(index) }} mode="vertical" defaultOpenSubMenus={['2']}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem>
            cool link1
          </MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>
              dropdown1
            </MenuItem>
            <MenuItem>
              dropdown2
            </MenuItem>
            <MenuItem>
              dropdown3
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link2
          </MenuItem>
        </Menu>
        <Button btnType={ButtonType.Primary} onClick={() => { alert(123) }}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} autoFocus>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Hello</Button>
      </header>
    </div>
  );
}

export default App;
