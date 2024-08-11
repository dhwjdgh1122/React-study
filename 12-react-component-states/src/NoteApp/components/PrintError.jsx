import { array } from 'prop-types';
import './PrintError.css';

PrintError.propTypes = {
  children: array.isRequired,
};

function PrintError({ children }) {
  return (
    <p role="alert" className="PrintError">
      {children}
    </p>
  );
}

export default PrintError;
