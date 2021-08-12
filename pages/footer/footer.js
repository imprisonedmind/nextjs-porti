import Link from 'next/link'
import Image from 'next/image'
import styles from '../footer/footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.divCon}>
                <h1>Navigation</h1>
                <ul>
                    <Link href="/"><li><p>Home</p></li></Link>
                    <Link href="/myWork/myWork"><li><p>Work</p></li></Link>
                    <Link href="/about/about"><li><p>About</p></li></Link>
                    <a target="_blank" href="https://medium.com/@LukeStephens"><li><p>Blog</p></li></a>
                    <Link href="/products/products"><li><p>Products</p></li></Link>
                </ul>
            </div>
            <div className={styles.divCon}>
                <h1>Socials </h1>
                <ul>
                    <a target="_blank" href="https://dribbble.com/LukeStephens"><li><p>Dribble</p></li></a>
                    <a target="_blank" href="https://www.behance.net/lukestephens"><li><p>Behance</p></li></a>
                    <a target="_blank" href="https://www.instagram.com/sekkul/"><li><p>Instagram</p></li></a>
                    <a target="_blank" href="https://www.linkedin.com/in/luke-stephens-za/"><li><p>LinkedIn</p></li></a>
                </ul>
            </div>

            <div className={styles.middleDiv}>
                <Image
                    src="/Images/feet.png"
                    layout="fill"
                ></Image>
            </div>
            <div className={styles.divCon}>
                <h1>Contact</h1>
                <ul>
                    <Link href=""><li><p>contact@lukestephens.co.za</p></li></Link>
                    <Link href=""><li><p>+44 7561 189 402</p></li></Link> 
                </ul>
            </div>
            <div id={styles.farRight} className={styles.divCon}>
                <h1>Other </h1>
                <ul>
                    <a target="_blank" href="https://luke-portfolio-64b54.firebaseapp.com/"><li><p>2020 Portfolio</p></li></a>
                    <Link href=""><li><p>Collected Links</p></li></Link>
                </ul>
            </div>
        </div>
    )
}   