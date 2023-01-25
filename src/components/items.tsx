import styles from "../styles/items.module.scss";
import { formatPrice } from "../utilities/utilities";

interface Top {
  // items: Item;
  items: [Item];
}

interface Item {
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

//Testing purposes
interface Giorgos {
  name: string;
}

const test: Giorgos[] = [{ name: "Giorgos" }];

// const formatAsPercentage = (num: number): string => {
//   return new Intl.NumberFormat("default", {
//     style: "percent",
//     // minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(num / 5);
// };

//Testing purposes
const starStyle = ["", "one", "two", "three", "four", "five"];

const Items = ({ items }: Top) => {
  return (
    <>
      {items.map((item, index): JSX.Element => {
        console.log(starStyle[Math.round(item.rating.rate)]);
        // console.log(Math.round(item.rating.rate));
        return (
          <div key={index} className={styles.main}>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} />
            <div className={styles.stats}>
              <span>{formatPrice(item.price)}</span>

              <span className={styles[starStyle[Math.round(item.rating.rate)]]}>
                {/* <span className={styles.one}> */}
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Items;
