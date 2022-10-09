import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import FourOFour from "./pages/404";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <FourOFour />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
