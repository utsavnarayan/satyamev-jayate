import * as React from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import logo from "../static/satyamev-jayate-logo.jpg";

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
      <div
        style={{
          padding: "0.5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
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
              padding: "0.5rem",
            }}
          >
            <strong>{section.title}</strong>
          </Link>
        ))}
         <Link
            component={RouterLink}
            variant="contained"
            size="large"
            to={"/gallery"}
            key={"/gallery"}
            underline="none"
            style={{
              padding: "0.5rem",
            }}
          >
            <strong>Gallery</strong>
          </Link>
        <Link
          variant="contained"
          size="large"
          to="/photos"
          target="_blank"
          style={{
            padding: "0.5rem",
            fontWeight: "bold",
          }}
        >
          <a href="https://drive.google.com/drive/folders/1E-yCxn_g5OtbnJXNIJ7UbLC5Ixmh_weP?usp=sharing">
            Archive
          </a>
        </Link>
       
        <Link
          variant="contained"
          size="large"
          to="/admin"
          target="_blank"
          underline="none"
          style={{
            padding: "0.5rem",
            fontWeight: "bold",
          }}
        >
          <a href="http://65.1.124.115:8069/">Admin</a>
        </Link>
      </div>
      <hr />
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
