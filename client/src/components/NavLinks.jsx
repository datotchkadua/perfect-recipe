import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsAuthenticated,
  selectIsBurgerOpen,
  toggleBurger,
} from "../features/userSlice";
import Button from "./Button";
import logo from "../assets/recipeLogo.png";
import UserImage from "./UserImage";
import { navData } from "../utils/navbarData";

function NavLinks() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isBurgerOpen = useSelector(selectIsBurgerOpen);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function handleNavigate(path) {
    navigate(path);
    dispatch(toggleBurger());
  }

  return (
    <section
      className="flex flex-col text-lg lg:text-base items-start lg:flex-row
     lg:justify-center lg:items-center lg:w-full"
    >
      <Link to="/" className="">
        <img
          src={logo}
          alt="logo"
          className=" h-16 w-16  lg:h-20 lg:w-20  max-h-36 max-w-36 cursor-pointer  "
        />
      </Link>

      <div
        className="flex flex-col items-start  lg:flex-row
        lg:justify-center lg:items-center lg:w-4/6 lg:font-semibold"
      >
        {navData.map((navLink) => {
          return (
            <NavLink
              key={navLink.text}
              to={navLink.to}
              onClick={isBurgerOpen ? () => dispatch(toggleBurger()) : null}
              className={({ isActive }) => {
                return (
                  "mt-2.5 lg:mx-6 lg:my-0 rounded-md   duration-300 " +
                  (isActive ? "text-xl  text-[#b30000]  font-semibold	 " : null)
                );
              }}
            >
              {navLink.text}
            </NavLink>
          );
        })}
      </div>
      {isAuthenticated ? (
        <UserImage />
      ) : (
        <div
          className="flex mt-6 lg:mt-0 flex-col  gap-3
        lg:flex-row items-center justify-start lg:justify-center mb-4 lg:mb-0"
        >
          <Button
            btnText="Sign up"
            onClick={() => handleNavigate("/register")}
          />
          <Button
            btnText="Log in"
            bgColor="gray"
            onClick={() => handleNavigate("/login")}
          />
        </div>
      )}
    </section>
  );
}

export default NavLinks;
