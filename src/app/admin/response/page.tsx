"use client"

import TableRowComponent from "@/components/admin/TableRow";
import { mockData } from "@/components/mock/ResponseMock";
import { TableHead, TableHeader, TableBody, Table, TableRow } from "@/components/ui/table";
import { TableRowData } from "@/components/utils/type";



const Response: React.FC = () => {
  const rowdata = mockData;
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12 px-4 py-2 text-left text-sm font-normal">ID</TableHead>
          <TableHead className="w-2/12 px-4 py-2 text-left text-sm font-normal">Response</TableHead>
          <TableHead className="w-3/12 px-4 py-2 text-left text-sm font-normal">Commentary</TableHead>
          <TableHead className="w-4/12 px-4 py-2 text-left text-sm font-normal">Challenger</TableHead>
          <TableHead className="w-5/12 px-4 py-2 text-left text-sm font-normal">University</TableHead>
          <TableHead className="w-6/12 px-4 py-2 text-left text-sm font-normal">Discipline</TableHead>
          <TableHead className="w-7/12 px-4 py-2 text-left text-sm font-normal">Subject</TableHead>
          <TableHead className="w-8/12 px-4 py-2 text-left text-sm font-normal">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((rowData) => (
          <TableRowComponent key={rowData.id} data={rowData} />
        ))}
      </TableBody>
    </Table>
  );
};

export default Response;
