import { useState } from "react";
import { loadInstalledApp, uninstallApp } from "../Utils/localStorage";
import InstalledCard from "../Components/InstalledCard";

const InstallationPage = () => {
  const [installedList, setInstalledList] = useState(() => loadInstalledApp());
  const [sortOrder, setSortOrder] = useState("none");

  const handleUninstall = (id) => {
    uninstallApp(id);

    setInstalledList((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className=" bg-[#f5f5f5] pt-32 text-center pb-20">
      <section>
        <h2 className="text-5xl text-[#001931] font-bold mb-4">
          Your Installed Apps
        </h2>
        <p className="mb-10 text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* sort and app info */}
        <div className="flex justify-between mb-4 md:px-20">
          <p className="text-2xl text-[#001931] font-semibold">
            ({installedList.length}) Apps Found
          </p>
          <label className="form-control w-full max-w-48">
            <select
              className="select select-bordered text-[#627382]"
              defaultValue={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by Downloads</option>
              <option value="asc-download">Low -&gt; High</option>
              <option value="desc-download">High -&gt; Low</option>
            </select>
          </label>
        </div>
        <div className="mb-4 md:px-20">
          {!installedList.length ? (
            <p>no data available</p>
          ) : (
            <div>
              {installedList.map((appData) => (
                <InstalledCard
                  key={appData.id}
                  appData={appData}
                  handleUninstall={handleUninstall}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default InstallationPage;
