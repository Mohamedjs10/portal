import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Switch from "../components/Switch";
import Popover from "../components/Popover";
import Sidebar from "../components/Sidebar";
import FileCard from "../components/FileCard";
import ServiceCard from "../components/ServiceCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./files.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import i18n from "../locals/i18n";
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
  faFileLines,
} from "@fortawesome/free-solid-svg-icons"; // Use faGlobe instead of fa-solid fa-globe
import { useSelector, useDispatch } from "react-redux";
import org from "../assets/org.jpg";
export default function OrganizationalChart() {
  const mode = useSelector((state) => state.mode);
  console.log(mode);

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };
  //* localization
  const { t } = useTranslation();
  let locale = i18n.language === "en" ? "en" : "ar";
  const direction = locale === "en" ? "ltr" : "rtl";

  //* routing

  return (
    <div className="body-content-files">
      <img src={org} />
    </div>
  );
}
