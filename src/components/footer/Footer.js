import "./Footer.css";
import Insta from "../../asset/img/instagram.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footerDiv">
                    <a href="https://www.instagram.com/hyeonho.gold/">
                        <img src={Insta}/> 
                    </a>
                <span>call : 010-4078-3842</span>
            </div>
        </footer>
    );
};

export default Footer;