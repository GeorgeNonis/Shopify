import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/slider.module.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";

interface Props {
  categories: string[];
}

const Slider: React.FC<Props> = ({ categories }) => {
  const [index, setIndex] = useState<number>(0);
  const [display, setDisplay] = useState(false);
  const [blured, setBlured] = useState(false);

  const mainStyle = `${styles.main} ${
    display ? styles.display : console.log("its false")
  }`;
  useEffect(() => {
    if (!blured) {
      return setBlured(true);
    }
    setDisplay(true);

    const timer = setTimeout(() => {
      setDisplay(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [index]);

  console.log(display);
  const goPrevious = () => {
    const currentIndex = index === 0 ? categories.length - 1 : index - 1;
    setIndex(currentIndex);
  };

  const goNext = () => {
    const currentIndex = index === categories.length - 1 ? 0 : index + 1;
    setIndex(currentIndex);
  };
  // I could have done it with an easier way. to get both arrays (catgories from props) and picture from below and just sort them alpha
  //betically and still would work with index.
  const picture = ["electronics", "jewelry", "men", "women"];
  return (
    <div
      // className={styles.main}
      className={mainStyle}
      style={{
        // display: display,
        background: `url(/${picture[index]}.jpg)`,
      }}
    >
      <div className={styles.leftarrow}>
        <FaArrowLeft onClick={goPrevious} />
      </div>
      <div className={styles.rightarrow}>
        <FaArrowRight onClick={goNext} />
      </div>
      <Link to={categories[index]}>
        <h4 className={styles.category}>{categories[index]}</h4>
      </Link>
      <div className={styles.dots}>
        {categories.map((c, index) => {
          // console.log(c);
          return (
            <GoPrimitiveDot
              key={index}
              onClick={() => {
                setIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Slider;
