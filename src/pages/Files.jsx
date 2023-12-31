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
import sample from "../assets/files/sample.pdf";
export default function Files() {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: mode === "light" ? "#25346B" : "#fff",
          }}
        >
          <FontAwesomeIcon icon={faFileLines} />
          <div>مكتبة الملفات</div>
        </div>
        <div className="search-field-container">
          <TextField
            size="small"
            variant="outlined"
            placeholder={locale == "en" ? "search" : "بحث"}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleSearch} edge="end">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </div>
      </div>
      <div className="body-section">
        {/* mapping over files ---------------------------------------------------------------------------- */}
        {[
          {
            title: {
              en: "file 1",
              ar: "ملف 1",
            },
            link: "https://portal.deem.sa/sites/Sp/ManageDocs/P1.pdf?d=w85d719f41d0a400888f5d971c09dedf3",
          },
          {
            title: {
              en: "file 2",
              ar: "ملف 2",
            },
            link: "https://portal.deem.sa/sites/Sp/ManageDocs/P2.pdf?d=w09e1df26309e4f9799b463b148f5142c",
          },
          {
            title: {
              en: "file 3",
              ar: "ملف 3",
            },
            link: "https://portal.deem.sa/sites/Sp/ManageDocs/P3.pdf?d=wd2dc500a47c2462fb75851134fd3e557",
          },
        ].map((item) => (
          <ServiceCard item={item} />
        ))}
      </div>
      {/* <div
        className="body-section-title"
        style={{
          color: mode === "light" ? "#25346B" : "#fff",
        }}
      >
        ملفات دليل المستخدم
      </div> */}
      <div className="body-section">
        {/* mapping over array ----------------------------------------------------------------------- */}
        {/* {[
          {
            title: {
              en: "user guide for how to use the files",
              ar: "دليل المستخدم لنظام مشاركة الملفات",
            },
            date: { en: "November 23, 2023", ar: "٢٣ نوفمبر ٢٠٢٣" },
            link: sample,
          },
          {
            title: {
              en: "user guide for how to use the files",
              ar: "دليل المستخدم لنظام مشاركة الملفات",
            },
            date: { en: "November 23, 2023", ar: "٢٣ نوفمبر ٢٠٢٣" },
            link: sample,
          },
        ].map((item) => (
          <FileCard item={item} />
        ))} */}
      </div>
    </div>
  );
}
