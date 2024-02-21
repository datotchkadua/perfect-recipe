import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { loginSchema } from "../schemas";
import { loginInputData } from "../utils/inputsData";
import AuthWrapper from "../components/AuthWrapper";
import bgImage from "../assets/donut-login-bg.svg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLoginSuccess = (data) => {
    dispatch(login(data));
  };

  return (
    <AuthWrapper
      pageTitle="Login to Your Account"
      schema={loginSchema}
      formInputsData={loginInputData}
      endpoint="http://localhost:8080/login"
      redirectPath="/"
      onSuccessCallback={handleLoginSuccess}
      bgImage={bgImage}
    />
  );
};

export default LoginPage;
