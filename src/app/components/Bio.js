"use client";

import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import styles from "./Bio.module.css";

const customBio = [
    "Achieved USACO Platinum with perfect score",
    "Qualified for USAMO with AIME score 14/15",
    "Ranked 1st in SEA-AIME, top in Southeast Asia",
    "Scored perfect 150/150 in AMC10, top 1%",
    "Earned AMC12 Honor Roll, top 1% globally",
    "Won Gold in American Math Olympiad (Global 6th)",
    "Placed 1st in Singapore & Asian Schools Olympiad",
    "Won Gold in Singapore Math Finals, ranked 1st",
    "Secured Math Kangaroo Gold, 1st globally",
    "Published first-author research in bioinformatics",
    "Youngest speaker at GIW ISCB Asia & IEEE BHI",
    "Selected as Stanford AI4ALL Scholar (30 chosen)",
    "Garcia Research Scholar, Stony Brook (100 chosen)",
    "Developed BioRSP, gene expression analysis tool",
    "Created ProLiDE, AI-driven drug evaluation tool",
    "Researched AI-driven genomics at University of Chicago",
    "Studied cancer drug resistance at UAB AI.MED",
    "Analyzed exome sequencing in 1000 Genomes Project",
    "Trained CNNs on NVIDIA Jetson Nano for AI research",
    "Developed AI models for protein-ligand interactions",
    "Designed LSTM stock predictor with deep learning",
    "Built Connect 4 solver with alpha-beta pruning",
    "Created blockchain-based disaster relief platform"
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