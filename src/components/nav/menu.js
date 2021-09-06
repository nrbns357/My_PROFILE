import React from 'react';
import './menu.css';
import Home from "../../asset/img/home.svg";
import Kakao from "../../asset/img/kakao.svg";
import Porfile from "../../asset/img/Profile.svg";
import Naver from "../../asset/img/n.svg";
import Siout from "../../asset/img/sign-out.svg";
import Siin from "../../asset/img/sign-in.svg";
import Siup from "../../asset/img/sign-up.svg";
 
const Menu = () => {
    return (
<>

    <div className="navigation">
        <ul>
            <li className="list ">
                <a href="#">
                    <img className="icon" alt="아이콘들"src={Home}/>
                    <span className="title">Home</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Porfile}/>
                    <span className="title">Profile</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Naver}/>
                    <span className="title">NAVER</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Kakao}/>
                    <span className="title">KAKAOTALK</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Siup}/>
                    <span className="title">Sign up</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Siin}/>
                    <span className="title">Sign in</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={Siout}/>
                    <span className="title">Sign out</span>
                </a>
            </li>
        </ul>
    </div>
</>
    );
};

export default Menu;