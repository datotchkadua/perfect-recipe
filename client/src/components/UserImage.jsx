import userImg from "../assets/man-user-icon.svg";
import searchIcon from "../assets/searchIcon.svg";
import {
  toggleModal,
  selectIsBurgerOpen,
  toggleBurger,
} from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
const UserImage = () => {
  const dispatch = useDispatch();
  const isBurgerOpen = useSelector(selectIsBurgerOpen);

  function handleChangeModal() {
    if (isBurgerOpen) {
      dispatch(toggleBurger());
    }
    dispatch(toggleModal());
  }

  return (
    <div className="flex flex-row gap-4 lg:gap-6 max-w-[200px] mt-6 lg:mt-0 justify-center items-center">
      <img
        src={searchIcon}
        alt="search icon"
        className=" w-7 h-7 lg:w-8 lg:h-8  cursor-pointer"
        onClick={handleChangeModal}
      />
      <img
        src={userImg}
        alt="user"
        className=" w-12 h-12
        lg:w-14 lg:h-14 rounded-full cursor-pointer"
      />
    </div>
  );
};

export default UserImage;
