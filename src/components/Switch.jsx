import React from "react";
import "./switch.css";
import { useSelector, useDispatch } from "react-redux";
import { modeActions } from "../Redux/store";

export default function Switch() {
  const dispatch = useDispatch();

  return (
    <div class="theme-switch-wrapper">
      <label class="switch">
        <input
          defaultChecked={false}
          type="checkbox"
          id="theme-switch"
          onChange={(e) => {
            const status = e.target.checked;
            dispatch(modeActions.switch(status == true ? "dark" : "light"));
          }}
        />

        <span class="slider"></span>
      </label>
    </div>
  );
}
