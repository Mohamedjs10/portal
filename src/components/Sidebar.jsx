// Sidebar.js
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Use faGlobe instead of fa-solid fa-globe
import i18n from "../locals/i18n";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  //*

  let locale = i18n.language === "en" ? "en" : "ar";
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    navigate(item.path);
  };

  const sidebarItems = [
    {
      icon: faHouse,
      text: { en: "Home", ar: "الرئيسية" },
      path: "/",
    },
    {
      icon: faHouse,
      text: { en: "About", ar: "عن ديم" },
      path: "/about",
    },
    {
      icon: faHouse,
      text: { en: "Organizational Chart", ar: "الهيكل التنظيمي" },
    },
    {
      icon: faHouse,
      text: { en: "Services and Systems", ar: "الخدمات والأنظمة" },
      path: "/services",
    },
    {
      icon: faHouse,
      text: { en: "Files Library", ar: "مكتبة الملفات" },
      path: "/files",
    },
    { icon: faHouse, text: { en: "Deem Attribution", ar: "منسوب ديم" } },
    { icon: faHouse, text: { en: "Calender", ar: "التقويم" } },
  ];
  const active = locale === "en" ? "active-en" : "active-ar";
  return (
    <div className="sidebar">
      <List>
        {sidebarItems.map((item) => (
          <ListItem
            key={item.id}
            button
            className={`sidebar-item ${
              location.pathname === item.path ? active : ""
            }`}
            onClick={() => {
              handleItemClick(item);
            }}
          >
            <FontAwesomeIcon icon={item.icon} />
            <div dir="auto">
              {locale === "en" ? item.text.en : item.text.ar}
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
