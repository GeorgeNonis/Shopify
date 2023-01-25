import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import Slider from "../components/slider";
import styles from "../styles/home_page.module.scss";

interface Categories {
  categories: string[];
}

const HomePage = () => {
  const { categories } = useLoaderData() as Categories;
  console.log(categories);
  return (
    <div>
      <h1 className={styles.intro}>Welcome to the Home Page</h1>
      <h1 className={styles.intro}>Select a category from below</h1>
      <Suspense fallback={<p className={styles.loading}>Loading....</p>}>
        <Await resolve={categories}>
          {(d) => <Slider categories={d} />}
          {/* {(d) => {
            console.log(d);
            return d.map((c: string): JSX.Element => {
              return <p>{c}</p>;
            });
          }} */}
        </Await>
      </Suspense>
    </div>
  );
};
export default HomePage;
