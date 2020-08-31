import Hamburger from "components/layout/Hamburger";
import NavMenu from "components/layout/NavMenu";
import styles from "components/layout/layout.module.scss";
import { POE_RAVEN_PATH, RAVEN_PATH } from "util/constants";
import Footer from "components/layout/Footer";
import Head from "next/head";
import Link from "next/link";

const siteTitle = "Ravenholm";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={RAVEN_PATH} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>{siteTitle}</title>
      </Head>
      <Link href="/">
        <a className={styles.homeAnchor}>
          <img src={POE_RAVEN_PATH} alt={"home"} />
        </a>
      </Link>
      <Hamburger className={styles.hamburgerPosition} />
      <NavMenu />
      <div className={styles.body}>{children}</div>
      <Footer />
    </div>
  );
}
