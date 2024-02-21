import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas";
import { login } from "../features/userSlice";
import Button from "../components/Button";
import bgImage from "../assets/donut-login.svg";
import { loginInputData } from "../utils/inputsData";
import handleFormSubmit from "../utils/handleFormSubmit";
import Form from "../components/Form";
import ImageDiv from "../components/ImageDiv";

const LoginPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const successLogin = (data) => {
    reset();
    dispatch(login(data));
    navigate("/");
  };

  function onSubmit(data) {
    handleFormSubmit("http://localhost:8080/login", data, successLogin);
  }

  return (
    <section
      className="flex justify-center items-center w-full mt-20 
     py-8 px-6  bg-[#fef7f6]  border-[0.5px] rounded-md"
    >
      <ImageDiv imageSrc={bgImage} />
      <div
        className="flex flex-col justify-center items-center
     w-full thousand:w-[45%] h-full min-h-[400px]"
      >
        <h1 className="text-sm mob:text-xl sm:text-2xl mb-4 md:mb-8 font-bold ">
          Login to Your Account
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          inputsData={loginInputData}
        >
          <div className="mt-8">
            <Button
              type="submit"
              btnText="Log in"
              disabled={!isDirty || isSubmitting}
            />

            <p className="mt-2.5">
              Don&apos;t Have an Account ?
              <Link to="/register">
                <span className="text-[#924d44] ">Register</span>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;

{
  /* <Button
          type="submit"
          btnText="Log in"
          onClick={() => console.log("click login")}
        /> */
}
