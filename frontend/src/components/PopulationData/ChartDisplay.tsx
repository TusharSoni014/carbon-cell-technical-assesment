import React from "react";

import PopulationChart, { PopulationData } from "./PopulationChart";
import { useAppSelector } from "@/redux/store";

interface ChartDisplayProps {
  data: PopulationData[];
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({ data }) => {
  const chartWidth = useAppSelector((state) => state.appSlice.chartWidth);
  return (
    <div style={{ width: chartWidth }}>
      <h2 className="text-xl">Population Chart</h2>
      <PopulationChart data={data} />
    </div>
  );
};

export default ChartDisplay;
