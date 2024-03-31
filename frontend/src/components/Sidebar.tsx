import { Sidenav, Nav } from "rsuite";
import GroupIcon from "@rsuite/icons/legacy/Group";
import GridIcon from "@rsuite/icons/Grid";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { setActiveSidenavItem } from "@/redux/slices/appSlice";
import GlobalIcon from "@rsuite/icons/Global";

export const Sidebar = () => {
  const isExpanded = useAppSelector((state) => state.appSlice.sidebarExpanded);
  const displayWidth = useAppSelector((state) => state.appSlice.displayWidth);
  const activeSidenavItem = useAppSelector(
    (state) => state.appSlice.activeSidenavItem
  );
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        transitionProperty: "width",
        transitionDuration: "0.25s",
        width: isExpanded ? "256px" : "60px",
        overflow: "hidden",
      }}
      className={`${
        isExpanded ? "w-64" : "w-fit"
      } bg-gray-100/70 h-[calc(100vh-64px)] overflow-auto`}
    >
      <Sidenav
        expanded={displayWidth < 780 ? false : isExpanded}
        className="overflow-auto"
      >
        <Sidenav.Body>
          <Nav
            activeKey={activeSidenavItem}
            onSelect={(key) => {
              dispatch(setActiveSidenavItem(key));
            }}
          >
            <Nav.Item eventKey="1" icon={<GroupIcon />}>
              Population Chart
            </Nav.Item>
            <Nav.Item className="flex" eventKey="2" icon={<GlobalIcon />}>
              Crypto Data
            </Nav.Item>
            <Nav.Item className="flex" eventKey="3" icon={<GridIcon />}>
              Tech Stack
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};
