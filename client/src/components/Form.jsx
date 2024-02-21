import React from "react";
import { registrationInputData } from "../utils/inputsData";
import Input from "./Input";

const Form = ({ onSubmit, register, errors, children }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
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
        {children}
      </form>
    </>
  );
};

export default Form;
