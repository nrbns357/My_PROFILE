import './Main.css';
import Person from "../../asset/img/v.jpg";
import Html from "../../asset/img/html.svg";
import Css from "../../asset/img/css.svg";
import Js from "../../asset/img/javascript.svg";
import React from '../../asset/img/react.svg';
import Php from "../../asset/img/php.svg";
import Mysql from "../../asset/img/mysql.svg";

const Main = () => {
    return (
        <main>
            <div id="mainImg" className="mainImg">
                <span>Geum Hyunho</span>
                <span>PORTFOLIO<br/>VOL.1</span>
                <span>Front</span><br/>
                <span>Developer</span>
            </div>
                
            <div id="AboutMe" className="AboutMe">
                    <div className="Square">
                        <span>About Me</span>
                        <span>2005.03.04</span>    

                        <img src={Person}/>
                    </div>
                <div className="AboutMeContent">
                    <pre>이름: 금현호</pre>
                    <pre>나이: 17세</pre>
                </div>
            </div>

            <div id="Skills" className="Skills">
                    <span>I can do</span>
                <div className="skillbox">
                        <img alt="htmlimg" src={Html}/>

                        <img alt="htmlimg" src={Css}/>

                        <img alt="htmlimg" src={Js}/>

                        <img alt="htmlimg" src={React}/>

                        <img alt="htmlimg" src={Php}/>

                        <img alt="htmlimg" src={Mysql}/>
                </div>

            </div>
           
        </main>
    );
};

export default Main;