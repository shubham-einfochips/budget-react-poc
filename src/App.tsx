import { Container } from 'react-bootstrap';
import MainHeader from './components/ui/MainHeader';
import DisplayBalance from './components/ui/DisplayBalance';
import DisplayBalances from './components/ui/DisplayBalances';
import TableHeader from './components/ui/TableHeader';
import EntryLine from './components/ui/EntryLine';

function App() {
  return (
    <>
      <Container className='mt-1'>
        <MainHeader title='Budget' asType='h1' customClass='mb-4' />
        <DisplayBalance title='YOUR BALANCE' value='2,900.50' />

        <DisplayBalances />
        <MainHeader title='History' asType='h4' />

        <MainHeader title='Add New Transaction' asType='h2' />
        <Container>
          <TableHeader>
            <EntryLine description='Income' value='$2039.50' isExpense={true} />
            <EntryLine
              description='Expense'
              value='$2039.50'
              isExpense={true}
            />
          </TableHeader>
        </Container>
      </Container>
    </>
  );
}

export default App;
