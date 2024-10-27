import Modal from "../components/Modal";
import TopBar from "../components/TopBar";
import Delete from "/delete.svg";
import { useState, useEffect } from "react";

const Homepage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : [];
  });
  
  const handleModalView = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    setIsModalOpen(false);
  };
  
  
  const handleRemoveCard = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    
    setFormData(updatedData);
  };


  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);
  
  return (
    <>
      <section className="w-full flex flex-col justify-center items-center gap-6">
        <div className="right-0 top-0 absolute">
          <TopBar handleModalView={handleModalView} />
        </div>
        {isModalOpen && <Modal handleFormSubmit={handleFormSubmit} />}

        {formData.map((item, index) => (
          <div
            id="expenseCard"
            key={index}
            className="flex border border-amber-100 border-l-4 border-l-green-500 rounded justify-between px-4 items-center w-5/12 h-10"
          >
            <h3>{item.expense}</h3>
            <h3>${item.amount}</h3>
            <button type="button" onClick={() => handleRemoveCard(index)}>
              <img src={Delete} className="w-4" />
            </button>
          </div>
        ))}
      </section>
    </>
  );
};

export default Homepage;
