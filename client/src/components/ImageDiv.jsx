const ImageDiv = ({ imageSrc }) => {
  return (
    <div className=" hidden  thousand:flex w-[45%] h-full mr-14">
      <img
        src={imageSrc}
        alt="image"
        className="w-full h-full min-w-[400px] min-h-[400px]"
      />
    </div>
  );
};

export default ImageDiv;
