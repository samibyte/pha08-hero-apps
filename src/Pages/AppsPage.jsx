import { useState } from "react";
import AppCard from "../Components/AppCard";
import useAppList from "../Hooks/useAppList";

const AppsPage = () => {
  const { appList } = useAppList();

  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();

  const searchedAppList = term
    ? appList.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : appList;

  return (
    <div id="allApps" className=" bg-[#f5f5f5] pt-32 text-center">
      <section className="pb-20">
        <h2 className="text-5xl text-[#001931] font-bold mb-4">
          Our All Applications
        </h2>
        <p className="mb-10 text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {/* search bar and filter info */}
        <div className="flex justify-between mb-4 md:px-20">
          <p className="text-2xl text-[#001931] font-semibold">
            ({appList.length}) Apps Found
          </p>
          <label className="input bg-[#f5f5f5]">
            <svg
              className="h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="search-field"
              className="text-[#627382] border-[#D2D2D2] "
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>

        <div className="mb-10 grid grid-cols-1 lg:grid-cols-4 gap-4 md:px-20">
          {searchedAppList.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>
        <button className="btn btn-wide linear-gradient-style text-white font-semibold ">
          Show All
        </button>
      </section>
    </div>
  );
};

export default AppsPage;
