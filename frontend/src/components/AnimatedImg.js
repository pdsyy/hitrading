import React from 'react';
import {useInView} from "react-intersection-observer";

const AnimatedImg = ({classN, alt, src}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <img className = {`fade-in1 ${inView ? `fade-in-visible1 ${classN}`: ""}`} ref={ref} alt = {alt} src={src}/>
    );
};

export default AnimatedImg;