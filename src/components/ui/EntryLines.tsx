import EntryLine from './EntryLine';
interface IEntriesProps {
  id: number;
  description: string;
  value: string | number;
  isExpense?: boolean;
}
interface IProps {
  entries: IEntriesProps[];
  deleteEntry: (id: any) => void;
  editEntry: (id: any) => void;
}
const EntryLines = ({ entries, deleteEntry, editEntry }: IProps) => {
  return (
    <>
      {entries?.map((entryItem) => (
        <EntryLine
          key={entryItem.id}
          entry={entryItem}
          deleteEntry={deleteEntry}
          editEntry={editEntry}
        />
      ))}
    </>
  );
};

export default EntryLines;
