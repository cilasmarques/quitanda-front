import { MdDashboard } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";

// ENUMS
import { LocalStorageKeys } from "../../../enums/local-storage-keys-enum";
const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));

const SidebarItems = [
  {
    name: "Dashboard",
    route: "/",
    icon: MdDashboard,
  },
  {
    name: "Perfil",
    route: (user ? `/perfil/${user.username}` : 'perfil'),
    icon: FaUserTie,
  },
  {
    name: "Usuários",
    route: "/usuarios",
    icon: FaUsers,
  },
];

export default SidebarItems;
