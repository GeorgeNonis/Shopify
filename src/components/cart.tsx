import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  displayCart,
  increaseItem,
  removeItem,
} from "../store/cart";
import { IRootState } from "../store/store";
import { formatPrice } from "../utilities/utilities";
import styles from "../styles/cart.module.scss";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
const Cart = () => {
  const { cart } = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();

  const background = cart.display
    ? `${styles.background} ${styles.show}`
    : `${styles.background}`;

  const main = cart.display
    ? `${styles.main} ${styles.show}`
    : `${styles.main}`;

  const showCart = () => {
    dispatch(displayCart());
  };

  const increase = (id: number) => {
    dispatch(increaseItem(id));
  };
  const decrease = (id: number) => {
    dispatch(decreaseItem(id));
  };

  const remove = (id: number) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className={background} onClick={showCart}></div>
      <div className={main}>
        <h3 className={styles.intro}>Your Cart</h3>{" "}
        <AiOutlineClose className={styles.close} onClick={showCart}/>
        {cart.sum === 0 ? (
          <h3 className={styles.empty}>Your Cart is empty..porque puto?</h3>
        ) : (
          <div className={styles.items}>
            {cart.items.map((i) => {
              return (
                <div className={styles.item} key={i.id}>
                  <div className={styles.title}>
                    <h3>{i.title}</h3>
                    <AiOutlineClose
                      className={styles.remove}
                      onClick={() => remove(i.id)}
                    />
                  </div>
                  <img src={i.image} alt={i.image} />
                  <div className={styles.actions}>
                    <button
                      onClick={() => decrease(i.id)}
                      disabled={i.sum === 1}
                    >
                      <AiOutlineMinus />
                    </button>
                    <h3>Qty:{i.sum}</h3>
                    <h3>{formatPrice(i.sum * i.price)}</h3>
                    <button onClick={() => increase(i.id)}>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
