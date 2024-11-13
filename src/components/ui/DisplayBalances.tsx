import { Card, Col, Row } from 'react-bootstrap';
import DisplayBalance from './DisplayBalance';
interface IProps {
  totalIncome: any;
  totalExpense: any;
}
const DisplayBalances = ({ totalIncome, totalExpense }: IProps) => {
  return (
    <>
      <Card body className='mt-4 mb-4'>
        <Row>
          <Col>
            <DisplayBalance
              title='INCOME'
              value={totalIncome}
              color='success'
            />
          </Col>
          <Col>
            <DisplayBalance
              title='EXPENSE'
              value={totalExpense}
              color='danger'
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default DisplayBalances;
