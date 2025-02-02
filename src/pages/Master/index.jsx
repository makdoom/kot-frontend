import { useLocation } from "react-router-dom";

import MasterHeader from "./MasterHeader";

const Master = () => {
  const { pathname } = useLocation();
  const formName = pathname?.split("/")?.at(-1);

  return (
    <div className="h-full p-4">
      <MasterHeader formName={formName} />
    </div>
  );
};
export default Master;
