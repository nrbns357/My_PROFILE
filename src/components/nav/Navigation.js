import React,{useState} from 'react';
import './Navigation.css';
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
                <img className="menuImg" onClick={menuClick} src={MenuImg} alt="메뉴바"/>
                <div className="explanation">
                    <h3>금현호</h3><br/>
                    <h4>배움에서 재미를 느끼는, 배움을 좋아하는 금현호입니다.</h4>
                </div>

          </nav>  

          {menu? <Menu menuClick={menuClick}/> : null}
        </>
    );
};

export default Navigation;