import axios from "axios";
import { useEffect, useState } from "react";

const useAppList = () => {
  const [appList, setAppList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    axios("/appsData.json").then((data) => setAppList(data.data));
  }, []);

  return { appList, isLoading, loadError };
};

export default useAppList;
