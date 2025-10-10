import { Link } from "react-router";
import heroImg from "../assets/hero.png";
import useAppList from "../Hooks/useAppList";
import AppCard from "../Components/AppCard";

const Home = () => {
  const { appList } = useAppList();

  const topAppList = appList
    .slice()
    .sort((a, b) => b.ratingAvg - a.ratingAvg)
    .slice(0, 8);

  return (
    <div className=" bg-[#f5f5f5] pt-32 text-center ">
      {/*  Banner section */}
      <section className=" mx-auto px-2 ">
        <h1 className="text-5xl sm:text-7xl md:leading-21 text-[rgba(0,25,49,0.9)] font-bold">
          We Build <br />
          <span className="linear-gradient-style text-gradient">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="md:max-w-1/2 mx-auto pt-4 mb-10 sm:text-xl text-[rgba(98,115,130,0.9)]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="text-[#001931] font-semibold text-xl flex gap-4 justify-center items-center mb-10">
          <Link
            to="https://play.google.com"
            className="btn md:btn-xl hover:shadow-xl rounded-sm border border-[#D2D2D2]"
            target="_blank"
          >
            <img
              className="w-8 sm:w-10"
              src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
              alt=""
            />{" "}
            <p>Google Play</p>
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn md:btn-xl hover:shadow-xl rounded-sm border border-[#D2D2D2]"
            target="_blank"
          >
            <img
              className="w-8 sm:w-10"
              src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
              alt=""
            />{" "}
            <p>App Store</p>
          </Link>
        </div>
        <img
          className="mx-auto"
          src={heroImg}
          alt="Hero app course page screenshot on a phone"
        />
      </section>

      {/* Stats section  */}
      <section className="linear-gradient-style text-center w-full p-10 sm:p-20 text-white mb-20">
        <h3 className="mb-10 text-3xl sm:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-40 justify-center items-center">
          <div>
            <p>Total Downloads</p>
            <p className="font-extrabold text-5xl sm:text-[64px]">29.6M</p>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <p className="font-extrabold text-5xl sm:text-[64px]">906K</p>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <p className="font-extrabold text-5xl sm:text-[64px]">132+</p>
            <p>31 more will Launch</p>
          </div>
        </div>
      </section>

      {/* Trending Apps section */}
      <section className="pb-20 px-4">
        <h2 className="text-3xl sm:text-5xl text-[#001931] font-bold mb-4">
          Top Apps
        </h2>
        <p className="mb-10 sm:text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:px-20">
          {topAppList.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>

        <Link
          to="/apps"
          className="btn btn-wide linear-gradient-style py-3 text-white font-semibold "
        >
          Show All
        </Link>
      </section>
    </div>
  );
};

export default Home;
