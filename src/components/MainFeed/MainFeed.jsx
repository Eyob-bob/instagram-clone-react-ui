import { Avatar, Button, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./MainFeed.scss";
import image from "../../assets/placeholder.jpg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

const MainFeed = () => {
  return (
    <div className="main-feed">
      <div className="main-feed__card">
        <div className="main-feed__card__header">
          <div className="profile">
            <Avatar></Avatar>
            <p className="username">@flowers.country</p>
          </div>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="main-feed__card__image">
          <img src={image} alt="post" />
        </div>

        <div className="main-feed__card__bottom">
          <div className="center">
            <div className="btns">
              <div>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                  <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                  <SendOutlinedIcon />
                </IconButton>
              </div>
              <IconButton>
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </div>
            <div className="likes">5019 likes</div>
            <div className="description">
              <p className="username">@flowers.country</p>
              <p className="desc">No pls</p>
            </div>

            <div className="comment">
              <div>
                <div className="stickers">
                  <IconButton>
                    <SentimentSatisfiedOutlinedIcon />
                  </IconButton>
                </div>
                <div className="input">
                  <input type="text" placeholder="add comment..." />
                </div>
              </div>

              <div className="button">
                <Button variant="text">Post</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeed;
