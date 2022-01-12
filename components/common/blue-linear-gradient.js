import styles from "@/styles/components/BlueBackgroundGradient.module.css";

function BlueBackgroundGradient(props) {
  return <div className={styles.linear}>{props.children}</div>;
}

export default BlueBackgroundGradient;
