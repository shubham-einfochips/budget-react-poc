import { Button } from 'react-bootstrap';
interface Iprops {
  addEntry: (description: string, value: number, expense: boolean) => void;
  description: string;
  value: any;
  clearValue: () => void;
  expense: boolean;
  setIsOpenModal?: (value: boolean) => void;
}
const ButtonSaveCancel = ({
  addEntry,
  description,
  value,
  expense,
  clearValue,
  setIsOpenModal = () => {},
}: Iprops) => {
  const handleOkClick = () => {
    if (description && value) {
      addEntry(description, value, expense);
      clearValue();
    }
  };

  const handleCancelClick = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <Button
        variant='primary'
        className='mt-1 mx-2'
        onClick={handleCancelClick}
      >
        Cancel
      </Button>
      <Button variant='success' className='mt-1 mx-2' onClick={handleOkClick}>
        Ok
      </Button>
    </>
  );
};

export default ButtonSaveCancel;
