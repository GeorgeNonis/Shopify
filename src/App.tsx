import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/root_layout";
import CategoryPage from "./pages/category_page";
import ErrorPage from "./pages/error_page";
import HomePage from "./pages/home_page";
import { loadCategories, loadCategory } from "./utilities/utilities";

// interface Params {
//   params: {
//     cid: string
//   }
// }

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: loadCategories },
      {
        path: ":cid",
        element: <CategoryPage />,
        loader: async ({ params }: any) => {
          return loadCategory(params);
        },
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
