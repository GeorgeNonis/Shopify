import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styles from "../styles/main_navigation.module.scss";
import { IRootState } from "../store/store";
import { displayCart } from "../store/cart";

export const MainNavigation = () => {
  const dispatch = useDispatch();
  const sum = useSelector((state: IRootState) => state.cart.sum);

  const showCart = () => {
    console.log("clicking");
    dispatch(displayCart());
  };
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
          to={"profile"}
        >
          Profile
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
      <NavLink
        to={"signup"}
        className={({ isActive }) => {
          return isActive ? `${styles.active} ${styles.signup}` : styles.signup;
        }}
      >
        Sign up
      </NavLink>
      <i onClick={showCart}>
        <FaShoppingCart />
        <span className={styles.sum}>{sum}</span>
      </i>
    </section>
  );
};
