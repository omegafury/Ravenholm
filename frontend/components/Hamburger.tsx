import styles from "components/layout.module.scss";

const onClick = (event: React.MouseEvent<HTMLElement>) => {
  event.currentTarget.classList.toggle(styles.change);
};

export default function Hamburger({ className }: { className?: string }) {
  return (
    <div className={`${className} ${styles.icon}`} onClick={onClick}>
      <div className={styles.hamburger}></div>
      <svg x="0px" y="0px" viewBox="0 0 50 50">
        <circle
          cx="25"
          cy="25"
          r="24"
          strokeDasharray="160 160"
          strokeDashoffset="160"
        />
      </svg>
    </div>
  );
}
