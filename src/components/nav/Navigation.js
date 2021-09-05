import React,{useState} from 'react';
import './Navigation.css';
import AppleImg from "../../asset/img/apple.svg";
import MenuImg from "../../asset/img/menu.svg";
import Menu from '../nav/menu';

const Navigation = () => {
    let [menu, setMenu] = useState(false);
    const menuClick = () =>{
        setMenu((prev) => !prev)
    }
    return (
        <> 
          <nav className="navBar">
              
            <div>
                <img className="appleImg" src={AppleImg} alt="로고"/>
                <p>NRBNS</p>
            </div>
            
            <div>
                <img className="menuImg" onClick={menuClick} src={MenuImg} alt="메뉴바"/>
            </div>
          </nav>  

          {menu? <Menu menuClick={menuClick}/> : null}
        </>
    );
};

export default Navigation;