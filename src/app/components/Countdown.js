"use client";

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-01-01T00:00:00');
        const christmasDate = new Date('2025-12-25T00:00:00');

        const updateCountdown = () => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const now = new Date();
    const christmasDate = new Date('2025-12-25T00:00:00');
    const newYearDate = new Date('2026-01-01T00:00:00');

    const title = now < christmasDate
        ? "Santa starts his deliveries in:"
        : now < newYearDate
        ? "Santa finishes his deliveries in:"
        : "Happy New Year!";

    return (
        <div className={styles.countdown}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.timer}>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{timeLeft.days}</span>
                    <span className={styles.label}>Days</span>
                </div>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{timeLeft.hours}</span>
                    <span className={styles.label}>Hours</span>
                </div>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{timeLeft.minutes}</span>
                    <span className={styles.label}>Minutes</span>
                </div>
                <div className={styles.timeBlock}>
                    <span className={styles.number}>{timeLeft.seconds}</span>
                    <span className={styles.label}>Seconds</span>
                </div>
            </div>
        </div>
    );
}