import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import useForm from "../hooks/useForm";
import * as yup from "yup";
import Button from "../components/Button";
import { registrationInputData } from "../utils/inputsData";


const SignupPage = () => {
  const registrationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, 'Name must contain only letters')
      .required('No name provided.'),
    email: yup
      .string()
      .email()
      .required('No email provided.'),
    password:yup.string()
    .required('No password provided.') 
    .min(6, 'Password is too short - should be 6 chars minimum.')  
  });

  const {
    handleSubmit,
    register,
   // reset,
   // watch,
    formState: { errors, isSubmitSuccessful,isSubmitting, isDirty, },
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
   console.log(data)
    
   // handleFormSubmit("http://localhost:8080/register", values-unda iyos,successRegister);
  
  }


  return (
    <section className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl mb-8">Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
     { registrationInputData.map((inputData)=>{
      return <Input key={inputData.name} 
      {...inputData}
      register={register}
      errors={errors}
      
      />
     }) }
        <Button
          type="submit"
          btnText="Sign up"
          disabled={!isDirty || isSubmitting}
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
