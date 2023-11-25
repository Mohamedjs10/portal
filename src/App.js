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
import { useSelector, useDispatch } from "react-redux";
import logo from "./assets/logo.png";
import logoLight from "./assets/logo-light.png";
import Switch from "./components/Switch";
import Popover from "./components/Popover";
import Sidebar from "./components/Sidebar.jsx";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import i18n from "./locals/i18n";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFontAwesome,
  faUser,
  faAward,
  faLightbulb,
  faFingerprint,
  faPersonWalkingLuggage,
  faChartSimple,
  faFile,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";
function App() {
  const mode = useSelector((state) => state.mode);

  //* localization
  const { t } = useTranslation();
  let locale = i18n.language === "en" ? "en" : "ar";
  const direction = locale === "en" ? "ltr" : "rtl";
  useEffect(() => {
    document.body.style.backgroundColor =
      mode == "light" ? "#EEF5FF" : "rgb(37, 52, 107)";
  }, [mode]);
  return (
    <BrowserRouter>
      <div className="container">
        <div dir={direction}>
          <Navbar />
          <div className="body-container">
            <div className="body-sidebar">
              <Sidebar />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/files" element={<Files />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
