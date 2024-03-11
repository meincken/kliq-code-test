import { NavItem } from "@/atoms"

export const UserNav = () => {
  return (
    <ul className="mt-[100%]">
      <NavItem icon={`settings-02`} item={`Setting`} />
      <NavItem icon={`user-circle`} item={`User Name`} />
    </ul>
  )
}
