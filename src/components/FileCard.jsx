import React from "react";
import "./fileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import i18n from "../locals/i18n";

export default function FileCard({ item }) {
  let locale = i18n.language === "en" ? "en" : "ar";

  return (
    <div
      className="file-card-container card"
      onClick={() => {
        window.open(item.link, "_blank");
      }}
    >
      <div style={{ fontWeight: "bold", color: "#25346b" }}>
        {locale === "en" ? item.title.en : item.title.ar}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "15px", color: "#707272" }}>
          {locale === "en" ? item.date.en : item.date.ar}
        </div>
        <FontAwesomeIcon icon={faDownload} style={{ color: "#49c69c" }} />
      </div>
    </div>
  );
}
