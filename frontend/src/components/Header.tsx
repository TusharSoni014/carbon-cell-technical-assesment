import { toggleSidebar } from "@/redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { GiHamburgerMenu } from "react-icons/gi";
import Web3 from "web3";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const dispatch = useAppDispatch();
  const displayWidth = useAppSelector((state) => state.appSlice.displayWidth);

  const [userAccount, setUserAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    //@ts-ignore
    if (window.ethereum) {
      //@ts-ignore
      const web3 = new Web3(window.ethereum);
      //@ts-ignore
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setUserAccount(accounts[0]);
    } else {
      alert("Please download metamask");
    }
  };

  useEffect(() => {
    console.log(userAccount);
  }, [userAccount]);

  return (
    <div className="h-16 bg-gray-100/70 flex justify-between items-center px-[18px]">
      {displayWidth > 780 ? (
        <GiHamburgerMenu
          size={20}
          className=" cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      ) : null}
      <div className="ml-auto">
        {userAccount ? (
          <div className="flex flex-col justify-center items-center">
            <p>Wallet Connected</p>
            <small className="text-xs">{userAccount}</small>
          </div>
        ) : (
          <Button
            onClick={connectWallet}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Connect Wallet
          </Button>
        )}
      </div>
    </div>
  );
}
