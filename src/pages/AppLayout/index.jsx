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

          <div className="bg-[#f8f8f8] h-[calc(100vh-61px)]">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};
export default AppLayout;
