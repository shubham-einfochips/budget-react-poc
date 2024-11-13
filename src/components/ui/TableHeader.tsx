import { Card, Table } from 'react-bootstrap';

const TableHeader = (props: any) => {
  return (
    <Card body className='mt-4 mb-4'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Entry</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{props?.children}</tbody>
      </Table>
    </Card>
  );
};

export default TableHeader;
