import { useState } from "react";
import { loadInstalledApp, uninstallApp } from "../Utils/localStorage";
import InstalledCard from "../Components/InstalledCard";
import convertDownloads from "../Utils/convertDownloads";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

const InstallationPage = () => {
  const [installedList, setInstalledList] = useState(() => loadInstalledApp());
  const [sortOrder, setSortOrder] = useState("none");

  const handleUninstall = (id) => {
    uninstallApp(id);

    setInstalledList((prev) => prev.filter((a) => a.id !== id));

    toast.error("App uninstalled", {
      icon: <FaTrash color="red" />,
    });
  };

  const sortedByDownload = (() => {
    if (sortOrder === "asc-download") {
      return [...installedList].sort(
        (a, b) => convertDownloads(a.downloads) - convertDownloads(b.downloads)
      );
    } else if (sortOrder === "desc-download") {
      return [...installedList].sort(
        (a, b) => convertDownloads(b.downloads) - convertDownloads(a.downloads)
      );
    } else {
      return installedList;
    }
  })();

  return (
    <div className=" bg-[#f5f5f5] pt-32 text-center pb-20 px-4">
      <section>
        <h2
          id="title"
          className="text-3xl sm:text-5xl text-[#001931] font-bold mb-4"
        >
          Your Installed Apps
        </h2>
        <p className="mb-10 sm:text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>

        {/* sort and app info */}
        <div className="flex justify-between items-center mb-4 md:px-20">
          <p className="sm:text-2xl text-[#001931] font-semibold">
            ({installedList.length}) Apps Found
          </p>
          <label className="form-control sm:w-full w-40 max-w-48">
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
        <div className="mb-4 min-h-screen md:px-20">
          {!installedList.length ? (
            <div className="flex justify-center items-center min-h-[50vh]">
              <p className="text-[#001931] text-4xl font-semibold">
                You Have No App installed!
              </p>
            </div>
          ) : (
            <div>
              {sortedByDownload.map((appData) => (
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
