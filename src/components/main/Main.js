import './Main.css';
import S from "../../asset/img/fuck.png";

const Main = () => {
    return (
        <main>
            <div className="mainImg">
                <span>Front</span><br/>
                <span>Developer</span>
            </div>
                
            <div className="AboutMe">
                    
                    
                    <div className="Square">
                    <img src={S}/>      
                    </div>
                    
            </div>
        </main>
    );
};

export default Main;