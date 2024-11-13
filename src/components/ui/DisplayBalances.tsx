import { Card, Col, Row } from 'react-bootstrap';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
  return (
    <>
      <Card body className='mt-4 mb-4'>
        <Row>
          <Col>
            <DisplayBalance title='INCOME' value='2,900.50' color='success' />
          </Col>
          <Col>
            <DisplayBalance title='EXPENSE' value='2,900.50' color='danger' />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default DisplayBalances;
