import { useParams } from "react-router";
import useAppList from "../Hooks/useAppList";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import { useEffect, useState } from "react";
import { loadInstalledApp, updateInstalledList } from "../Utils/localStorage";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { appList, isLoading } = useAppList();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const installedApp = loadInstalledApp();

    const isDuplicate = installedApp?.some((app) => String(app.id) === id);
    if (isDuplicate) setDisabled(true);
  }, [id]);

  const handleInstallClick = (appData) => {
    updateInstalledList(appData);
    setDisabled(true);
    toast.success("App Installed");
  };

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
      {/* card details  */}
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
          <button
            disabled={disabled}
            onClick={() => handleInstallClick(appDetail)}
            className="btn w-full md:btn-wide bg-[#00D390] text-white"
          >
            {disabled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* app review chart */}
      <div className="h-88 border-b-1 border-[rgba(0,25,49,0.2)] pb-12 mb-10 ">
        <h3 className="text-2xl font-semibold text-[#001931]">Ratings</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 24, left: 16, bottom: 24 }}
            tabIndex={-1}
          >
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tickMargin={24}
              tick={{ fill: "#627382" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              reversed
              axisLine={false}
              tickLine={false}
              tickMargin={16}
              tick={{ fill: "#627382" }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* descriptions */}
      <div>
        <h4 className="text-[#001931] font-semibold text-2xl">Description</h4>

        <p className=" text-[#627382] whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
