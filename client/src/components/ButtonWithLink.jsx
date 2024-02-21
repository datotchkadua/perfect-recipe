import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonWithLink = ({
  isButtonDisabled,
  btnType,
  paragraphText,
  spanText,
  redirectPath,
  btnText,
}) => {
  return (
    <>
      <div className="mt-8">
        <Button type={btnType} btnText={btnText} disabled={isButtonDisabled} />
        <p className="mt-2.5">
          {paragraphText}
          <Link to={redirectPath}>
            <span className="text-[#924d44] ">{spanText}</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ButtonWithLink;
