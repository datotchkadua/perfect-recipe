import { useSelector } from "react-redux";
import {
  selectIsSearchModalOpen,
  selectIsBurgerOpen,
} from "../features/userSlice";
import BurgerButton from "./BurgerButton";
import NavLinks from "./NavLinks";
import SearchRecipeModal from "./SearchRecipeModal";
function Navbar() {
  const isOpenModal = useSelector(selectIsSearchModalOpen);
  const isBurgerOpen = useSelector(selectIsBurgerOpen);

  return (
    <>
      <nav className="hidden lg:flex w-full mb-32">
        <NavLinks />
      </nav>

      <BurgerButton />

      {isBurgerOpen && (
        <nav
          className={`z-10 lg:hidden fixed left-0 top-0 bottom-0  
         w-full min-h-screen  pt-10 px-8 space-y-3 text-lg bg-[#f2dedc]
          `}
        >
          <NavLinks />
        </nav>
      )}

      {isOpenModal && <SearchRecipeModal />}
    </>
  );
}

export default Navbar;
