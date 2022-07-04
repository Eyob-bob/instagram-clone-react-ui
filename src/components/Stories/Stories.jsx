import "./Stories.scss";
import { Avatar } from "@mui/material";
import React from "react";

const Stories = () => {
  return (
    <div className="stories">
      <div className="stories__card">
        <div className="avatar">
          <div className="avatar__border">
            <Avatar sx={{ height: 50, width: 50 }}></Avatar>
          </div>
          <p className="avatar__name">khaby00</p>
        </div>

        <div className="avatar">
          <div className="avatar__border">
            <Avatar sx={{ height: 50, width: 50 }}></Avatar>
          </div>
          <p className="avatar__name">mkbhd</p>
        </div>
      </div>
    </div>
  );
};

export default Stories;
