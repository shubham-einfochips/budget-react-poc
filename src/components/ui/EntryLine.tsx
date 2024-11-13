import { Fragment } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

interface IEntryProps {
  id: number;
  description: string;
  value: string | number;
  isExpense?: boolean;
}
interface IProps {
  entry: IEntryProps;
  deleteEntry: (id: {}) => void;
  editEntry: (id: {}) => void;
}

const EntryLine = ({
  entry: { id, description, value, isExpense = false },
  deleteEntry,
  editEntry,
}: IProps) => {
  const handleDelete = (id: number | string) => {
    deleteEntry(id);
  };

  const handleEdit = (id: any) => {
    editEntry(id);
  };
  return (
    <Fragment>
      <tr className={isExpense ? 'bg-danger' : ''} key={id}>
        <td>{description}</td>
        <td>{value}</td>
        <td>
          <FaRegEdit
            className='mx-2 cursor-pointer'
            onClick={() => handleEdit(id)}
          />
          <MdDelete
            className='mx-2 cursor-pointer'
            onClick={() => handleDelete(id)}
          />
        </td>
      </tr>
    </Fragment>
  );
};

export default EntryLine;
