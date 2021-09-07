import './Main.css';
import S from "../../asset/img/1.jpg";

const Main = () => {
    return (
        <main>
            <div className="mainImg">
                <span>Front</span><br/>
                <span>Developer</span>
            </div>
                
            <div className="AboutMe">
                    <img src={S}/>      
                    <div></div>              
                <div className="introduction">
                    <span>NVAER</span>
                </div>
            </div>
        </main>
    );
};

export default Main;