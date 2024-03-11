import { Logo, Navigation, UserNav } from '@/components/'
import { Search } from '@/atoms/'
import style from './Aside.module.css'

export const Aside = () => {
  return (
    <aside className={style.aside}>
      <Logo />
      <Search />
      <Navigation />
      <hr />
      <UserNav />
    </aside>
  )
}