import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../styles/menu.module.scss";
import { useDetectOutsideClick } from "../../comps/menu/useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function menu() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      {/* menu ham */}
      <div className="menu-container">
        <div onClick={onClick} className="menu-trigger">
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* menu  */}
        <div
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <Link href="/about/about">
              <li>
                <div>
                  <Image
                    src="/../public/images/emojis/student.png"
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
                    src="/../public/images/emojis/mac.png"
                    layout="fill"
                  ></Image>
                </div>
                <p>Work</p>
              </li>
            </Link>
            <li className="blogMenu">
            <a target="_blank" href="https://medium.com/@LukeStephens">
             
                <div>
                  <Image
                    src="/../public/images/emojis/book.png"
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
                    src="/../public/images/emojis/box.png"
                    layout="fill"
                  ></Image>
                </div>
                <p>Products</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
