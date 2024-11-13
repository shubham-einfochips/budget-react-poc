import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

function App() {
  return (
    <>
      <Container className='mt-1'>
        <h1>Bugdet</h1>
        <label>YOUR BALANCE</label>
        <h2>2,550.00</h2>
        <Card body className='mt-4'>
          <Row>
            <Col>
              <label className='fw-b'>INCOME</label>
              <h3 className='text-success'>10,45.50</h3>
            </Col>
            <Col>
              <label className='fw-b'>EXPENSE</label>
              <h3 className='text-warning'>623.50</h3>
            </Col>
          </Row>
        </Card>
        <h5 className='mt-4 fw-b'>History</h5>
        <Card body className='mt-4 mb-4'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Entry</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>something</td>
                <td>$1020</td>
                <td>
                  <FaRegEdit className='mx-2' />
                  <MdDelete className='mx-2' />
                </td>
              </tr>
              <tr>
                <td>something else</td>
                <td>$1020</td>
                <td>
                  <FaRegEdit className='mx-2' />
                  <MdDelete className='mx-2' />
                </td>
              </tr>
              <tr>
                <td>something</td>
                <td>$1020</td>
                <td>
                  <FaRegEdit className='mx-2' />
                  <MdDelete className='mx-2' />
                </td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <h2>Add New Transaction</h2>
        <Container>
          <Form>
            <Row>
              <Col md={6} className='mb-3'>
                <Form.Group controlId='formDescription'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' placeholder='Enter description' />
                </Form.Group>
              </Col>
              <Col md={3} className='mb-3'>
                <Form.Group controlId='formDescriptionValue'>
                  <Form.Label>Value</Form.Label>
                  <Form.Control type='text' placeholder='Enter Value' />
                </Form.Group>
              </Col>
            </Row>

            <Button variant='primary' className='mt-1 mx-2'>
              Cancel
            </Button>

            <Button variant='success' className='mt-1 mx-2'>
              Ok
            </Button>
          </Form>
        </Container>
      </Container>
    </>
  );
}

export default App;
