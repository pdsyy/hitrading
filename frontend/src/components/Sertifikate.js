import React, {useRef} from 'react';
import Slider from "react-slick";
import left from "../images/strelLeft.png"
import right from "../images/strelRight.png"
import r1 from "../images/sertifikate/Frame 427320566.png"
import r2 from "../images/sertifikate/s2.png"
import r3 from "../images/sertifikate/s3.png"
import r4 from "../images/sertifikate/s4.png"
import r5 from "../images/sertifikate/s5.png"
import r6 from "../images/sertifikate/s6.png"
import r7 from "../images/sertifikate/s7.png"
import r8 from "../images/8.JPG"
import r9 from "../images/9.PNG"
import r10 from "../images/10.JPG"

const Sertifikate = () => {
    let settings
        if(window.innerWidth> 1919){
           settings  = {
               dots: false,
               infinite: true,
               speed: 500,
               slidesToShow: 5,
               slidesToScroll: 1,
           };
        }else if(window.innerWidth> 1999){
            settings  = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 1,
            };
        }else if(window.innerWidth < 1920 && window.innerWidth> 1439){
            settings  = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
            };
        }else if(window.innerWidth < 1440 && window.innerWidth> 767){
            settings  = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
            };
        }else if(window.innerWidth < 768 && window.innerWidth> 374){
            settings  = {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 0.55,
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
        <div className="sert" style={{width: "100%", position:"relative"}}>
            <h2>
                Сертифікати
                <div className = "strel_sert">
                    <div onClick={previous}><img src={left}/></div>
                    <div onClick={next}><img src={right}/></div>
                </div>
            </h2>
            <div className="sert_card" style={{width: "100%"}}>

                <Slider {...settings} ref={slider => {
                    sliderRef = slider;
                }}>

                    <div>
                        <img src={r1} alt=""/>
                    </div>
                    <div>
                        <img src={r2} alt=""/></div>
                    <div>
                        <img src={r3} alt=""/></div>
                    <div>
                        <img src={r4} alt=""/>
                    </div>
                    <div>
                        <img src={r5} alt=""/>
                    </div>
                    <div>
                        <img src={r6} alt=""/>
                    </div>
                    <div>
                        <img src={r7} alt=""/>
                    </div>

                    {/*<div>
                        <img src={r8} alt=""/>
                    </div>
                    <div>
                        <img src={r9} alt=""/>
                    </div>
                    <div>
                        <img src={r10} alt=""/>
                    </div>*/}
                </Slider>

            </div>
        </div>
    );
};

export default Sertifikate;