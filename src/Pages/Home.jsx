import { Link } from "react-router";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <div className=" bg-[#f5f5f5] pt-32 text-center ">
      <div className=" mx-auto px-2 ">
        <h1 className="text-5xl md:text-7xl md:leading-21 text-[rgba(0,25,49,0.9)] font-bold">
          We Build <br />
          <span className="linear-gradient-style text-gradient">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="md:max-w-1/2 mx-auto pt-4 mb-10 text-xl text-[rgba(98,115,130,0.9)]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div
          className="text-[#001931] font-semibold text-xl flex gap-2
           md:gap-4 justify-center items-center mb-10"
        >
          <Link
            to="https://play.google.com"
            className="btn md:btn-xl hover:shadow-xl rounded-sm border border-[#D2D2D2]"
            target="_blank"
          >
            <img
              className="w-8 md:w-10"
              src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
              alt=""
            />{" "}
            <p>Google Play</p>
          </Link>
          <Link
            className="btn md:btn-xl hover:shadow-xl rounded-sm border border-[#D2D2D2]"
            target="_blank"
          >
            <img
              className="w-8 md:w-10"
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
      </div>

      <div className="linear-gradient-style w-full p-20 text-white">
        <h3 className="mb-10 text-5xl font-bold">
          Trusted by Millions, Built for You
        </h3>
        <div className="flex gap-40 justify-center items-center">
          <div>
            <p>Total Downloads</p>
            <p className="font-extrabold text-[64px]">29.6M</p>
            <p>21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <p className="font-extrabold text-[64px]">906K</p>
            <p>46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <p className="font-extrabold text-[64px]">132+</p>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
