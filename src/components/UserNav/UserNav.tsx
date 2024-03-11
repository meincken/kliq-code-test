import { NavItem } from "@/atoms"

export const UserNav = () => {
  return (
    <ul>
      <NavItem active={false} icon={`settings-02`} item={`Setting`} />
      <NavItem active={true} icon={`user-circle`} item={`User Name`} />
    </ul>
  )
}
