"use client";

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import styles from "./Bio.module.css";

const customBio = [
    "USACO Platinum Division",
    "2x AIME Qualifier",
    "1st SEA-AIME Rank",
    "USAMO Qualifier",
    "AMC10 Distinction",
];

export default function Bio() {
    const [bio, setBio] = useState([]);

    useEffect(() => {
        setBio(customBio.sort(() => Math.random() - 0.5));
    }, []);

    return (
        <div className={styles.profileDescription}>
            <div className={styles.staticText}>
                🏆{" "}
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
                    SAIS Hack Club.
                </a>{" "}
                In my free time, you can find me reading or ranting about a good
                book, vibing to my{" "}
                <a
                    href="https://open.spotify.com/playlist/6CTgP2IZqL9STkPirN20Kz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.underline_on_hover}
                >
                    favorite music,
                </a>{" "}
                or simply socializing with friends. I plan to keep working on
                projects that make a difference in the world.
            </p>
        </div>
    );
}