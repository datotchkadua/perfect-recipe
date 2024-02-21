import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schemas";
import { login } from "../features/userSlice";
import bgImage from "../assets/donut-login.svg";
import { loginInputData } from "../utils/inputsData";
import handleFormSubmit from "../utils/handleFormSubmit";
import Form from "../components/Form";
import ImageDiv from "../components/ImageDiv";
import ButtonWithLink from "../components/ButtonWithLink";

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
          <ButtonWithLink
            isButtonDisabled={!isDirty || isSubmitting}
            btnType="submit"
            paragraphText="Don't Have an Account ?"
            spanText="Register"
            redirectPath="/register"
            btnText="Login"
          />
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;
