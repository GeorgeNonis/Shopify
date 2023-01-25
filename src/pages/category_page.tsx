import { Suspense } from "react";
import { useParams, useLoaderData, Await } from "react-router-dom";
import Items from "../components/items";
import styles from "../styles/category_page.module.scss";

interface Category {
  category: {};
}

const CategoryPage = () => {
  const { category } = useLoaderData() as Category;
  const params = useParams();
  // console.log(category);
  // console.log("Im in the page");
  return (
    <div>
      <Suspense fallback={<p className={styles.loading}>Loading....</p>}>
        <Await resolve={category}>
          {(c): JSX.Element => {
            return (
              <>
                <h1 className={styles.title}>Welcome to {params.cid}</h1>
                <div className={styles.items}>
                  <Items items={c} />
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
export default CategoryPage;
