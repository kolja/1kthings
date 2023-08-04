import { MdHome, MdEventSeat } from "react-icons/md";

const Menu = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-16 flex flex-row bg-slate-400 text-amber-200 shadow-lg z-10">
      <MenuIcon icon={<MdHome size="28"/>} />
      <MenuIcon icon={<MdEventSeat size="28"/>} />
      <MdHome className="h-20"/>
    </div>
  )
}

const MenuIcon = ({ icon }) => (
  <div className="menu-icon group">
    <div className="group-hover:h-10 group-hover:w-10">{icon}</div>
  </div>

);

export default Menu;
