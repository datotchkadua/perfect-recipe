import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <footer>footer</footer>
    </>
  );
};

export default SharedLayout;
