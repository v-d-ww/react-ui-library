import { Button, ButtonSize, ButtonType } from "./components/Button/button";
import { Menu } from "./components/Menu/menu";
import { MenuItem } from "./components/Menu/menuItem";
import { SubMenu } from "./components/Menu/subMenu";
import { Icon } from "./components/Icon/Icon";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import { Transition } from "./components/Transition/transition";
library.add(fas)

function App() {
  let [isShow, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon='coffee' theme="danger" size='10x'></Icon>
        <Menu onSelect={(index: string) => { alert(index) }} defaultOpenSubMenus={['2']}>
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
        <Button btnType={ButtonType.Primary} onClick={() => { alert(123); setShow(!isShow) }}>Hello</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Large} autoFocus>Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" target="_blank">Hello</Button>
        <Transition
          in={isShow}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>

          </div>
        </Transition>
        <Transition
          in={isShow}
          timeout={300}
          animation="zoom-in-left"
        >
          <Button>bi</Button>
          {/* 因为Button本身就有transition 所以得在外面包一层 */}
        </Transition>
      </header>
    </div>
  );
}

export default App;
