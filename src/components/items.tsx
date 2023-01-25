import { IRootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { displayHandler, displayItem } from "../store/item";
import { formatPrice, stars } from "../utilities/utilities";
import { AiOutlinePlus } from "react-icons/ai";
import styles from "../styles/items.module.scss";

export interface Item {
  category: string;
  id: number;
  image: string;
  price: number;
  title: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface Top {
  // items: Item;
  items: [Item];
}

const Items = ({ items }: Top) => {
  const dispatch = useDispatch();
  const state = useSelector((state: IRootState) => state);

  const display = (i: {}) => {
    dispatch(displayHandler());
    dispatch(displayItem(i));
    console.log(state);
  };
  return (
    <>
      {items.map((item, index): JSX.Element => {
        return (
          <div key={index} className={styles.main}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <div className={styles.stats}>
              <span>{formatPrice(item.price)}</span>
              <span style={stars(item.rating.rate)}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <button onClick={() => display(item)}>
              <AiOutlinePlus /> Add to cart
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Items;
