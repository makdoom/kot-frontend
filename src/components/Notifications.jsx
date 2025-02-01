import { useState } from "react";
import { Button } from "./ui/button";
import { BellIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  return (
    <div className="flex space-x-4 items-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <BellIcon className="w-6 h-6 text-gray-700" />
            {notifications.length > 0 && (
              <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          side="bottom"
          className="w-80 max-h-96 overflow-scroll p-4 bg-white shadow-lg rounded-lg"
        >
          <div className="space-y-2">
            {notifications.length === 0 ? (
              <p className="my-8 text-center text-muted-foreground text-sm">
                No new notifications
              </p>
            ) : (
              notifications.map((notification, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {notification}
                </div>
              ))
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
export default Notifications;
