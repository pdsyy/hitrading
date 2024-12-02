import React, {useRef} from 'react';
import strel1 from "../images/Frame 427320337.png"
import strel2 from "../images/Frame 427320338.png"
import pers from "../images/valera.jpg"
import pers1 from "../images/p2.png"
import pers2 from "../images/p3.png"
import pers3 from "../images/p33.png"
import ff from "../images/p5.png"
import f2 from "../images/ihor.jpg"
import f3 from "../images/f3.png"
import Slider from "react-slick";
import left from "../images/strelLeft.png";
import right from "../images/strelRight.png";
import leftOt from "../images/stelaLeft.svg";
import rightOt from "../images/strelaRight.svg";
const Otzyvy = () => {

    let settings
    if(window.innerWidth> 1919){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1919 && window.innerWidth> 1440){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 1439 && window.innerWidth> 768){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
    }else if(window.innerWidth < 430 && window.innerWidth> 399){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.75,
        };
    }
    else if(window.innerWidth < 767 && window.innerWidth> 429){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.72,
        };
    }else if(window.innerWidth < 400 && window.innerWidth> 374){
        settings  = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 0.825,
        };
    }

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    return (
        <><a name = "feedback"></a>
        <div className = "otzyv">
            <div>
                <div><h2>Відгуки наших клієнтів
                    <div className = "strel_sert">
                        <div onClick={previous}><img src={leftOt}/></div>
                        <div onClick={next}><img src={rightOt}/></div>
                    </div></h2></div>
            </div>

            <div className = "otzyv_grid">
                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }}>
                <div className="otzyvy_d">
                    <p>
                        Хочу поблагодарить сервис Hitrading за скорость и качество исполнения своих услуг.
                        Поддержка от Владимира на высшем уровне, очень компетентно и по факту отвечает на вопросы, а потом подтверждает свои слова - делом!
                        От момента покупки челленджа до получения funded прошло 4 дня ( учитывая вериф и тд ).
                        Никогда такой скорости я еще не видел, обязательно воспользуюсь повторно и буду рекомендовать остальным
                    </p>
                    <div style={{display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers} alt = ""/></div>
                        <div style={{marginLeft:"14px"}}>
                            <div className = "name_pers">Demi</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Користуюсь послугами даного сервісу вже не вперше. Маю в управлінні вже чотири рахунки, пройдені даним сервісом. На трьох із них стоять боти також куплені в HiTrading. Дуже задоволена професіоналізмом та швидкістю проходженнь. Вже отримала 2 виплати від роботи бота. Також підключаю знайомих, ще й отримала за це приємну знижку.
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers1} alt = ""/></div>
                        <div style={{marginLeft:"14px"}}>
                            <div className = "name_pers">Natalia</div>
                            <div className = "nick">@therealdaniq</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Пишу як є, з першого погляду я не повірив шо це реально.
                        Ну бо неможливо закривати челленджі мільйонами за місяць, це просто незаконно!!
                        Я втрачав місяці щоб хоча б фазу закрити, полисів ( жартую ) і вже почав боятись тих пропок, а тут звідки не візьмись, є сервіс по проходженню цих пропів.
                        Просто шок, вже маю більше 200 тисяч в управлінні😎
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers2} alt = ""/></div>
                        <div style={{marginLeft:"14px"}}>
                            <div className = "name_pers">Andrew</div>
                            <div className = "nick">@oleg_ostap</div>
                        </div>
                    </div>
                </div>
                <div className="otzyvy_d">
                    <p>
                        Очень доволен Hitrading! Получил funded-счёт за 5 дней – быстро, просто и эффективно! Благодаря их поддержке и рекомендациям я прошёл челлендж без лишних переживаний. Всё чётко и прозрачно, никакой воды. Если хотите получить финансирование и выйти на новый уровень в трейдинге, однозначно рекомендую!
                    </p>
                    <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                        <div><img src={pers3} alt = ""/></div>
                        <div style={{marginLeft:"14px"}}>
                            <div className = "name_pers">Rylvix</div>
                            <div className = "nick">@andry_vdvchnko</div>
                        </div>
                    </div>
                </div>
                    <div className="otzyvy_d">
                        <p>
                            Hitrading - це реальна допомога для тих, хто хоче пройти трейдинг-челендж. Завдяки їм я отримав funded-рахунок за тиждень і вже торгую на ньому. Підтримка завжди на зв'язку, умови зрозумілі. Чудовий спосіб вийти на новий рівень у трейдингу!
                        </p>
                        <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                            <div><img src={ff} alt = ""/></div>
                            <div style={{marginLeft:"14px"}}>
                                <div className = "name_pers">PixelMancer</div>
                                <div className = "nick">@impressiv3v</div>
                            </div>
                        </div>
                    </div>
                    <div className="otzyvy_d">
                        <p>
                            Якби мені раніше сказали, що funded-рахунок можна отримати в такі короткі сроки ( в мене зайняло близько тижня ), я б не повірив!
                            З Hitrading це стало реальністю: грамотно вибудувана система, чіткі рекомендації та максимальна підтримка від Володимира. Усе пройшло так легко, що я ледь встиг помітити, як екзамен вже пройдений. Hitrading - це справжній shortcut для амбітних трейдерів!
                        </p>
                        <div style={{height:"52px", display:"flex", alignItems:'center'}} className="pers_style">
                            <div><img src={f2} alt = ""/></div>
                            <div style={{marginLeft:"14px"}}>
                                <div className = "name_pers">Ihor</div>
                                <div className = "nick">@tetti_m</div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

        </div>
            <a name = "contacts"></a>
        </>
    );
};

export default Otzyvy;