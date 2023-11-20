import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>error</>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <>error</>,
  },
]);

export default router;
