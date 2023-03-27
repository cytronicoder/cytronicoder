import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";

// Styles
import styles from "@/styles/Birthday.module.css";

export default function Birthday() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const getDaysUntilBirthday = () => {
        const today = new Date();
        const birthday = new Date(today.getFullYear(), 3, 8);
        if (today.getMonth() === 3 && today.getDate() > 8) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.ceil((birthday.getTime() - today.getTime()) / oneDay);
    };

    const handleClick = () => {
        const confetti = new JSConfetti();

        const combinations = [
            { emojis: ['🌈', '⚡️', '🎂', '🎁'] },
            { emojis: ['💥', '✨', '🥳', '🎉'] },
        ];

        confetti.addConfetti(combinations[Math.floor(Math.random() * combinations.length)]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const daysUntilBirthday = getDaysUntilBirthday();
            setDays(daysUntilBirthday);
            setHours(24 - new Date().getHours());
            setMinutes(60 - new Date().getMinutes());
            setSeconds(60 - new Date().getSeconds());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                T-minus <span className={styles.days}>{days} days, </span><span className={styles.hours}>{hours} hours, </span><span className={styles.minutes}>{minutes} minutes, </span>and <span className={styles.seconds}>{seconds} seconds</span> until my birthday!
            </h2>

            <div className={styles.dinoImage}>
                <Image src="/dino.svg" alt="Dino" width={250} height={250} />
            </div>

            <div className={styles.buttons}>
                <button onClick={handleClick}>Click for confetti!</button>
                <button onClick={() => Router.push('/')}>Back to Home</button>
            </div>
        </div>
    );
}