import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="bg-[#fefefe] h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
