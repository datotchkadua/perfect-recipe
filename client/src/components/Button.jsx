const Button = ({type="button", bgColor = "brown", btnText, onClick, disabled=false }) => {
  const colorVariants = {
    brown: "bg-[#bd7066] hover:bg-[#924d44]",
    gray: "bg-[#b3b3b3] hover:bg-[#5a5a5a]",
  };

 

  return (
    <button
    disabled={disabled}
      type={type}
      onClick={onClick}
      className={`text-white ${colorVariants[bgColor]} 
  focus:outline-none  font-medium rounded-lg 
  text-sm px-5 py-2.5 me-2 inline-flex items-center justify-center
  duration-300 cursor-pointer mb-4 lg:mb-0 lg:mx-2 min-w-28 ${disabled ?"disabledButton" :""}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
