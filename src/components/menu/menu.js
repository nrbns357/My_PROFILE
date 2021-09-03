import React from 'react';
import './menu.css';
import User from "../../asset/img/user.svg";

const Menu = () => {
    return (
<>
    <div className="navigation">
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들"src={User}/>
                    <span className="title">Home</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">Profile</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">NAVER</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">KAKAOTALK</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">Sign up</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">Sign in</span>
                </a>
            </li>
        </ul>
        <ul>
            <li className="list">
                <a href="#">
                    <img className="icon" alt="아이콘들" src={User}/>
                    <span className="title">Sign out</span>
                </a>
            </li>
        </ul>
    </div>
</>
    );
};

export default Menu;