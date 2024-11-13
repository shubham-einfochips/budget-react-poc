import { CardHeader, CardTitle } from 'react-bootstrap';

interface IProps {
  title: string;
  asType?: any;
  customClass?: string;
}

const MainHeader = ({ title, asType, customClass = '' }: IProps) => {
  return (
    <CardHeader>
      <CardTitle as={asType} className={customClass}>
        {title}
      </CardTitle>
    </CardHeader>
  );
};

export default MainHeader;
