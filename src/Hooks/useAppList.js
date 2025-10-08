import axios from "axios";
import { useEffect, useState } from "react";

const useAppList = () => {
  const [appList, setAppList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios("/appsData.json")
      .then((data) => setAppList(data.data))
      .catch(setLoadError((err) => setLoadError(err)))
      .finally(() => setIsLoading(false));
  }, []);

  return { appList, isLoading, loadError };
};

export default useAppList;
