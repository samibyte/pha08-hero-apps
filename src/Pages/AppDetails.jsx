import { useParams } from "react-router";
import useAppList from "../Hooks/useAppList";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const { appList, isLoading } = useAppList();

  const appDetail = appList.find((p) => String(p.id) === id);

  if (isLoading) {
    return <p>loading....</p>;
  }
  const {
    title,
    image,
    description,
    size,
    ratings,
    downloads,
    ratingAvg,
    reviews,
    companyName,
  } = appDetail;

  return (
    <div className=" bg-[#f5f5f5] pt-32 md:px-20 md:pb-20 p-6">
      <div className="card gap-10 md:card-side text-[#001931] pb-10 mb-10 border-b-1 border-[rgba(0,25,49,0.2)]">
        <figure className="w-88 mx-auto rounded-lg md:w-113 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="app logo" />
        </figure>
        <div className="w-full">
          <div className="pb-8 mb-8 border-b-1 border-[rgba(0,25,49,0.2)]">
            <h2 className="font-semibold text-2xl md:font-bold md:text-4xl">
              {title}
            </h2>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="linear-gradient-style text-gradient">
                {companyName}
              </span>
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 md:gap-12 mb-8 text-center md:text-left">
            <div>
              <img
                className="w-10 mb-2 mx-auto md:mx-0"
                src={downloadIcon}
                alt="download icon png"
              />
              <p className="text-[rgba(0,25,49,0.8)]">Downloads</p>
              <p className="font-extrabold text-[40px]">{downloads}</p>
            </div>
            <div>
              <img
                className="w-10 mb-2 mx-auto md:mx-0"
                src={ratingIcon}
                alt="download icon png"
              />
              <p className="text-[rgba(0,25,49,0.8)]">Average Ratings</p>
              <p className="font-extrabold text-[40px]">{ratingAvg}</p>
            </div>
            <div>
              <img
                className="w-10 mb-2 mx-auto md:mx-0"
                src={reviewIcon}
                alt="download icon png"
              />
              <p className="text-[rgba(0,25,49,0.8)]">Total Reviews</p>
              <p className="font-extrabold text-[40px]">{reviews}</p>
            </div>
          </div>
          <button className="btn w-full md:btn-wide bg-[#00D390] text-white">
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* descriptions */}
      <div>
        <h4 className="text-[#001931] font-semibold text-2xl">Description</h4>
        {console.log(description)}
        <p className=" text-[#627382] whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
