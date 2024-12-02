import React from 'react';
import frame65 from "../images_challenge/Frame 65.svg";
import frame66 from "../images_challenge/Frame 427320438.svg";
import frame67 from "../images_challenge/t_bold_mob_n.png";
import lastN from "../images_challenge/lastN.png";
import frame61 from "../images_challenge/t_bold_mob.png";
import frame68 from "../images_challenge/Frame 427320440.svg";
import frame69 from "../images_challenge/Frame 427320441.svg";
import newMin from "../images_challenge/newMin.png";
import newMin1 from "../images_challenge/newMin1.png";
import newMin2 from "../images_challenge/newMin2.png";
import newMin3 from "../images_challenge/newMin3.png";
import newMin4 from "../images_challenge/newMin4.png";
import proc1 from "../images_challenge/proc2.svg";
import proc2 from "../images_challenge/newTwo.png";
import proc3 from "../images_challenge/newThr.png";
import proc4 from "../images_challenge/newFour.png";
import proc5 from "../images_challenge/proc5.svg";
import procL from "../images_challenge/challLK2.png";
import f_bold from "../images_challenge/f_bold.svg";
import f_bold_mob from "../images_challenge/f_bold_mob_f.png";
import wfb1 from "../images_challenge/wfb1.svg";
import wfb2 from "../images_challenge/wfb2.svg";
import wfbm from "../images_challenge/newOne.png";
import fif_img from "../images_challenge/fif_img.png";
import fif_img_s from "../images_challenge/newFive.png";
import AnimatedBlock from "./AnimatedBlock";

const ProccessChallenge = () => {
    return (
        <div className="process">
            {window.innerWidth > 374 && window.innerWidth < 768 ?<>
                <h2>Процес отримання <span>Funded ахунку</span></h2>
                <div className="process_f for_tablet_mobile">

                    <AnimatedBlock><img src={f_bold_mob} alt="" className = "razz" loading = "lazy"/></AnimatedBlock>
                    <AnimatedBlock><img src={proc2} alt="" loading = "lazy"/></AnimatedBlock>
                    <AnimatedBlock><img src={proc3} alt="" loading = "lazy"/></AnimatedBlock>
                    <AnimatedBlock classN = "for_tablet_mobile non"><img src={proc4} alt=""/></AnimatedBlock>
                </div>
                <div className="process_f for_tablet_mobile_min">
                <AnimatedBlock><a className = "inv_href" href = "https://boldfund.io" target = "_blank"></a><img src={lastN} alt="" className = 'first_img razz' loading = "lazy"/></AnimatedBlock>
    <AnimatedBlock><img src={proc2} alt="" loading = "lazy"/></AnimatedBlock>
    <AnimatedBlock><img src={frame61} alt="" loading = "lazy"/></AnimatedBlock>
    <AnimatedBlock classN = "for_tablet_mobile o"><img src={proc4} alt="" loading = "lazy"/></AnimatedBlock>
</div>
    <AnimatedBlock classN = "for_tablet_mobile y"><img src={proc5} alt="" loading = "lazy"/></AnimatedBlock>

    <div className="process_s">
        <AnimatedBlock classN = "for_tablet_mobile_min non"><img src={proc4} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock classN = "for_tablet_mobile_min"><img src={fif_img_s} alt="" loading = "lazy"/></AnimatedBlock>
    </div></> :
                <>
    <h2>Процес отримання <span>Funded рахунку</span></h2>
    <div className="process_f for_tablet_mobile">
        <AnimatedBlock><a className = "inv_href" href = "https://boldfund.io" target = "_blank"></a><img src={f_bold} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock><img src={wfb1} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock><img src={wfb2} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock classN = "for_tablet_mobile o"><img src={newMin} alt="" loading = "lazy"/></AnimatedBlock>
    </div>
    <div className="process_f for_tablet_mobile_min">
        <AnimatedBlock><a className = "inv_href" href = "https://boldfund.io" target = "_blank"></a><img src={f_bold_mob} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock><img src={frame66} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock><img src={frame67} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock classN = "for_tablet_mobile o"><img src={newMin} alt="" loading = "lazy"/></AnimatedBlock>
    </div>
    <AnimatedBlock classN = "for_tablet_mobile y"><img src={newMin4} alt="" loading = "lazy"/></AnimatedBlock>

    <div className="process_s">
        <AnimatedBlock classN = "for_tablet_mobile_min"><img src={frame68} alt="" loading = "lazy"/></AnimatedBlock>
        <AnimatedBlock classN = "for_tablet_mobile_min"><img src={fif_img} alt="" loading = "lazy"/></AnimatedBlock>
    </div></>
            }

        </div>
    );
};

export default ProccessChallenge;