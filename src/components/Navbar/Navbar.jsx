import HomeIcon from "@mui/icons-material/Home";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import IconButton from "@mui/material/IconButton";
import { Avatar } from "@mui/material";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__center">
        <img
          alt="instagram logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
        />

        <div className="nav__search">
          <SearchSharpIcon />
          <input
            className="nav__search__textfield"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="nav__links">
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddBoxOutlinedIcon />
          </IconButton>
          <IconButton>
            <ExploreOutlinedIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <Avatar sx={{ width: 25, height: 25 }} />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
