import AppRouter from "./router/AppRouter";
import HomePage from "./pages/HomePage";
// import BrandsPage from "./pages/BrandsPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const App = () => {
  return (
    <>
      <AppRouter />
      {/* <HomePage /> */}
      {/* <BrandsPage /> */}
    </>
  );
};

export default App;
