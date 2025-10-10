import { useEffect, useState } from "react";
import AppCard from "../Components/AppCard";
import useAppList from "../Hooks/useAppList";
import AppNotFound from "./AppNotFound";
import LoadingAnimation from "../Components/LoadingAnimation";

const AppsPage = () => {
  const { appList } = useAppList();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [displayList, setDisplayList] = useState(appList);

  const term = search.trim().toLocaleLowerCase();

  useEffect(() => {
    setSearchLoading(true);

    const timeout = setTimeout(() => {
      const filtered = term
        ? appList.filter((app) => app.title.toLocaleLowerCase().includes(term))
        : appList;

      setDisplayList(filtered);
      setSearchLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, appList, term]);

  return (
    <div
      id="allApps"
      className=" bg-[#f5f5f5] pt-32 min-h-screen text-center pb-20 px-6"
    >
      <section>
        <h2 className="text-3xl sm:text-5xl text-[#001931] font-bold mb-4">
          Our All Applications
        </h2>
        <p className="mb-10 sm:text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        {/* search bar and filter info */}
        <div className="flex justify-between mb-4 md:px-20">
          <p className="sm:text-2xl text-[#001931] font-semibold">
            ({displayList.length}) Apps Found
          </p>
          <label className="input w-40 md:w-100 bg-[#f5f5f5]">
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
        {searchLoading ? (
          <div className="w-50 flex justify-center items-center sm:w-96 mt-48 mx-auto">
            <LoadingAnimation />
          </div>
        ) : displayList.length ? (
          <div className="pb-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:px-20">
            {displayList.map((appData) => (
              <AppCard key={appData.id} appData={appData} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center min-h-[50vh]">
            <p className="text-[#001931] text-4xl font-semibold">
              No Apps Found!
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default AppsPage;
