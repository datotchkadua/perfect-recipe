import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import useForm from "../hooks/useForm";
import { registrationSchema } from "../schemas";
import Button from "../components/Button";
import { registrationInputData } from "../utils/inputsData";

const SignupPage = () => {
  const {
    handleSubmit,
    register,
    // reset,
    // watch,
    formState: { errors, isSubmitSuccessful, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  // eslint-disable-next-line no-unused-vars
  // const successRegister = (data) => {
  //   resetForm();
  //   navigate("/login");
  // };

  //const navigate = useNavigate();
  function onSubmit(data) {
    console.log(data);

    // handleFormSubmit("http://localhost:8080/register", values-unda iyos,successRegister);
  }

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl mb-8">Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {registrationInputData.map((inputData) => {
          return (
            <Input
              key={inputData.name}
              {...inputData}
              register={register}
              errors={errors}
            />
          );
        })}
        <div className="mt-8">
          <Button
            type="submit"
            btnText="Sign up"
            disabled={!isDirty || isSubmitting}
            // onClick={() => console.log("click")}
          />

          <p className="mt-[-10px]">
            already have an account ?
            <Link to="/login">
              <span className="text-[#924d44] "> Log in</span>
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignupPage;
