import { useEffect } from "react";
import ChartDisplay from "./components/PopulationData/ChartDisplay";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { useAppDispatch, useAppSelector } from "./redux/store";
import {
  setChartWidth,
  setDisplayWidth,
  setSidebarState,
} from "./redux/slices/appSlice";
import CryptoData from "./components/CryptoData/CryptoData";
import { fetchPopulationData } from "./redux/slices/populationSlice";
import { Loader } from "rsuite";

function App() {
  const data = useAppSelector((state) => state.populationSlice.populationData);
  const activeSidenavItem = useAppSelector(
    (state) => state.appSlice.activeSidenavItem
  );
  const chartLoading = useAppSelector(
    (state) => state.populationSlice.populationDataLoading
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPopulationData());
  }, []);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDisplayWidth(window.innerWidth));
      if (window.innerWidth < 920) {
        dispatch(setSidebarState(false));
      }
      if (window.innerWidth < 780) {
        dispatch(setChartWidth("450px"));
      }
      if (window.innerWidth < 530) {
        dispatch(setChartWidth("300px"));
      }
      if (window.innerWidth > 920) {
        dispatch(setSidebarState(true));
        dispatch(setChartWidth("700px"));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="body flex">
        <Sidebar />
        <div className="p-3 flex justify-center items-center h-[calc(100vh-64px)] border w-full">
          {activeSidenavItem === "1" && (
            <div className="__chart">
              {chartLoading ? (
                <>
                  <Loader />
                </>
              ) : (
                data && <ChartDisplay data={data} />
              )}
            </div>
          )}
          {activeSidenavItem === "2" && (
            <div className="__crypto w-full h-full">
              <CryptoData />
            </div>
          )}
          {activeSidenavItem === "3" && (
            <div className="__example">example data</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
