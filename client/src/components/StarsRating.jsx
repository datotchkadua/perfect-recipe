import { generateRandomNumber } from "../utils/generateRandomNumber";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const StarsRating = ({ iseReviews = false, reviews = 0 }) => {
  const stars = generateRandomNumber();
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index} className="text-[#924d44] mr-1">
        {stars > number ? (
          <BsStarFill size={14} />
        ) : stars > index ? (
          <BsStarHalf size={14} />
        ) : (
          <BsStar size={14} />
        )}
      </span>
    );
  });
  return (
    <div className="flex flex-row items-center w-full">
      <div className=" flex ml-1">{tempStars}</div>
      {iseReviews && (
        <p className="ml-1 mb-0 ">
          {stars} /{reviews} Reviews
        </p>
      )}
    </div>
  );
};

export default StarsRating;
