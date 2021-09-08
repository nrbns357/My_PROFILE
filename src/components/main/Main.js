import './Main.css';
import S from "../../asset/img/woman.svg";

const Main = () => {
    return (
        <main>
            <div className="mainImg">
                <span>Geum Hyunho</span>
                <span>PORTFOLIO<br/>VOL.1</span>
                <span>Front</span><br/>
                <span>Developer</span>
            </div>
                
            <div className="AboutMe">
                    <div className="Square">
                        <span>About Me</span>
                    <span>2005.03.04</span>      
                    <img src={S}/>
                    </div>

            </div>
        </main>
    );
};

export default Main;