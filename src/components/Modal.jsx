import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ handleFormSubmit }) => {

  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(expense && amount) {
      handleFormSubmit({expense, amount});

      setExpense('');
      setAmount('');
    }

  }

  return (
    <>
      <div className="rounded bg-zinc-950 w-fit border border-green-500 z-10 absolute">
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-80 min-h-80 justify-center items-center"
        >
          <div className="flex flex-col">
            <label htmlFor="expense">Expense</label>
            <input
              type="text"
              name="expense"
              placeholder="Food"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              className="w-60 h-10 rounded outline-green-500 bg-zinc-900 p-2"
            />
          </div>

          <br />

          <div className="flex flex-col">
            <label htmlFor="Amount">Amount</label>
            <input
              type="number"
              name="Amount"
              placeholder="50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-60 h-10 rounded outline-green-500 bg-zinc-900 p-2"
            />
          </div>

          <br />

          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
};

Modal.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
}

export default Modal;
