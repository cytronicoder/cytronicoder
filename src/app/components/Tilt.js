"use client";

import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

// From Hack Club! https://github.com/hackclub/site/blob/ed39c21a308bbf457c6795629a679e6049bada4c/components/tilt.js
const Tilt = ({ options = {}, children, ...props }) => {
    const root = useRef(null);

    useEffect(() => {
        VanillaTilt.init(root.current, {
            max: 7.5,
            scale: 1.05,
            speed: 400,
            glare: true,
            "max-glare": 0.25,
            gyroscope: false,
            ...options,
        });
    }, [options]);

    return React.cloneElement(children, { ref: root });
};

export default Tilt;
