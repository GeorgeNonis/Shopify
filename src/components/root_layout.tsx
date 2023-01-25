import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { IRootState } from "../store/store";
import { MainNavigation } from "./main_navigation";
import Modal from "./modal";

const RootLayout = () => {
  const { display } = useSelector((state: IRootState) => state.item);
  return (
    <>
      <MainNavigation />
      <main>
        {display &&
          ReactDOM.createPortal(
            <Modal />,
            document.getElementById("modal") as HTMLElement
          )}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
