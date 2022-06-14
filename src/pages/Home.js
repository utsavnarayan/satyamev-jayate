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
            मुख्यालय - तुलसी संस्थान, बरौत, हंडिया, प्रयागराज, उत्तर प्रदेश 221502
            <br />
            नगर कार्यालय - बी 27/98 ए8 पिलग्रिम्स हाउस दुर्गाकुंड, वाराणसी, उत्तर प्रदेश 221010
            <hr />
            दूरभाष - 9452302585, 9670007733, 9451000551
            <br />
            ईमेल - satyamevjayate.bharat.2007@gmail.com
            <br />
            वेबसाइट - www.satyamevjayatebharat.org
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
