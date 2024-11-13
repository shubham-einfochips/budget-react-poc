import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface IProps {
  description: string;
  value: string | number;
  isExpense?: boolean;
}

const EntryLine = ({ description, value, isExpense = false }: IProps) => {
  return (
    <>
      <tr className={isExpense ? 'bg-danger' : ''}>
        <td>{description}</td>
        <td>{value}</td>
        <td>
          <FaRegEdit className='mx-2' />
          <MdDelete className='mx-2' />
        </td>
      </tr>
    </>
  );
};

export default EntryLine;
