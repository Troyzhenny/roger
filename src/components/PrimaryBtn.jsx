import add from '/add.svg';
import PropTypes from 'prop-types';

const PrimaryBtn = ({ handleModalView }) => {
  return (
    <>
        <button className="font-bold h-8 w-auto justify-center rounded-full flex items-center gap-1" onClick={handleModalView}>
          Expense
          <img src={add} alt="icon" className='w-3'/>
        </button>
    </>
  )
};

PrimaryBtn.propTypes = {
  handleModalView: PropTypes.func.isRequired
}

export default PrimaryBtn;
