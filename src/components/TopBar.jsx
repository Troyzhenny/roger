import PrimaryBtn from "./PrimaryBtn";
import PropTypes from "prop-types";

const TopBar = ({ handleModalView }) => {
    return(
        <>
        <div className="w-full p-3 items-center flex">
            <PrimaryBtn handleModalView={handleModalView}/>
        </div>
        </>
    )
}

TopBar.propTypes = {
     handleModalView: PropTypes.func.isRequired
}

export default TopBar;