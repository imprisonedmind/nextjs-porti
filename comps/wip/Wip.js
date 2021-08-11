import React, { useState, useEffect } from 'react';
import styles from '../wip/wip.module.scss'

export default function Component() {
    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal
        ? `${styles["wipClose"]} ${styles.wipCon}`
        : styles.wipCon;

    return (
        <div className={contentClassname}>
            <h1>Please note that this website is still under construction.</h1>
            <div onClick={() => setIsModal(!isModal)} className={styles.btn}><p>X</p></div>
        </div>
    );
}