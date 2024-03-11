import styles from './NavItem.module.css'

export const NavItem = ({ item, icon }:{item: string, icon: string}) => {
  return (
    <li className={styles.list_item}>
      <svg className={styles.icon}>
        <use xlinkHref={`#${icon}`}></use>
      </svg>
      <span>{item}</span>
    </li>
  )
}