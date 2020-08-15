import Head from "next/head";
import Hamburger from "components/Hamburger";
import styles from "components/layout.module.scss";
import Link from "next/link";
import { poeRavenPath, ravenPath } from "util/constants";

const name = "Andrew Poe";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href={ravenPath} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Link href="/">
        <a className={styles.headerAnchor}>
          <img src={poeRavenPath} alt={name} />
        </a>
      </Link>
      <Hamburger className={styles.hamburgerPosition} />
      <div className={styles.body}>
        <main>{children}</main>
      </div>
    </div>
  );
}
