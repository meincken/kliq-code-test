import styles from './Search.module.css'

export const Search = () => {
  return (
    <form className={styles.search}>
      <label htmlFor="default-search" className={styles.label}>Search</label>
      <div className={styles.input_group}>
        <div className={styles.icon_group}>
          <svg className={styles.icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>

        <input type="search" id="default-search" className={styles.input} placeholder="Search" required />

        <button type="submit" className={styles.button}>Search</button>
      </div>
    </form>
  )
}
