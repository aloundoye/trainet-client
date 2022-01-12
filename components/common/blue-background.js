import styles from '@/styles/components/BlueBackground.module.css'

export default function BlueBackground(props){
    return <div className={styles.blue}>{props.children}</div>
}