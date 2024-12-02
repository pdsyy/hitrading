import React from 'react';
import frame from "../images_challenge/Frame 427320465.png";
import frame1 from "../images_challenge/190+.png";
import AnimatedImg from "./AnimatedImg";
import AnimatedBlock from "./AnimatedBlock";

const PerevChallenge = () => {
    return (
        <div className="perev_challenge_third_block">
            <div className="about_perev_challenge">
                <AnimatedImg src={frame1} alt="" classN = "mob_top"/>
                <AnimatedBlock classN="about_perev_challenge_first">
                    <h2>Чому нас обирають?</h2>
                    <ul>
                        <li>Ми перший та найбільший сервіс по проходженням в Україні</li>
                        <li>Наша база налічує більше 190+ задоволених клієнтів</li>
                        <li>Загальна сума пройдених нами акаунтів перевищує 15 мільйонів доларів</li>
                        <li>Клієнти отримали понад 40 000 долларів виплат з проп-компаній</li>
                        <li>Надання гарантій, які позбавляють Вас всіх можливих ризиків</li>
                    </ul>
                </AnimatedBlock>

                <AnimatedImg src={frame1} alt="" classN = "mob_top m"/>

            </div>
        </div>
    );
};

export default PerevChallenge;