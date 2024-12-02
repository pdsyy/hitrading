import React from 'react';
import plus from "../images/Vector (1).png"
import AnimatedBlock from "./AnimatedBlock";
const Faq = () => {
    return (
        <>
            <a name = "faq"></a>

        <div className = "faq_main">
            <div className = "faq">FAQ</div>
            <div className="faq_quest">
                <AnimatedBlock classN="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss1").classList.toggle("open_p_faq")

                        document.querySelector(".fk1").classList.toggle("rotateKrest")
                    }}>Чому проходите челенджі тільки на BoldFund?
                        <img src={plus} alt="" className = "fk1"/>
                    </div>
                    <div className = "anss1">
                        <p>
                            Торгова платформа даної компанії підходить для підключення алгоритму. На таких платформах як Metatrader, Ctrader, etc…
                            Проп-компанії ідентифікують і блокують даний метод торгівлі.
                        </p>
                    </div>
                </AnimatedBlock>
                <AnimatedBlock classN="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss2").classList.toggle("open_p_faq")

                        document.querySelector(".sk").classList.toggle("rotateKrest")
                    }}>Чи можна бота для проходження поставити на реальний рахунок?
                        <img src={plus} alt="" className = "sk"/>
                    </div>
                    <div className = "anss2">
                        <p>
                            Ні, даний алгоритм працює тільки на демо-акаунтах (челенджах) та не може бути використаний на реальних коштах, по тим самим причинам які ми вказали у відповіді на перше питання.
                        </p> </div>
                </AnimatedBlock>
                <AnimatedBlock classN="faq_ans">
                    <div  onClick = {(e) => {
                        document.querySelector(".anss3").classList.toggle("open_p_faq")

                        document.querySelector(".tk").classList.toggle("rotateKrest")
                    }}>Чи було зафіксовано хоч одну втрату челенджу?
                        <img src={plus} alt="" className = "tk"/>
                    </div>
                    <div className = "anss3">
                        <p>
                            Ні, із пройдених нами челенджів більше ніж на 15 млн$ такого випадкого випадку не було зафіксовано.
                        </p> </div>
                </AnimatedBlock>
                <AnimatedBlock classN="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss4").classList.toggle("open_p_faq")

                        document.querySelector(".fok").classList.toggle("rotateKrest")
                    }}>Чи є підтвердження що ці пропи виплачують?
                        <img src={plus} alt="" className = "fok"/>
                    </div>
                    <div className = "anss4">
                        <p>
                            Так, на даному етапі ми разом з клієнтами отримали більше 15 000 долларів виплат з BoldFund.
                            Тому у нас є всі підстави їм довіряти, головне дотримуватись правил.
                        </p> </div>
                </AnimatedBlock>

                <AnimatedBlock classN="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss5").classList.toggle("open_p_faq")

                        document.querySelector(".fifk").classList.toggle("rotateKrest")
                    }}>Чи є ризик, що мій аккаунт забанять через торгівлю ботом?
                        <img src={plus} alt="" className = "fifk"/>
                    </div>
                    <div className = "anss5">
                        <p>
                            Ні, наш алгоритм спеціально розроблений, щоб імітувати людську торгівлю.
                            Ми в цьому настільки впевнені, що гарантуємо повну компенсацію вкладень, якщо щось станеться через нашу помилку.
                        </p>
                    </div>
                </AnimatedBlock>
                {/*
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss6").classList.toggle("open_p_faq")

                        document.querySelector(".sik").classList.toggle("rotateKrest")
                    }}>Чи є підтвердження що ці пропи виплачують?
                        <img src={plus} alt="" className = "sik"/>
                    </div>
                    <div className = "anss6">
                        <p>
                        Так, на даному етапі ми  отримали близько 20 виплат із даних компаній, тому у нас є всі підстави їм довіряти, головне дотримуватись правил.
                        </p>
                    </div>
                </div>
                <div className="faq_ans">
                    <div onClick = {(e) => {
                        document.querySelector(".anss7").classList.toggle("open_p_faq")

                        document.querySelector(".simk").classList.toggle("rotateKrest")
                    }}>Ніколи не чув про ці проп компанії, чим вони відрізняються від інших?
                        <img src={plus} alt="" className = "simk"/>
                    </div>
                    <div className = "anss7">
                        <p>
                        В англомовному комʼюніті ці компанії мають таку ж саму популярність як FTMO та інші, по суті вони такі ж самі , але дозволяють і швидкі проходження.
                        </p></div>
                </div>
                */}
            </div>
        </div>
        </>
    );
};

export default Faq;