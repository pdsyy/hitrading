import React from 'react';
import "../challenge.css"
import ChallengeFirstBlock from "../components/ChallengeFristBlock";
import AboutChallengeSecondBlock from "../components/AboutChallengeSecondBlock";
import PerevChallenge from "../components/PerevChallenge";
import ProccessChallenge from "../components/ProccessChallenge";
import VideoAboutChallenge from "../components/VideoAboutChallenge";
import ChallengePrices from "../components/ChallengePrices";
import SliderChallenge from "../components/PricesChallenge";
import AboutUsChallenge from "../components/AboutUsChallenge";
import Pred from "../components/Pred";
import "../1200-1440chall.css"
import plus from "../images/Vector (1).png";
import Garanty from "../components/Garanty";
import Faq from "../components/Faq";
import whitepay from "../images_bot/whitepay.png";
import krr from "../images_bot/krr.png";
import warrn from "../images_bot/warrn.png";
import krestik from "../images_bot/krestik.svg";
import warn from "../images_challenge/warnCircle.svg";
import axios from "axios";
import Otzyvy from "../components/Otzyvy";
import Sertifikate from "../components/Sertifikate";
const Challenge = () => {
    let paying199 = async () => {
        axios.get("https://hitrading.com.ua/api/v1/user/some1").then((data) => {
            console.log(data.data)
            document.location.href = data.data.order.acquiring_url
        })
    }
    let paying99 = async () => {
        axios.get("https://hitrading.com.ua/api/v1/user/some4").then((data) => {
            console.log(data.data)
            document.location.href = data.data.order.acquiring_url
        })
    }
    let paying349 = async () => {
        axios.get("https://hitrading.com.ua/api/v1/user/some2").then((data) => {
            console.log(data.data)
            document.location.href = data.data.order.acquiring_url
        })
    }
    let paying499 = async () => {
        axios.get("https://hitrading.com.ua/api/v1/user/some3").then((data) => {
            console.log(data.data)
            document.location.href = data.data.order.acquiring_url
        })
    }
    return (
        <>
            <div className = "video_about_page">


                <div className = "oplata">
                    <img src = {krestik} alt = "" className = "krestik_modal" onClick={()=> {
                        document.querySelector(".video_about_page").classList.remove("dis_block")
                    }}/>
                    <h2>
                        Оплата через WhitePay
                    </h2>
                    <div className = "select_pay">
                        Оберіть тип акаунту
                    </div>
                    <div className = "variants_pay">
                        <div className = "text_pay" onClick={()=> {
                            document.querySelector(".video_about_page").classList.remove("dis_block")
                            paying99()
                        }}>
                            10k / $ 99
                        </div>
                    </div>
                    <div className = "variants_pay">
                        <div className = "text_pay" onClick={()=> {
                            document.querySelector(".video_about_page").classList.remove("dis_block")
                            paying199()
                        }}>
                            25k / $ 199
                        </div>
                    </div>
                    <div className = "variants_pay">
                        <div className = "text_pay" onClick={()=> {
                            document.querySelector(".video_about_page").classList.remove("dis_block")
                            paying349()
                        }}>
                        50k / $ 349

                        </div>
                    </div>
                    <div className = "variants_pay">
                        <div className = "text_pay" onClick={()=> {
                            document.querySelector(".video_about_page").classList.remove("dis_block")
                            paying499()
                        }}>
                        100k / $ 499
                        </div>
                    </div>
                    <div className = "warn_pay">
                        <img src = {warn} alt = ""/>
                        <div>
                            Після оплати, відправте скріншот в телеграм <a href = "https://t.me/hitrading_support" target = "_blank">@hitrading_support</a> де вказана ID операції
                        </div>
                    </div>
                </div>

            </div>
            <div className = "video_about_page" onClick={()=> {
                document.querySelector(".video_about_page").classList.remove("dis_block")
            }}>
                <iframe src="https://www.youtube.com/embed/TQxsK-j6WSQ"
                        title="HiTrading | Головна ідея" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <img src={plus} alt="" className = "fk"/>
            </div>
            <ChallengeFirstBlock/>
            <a name = "idea"></a>
            <div className = "unique_bot dis_none">

                <div className = "unique_bot_main">
                    <div className = "unique_bot_main_about">

                        <h2>
                            Головна ідея
                        </h2>
                        <p>
                            Полягає в тому, щоб допомогти трейдерам пришвидшити монетизацію своїх знань.<br/><br/> Проп-компанії дають можливість управляти капіталом в сотні тисяч долларів. <br/><br/>Наш обов'язок - зробити його вашим в найкоротші терміни. </p>
                        <a href = "https://t.me/hitrading_support">
                            <button className = "button_style">
                                Звʼязатися з нами
                            </button>
                        </a>
                    </div>
                    <div className = "unique_bot_main_about_video mob_y">
                        <iframe src="https://www.youtube.com/embed/ulDP9ZCAaHM"
                                title="Hitrading | Проходження челенджів" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>


                    <div className = "unique_bot_main_about_video mob_n">
                        <iframe src="https://www.youtube.com/embed/ulDP9ZCAaHM"
                                title="Hitrading | Проходження челенджів" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            {/*<AboutChallengeSecondBlock/>*/}
            <a name = "perev"></a>
            <PerevChallenge/>
            <a name = "garanty"></a>
            <Garanty/>
            <a name = "process"></a>
            <ProccessChallenge/>
            {/* <VideoAboutChallenge/>*/}

            <a name = "feedback"></a>
            {/*<SliderChallenge/>*/}
            <Otzyvy/>
            <a name = "sertifikate"></a>
            <Sertifikate/>
            <a name = "prices"></a>
            <ChallengePrices/>
            <a name = "faq"></a>
            <Faq/>
            <Pred/>
        </>
    );
};

export default Challenge;