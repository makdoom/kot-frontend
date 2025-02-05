import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="bg-[#fefefe] h-screen w-screen">
      <Toaster position="top-center" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
