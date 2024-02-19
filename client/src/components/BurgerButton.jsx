import { useSelector, useDispatch } from "react-redux";
import { selectIsBurgerOpen, toggleBurger } from "../features/userSlice";

const BurgerButton = () => {
  const isBurgerOpen = useSelector(selectIsBurgerOpen);
  const dispatch = useDispatch();
  return (
    <div className="lg:hidden  flex justify-end mt-[20px]">
      <button
        type="button"
        className={`z-50 block hamburger  focus:outline-none ${
          isBurgerOpen ? "open" : ""
        }`}
        onClick={() => dispatch(toggleBurger())}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default BurgerButton;
