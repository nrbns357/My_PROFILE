import "./Footer.css";
import Insta from "../../asset/img/instagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerDiv">
        <a href="https://www.instagram.com/hyeonho.gold/">
          <img src={Insta} />
        </a>
        <span>eamil : ghh357@naver.com</span>
      </div>
    </footer>
  );
};

export default Footer;
