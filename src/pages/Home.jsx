import Modal from "../components/Modal";
import TopBar from "../components/TopBar";
import Delete from '/delete.svg';

const Homepage = () => {

  let expense;
  let amount;

  return (
    <>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="right-0 top-0 absolute">
          <TopBar />
        </div>

        <Modal />

        <div>
          <h3>{expense}</h3>
          <h3>{amount}</h3>
          <button type="button">
            <img src={Delete} />
          </button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
