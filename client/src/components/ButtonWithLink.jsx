import { Link } from "react-router-dom";
import Button from "./Button";

const ButtonWithLink = ({
  isButtonDisabled = false,
  btnType,
  paragraphText,
  spanText,
  linkPath,
  btnText,
  onClickBtn,
}) => {
  return (
    <>
      <div className="mt-8">
        <Button
          type={btnType}
          btnText={btnText}
          disabled={isButtonDisabled}
          onClick={onClickBtn}
        />
        <p className="mt-2.5">
          {paragraphText}
          <Link to={linkPath}>
            <span className="text-[#924d44] ">{spanText}</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default ButtonWithLink;
