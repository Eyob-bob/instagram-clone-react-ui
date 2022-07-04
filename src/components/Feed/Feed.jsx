import React from "react";
import MainFeed from "../MainFeed/MainFeed";
import Stories from "../Stories/Stories";
import "./Feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <Stories />
      <MainFeed />
    </div>
  );
};

export default Feed;
