import React from "react";
import Tilt from "./Tilt";
import styles from "./Widget.module.css";
import Image from "next/image";

const Widget = ({ children, svg }) => {
    return (
        <Tilt>
            <div className={styles.container}>
                <header className={styles.header}>
                    {svg && (
                        <Image
                            src={svg}
                            alt={"Logo"}
                            width={24}
                            height={24}
                            className={styles.logo}
                        />
                    )}
                    <div>
                        <h2 className={styles.title}>{children}</h2>
                    </div>
                </header>
            </div>
        </Tilt>
    );
};

export default Widget;