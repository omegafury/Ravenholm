import Head from "next/head";
import Hamburger from "components/Hamburger";
import NavMenu from "components/NavMenu";
import styles from "components/layout.module.scss";
import Link from "next/link";
import { POE_RAVEN_PATH, RAVEN_PATH } from "util/constants";

const name = "Andrew Poe";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={RAVEN_PATH} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Link href="/">
        <a className={styles.homeAnchor}>
          <img src={POE_RAVEN_PATH} alt={name} />
        </a>
      </Link>
      <Hamburger className={styles.hamburgerPosition} />
      <NavMenu />
      <div className={styles.body}>
        <main>{children}</main>
      </div>
    </div>
  );
}
