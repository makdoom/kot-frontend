import { useLocation } from "react-router-dom";

import MasterHeader from "./MasterHeader";
import GridTable from "@/components/GridTable";
import { columns } from "@/components/GridTable/Columns";

const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4sdmnfasda akjsdhfa sdjhfas dfjahsd fajshdf",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    status1: "test",
    status2: "test2",
    status3: "status3",
    status4: "status4",
  },
];

const Master = () => {
  const { pathname } = useLocation();
  const formName = pathname?.split("/")?.at(-1);

  return (
    <div className="h-full p-4 flex flex-col">
      <MasterHeader formName={formName} />

      <div className="my-3 flex-1 ">
        <GridTable data={data} columns={columns} />
      </div>
    </div>
  );
};
export default Master;
