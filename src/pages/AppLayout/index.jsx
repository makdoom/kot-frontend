import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-[#fefefe] h-screen w-screen ">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header />

          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  );
};
export default AppLayout;
