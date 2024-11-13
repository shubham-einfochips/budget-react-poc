import { Col, Form, Row } from 'react-bootstrap';
import ButtonSaveCancel from './ButtonSaveCancel';

const NewEntryForm = () => {
  return (
    <>
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
        <ButtonSaveCancel />
      </Form>
    </>
  );
};

export default NewEntryForm;
