import { Button, ButtonSize, ButtonType } from "./components/Button/button";
import { Menu } from "./components/Menu/menu";
import { MenuItem } from "./components/Menu/menuItem";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu onSelect={(index) => { alert(index) }} mode="vertical">
          <MenuItem index={0}>
            cool link
          </MenuItem>
          <MenuItem index={1}>
            cool link1
          </MenuItem>
          <MenuItem index={2}>
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
