import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import handleFormSubmit from "../utils/handleFormSubmit";
import Form from "../components/Form";
import ImageDiv from "../components/ImageDiv";
import ButtonWithLink from "../components/ButtonWithLink";

const AuthForm = ({
  redirectPath,
  schema,
  formInputsData,
  endpoint,
  onSuccessCallback,
  bgImage,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSuccess = (data) => {
    reset();
    if (onSuccessCallback) {
      onSuccessCallback(data);
    }
    navigate(redirectPath);
  };

  const onSubmit = (data) => {
    handleFormSubmit(endpoint, data, onSuccess);
  };

  const isLoginPageCurrent = redirectPath === "/";

  return (
    <section className="flex justify-center items-center w-full mt-20 py-8 px-6 bg-[#fef7f6] border-[0.5px] rounded-md">
      <ImageDiv imageSrc={bgImage} />
      <div className="flex flex-col justify-center items-center w-full thousand:w-[45%] h-full min-h-[400px]">
        <h1 className="text-sm mob:text-xl sm:text-2xl mb-4 md:mb-8 font-bold ">
          {isLoginPageCurrent
            ? "Login to Your Account"
            : "Want to join our family"}
        </h1>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          inputsData={formInputsData}
        >
          <ButtonWithLink
            isButtonDisabled={!isDirty || isSubmitting}
            btnType="submit"
            paragraphText={`${
              isLoginPageCurrent
                ? "Don't Have an Account ?"
                : "Already have an account ?"
            }`}
            spanText={isLoginPageCurrent ? "Register" : "Log in"}
            linkPath={isLoginPageCurrent ? "/register" : "/login"}
            btnText={isLoginPageCurrent ? "Login" : "Sign up"}
          />
        </Form>
      </div>
    </section>
  );
};

export default AuthForm;
