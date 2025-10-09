/* import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"; */

import { Suspense, lazy } from "react";
import LoadingAnimation from "./LoadingAnimation";

// Lazy load Recharts components
const BarChart = lazy(() =>
  import("recharts").then((module) => ({ default: module.BarChart }))
);
const Bar = lazy(() =>
  import("recharts").then((module) => ({ default: module.Bar }))
);
const XAxis = lazy(() =>
  import("recharts").then((module) => ({ default: module.XAxis }))
);
const YAxis = lazy(() =>
  import("recharts").then((module) => ({ default: module.YAxis }))
);
const Tooltip = lazy(() =>
  import("recharts").then((module) => ({ default: module.Tooltip }))
);
const ResponsiveContainer = lazy(() =>
  import("recharts").then((module) => ({ default: module.ResponsiveContainer }))
);

const AppReviewChart = ({ ratings }) => {
  return (
    <div className="h-88 border-b-1 border-[rgba(0,25,49,0.2)] pb-12 mb-10 ">
      <h3 className="text-2xl font-semibold text-[#001931]">Ratings</h3>
      <Suspense
        fallback={
          <div className="w-64 mx-auto mt-20">
            <LoadingAnimation />
          </div>
        }
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 24, left: 16, bottom: 24 }}
            tabIndex={-1}
          >
            <XAxis
              type="number"
              axisLine={false}
              tickLine={false}
              tickMargin={24}
              tick={{ fill: "#627382" }}
            />
            <YAxis
              dataKey="name"
              type="category"
              reversed
              axisLine={false}
              tickLine={false}
              tickMargin={16}
              tick={{ fill: "#627382" }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </Suspense>
    </div>
  );
};

export default AppReviewChart;
