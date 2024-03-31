import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the required Chart.js components
Chart.register(...registerables);

// Define the data type for the population data

export interface PopulationData {
  "ID Nation": string;
  Nation: string;
  "ID Year": number;
  Year: string;
  Population: number;
  "Slug Nation": string;
}
export interface PopulationChartProps {
  data: PopulationData[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({ data }) => {
  // Extract the years and population values from the data
  const years = data.map((item) => item.Year);
  const populations = data.map((item) => item.Population);

  // Prepare the data for Chart.js
  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Population',
        data: populations,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Configure the chart options
  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Population',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PopulationChart;