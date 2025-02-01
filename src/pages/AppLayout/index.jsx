import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="p-4">
      <Outlet /> {/* Renders the current page */}
    </main>
  );
};
export default AppLayout;
