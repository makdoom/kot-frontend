import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { getRequest } from "@/config/api";

import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const { success } = await getRequest("/auth/logout");
      if (success) {
        localStorage.setItem("accessToken", "");
        navigate("/auth/login");
      } else {
        toast.error("Something went wrong while loggin out user");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="h-9 w-9 overflow-hidden rounded-md cursor-pointer">
          <img
            src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250"
            alt=""
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-white shadow-lg rounded-lg p-2">
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuItem className="text-red-500" onClick={logoutHandler}>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserProfile;
