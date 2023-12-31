import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";
import Switch from "../components/Switch";
import Popover from "../components/Popover";
import Sidebar from "../components/Sidebar";
import MySwiper from "../components/MySwiper";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import dummy from "../assets/org.jpg";
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
import Navbar from "../components/Navbar";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import axios from "axios";
export default function Home() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  const mode = useSelector((state) => state.mode);

  //* localization
  const { t } = useTranslation();
  let locale = i18n.language === "en" ? "en" : "ar";
  const direction = locale === "en" ? "ltr" : "rtl";
  const systems = [
    {
      title: { en: "test", ar: "المساندة الفنية" },
      icon: faUser,
      color: "#23b084",
      path: "https://www.servicenow.com/",
    },
    {
      title: { en: "test", ar: "المكتبة المعرفية" },
      icon: faAward,
      color: "#6258a5",
    },

    {
      title: { en: "test", ar: "هويتنا" },
      icon: faFingerprint,
      color: "#ed7332",
    },
  ];
  //* routing
  const navigate = useNavigate();

  return (
    <div className="body-content-home">
      <div className="body-section-a">
        <Box
          sx={{
            width: { xs: "200px", sm: "400px", md: "600px", lg: "1000px" },
          }}
          style={{ height: "300px" }}
          className="card my-swiper"
        >
          <MySwiper></MySwiper>
        </Box>
      </div>
      <div className="body-section-b">
        <div
          style={{
            color: mode === "light" ? "#25346B" : "#fff",
          }}
        >
          أبرز الأنظمة
        </div>
        {systems?.map((item) => (
          <Button
            onClick={() => {
              if (item.path === "https://www.servicenow.com/") {
                window.location.href = item.path;
              } else {
                navigate(item.path);
              }
            }}
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
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={dummy} width="100%" />
          </div>
          {/* <div
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
              <p>اسرة ديم</p>
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
          </div> */}
          {/* <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
            }}
          >
            <div style={{ width: "50px" }}>
              <FontAwesomeIcon icon={faAward} style={{ fontSize: "30px" }} />
            </div>
            <div>
              <div
                style={{
                  color: "#000",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                اقرأ عن كيفية استخدام أحدث التقنيات ...
              </div>
              <div style={{ color: "#606060" }}>
                الذكاء الاصطناعي: يلعب دورًا حيويًا في تبسيط الحياة اليومية
                ويتضمن تطبيقات مثل الروبوتات المنزلية والأجهزة القابلة
                للارتداء​​.
              </div>
            </div>
          </div> */}
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
        <div className="card-column" style={{ width: "30%", display: "none" }}>
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
              <p>اسرة ديم</p>
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
              <FontAwesomeIcon icon={faAward} style={{ fontSize: "30px" }} />
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
                البيانات والطاقة حصوله على شهادة بكالريوس هندسة الامن السيبراني
                من من كلية ...
              </div>
            </div>
          </div>
        </div>

        <div
          className="card-column"
          style={{
            width: "30%",
            height: "320px",
            padding: 0,
            margin: 0,
            overflow: "hidden",
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            style={{
              direction: "ltr !important",
            }}
          >
            <DateCalendar
              style={{
                direction: "ltr !important",
              }}
              value={dayjs(new Date())}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div>
        <div
          className="body-section-d-title"
          style={{
            color: mode === "light" ? "#25346B" : "#fff",
          }}
        >
          روابط تهمك
        </div>
        <div className="body-section-d">
          {[
            {
              image: "https://i.postimg.cc/KjvSBy7T/sdaia.png",
              link: "https://sdaia.gov.sa/ar/default.aspx",
              width: "100%",
            },

            {
              image: "https://i.postimg.cc/J7YmWG5C/service-now.png",
              link: "https://www.servicenow.com/",
              width: "100%",
            },
            {
              image: "https://i.ibb.co/VCwBxzH/Untitled-design-1.png",
              link: "https://www.tenable.com/?tns_languageOverride=true",
              width: "100%",
            },
            {
              image:
                "https://www.beyondtrust.com/assets/svg/logo/beyondtrust.svg",
              link: "https://www.beyondtrust.com/",
              width: "100%",
            },
          ].map((item) => (
            <div
              className="card scale"
              onClick={() => {
                // window.location.href = item.link;
                window.open(item.link, "_blank").focus();
              }}
              style={{
                width: "150px",
                height: "90px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={item.image} width={item.width} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
