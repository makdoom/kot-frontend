import Notifications from "./Notifications";
import { SidebarTrigger } from "./ui/sidebar";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <div className="p-4 bg-white flex items-center justify-between w-full border-b">
      <div className="flex items-center space-x-3">
        <SidebarTrigger />
        <h3 className="font-bold text-xl">Dashboard</h3>
      </div>

      <div className="flex items-center space-x-3">
        <Notifications />
        <UserProfile />
      </div>
    </div>
  );
};
export default Header;
