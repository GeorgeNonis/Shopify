import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/main_navigation.module.scss";
import { IRootState } from "../store/store";

export const MainNavigation = () => {
  const sum = useSelector((state: IRootState) => state.cart.sum);
  return (
    <section className={styles.main}>
      <div className={styles.links}>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : undefined;
          }}
          to={"/"}
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : undefined;
          }}
          to={"store"}
        >
          Store
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.active : undefined;
          }}
          to={"about"}
        >
          About
        </NavLink>
      </div>
      <i>
        <FaShoppingCart />
        <span className={styles.sum}>{sum}</span>
      </i>
    </section>
  );
};
