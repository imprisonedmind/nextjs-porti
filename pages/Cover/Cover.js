import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import DropdownMenu from "../../comps/menu/menu.js";

import styles from "../Cover/cover.module.scss";
import React, { useState, useEffect } from "react";

export default function Cover(props) {
  return (
    <div className={styles.Main}>
      <Head>
        <title>Luke Stephens | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* left cover con */}
      <div className={styles.left}>
        <div className={styles.leftImg}>
          <Image
            className={styles.image}
            src="/Images/coverLeft.png"
            alt="Picture of the author"
            layout="fill"
          ></Image>
        </div>
      </div>
      {/* right cover con */}
      <div className={styles.right}>
        <div>
          <h1>
            hi there! <span>I'm Luke.</span>{" "}
          </h1>
          <h2>A digital jack of all trades, focusing on the human experience.</h2>
          <Link href="/about/about">
            <p>you can learn more about me here.</p>
          </Link>
        </div>
      </div>
      {/* socials and menu */}
      <div className={styles.farRight}>
        <DropdownMenu></DropdownMenu>
        {/* socials */}
        <div className={styles.socialCon}>
          <div className={styles.social}>
            <Image
              className={styles.icon}
              src="/Images/email.png"
              alt="Picture of the author"
              height="38px"
              width="38px"
            ></Image>
          </div>
          <div className={styles.social}>
            <Image
              className={styles.icon}
              src="/Images/linkedin.png"
              alt="Picture of the author"
              height="38px"
              width="38px"
            ></Image>
          </div>
          <div className={styles.social}>
            <Image
              className={styles.icon}
              src="/Images/behance.png"
              alt="Picture of the author"
              height="38px"
              width="38px"
            ></Image>
          </div>
          <div className={styles.social}>
            <Image
              className={styles.icon}
              src="/Images/dribbble.png"
              alt="Picture of the author"
              height="38px"
              width="38px"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
