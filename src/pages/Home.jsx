import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Switch from "../components/Switch";
import Popover from "../components/Popover";
import Sidebar from "../components/Sidebar";
import MySwiper from "../components/MySwiper";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./home.css";
import { useNavigate } from "react-router-dom";

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
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  //* localization
  const { t } = useTranslation();
  let locale = i18n.language === "en" ? "en" : "ar";
  const direction = locale === "en" ? "ltr" : "rtl";
  console.log(locale);
  const systems = [
    {
      title: { en: "test", ar: "منصة سم" },
      icon: faFontAwesome,
      color: "#388beb",
    },
    {
      title: { en: "test", ar: "المساندة الفنية" },
      icon: faUser,
      color: "#23b084",
    },
    {
      title: { en: "test", ar: "المكتبة المعرفية" },
      icon: faAward,
      color: "#6258a5",
    },
    {
      title: { en: "test", ar: "ابداع" },
      icon: faLightbulb,
      color: "#fcaa44",
    },
    {
      title: { en: "test", ar: "هويتنا" },
      icon: faFingerprint,
      color: "#ed7332",
    },
    {
      title: { en: "test", ar: "التوظيف الداخلي" },
      icon: faPersonWalkingLuggage,
      color: "#99d631",
    },
    {
      title: { en: "test", ar: "اداة تصنيف البيانات" },
      icon: faChartSimple,
      color: "#f16987",
    },
  ];
  //* routing
  const navigate = useNavigate();

  return (
    <div dir={direction}>
      <div className="navbar-container">
        <img src={logo} width="100px" />
        <div className="navbar-sub-container">
          <Switch />
          <Popover />
        </div>
      </div>
      <div className="body-container">
        <div className="body-sidebar">
          <Sidebar />
        </div>
        <div className="body-content-home">
          <div className="body-section-a">
            <div
              style={{ width: "200px", height: "300px", flexGrow: "1" }}
              className="card my-swiper"
            >
              <MySwiper></MySwiper>
            </div>
            <div className="card-column" style={{ width: "300px" }}>
              <div
                className="card"
                style={{ backgroundColor: "#25346b", color: "#fff" }}
              >
                Date
              </div>
            </div>
          </div>
          <div className="body-section-b">
            <div>أبرز الأنظمة</div>
            {systems?.map((item) => (
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  gap: "10px",
                  color: "#fff",
                  bgcolor: item.color,
                  "&:hover": {
                    color: "#fff",
                    bgcolor: item.color,
                  },
                }}
              >
                <FontAwesomeIcon icon={item.icon} />
                {locale === "en" ? item.title.en : item.title.ar}
              </Button>
            ))}
          </div>
          <div className="body-section-c">
            {/* <div className="card-column" style={{ flexGrow: "1" }}> */}
            <div className="card-column" style={{ width: "30%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img src={logo} width="25px" />
                  <p>اسرة سدايا</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#25346b",
                  }}
                >
                  المزيد
                  <KeyboardArrowLeftIcon sx={{ fontSize: 20 }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div style={{ width: "50px" }}>
                  <FontAwesomeIcon
                    icon={faAward}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    الف مبروك راشد الهدهود
                  </div>
                  <div style={{ color: "#606060" }}>
                    نهنئ الزميل راشد بن عبد الله الهدهود من الادلرة العامة لمركز
                    البيانات والطاقة حصوله على شهادة بكالريوس هندسة الامن
                    السيبراني من من كلية ...
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card-column" style={{ flexGrow: "1" }}> */}
            <div className="card-column" style={{ width: "30%" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FontAwesomeIcon icon={faFile} />
                  <p>الملفات المهمة</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#25346b",
                  }}
                >
                  المزيد
                  <KeyboardArrowLeftIcon sx={{ fontSize: 20 }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {[
                  {
                    title: {
                      en: "user guide for how to share files",
                      ar: "دليل المستخدم لنظام مشاركة الملفات",
                    },
                    url: "#",
                  },
                  {
                    title: {
                      en: "user guide for how to share files",
                      ar: "دليل المستخدم لنظام مشاركة الملفات",
                    },
                    url: "#",
                  },
                  {
                    title: {
                      en: "user guide for how to share files",
                      ar: "دليل المستخدم لنظام مشاركة الملفات",
                    },
                    url: "#",
                  },
                  {
                    title: {
                      en: "user guide for how to share files",
                      ar: "دليل المستخدم لنظام مشاركة الملفات",
                    },
                    url: "#",
                  },
                ].map((item) => (
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faFile}
                      style={{ fontSize: "40px", color: "#e53953" }}
                    />
                    <div style={{ textAlign: "center" }}>
                      {locale == "en" ? item.title.en : item.title.ar}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="card-column" style={{ flexGrow: "1" }}> */}
            <div className="card-column" style={{ width: "30%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <img src={logo} width="25px" />
                  <p>اسرة سدايا</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#25346b",
                  }}
                >
                  المزيد
                  <KeyboardArrowLeftIcon sx={{ fontSize: 20 }} />
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <div style={{ width: "50px" }}>
                  <FontAwesomeIcon
                    icon={faAward}
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    الف مبروك راشد الهدهود
                  </div>
                  <div style={{ color: "#606060" }}>
                    نهنئ الزميل راشد بن عبد الله الهدهود من الادلرة العامة لمركز
                    البيانات والطاقة حصوله على شهادة بكالريوس هندسة الامن
                    السيبراني من من كلية ...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="body-section-d-title">روابط تهمك</div>
            <div className="body-section-d">
              {[
                {
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/6/60/SDAIA-Logo-2.png",
                  link: "https://sdaia.gov.sa/ar/default.aspx",
                },
                {
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/6/60/SDAIA-Logo-2.png",
                  link: "https://sdaia.gov.sa/ar/default.aspx",
                },
                {
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/6/60/SDAIA-Logo-2.png",
                  link: "https://sdaia.gov.sa/ar/default.aspx",
                },
                {
                  image:
                    "https://upload.wikimedia.org/wikipedia/commons/6/60/SDAIA-Logo-2.png",
                  link: "https://sdaia.gov.sa/ar/default.aspx",
                },
              ].map((item) => (
                <div
                  className="card scale"
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                  style={{
                    width: "150px",
                    height: "90px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={item.image} height="100%" width="100%" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
