const Input = ({ svg, placeholderText, name, type, register, errors }) => {
  return (
    <>
      <div className="relative mb-4 w-200px mob:w-[250px] sm:w-[400px] ">
        <div
          className="absolute inset-y-0 start-0 
    flex items-center ps-3
     pointer-events-none"
        >
          <img src={svg} alt="" className="w-4 h-4" />
        </div>
        <input
          type={type}
          placeholder={placeholderText}
          {...register(name)}
          className={`
      w-full block  p-2 ps-10  bg-green-50  border border-slate-300
     text-sm rounded-md  focus:ring-1
     focus:ring-slate-400   focus:border-slate-400 
     outline-none 
  ${
    errors[name]?.message
      ? "border-red-500 focus:ring-red-500 focus:border-red-500  "
      : null
  }
      `}
        />
      </div>

      {errors[name] && (
        <p className="mb-2 text-sm md:text-base text-red-500 dark:text-red-500">
          <span className="font-medium">{errors[name]?.message} </span>
        </p>
      )}
    </>
  );
};

export default Input;
