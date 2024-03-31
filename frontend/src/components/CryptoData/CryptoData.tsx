import { fetchCryptoData } from "@/redux/slices/cryptoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { Loader } from "rsuite";
import { FaBitcoin } from "react-icons/fa";
import CurrencyCard from "./CurrencyCard";
import BitcoinIcon from "./BitcoinLogo/BitcoinIcon";

export default function CryptoData() {
  const dispatch = useAppDispatch();
  const cryptoDataLoading = useAppSelector(
    (state) => state.cryptoSlice.cryptoDataLoading
  );
  const cryptoData = useAppSelector((state) => state.cryptoSlice.crytoData);
  useEffect(() => {
    dispatch(fetchCryptoData());
  }, []);
  if (cryptoDataLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  if (cryptoData)
    return (
      <div className=" w-full h-full">
        <h1 className="flex justify-center items-center gap-1 text-3xl md:text-4xl">
          <BitcoinIcon />
          {cryptoData.chartName}
        </h1>
        <p className="text-center text-xs md:text-base">
          Last Updated at: {cryptoData.time.updated}
        </p>
        <div className="__crypto_info  grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 mt-5">
          <CurrencyCard currencyData={cryptoData.bpi.USD} />
          <CurrencyCard currencyData={cryptoData.bpi.GBP} />
          <CurrencyCard currencyData={cryptoData.bpi.EUR} />
        </div>
      </div>
    );
}
