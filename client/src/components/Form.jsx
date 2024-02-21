import Input from "./Input";

const Form = ({ onSubmit, register, errors, children, inputsData }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        {inputsData.map((inputData) => {
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
