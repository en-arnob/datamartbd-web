import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const Router = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <App />,
  },
  {
    path: "/about/history",
    element: <History />,
  },
]);
export default Router;
