import { useLocation } from "react-router-dom";

import MasterHeader from "./MasterHeader";
import GridTable from "@/components/GridTable";
import { columnsCreator } from "@/components/GridTable/Columns";
import { useState } from "react";
import { useEffect } from "react";
import { formControls, formIdLookup } from "@/lib/controls";
import { toast } from "sonner";
import { formNameEndpointLookupResolver } from "@/lib/utils";
import { postRequest } from "@/config/api";
import { nanoid } from "nanoid";

// const data = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4sdmnfasda akjsdhfa sdjhfas dfjahsd fajshdf",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//     status1: "test",
//     status2: "test2",
//     status3: "status3",
//     status4: "status4",
//   },
// ];

// const data = [
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
//   {
//     role_id: 1,
//     role_name: "ADMIN",
//     role_desc: "Administrator",
//     rec_status: 1,
//     client_id: 1,
//   },
// ];

const Master = () => {
  const { pathname } = useLocation();

  const [data, setData] = useState([]);

  const formName = pathname?.split("/")?.at(-1);

  const [columnList, setColumnList] = useState([]);
  console.log(columnList);
  useEffect(() => {
    setColumnList(columnsCreator(formControls[formIdLookup[formName]]));
  }, [formName]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = formNameEndpointLookupResolver(formName, "list");
        console.log(url);
        const response = await postRequest(`/master/${url}`, {
          clientid: 1,
          locationid: 1,
          iMode: formName?.toUpperCase(),
          iSearchText: "",
        });
        if (response.success) {
          setData(response.data?.map((item) => ({ ...item, id: nanoid() })));
        }
      } catch (error) {
        toast.error(
          error.message || `Something went wrong while fetching ${formName}`
        );
      }
    };

    fetchData();
  }, [formName]);

  return (
    <div className="h-full p-4 flex flex-col">
      <MasterHeader formName={formName} />

      <div className="my-3 flex-1 ">
        <GridTable key={formName} data={data} columns={columnList} />
      </div>
    </div>
  );
};
export default Master;
