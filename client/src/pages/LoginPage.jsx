import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { login } from "../features/userSlice";
import { toast } from "react-toastify";

import Button from "../components/Button";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChangeValue = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", values)
      .then((res) => {
      
        if (res?.data?.status === "success") {
         // console.log(res.data.user);
          toast.success(res?.data?.message);
          dispatch(login(res?.data?.user));
          navigate("/");
        }
      })
      .catch((err) => {
        const errorMessage = err?.response?.data?.error || err?.message;
        toast.error(errorMessage);
      });
  }
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl mb-8">Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={handleChangeValue} />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChangeValue} />
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
