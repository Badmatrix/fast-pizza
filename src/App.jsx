import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Ui/Home";
import Error from "./Ui/Error";
import Menu, { loader as menuLoader }  from "./Features/Menu/Menu"
import Cart from "./Features/Cart/Cart"
import CreateOrder, { action as createOrderAction } from "./Features/Order/CreateOrder"
import Order, { loader as orderLoader } from "./Features/Order/Order"
import  { action as updateOrderAction } from "./Features/Order/UpdateOrder"
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
