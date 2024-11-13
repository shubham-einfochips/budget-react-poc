import { Container } from 'react-bootstrap';
import MainHeader from './components/ui/MainHeader';
import DisplayBalance from './components/ui/DisplayBalance';
import DisplayBalances from './components/ui/DisplayBalances';
import TableHeader from './components/ui/TableHeader';
import { useEffect, useState } from 'react';
import EntryLines from './components/ui/EntryLines';
import NewEntryForm from './components/ui/NewEntryForm';
import ModalEdit from './components/ui/ModalEdit';

function App() {
  const [entries, setEntries] = useState<any>(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isIncome, setIsIncome] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  const [entityId, setEntityId] = useState<any>();

  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;

    entries?.forEach((item: any) => {
      const value = parseFloat(item?.value);

      if (item?.isExpense) {
        totalExpenses += !isNaN(value) ? value : 0;
      } else {
        totalIncomes += !isNaN(value) ? value : 0;
      }
      setTotal(totalIncomes - totalExpenses);
      setIncomeTotal(totalIncomes);
      setExpenseTotal(totalExpenses);
    });
  }, [entries]);

  useEffect(() => {
    if (!isOpen && entityId) {
      const index = entries?.findIndex((item: any) => item?.id === entityId);
      const newEntry = [...entries];
      if (newEntry) {
        newEntry[index].description = description;
        newEntry[index].value = value;
        newEntry[index].isExpense = isIncome;
        setEntries(newEntry);
        resetEntry();
      }
    }
  }, [isOpen]);

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsIncome(false);
  };

  const deleteEntry = (id: {}) => {
    const result = entries?.filter((item: any) => item.id !== id);
    setEntries(result);
  };

  const addEntry = (
    description: string,
    value: string | number,
    expense: boolean
  ) => {
    const result = entries?.concat({
      id: entries?.length + 1,
      description: description,
      value: value,
      isExpense: expense,
    });
    setEntries(result);
    resetEntry();
  };

  const editEntry = (id: number | string) => {
    if (id) {
      setEntityId(id);
      const index = entries?.findIndex((item: any) => item.id === id);
      const entry = entries[index];
      setIsOpen(true);
      setDescription(entry?.description);
      setValue(entry?.value);
      setIsIncome(entry?.isExpense);
    }
  };
  return (
    <>
      <Container className='mt-1'>
        <MainHeader title='Budget' asType='h1' customClass='mb-4' />
        <DisplayBalance title='YOUR BALANCE' value={total} />

        <DisplayBalances
          totalIncome={incomeTotal}
          totalExpense={expenseTotal}
        />
        <MainHeader title='History' asType='h4' />

        <MainHeader title='Add New Transaction' asType='h2' />
        <Container>
          <TableHeader>
            <EntryLines
              entries={entries}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
            />
          </TableHeader>
        </Container>
        <NewEntryForm
          addEntry={addEntry}
          description={description}
          value={value}
          isIncome={isIncome}
          setDescription={setDescription}
          setValue={setValue}
          setIsIncome={setIsIncome}
        />
        <ModalEdit
          isOpen={isOpen}
          setIsOpenModal={setIsOpen}
          addEntry={addEntry}
          description={description}
          value={value}
          isIncome={isIncome}
          setDescription={setDescription}
          setValue={setValue}
          setIsIncome={setIsIncome}
        />
      </Container>
    </>
  );
}

export default App;

const initialEntries = [
  {
    id: 1,
    description: 'Home income',
    value: '2000',
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water Bill',
    value: '3000',
    isExpense: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: '1000',
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: '5000',
    isExpense: true,
  },
];
