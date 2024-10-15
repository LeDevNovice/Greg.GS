import React from "react";

import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
    return (
        <div className={styles.landingPageContainer}>
            <h1 className={styles.landingPageTitle} aria-label="Greg dot G S">
                Greg<span className={styles.landingPageTitle__dot}>.</span>GS
            </h1>
        </div>
    )
}

export default LandingPage;