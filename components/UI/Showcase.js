import styles from "@/styles/components/Showcase.module.css";

function Showcase(props) {
  return <div className={styles.showcase}>{props.children}</div>;
}

export default Showcase;
