import * as React from "react";

import { cn } from "@/lib/utils";
import { Eye } from "lucide-react";
import { useState } from "react";
import { EyeOff } from "lucide-react";

const Input = React.forwardRef(
  ({ className, type, isPassword = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div
        className={cn(
          isPassword &&
            "group flex items-center space-x-2 border rounded-md focus-within:border-primary focus-visible:ring-1 focus-visible:ring-ring"
        )}
      >
        <input
          type={isPassword && showPassword ? "text" : type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
            isPassword &&
              "border-0 rounded-tr-none rounded-br-none outline-none shadow-none focus-within:ring-0 focus-visible:ring-0",
            className
          )}
          ref={ref}
          {...props}
        />
        {isPassword && (
          <div
            className={cn("cursor-pointer", isPassword && "px-2")}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="size-5 text-muted-foreground" />
            ) : (
              <Eye className="size-5 text-muted-foreground" />
            )}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
