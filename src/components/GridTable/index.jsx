import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { ViewOptions } from "./ViewOptions";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";

const GridTable = ({ data, columns }) => {
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 20 });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    state: {
      sorting,
      rowSelection,
      pagination,
    },
  });
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center flex-row">
        <Input
          type="search"
          name="search"
          autoFocus
          placeholder="Search ..."
          className="text-sm w-[250px] h-9 font-normal"
          // value={form.email}
          // onChange={handleChange}
        />
        <ViewOptions table={table} />
      </CardHeader>
      <CardContent className="relative flex">
        <div className="rounded-md border relative h-[calc(100vh-300px)] w-[calc(100vw-600px)] overflow-x-scroll flex-1">
          <Table className="overflow-y-hidden">
            <TableHeader className="sticky top-0 bg-gray-100 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="!h-[25px]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="p-1 px-2 text-xs !h-[25px]"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="hover:bg-white">
                  <TableCell
                    colSpan={columns.length}
                    className="h-full text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      <CardFooter className="w-full">
        <Pagination table={table} />
      </CardFooter>
    </Card>
  );
};
export default GridTable;
