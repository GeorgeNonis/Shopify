import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store/store";
import { formatPrice, stars } from "../utilities/utilities";
import styles from "../styles/modal.module.scss";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { displayHandler } from "../store/item";
import { useEffect, useState } from "react";
import { addItem } from "../store/cart";
import { Item } from "./items";

const Modal = () => {
  const [value, setValue] = useState<number>(1);
  const {
    item: { details: item },
    cart,
  } = useSelector((state: IRootState) => state);
  const [bounce, setBounce] = useState<boolean>(false);
  const [present, setPresent] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => {
    console.log("clicking");
    dispatch(displayHandler());
  };

  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(+e.target.value);
  };
  const add = (item: Item, value: number) => {
    dispatch(addItem({ item, value }));
  };

  const btnStyle = `${bounce ? styles.bounce : ""}`;

  useEffect(() => {
    if (!present) {
      setPresent(true);
      return;
    }
    setBounce(true);

    const timer = setTimeout(() => {
      setBounce(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart.sum]);

  return (
    <>
      <div className={styles.background} onClick={closeModal}></div>
      <main className={styles.main}>
        <AiOutlineClose onClick={closeModal} />
        <div>
          <h1>{item.title}</h1>
          <img src={item.image} alt={item.image} />
          <div className={styles.stats}>
            <span>{formatPrice(item.price)}</span>
            <span style={stars(item.rating.rate)}>
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </span>
          </div>
        </div>
        <div>
          <select name="number" id="number" onChange={optionHandler}>
            {[...Array(10).keys()].map((i) => {
              if (i === 0) return;
              return (
                <option value={i} key={i}>
                  {i}
                </option>
              );
            })}
          </select>
          <button
            disabled={value === 0}
            onClick={() => {
              add(item, value);
            }}
            className={btnStyle}
          >
            <AiOutlinePlus />
            Add to cart
          </button>
        </div>
      </main>
    </>
  );
};
export default Modal;
