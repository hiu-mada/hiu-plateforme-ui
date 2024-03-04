import Link from "next/link";
import { TableCell } from "../ui/table";
import { TableRowData } from "../utils/type";
import { Button } from "../ui/button";

interface Props {
  data: TableRowData;
}

const TableRowComponent: React.FC<Props> = ({ data }) => {
  const { id, response, commentary, id_challenger_team, id_subject } = data;

  return (
    <tr className="hover:bg-gray-100 dark:hover:bg-gray-800">
      <TableCell>{id}</TableCell>
      <TableCell>{response}</TableCell>
      <TableCell>{commentary}</TableCell>
      <TableCell>{`${id_challenger_team.id} - ${id_challenger_team.name} - ${id_challenger_team.slogan}`}</TableCell>
      <TableCell>{`${id_challenger_team.id_university.id} - ${id_challenger_team.id_university.name} - ${id_challenger_team.id_university.description}`}</TableCell>
      <TableCell>{`${id_challenger_team.id_discipline.id} - ${id_challenger_team.id_discipline.name} - ${id_challenger_team.id_discipline.description}`}</TableCell>
      <TableCell>{`${id_subject.id} - ${id_subject.title} - ${id_subject.description}. Maximum Score: ${id_subject.max_score}`}</TableCell>
      <TableCell>
        <Link href={`/admin/response/${id}`} className="text-blue-600 hover:underline" passHref>
          <Button>
          View Details
          </Button>
        </Link>
      </TableCell>
    </tr>
  );
};

export default TableRowComponent;
