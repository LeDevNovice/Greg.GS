import React from "react";
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} aria-label="Greg dot G S">
                Greg<span className={styles.dot}>.</span>GS
            </h1>
        </div>
    )
}

export default LandingPage;