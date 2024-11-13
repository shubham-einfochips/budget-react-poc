import { Form } from 'react-bootstrap';
import ButtonSaveCancel from './ButtonSaveCancel';
import EntryForm from './EntryForm';

interface IProps {
  addEntry: (description: string, value: number, expense: boolean) => void;
  setIsOpenModal?: (value: boolean) => void;
  description: string;
  value: any;
  isIncome: boolean;
  setDescription: (value: string) => void;
  setValue: (value: any) => void;
  setIsIncome: (value: boolean) => void;
}
const NewEntryForm = ({
  addEntry,
  setIsOpenModal = () => {},
  description,
  value,
  isIncome,
  setDescription,
  setValue,
  setIsIncome,
}: IProps) => {
  const clearValue = () => {
    setDescription('');
    setValue('');
  };

  return (
    <>
      <Form>
        <EntryForm
          description={description}
          value={value}
          isIncome={isIncome}
          setDescription={setDescription}
          setValue={setValue}
          setIsIncome={setIsIncome}
        />
        <ButtonSaveCancel
          addEntry={addEntry}
          description={description}
          value={value}
          clearValue={clearValue}
          expense={isIncome}
          setIsOpenModal={setIsOpenModal}
        />
      </Form>
    </>
  );
};

export default NewEntryForm;
