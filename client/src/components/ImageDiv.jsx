const ImageDiv = ({ imageSrc, isHiddenOnSmallScreen = true }) => {
  return (
    <div
      className={`${
        isHiddenOnSmallScreen ? "hidden" : ""
      }  thousand:flex  w-[45%] h-full mr-0 thousand:mr-14`}
    >
      <img
        src={imageSrc}
        alt="image"
        className="w-full h-full min-w-[200px] mob:min-w-[250px] thousand:min-w-[400px] thousand:min-h-[400px]"
      />
    </div>
  );
};

export default ImageDiv;
