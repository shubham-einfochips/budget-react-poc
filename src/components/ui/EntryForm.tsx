import { Col, Form, Row } from 'react-bootstrap';

interface IProps {
  description: string;
  value: any;
  isIncome: boolean;
  setDescription: (value: string) => void;
  setValue: (value: any) => void;
  setIsIncome: (value: boolean) => void;
}

const EntryForm = ({
  description,
  value,
  isIncome,
  setDescription,
  setValue,
  setIsIncome,
}: IProps) => {
  const handleToggleChange = () => {
    setIsIncome(!isIncome);
  };
  return (
    <>
      <Row>
        <Col md={6} className='mb-3'>
          <Form.Group controlId='formDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter description'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3} className='mb-3'>
          <Form.Group controlId='formDescriptionValue'>
            <Form.Label>Value</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Value'
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col md={6}>
          <Form.Group controlId='incomeExpenseToggle'>
            <Form.Check
              type='switch'
              id='incomeExpenseSwitch'
              label={isIncome ? 'Income' : 'Expense'}
              checked={isIncome}
              onChange={handleToggleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default EntryForm;
