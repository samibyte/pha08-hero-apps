import { Link } from "react-router";
import noPageImg from "../assets/error-404.png";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center bg-[#f5f5f5] pt-32 text-center">
      <img src={noPageImg} alt="404 image" />
      <p className="text-[#001931] text-5xl font-semibold">
        Oops, page not found!
      </p>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>

      <Link
        to="/"
        className="btn btn-wide linear-gradient-style text-white font-semibold "
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
