import { Logo, Navigation, UserNav } from '@/components/'
import { Search } from '@/atoms/'

export const Aside = () => {
  return (
    <aside className='bg-[#e7e7e7] h-screen flex flex-col w-[336px]'>
      <div className='flex items-center justify-between px-4 pt-5 pb-5'>
        <Logo />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5 22C3.34315 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5ZM4 5C4 4.44772 4.44772 4 5 4H8V20H5C4.44772 20 4 19.5523 4 19V5ZM10 20V4H19C19.5523 4 20 4.44772 20 5V19C20 19.5523 19.5523 20 19 20H10Z" fill="#131313"/>
        </svg>
      </div>

      <Search />
      <Navigation />
      <hr />
      <div className='bg-white h-56 rounded-lg mx-4'></div>
      <UserNav />
    </aside>
  )
}
