import { Button } from 'react-bootstrap';

const ButtonSaveCancel = () => {
  return (
    <>
      <Button variant='primary' className='mt-1 mx-2'>
        Cancel
      </Button>
      <Button variant='success' className='mt-1 mx-2'>
        Ok
      </Button>
    </>
  );
};

export default ButtonSaveCancel;
