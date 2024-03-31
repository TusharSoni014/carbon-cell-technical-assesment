import myImg from "@/assets/tushar.jpg";
import { FaChartPie, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";

export default function MyInfo() {
  return (
    <div className=" w-full h-full">
      <div className="__hero flex w-full justify-center items-center gap-3">
        <img src={myImg} alt="" className="w-28 h-28 rounded-full" />
        <h2>Tushar Soni</h2>
      </div>
      <h3 className="text-center text-xl my-3">
        Tech Stack I used to complete this assignment.
      </h3>
      <div className="__languages flex gap-2 text-4xl justify-center items-center">
        <FaReact />
        <SiTypescript />
        <SiRedux />
        <SiTailwindcss />
        <SiWeb3Dotjs />
        <FaChartPie />
      </div>
    </div>
  );
}
