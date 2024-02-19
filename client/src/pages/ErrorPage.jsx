import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
const ErrorPage = () => {
  const { status, statusText, error } = useRouteError();

  return (
    <div className="min-h-screen text-center flex flex-col items-center justify-center">
      <img
        src={img}
        className="w-[90vw] max-w-[600px] block mb-8 mt-[-48px]"
        alt="not found"
      />
      <h2 className="mb-0.5 text-xl">{`${status} ${statusText} !`} </h2>

      <p className="leading-6 mt-0.5 mb-1 text-[#64748b]">{error.message}</p>
      <Link to="/" className="text-[#10b981] uppercase">
        back home
      </Link>
    </div>
  );
};

export default ErrorPage;
// const Wrapper = styled.div`
//   min-height: 100vh;
//   text-align: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   img {
//     width: 90vw;
//     max-width: 600px;
//     display: block;
//     margin-bottom: 2rem;
//     margin-top: -3rem;
//   }
//   h3 {
//     margin-bottom: 0.5rem;
//   }

//   p {
//     line-height: 1.5;
//     margin-top: 0.5rem;
//     margin-bottom: 1rem;
//     color: var(--grey-500);
//   }
//   a {
//     color: var(--primary-500);
//     text-transform: capitalize;
//   }
// `;
