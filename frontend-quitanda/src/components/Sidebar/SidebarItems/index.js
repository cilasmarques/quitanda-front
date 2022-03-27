import { MdDashboard } from "react-icons/md";
import { FaUsers, FaUserTie } from "react-icons/fa";

// ENUMS
import { LocalStorageKeys } from "../../../enums/local-storage-keys-enum";
const user = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));

const SidebarItems = [
  {
    name: "Perfil",
    route: user ? `/perfil/${user.user}` : "/perfil",
    icon: FaUserTie,
    rolePermission: ["user"],
  },
  {
    name: "Usuários",
    route: "/usuarios",
    icon: FaUsers,
    rolePermission: ["admin"],
  },
];

export default SidebarItems;
