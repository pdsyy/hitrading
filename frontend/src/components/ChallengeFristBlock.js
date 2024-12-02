import React from 'react';
import macbook from "../images_challenge/macbook_1 1.png";
import AnimatedImg from "./AnimatedImg";

const ChallengeFirstBlock = () => {
    return (
        <div className = "first_block">
            <div className = "gray_block_chall"></div>
            <div className = "white_block"></div>
            <div className = "main_description_chall">
                <div className = "main_h1_challenge_chall">
                    <span>Проходження челенджів </span>{window.innerWidth> 1199 && window.innerWidth < 1440 ? <br/> : ""}
                    проп-трейдингових компаній
                </div>
                <div className = "perev_challenge">
                    За допомогою нашого алгоритму ми допомагаємо трейдерам отримати свій funded акаунт в найкоротші терміни.
                </div>
                <a href = "#prices">
                <button className = "button_style first_block_button">
                    Пройти челендж
                </button>
                </a>
            </div>
            <AnimatedImg src={macbook} alt=""/>
        </div>
    );
};

export default ChallengeFirstBlock;