import React from "react";
import Tilt from "./Tilt";
import styles from "./Widget.module.css";
import OptimizedImage from "./OptimizedImage";

const Widget = ({ children, svg }) => {
    return (
        <Tilt>
            <div className={styles.container}>
                <header className={styles.header}>
                    {svg && (
                        <OptimizedImage
                            src={svg}
                            alt={"Logo"}
                            width={24}
                            height={24}
                            className={styles.logo}
                            priority={true}
                            sizes="24px"
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