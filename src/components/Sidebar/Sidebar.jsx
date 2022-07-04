import "./Sidebar.scss";
import React from "react";
import { Avatar, Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__container">
        <div className="main-user">
          <div className="left">
            <Avatar sx={{ width: 50, height: 50 }}></Avatar>
            <div className="user-info">
              <p className="user-name">eyoba_bisru</p>
              <p className="name">Eyob</p>
            </div>
          </div>
          <Button variant="text" size="small">
            switch
          </Button>
        </div>
        {/* Suggestion */}
        <div className="suggestions">
          <div className="title">
            <h4>Suggestions For You</h4>
            <Button variant="text" size="small" color="secondary">
              See All
            </Button>
          </div>
          <div className="suggestion-users">
            <div className="suggestion-user">
              <div className="left">
                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                <div className="user-info">
                  <p className="user-name">gech_teme</p>
                  <p className="name">Gech</p>
                </div>
              </div>
              <Button variant="text" size="small">
                follow
              </Button>
            </div>
            <div className="suggestion-user">
              <div className="left">
                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                <div className="user-info">
                  <p className="user-name">gech_teme</p>
                  <p className="name">Gech</p>
                </div>
              </div>
              <Button variant="text" size="small">
                follow
              </Button>
            </div>
            <div className="suggestion-user">
              <div className="left">
                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                <div className="user-info">
                  <p className="user-name">gech_teme</p>
                  <p className="name">Gech</p>
                </div>
              </div>
              <Button variant="text" size="small">
                follow
              </Button>
            </div>
            <div className="suggestion-user">
              <div className="left">
                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                <div className="user-info">
                  <p className="user-name">gech_teme</p>
                  <p className="name">Gech</p>
                </div>
              </div>
              <Button variant="text" size="small">
                follow
              </Button>
            </div>
            <div className="suggestion-user">
              <div className="left">
                <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                <div className="user-info">
                  <p className="user-name">gech_teme</p>
                  <p className="name">Gech</p>
                </div>
              </div>
              <Button variant="text" size="small">
                follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
