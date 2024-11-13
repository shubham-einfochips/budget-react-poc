interface IProps {
  title: string;
  value: number | string;
  color?: string;
}

const DisplayBalance = ({ title, value, color }: IProps) => {
  return (
    <>
      <label className='fw-b'>{title}</label>
      <h3 className={`text-${color}`}>{value}</h3>
    </>
  );
};

export default DisplayBalance;
