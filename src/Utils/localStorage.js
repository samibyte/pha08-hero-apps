export const loadInstalledApp = () => {
  try {
    const data = localStorage.getItem("installedApp");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateInstalledList = (appData) => {
  const installed = loadInstalledApp();

  try {
    const updatedAppList = [...installed, appData];

    localStorage.setItem("installedApp", JSON.stringify(updatedAppList));
  } catch (err) {
    console.log(err);
  }
};

export const uninstallApp = (id) => {
  const installed = loadInstalledApp();

  try {
    const updatedAppList = installed.filter((app) => app.id !== id);

    localStorage.setItem("installedApp", JSON.stringify(updatedAppList));
  } catch (err) {
    console.log(err);
  }
};
