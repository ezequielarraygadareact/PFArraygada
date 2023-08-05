import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Nf404 from "../components/pages/nf404/Nf404";

import { routes } from "./routes";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<Nf404 />} />
    </Routes>
  );
};

export default AppRouter;
