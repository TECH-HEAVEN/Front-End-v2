import { Route, Routes } from "react-router";
import Template from "../templates/Template";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Template />}></Route>
    </Routes>
  );
};

export default MyRoutes;
