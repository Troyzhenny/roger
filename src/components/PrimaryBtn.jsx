import add from '/add.svg'

const PrimaryBtn = () => {
  return (
    <>
        <button className="font-bold h-8 w-auto justify-center rounded-full flex items-center gap-1">
          Expense
          <img src={add} alt="icon" className='w-3'/>
        </button>
    </>
  )
};

export default PrimaryBtn;
