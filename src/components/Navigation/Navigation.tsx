import { NavItem } from "@/atoms"

export const Navigation = () => {
  return (
    <ul>
      <NavItem icon={`grid-01`} item={`Dashboard`} />
      <NavItem icon={`book-open-01`} item={`Sessions`} />
      <NavItem icon={`announcement-01`} item={`Programs`} />
      <NavItem icon={`server-03`} item={`Content Library`} />
      <NavItem icon={`folder-plus`} item={`Collections`} />
      <NavItem icon={`announcement-02`} item={`Community`} />
      <NavItem icon={`heart-hand`} item={`Nutrition`} />
      <NavItem icon={`file-02`} item={`Blog`} />
      <NavItem icon={`medical-cross`} item={`Help Center`} />
    </ul>
  )
}