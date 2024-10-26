import logo from "/icon.svg";
import tasks from "/tasks.svg";
import calender from "/calender.svg";
import expenseIcon from "/expense.svg";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="w-60 flex flex-col bg-zinc-950 h-screen items-center">
        <div className="w-full h-60 flex items-center justify-center">
          <img src={logo} alt="icon" className="w-9" />
        </div>

        <nav className="w-full flex flex-col gap-3 p-14">
          <Link to="/" className="flex gap-3 w-4">
            <img src={expenseIcon} alt="icon" />
            Expenses
          </Link>

          <Link to="/tasks" className="flex gap-3 w-4">
            <img src={tasks} alt="icon" />
            Tasks
          </Link>

          <Link to="/calender" className="flex gap-3 w-4">
            <img src={calender} alt="icon" />
            Calender
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SideBar;
