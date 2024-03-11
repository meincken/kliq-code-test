import styles from './Breadcrumb.module.css'

export const Breadrumb = () => {
  return (
    <ul className={styles.breadcrumb}>
      <li>Home</li>
      <li>App Settings</li>
      <li>Promotions</li>
    </ul>
  )
}
