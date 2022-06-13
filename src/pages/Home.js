import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import logo from "../static/satyamev-jayate-logo.jpg";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h1">सत्यमेव जयते</Typography>
          <Typography component="h5" variant="h5" align="center">
            (सत्यनिष्ठ, कर्मनिष्ठ, भारतभक्त लोकसेवकों का पंजीकृत न्यास)
          </Typography>
          <hr />
          <Typography component="h6" align="center">
            व्यक्ति, राष्ट्र और विश्व में सत्य की प्रतिष्ठा और प्रसार को समर्पित
            संगठन
            <hr />
            मुख्यालय - बरौत, इलाहाबाद, उत्तर प्रदेश, भारत- 221502
            <br />
            नगर कार्यालय - विमल कुंज, उपेंद्र नगर (कबीर नगर), दुर्गाकुंड
            वाराणसी, उ.प्र. 221005
            <hr />
            दूरभाष - 7897995218, 9198973366, 9670007733, 7897995200
            <br />
            ईमेल - satyamevjayate.bharat.2007@gmail.com
            <hr />
            मानव मन का करें विकास ★ फैले धरती से आकाश
            <br />★ उदार चरितानां तु वसुधैव कुटुम्बकम् ★
          </Typography>
          {/* <Button
            component={Link}
            variant="contained"
            size="large"
            to="/register"
          >
            Register
          </Button> */}
          <hr />
          {/* <img src={brochure1} alt="brochure1" /> */}
          {/* <img src={brochure2} alt="brochure2" />
          <img src={brochure3} alt="brochure3" />
          <img src={brochure4} alt="brochure4" />
          <img src={brochure5} alt="brochure5" />
          <img src={brochure6} alt="brochure6" /> */}
        </header>
      </div>
    );
  }
}

export default Home;
