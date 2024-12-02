import React from 'react';
import inst from "../images/inst.png"
import tel from "../images/telg.png"
import yout from "../images/youtube.png"
import pr from "../images/main_logo_tr.png"
import "../App.css"
import AnimatedBlock from "./AnimatedBlock";
const Pred = () => {
    return (
        <>


        <div className = "pred">

            <AnimatedBlock>
                <div className = "logog_main mob"><img src={pr} alt="" style={{width:"100%"}}/></div>
                <h2>
                    Приєднуйтесь до нас та отримай свій фандед рахунок вже завтра.
                </h2>
                <div className = "text_pred">
                    Наш алгоритм був особисто перевірений та протестований на власних коштах, задля забезпечення максимальної якості та та безпеки ваших коштів.
                    <br/><br/>Відкривайте нові можливості з Hitrading, адже отримання Funded аккаунту ще не було таким простим
                </div>
                <div className = "society">
                    <a href = "https://www.instagram.com/hitrading_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><div><img src = {inst} alt=""/>Instagram</div></a>
                    <a href = "https://t.me/hitrading_fx"><div><img src = {tel} alt=""/>Telegram</div></a>
                    {/*<a href = "https://www.youtube.com/@hitrading"><div><img src = {yout} alt=""/>YouTube</div></a>*/}
                </div>
            </AnimatedBlock>
            <AnimatedBlock classN = "logog_main"><img src={pr} alt="" style={{width:"100%"}}/></AnimatedBlock>

        </div>
        </>
    );
};

export default Pred;