import * as React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../static/national-emblem.png";

function Header(props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          display: "flex",
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          component={RouterLink}
          underline="none"
          to="/"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src={logo} />
          <Typography
            component="h5"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            {title}
          </Typography>
        </Link>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {sections.map((section) => (
          <Link
            component={RouterLink}
            variant="contained"
            size="large"
            to={section.url}
            key={section.url}
            underline="none"
            style={{
              fontSize: "1rem",
              backgroundColor: "#EAEAEA",
              padding: "0.5rem",
            }}
          >
            <strong>{section.title}</strong>
          </Link>
        ))}
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
