import ImageDiv from "./ImageDiv";
import saladImg from "../assets/home-hero.svg";
import ButtonWithLink from "./ButtonWithLink";
import { useNavigate } from "react-router-dom";
const HomeHeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-center items-center w-full my-20">
      <div className="w-full flex  flex-col justify-center thousand:items-start ">
        <h1 className=" text-3xl sm:text-7xl font-bold ">
          Your Daily Dish <br /> A <span className="text-[#924d44]">Food</span>{" "}
          Journey
        </h1>
        <p className="mt-5 mr-5 text-base sm:text-lg ">
          Here&apos;s where you can find all the latest and greatest from the
          blog—recipes, tips and tricks, personal updates, and more. Be sure to
          sign up for email updates to receive all our new posts, right in your
          inbox.
        </p>
        <ButtonWithLink
          btnType="button"
          paragraphText="Don't Have an Account ?"
          spanText="Log in"
          linkPath="/login"
          btnText="Sign up"
          onClickBtn={() => navigate("/register")}
        />
      </div>
      <ImageDiv imageSrc={saladImg} />
    </section>
  );
};

export default HomeHeroSection;
