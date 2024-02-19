import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Button from "../components/Button";

const SignupPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

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
      .post("http://localhost:8080/register", values)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success(res.data.message);
          setValues({
            name: "",
            email: "",
            password: "",
          });
          navigate("/login");
        }
      })
      .catch((err) => {
        const errorMessage = err?.response?.data?.error || err?.message;
        toast.error(errorMessage);
      });
  }

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl mb-8">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChangeValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChangeValue}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChangeValue}
          />
        </div>
        <Button
          type="submit"
          btnText="Sign up"
          // onClick={() => console.log("click")}
        />
      </form>
      <Link to="/login">
        <Button btnText="login" />
      </Link>
    </section>
  );
};

export default SignupPage;
