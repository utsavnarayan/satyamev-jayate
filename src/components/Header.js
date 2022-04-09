import * as React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../static/national-emblem.png";

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{ display: "flex", borderBottom: 1, borderColor: "divider" }}
      >
        <Link component={RouterLink} underline="none" to="/" sx={{ display: "flex" }}>
          <Avatar src={logo} />
          <Typography
            component="h4"
            variant="h4"
            color="inherit"
            align="center"
            noWrap
          >
            Satyamev Jayate
          </Typography>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
