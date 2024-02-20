import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";


import Button from "../components/Button";
// import useForm from "../hooks/useForm";
import handleFormSubmit from "../utils/handleFormSubmit";

const LoginPage = () => {
  // const { values, handleChangeValue, resetForm } = useForm({
  //   email: "",
  //   password: "",
  // });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
const successLogin = (data) => {
  dispatch(login(data));
  resetForm();
  navigate("/");
};
  function handleSubmit(e) {
    e.preventDefault();
   // handleFormSubmit("http://localhost:8080/login", values, successLogin);
   
  }
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl mb-8">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" 
          //onChange={handleChangeValue} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" 
         // onChange={handleChangeValue}
           />
        </div>
        <Button
          type="submit"
          btnText="Log in"
          onClick={() => console.log("click login")}
        />
      </form>
      <Link to="/register">
        <Button
          btnText="back to Register"
          // onClick={() => console.log("click login")}
        />
      </Link>
    </section>
  );
};

export default LoginPage;
