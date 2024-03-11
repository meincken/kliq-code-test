import styles from './Button.module.css'

export const Button = ({ title }: {title: string}) => {
  return (
    <button className={styles.btn}>
      {title}
    </button>
  )
}
