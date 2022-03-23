import { MdDashboard } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";

// ENUMS
import { LocalStorageKeys } from "../../../enums/local-storage-keys-enum";
console.log(localStorage.getItem(LocalStorageKeys.USER));

const SidebarItems = [
  {
    name: "Dashboard",
    route: "/",
    icon: MdDashboard,
  },
  {
    name: "Perfil",
    route: `/perfil/${JSON.parse(localStorage.getItem(LocalStorageKeys.USER)).username}`,
    icon: FaUserTie,
  },
  {
    name: "Usuários",
    route: "/usuarios",
    icon: FaUsers,
  },
];

export default SidebarItems;
