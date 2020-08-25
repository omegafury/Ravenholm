import styles from "components/layout.module.scss";
import { useState, useDispatch } from "components/ContextProvider";
import utilStyles from "styles/utils.module.css";
import Link from "next/link";
import { useCallback } from "react";
import { toggleHamburger } from "util/actions/hamburgerActions";

export default function NavMenu() {
  const dispatch = useDispatch();
  const { hamburger: state } = useState();
  const isOpen = state.isOpen;
  const navMenuClassName = isOpen
    ? `${styles.navMenu} ${styles.isOpen}`
    : `${styles.navMenu}`;
  const onClick = useCallback(() => {
    dispatch(toggleHamburger());
  }, []);
  return (
    <div className={navMenuClassName}>
      <section className={styles.navMenuNavSection}>
        <h2 className={utilStyles.headingLg}>Navigation</h2>
        <ul className={utilStyles.list}>
          <li>
            <Link href="/about" as={`/about`}>
              <a onClick={onClick}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/projects" as={`/projects`}>
              <a onClick={onClick}>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as={`/contact`}>
              <a onClick={onClick}>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post" as={`/posts/first-post`}>
              <a onClick={onClick}>First Post</a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.navMenuMyInfo}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </div>
  );
}
