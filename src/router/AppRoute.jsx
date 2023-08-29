import { Routes, Route } from "react-router-dom";
import { routesName } from "../assets/utils/routesName";
import Home from "../page/Home.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routesName.home} element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
