import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/nav.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navMain}>
      <ul>
        <Link href="/">
          <li>
            <div>
              <Image
                src="/Images/emojis/house.png"
                layout="fill"
              ></Image>
            </div>
            <p>Home</p>
          </li>
        </Link>
        
        <Link href="/about/about">
          <li>
            <div>
              <Image
                src="/Images/emojis/student.png"
                layout="fill"
              ></Image>
            </div>
            <p>About</p>
          </li>
        </Link>

        <Link href="/myWork/myWork">
          <li>
            <div>
              <Image
                src="/Images/emojis/mac.png"
                layout="fill"
              ></Image>
            </div>
            <p>Work</p>
          </li>
        </Link>

        <li>
        <a className={styles.blogLi} target="_blank" href="https://medium.com/@LukeStephens">
            <div>
              <Image
                src="/Images/emojis/book.png"
                layout="fill"
              ></Image>
            </div>
            <p>Blog</p>
        </a>
        </li>

        <Link href="/products/products">
          <li>
            <div>
              <Image
                src="/Images/emojis/box.png"
                layout="fill"
              ></Image>
            </div>
            <p>Products</p>
          </li>
        </Link>

      </ul>
    </div>
  );
}
