import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header() {
  return (
    <React.Fragment>
      <Toolbar
        sx={{ display: "flex", borderBottom: 1, borderColor: "divider" }}
      >
        <Link underline="none" href="/">
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
