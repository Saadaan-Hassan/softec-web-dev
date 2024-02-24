  import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DASHBOARD,
  LOGIN,
  PLACES,
  ADDPLACE,
  EDITPLACE,
  QUERIES,
  ANSWER,
  ANSQUERIES
} from "./constants/routes";
import "antd/dist/reset.css";
import "./assets/styles/main.css";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Main from "./components/Main";
import Places from "./pages/Places/Places";
import AddPlace from "./pages/Places/AddPlace";
import EditPlace from "./pages/Places/EditPlace";
import Queries from "./pages/Queries/Queries";
import Answer from "./pages/Queries/Answer";
import AnsQueries from "./pages/Queries/AnsQueries";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={LOGIN} element={<LogIn />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<Main />}>
              <Route exact path={DASHBOARD} element={<Home />} />
              <Route exact path={PLACES} element={<Places />} />
              <Route exact path={ADDPLACE} element={<AddPlace />} />
              <Route exact path={EDITPLACE} element={<EditPlace />} />

              <Route exact path={QUERIES} element={<Queries />} />
              <Route exact path={ANSWER} element={<Answer />} />
              <Route exact path={ANSQUERIES} element={<AnsQueries />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
