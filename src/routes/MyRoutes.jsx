import { Route, Routes } from "react-router";
import Template from "../templates/Template";
import Main from "../page/Main";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Main numCards={5} />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
