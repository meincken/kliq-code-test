export const NavItem = ({ item, icon, active }:{item: string, icon: string, active?: boolean}) => {
  return (
    <li className={`flex items-center p-2 px-5 hover:bg-[#DCDCDC] cursor-pointer ${active? 'bg-[#DCDCDC]':''}`}>
      <svg className={`w-5 h-5`}>
        <use xlinkHref={`#${icon}`}></use>
      </svg>
      <span className='pl-4'>{item}</span>
    </li>
  )
}
