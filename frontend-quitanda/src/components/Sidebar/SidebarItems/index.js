import { FaUsers, FaUserTie } from "react-icons/fa";

// ENUMS
import { LocalStorageKeys } from "../../../enums/local-storage-keys-enum";

let profilePath = '/perfil'
const userData = JSON.parse(localStorage.getItem(LocalStorageKeys.USER));
if (userData) {
  profilePath = `/perfil/${userData.user.username}`
} 

const SidebarItems = [
  {
    name: "Perfil",
    route: `${profilePath}`,
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
