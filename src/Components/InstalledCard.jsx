import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoStar } from "react-icons/io5";

const InstalledCard = ({ appData, handleUninstall }) => {
  const { title, image, downloads, ratingAvg, size, id } = appData;

  return (
    <div className="sm:card flex items-center justify-around bg-white shadow-sm rounded-sm gap-2 sm:gap-10 md:card-side text-[#001931] py-4 mb-4">
      <figure className="sm:w-20 mx-auto  overflow-hidden">
        <img
          className="w-full object-cover rounded-lg"
          src={image}
          alt="app logo"
        />
      </figure>
      <div className="w-full">
        <h2 className="font-medium text-lg leading-6 sm:text-xl text-left sm:mb-4">
          {title}
        </h2>
        <div className="flex gap-2 text-[12px] sm:text-[16px] sm:gap-4 items-center">
          <div className="flex gap-1 items-center font-medium text-[#00D390]">
            <PiDownloadSimpleBold />
            <p>{downloads}</p>
          </div>
          <div className="flex gap-1 items-center font-medium text-[#FF8811]">
            <IoStar />
            <p>{ratingAvg}</p>
          </div>
          <p className="text-[#627382]">{size} MB</p>
        </div>
      </div>
      <div className="card-actions justify-end items-center mx-4">
        <button
          onClick={() => handleUninstall(id)}
          className="btn bg-[#00D390] text-white font-semibold"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledCard;
