const convertDownloads = (str) => {
  if (!str) return 0;

  str = str.trim().toUpperCase();
  const value = parseFloat(str);

  if (str.endsWith("K")) return value * 1000;
  if (str.endsWith("M")) return value * 1000000;
  if (str.endsWith("B")) return value * 1000000000;

  return value;
};

export default convertDownloads;
