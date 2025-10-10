import { IoStar } from "react-icons/io5";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { Link } from "react-router";

const AppCard = ({ appData }) => {
  const { title, image, downloads, ratingAvg, id } = appData;

  return (
    <Link to={`/apps/${id}`}>
      <div
        className="card w-full rounded-sm gap-4
    shadow-lg cursor-pointer  bg-white hover:bg-base-300 hover:-translate-y-2 transition-all duration-200 p-4 h-52 sm:h-auto"
      >
        <figure className="h-24 sm:h-88 overflow-hidden rounded-lg">
          <img className="w-full object-cover" src={image} alt="app logo" />
        </figure>
        <div className="sm:card-body gap-4">
          <h2 className="sm:card-title mb-2 ">{title}</h2>
          <div className="flex justify-between items-center font-medium">
            <div className="flex gap-1 sm:gap-2 items-center text-[12px] text-[#00D390] sm:py-1 px-2 bg-[#F1F5E8] rounded-sm">
              <PiDownloadSimpleBold />
              <p>{downloads}</p>
            </div>
            <div className="flex gap-1 sm:gap-2 items-center text-[12px] text-[#FF8811] bg-[#FFF0E1] sm:py-1 px-2 rounded-sm">
              <IoStar />
              <p>{ratingAvg}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
