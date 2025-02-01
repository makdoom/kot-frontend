import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main>
      <Outlet /> {/* Renders the current page */}
    </main>
  );
};
export default AppLayout;
