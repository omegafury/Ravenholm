import styles from "components/layout.module.scss";
import { useState, useDispatch } from "components/ContextProvider";
import utilStyles from "styles/utils.module.css";
import Link from "next/link";
import { useCallback } from "react";
import { toggleHamburger } from "util/actions/hamburgerActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GITHUB_LINK, LINKEDIN_LINK, EMAIL_LINK } from "util/constants";

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
        <h2 className={utilStyles.heading2Xl}>Navigation</h2>
        <hr></hr>
        <ul className={utilStyles.list}>
          <li>
            <Link href="/about" as={`/about`}>
              <a className={utilStyles.headingLg} onClick={onClick}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/projects" as={`/projects`}>
              <a className={utilStyles.headingLg} onClick={onClick}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" as={`/contact`}>
              <a className={utilStyles.headingLg} onClick={onClick}>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/posts/first-post" as={`/posts/first-post`}>
              <a className={utilStyles.headingLg} onClick={onClick}>
                First Post
              </a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.navMenuMyInfo}>
        <ul className={utilStyles.list}>
          <li>
            <a href={`mailto: ${EMAIL_LINK}`}>
              <FontAwesomeIcon icon={["far", "envelope"]} size="1x" />
              {EMAIL_LINK}
            </a>
          </li>
          <li>
            <FontAwesomeIcon
              icon={["far", "arrow-alt-circle-down"]}
              size="1x"
            />
            Download My Resume
          </li>
          <li className={styles.social}>
            <a href={GITHUB_LINK}>
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <a href={LINKEDIN_LINK}>
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
