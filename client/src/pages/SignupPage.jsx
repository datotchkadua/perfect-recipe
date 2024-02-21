import { registrationSchema } from "../schemas";
import { registrationInputData } from "../utils/inputsData";
import AuthWrapper from "../components/AuthWrapper";
import bgImage from "../assets/registration-bg.svg";

const SignupPage = () => {
  return (
    <AuthWrapper
      pageTitle="Want to join our family"
      schema={registrationSchema}
      formInputsData={registrationInputData}
      endpoint="http://localhost:8080/register"
      redirectPath="/login"
      bgImage={bgImage}
    />
  );
};

export default SignupPage;
