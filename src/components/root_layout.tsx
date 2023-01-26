import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { IRootState } from "../store/store";
import Cart from "./cart";
import { MainNavigation } from "./main_navigation";
import Modal from "./modal";

const RootLayout = () => {
  const { item, cart } = useSelector((state: IRootState) => state);
  return (
    <>
      <MainNavigation />
      <main>
        {item.display &&
          ReactDOM.createPortal(
            <Modal />,
            document.getElementById("modal") as HTMLElement
          )}
        {ReactDOM.createPortal(
          <Cart />,
          document.getElementById("cart") as HTMLElement
        )}
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
