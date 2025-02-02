import { nanoid } from "nanoid";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ChevronDown } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { SquareLibrary } from "lucide-react";
import { Bolt } from "lucide-react";
import { BadgeIndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";

const menusList = [
  {
    id: nanoid(),
    name: "Dashboard",
    menuName: "dashboard",
    pathName: "/app",
    icon: <LayoutDashboard className="size-4" />,
    children: [],
  },
  {
    id: nanoid(),
    name: "Master",
    menuName: "master",
    pathName: "",
    icon: <SquareLibrary className="size-4" />,
    children: [
      {
        id: nanoid(),
        name: "Company",
        menuName: "company",
        pathName: "master/company",
      },
      {
        id: nanoid(),
        name: "Role",
        menuName: "role",
        pathName: "master/role",
      },
      {
        id: nanoid(),
        name: "User",
        menuName: "user",
        pathName: "master/user",
      },
      {
        id: nanoid(),
        name: "Table",
        menuName: "table",
        pathName: "master/table",
      },
      {
        id: nanoid(),
        name: "Menu Item",
        menuName: "menu-item",
        pathName: "master/menu-item",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Configuration",
    menuName: "configuration",
    icon: <Bolt className="size-4" />,
    pathName: "",
    children: [
      {
        id: nanoid(),
        name: "Role Menu Allocation",
        menuName: "role-menu-allocation",
        pathName: "configuration/role-menu-allocation",
      },
    ],
  },
  {
    id: nanoid(),
    name: "Transaction",
    menuName: "transaction",
    icon: <BadgeIndianRupee className="size-4" />,
    pathName: "",
    children: [
      {
        id: nanoid(),
        name: "KOT",
        menuName: "kot",
        pathName: "transaction/kot",
      },
      {
        id: nanoid(),
        name: "Billing",
        menuName: "billing",
        pathName: "transaction/billing",
      },
    ],
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const pathName = location.pathname?.split("/")?.at(-1);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3 flex items-center space-x-3 bg-white rounded-md">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <p className="text-lg font-bold text-white ">K</p>
          </div>
          <h3 className="text-xl font-bold">KOT</h3>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="bg-white rounded-md py-4 px-2">
            {menusList.map((item, index) =>
              item.children.length ? (
                <Collapsible
                  key={index}
                  defaultOpen
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className={cn("flex items-center")}>
                        <div className="flex items-center space-x-2">
                          {item.icon}
                          <p>{item.name}</p>
                        </div>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.children.map((subItem, subIndex) => (
                        <SidebarMenuSub key={subIndex}>
                          <SidebarMenuSubItem className="text-sm">
                            <SidebarMenuButton
                              className={cn(
                                "flex items-center p-0",
                                pathName == subItem.menuName &&
                                  "!bg-primary !text-white"
                              )}
                              isActive={pathName == subItem.menuName}
                            >
                              <Link
                                to={subItem.pathName}
                                className="flex items-center space-x-2 w-full p-2"
                              >
                                {subItem.name}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </CollapsibleContent>
                    <SidebarMenuAction />
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <div key={index}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={pathName == item.pathName}
                      className={cn(
                        "flex items-center p-0",
                        pathName == item.pathName.replace("/", "") &&
                          "!bg-primary !text-white"
                      )}
                    >
                      <Link
                        to={item.pathName}
                        className="flex items-center space-x-2 w-full p-2"
                      >
                        {item.icon}
                        <p>{item.name}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </div>
              )
            )}
            {/*  */}

            {/* <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    Master
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>Sub Master 1</SidebarMenuSubItem>
                  </SidebarMenuSub>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>Sub Master 2</SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
                <SidebarMenuAction />
              </SidebarMenuItem>
            </Collapsible> */}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
