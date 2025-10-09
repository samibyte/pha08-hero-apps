import { Link } from "react-router";
import noAppImg from "../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] pt-32 text-center flex flex-col gap-5 justify-center items-center py-10">
      <img src={noAppImg} alt="angry cat looking on screen | no app found" />
      <p className="text-[#001931] text-5xl font-semibold">
        OPPS!! APP NOT FOUND
      </p>
      <p className="text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      <Link
        to="/"
        className="btn btn-wide linear-gradient-style text-white font-semibold "
      >
        Go Back
      </Link>
    </div>
  );
};

export default AppNotFound;
