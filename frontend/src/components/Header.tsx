import { toggleSidebar } from "@/redux/slices/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const dispatch = useAppDispatch();
  const displayWidth = useAppSelector((state) => state.appSlice.displayWidth);

  return (
    <div className="h-16 bg-gray-100/70 flex justify-between items-center px-[18px]">
      {displayWidth > 780 ? (
        <GiHamburgerMenu
          size={20}
          className=" cursor-pointer"
          onClick={() => dispatch(toggleSidebar())}
        />
      ) : null}
    </div>
  );
}
