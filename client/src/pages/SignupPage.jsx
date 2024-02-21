import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../schemas";
import Button from "../components/Button";
import Form from "../components/Form";
import bgImage from "../assets/registration-bg.svg";
import handleFormSubmit from "../utils/handleFormSubmit";
import { registrationInputData } from "../utils/inputsData";
import ImageDiv from "../components/ImageDiv";

const SignupPage = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const successRegister = (data) => {
    reset();
    navigate("/login");
  };

  function onSubmit(data) {
    handleFormSubmit("http://localhost:8080/register", data, successRegister);
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
          Want to join our family
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          inputsData={registrationInputData}
        >
          <div className="mt-8">
            <Button
              type="submit"
              btnText="Sign up"
              disabled={!isDirty || isSubmitting}
            />

            <p className="mt-2.5">
              already have an account ?
              <Link to="/login">
                <span className="text-[#924d44] "> Log in</span>
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default SignupPage;
