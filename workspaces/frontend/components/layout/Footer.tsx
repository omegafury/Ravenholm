import styles from "components/layout/layout.module.scss";
import { GITHUB_LINK, LINKEDIN_LINK } from "util/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <span className={styles.footer}>
      <a href={GITHUB_LINK}>
        <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
      </a>
      <a href={LINKEDIN_LINK}>
        <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x" />
      </a>
      <FontAwesomeIcon icon={["far", "copyright"]} size="xs" />
      2020 Andrew Poe
    </span>
  );
}
