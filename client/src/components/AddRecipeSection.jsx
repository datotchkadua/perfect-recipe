import { useNavigate } from "react-router-dom";
import ImageDiv from "./ImageDiv";
import addRecipeImage from "../assets/add-recipe.jpg";
import Button from "./Button";

const AddRecipeSection = () => {
  const navigate = useNavigate();
  return (
    <section
      className="w-full flex flex-col items-center
     thousand:flex-row thousand:items-start my-20"
    >
      <ImageDiv imageSrc={addRecipeImage} isHiddenOnSmallScreen={false} />
      <div
        className="w-full min-h-[400px] flex flex-col 
      items-center justify-start thousand:justify-center"
      >
        <h1 className=" mt-10 thousand:mt-0 text-4xl sm:text-7xl font-bold ">
          Share your <span className="text-[#924d44]">Recipes</span>
        </h1>
        <p className="my-5 md:my-10 mr-5 text-base sm:text-lg">
          Chances are you&apos;re reading this because you enjoy cooking and
          sharing food with others. Posting one of your own recipes on
          Allrecipes is a great way to share your creations with a much larger
          crowd!
        </p>
        <Button
          btnText="Create New Recipe"
          onClick={() => navigate("/recipe")}
        />
      </div>
    </section>
  );
};

export default AddRecipeSection;
