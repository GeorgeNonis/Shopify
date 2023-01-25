import { defer } from "react-router-dom";
import axios from "axios";

const getCategories = async () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

export const loadCategories = () => {
  return defer({ categories: getCategories() });
};

const getCategory = async (id: string) => {
  // You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results
  return axios
    .get(`https://fakestoreapi.com/products/category/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const loadCategory = (params: { cid: string }) => {
  return defer({ category: getCategory(params.cid) });
};

const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

export const formatPrice = (number: number) => {
  return CURRENCY_FORMATER.format(number);
};
