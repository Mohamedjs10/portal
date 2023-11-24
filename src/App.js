import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Files from "./pages/Files.jsx";
import Services from "./pages/Services.jsx";
import MySwiper from "./components/MySwiper.jsx";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const mode = useSelector((state) => state.mode);
  useEffect(() => {
    document.body.style.backgroundColor =
      mode == "light" ? "#EEF5FF" : "rgb(37, 52, 107)";
  }, [mode]);
  return (
    <div className="container">
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/files" element={<Files />} />
          <Route path="/services" element={<Services />} />
          {/* <Route
            path="/payment-services/biller/:catIndex/:billerIndex"
            element={<Biller />}
          /> */}
        </Routes>
        {/* </Provider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
