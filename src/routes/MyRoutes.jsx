import { Route, Routes } from "react-router";
import Template from "../templates/Template";
import Main from "../page/Main";
import Product from "../page/Product";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Main numCards={4} />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
