import { Button, Modal } from 'react-bootstrap';
import { Fragment } from 'react/jsx-runtime';
import EntryForm from './EntryForm';

interface IProps {
  isOpen?: boolean;
  addEntry: (description: string, value: number, expense: boolean) => void;
  setIsOpenModal?: (value: boolean) => void;
  description: string;
  value: any;
  isIncome: boolean;
  setDescription: (value: string) => void;
  setValue: (value: any) => void;
  setIsIncome: (value: boolean) => void;
}
const ModalEdit = ({
  isOpen,
  setIsOpenModal = () => {},
  description,
  value,
  isIncome,
  setDescription,
  setValue,
  setIsIncome,
}: IProps) => {
  return (
    <Fragment>
      <Modal show={isOpen} onHide={() => setIsOpenModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EntryForm
            description={description}
            value={value}
            isIncome={isIncome}
            setDescription={setDescription}
            setValue={setValue}
            setIsIncome={setIsIncome}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={() => setIsOpenModal(!isOpen)}>
            Close
          </Button>
          <Button variant='primary' onClick={() => setIsOpenModal(!isOpen)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalEdit;
