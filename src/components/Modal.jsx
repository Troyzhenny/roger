const Modal = () => {
  return (
    <>
      <div className="rounded w-fit border border-green-500">
        <form
          action="/"
          className="flex flex-col w-80 min-h-80 justify-center items-center"
        >
          <div className="flex flex-col">
            <label htmlFor="expense">Expense</label>
            <input
              type="text"
              name="expense"
              id="expense"
              className="w-60 h-10 rounded outline-green-500 bg-zinc-900 p-2"
            />
          </div>

          <br />

          <div className="flex flex-col">
            <label htmlFor="Amount">Amount</label>
            <input
              type="number"
              name="Amount"
              id="Amount"
              className="w-60 h-10 rounded outline-green-500 bg-zinc-900 p-2"
            />
          </div>

          <br />

          <button type="button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
