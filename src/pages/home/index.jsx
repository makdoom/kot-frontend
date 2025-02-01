import AppSidebar from "@/components/AppSidebar";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";

const Home = () => {
  return (
    <div className="bg-[#fefefe] h-screen w-screen ">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <Header />
          <h1>compoenent</h1>
        </main>
      </SidebarProvider>
    </div>
  );
};
export default Home;
