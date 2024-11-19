"use client";

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import styles from "./Bio.module.css";

const customBio = [
    "work on cool projects.",
];

export default function Bio() {
    const [bio, setBio] = useState([]);

    useEffect(() => {
        setBio(customBio.sort(() => Math.random() - 0.5));
    }, []);

    return (
        <div className={styles.profileDescription}>
            <div className={styles.staticText}>
                👋 Hey, I{" "}
                <div className={styles.oneliner}>
                    <Typewriter
                        options={{
                            strings: bio,
                            autoStart: true,
                            loop: true,
                            cursorClassName: styles.cursor,
                        }}
                    />
                </div>
            </div>
            <p>
                I built a{" "}
                <a
                    href="https://github.com/cytronicoder/singapore-taxified"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    website that tracks 1.8k+ taxis
                </a>{" "}
                in Singapore, a{" "}
                <a
                    href="https://github.com/cytronicoder/stock-data-visualiser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    stock price predictor,
                </a>{" "}
                and an{" "}
                <a
                    href="https://github.com/cytronicoder/stock-data-visualiser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    AI-assisted aircraft taxiing system.
                </a>{" "}
                I also founded the{" "}
                <a
                    href="https://saishack.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    SAIS Hack Club,
                </a>{" "}
                where I lead workshops on computer science topics at my school.
            </p>
            <p>
                In my free time, you can find me immersed in (or ranting about) a good
                book, vibing to my{" "}
                <a
                    href="https://open.spotify.com/playlist/6CTgP2IZqL9STkPirN20Kz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    favorite music,
                </a>{" "}
                engaging in my swim team, or simply socializing with friends. I plan
                to pursue further my passion for computer science to contribute to my
                community.
            </p>
        </div>
    );
}