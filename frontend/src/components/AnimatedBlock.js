import React from 'react';
import {useInView} from "react-intersection-observer";

const AnimatedBlock = ({classN, children}) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className = {`fade-in ${inView ? `fade-in-visible ${classN}`: ""}`} ref={ref}>
            {children}
        </div>
    );
};

export default AnimatedBlock;