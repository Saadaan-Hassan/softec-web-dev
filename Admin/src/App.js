  import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  DASHBOARD,
  LOGIN,
  PLACES,
  ADDPLACE,
  EDITPLACE
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
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
