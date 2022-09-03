import PersonIcon from "@mui/icons-material/Person";
import "./Header.css";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <Link to="/">
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
          alt="tinder-logo"
          className="header__logo"
        />
      </Link>

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
