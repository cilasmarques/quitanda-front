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
    authFlag: [null, "user", "admin"],
  },
  {
    name: "Perfil",
    route: user ? `/perfil/${user.username}` : "perfil",
    icon: FaUserTie,
    authFlag: ["user"],
  },
  {
    name: "Usuários",
    route: "/usuarios",
    icon: FaUsers,
    authFlag: ["admin"],
  },
];

export default SidebarItems;
