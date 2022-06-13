import React, { Component } from "react";
import "./Home.css";
import { Typography } from "@mui/material";

class Contribute extends Component {
  render() {
    return (
      <div className="App">
        <Typography>
          स्वच्छ, स्वस्थ, संपन्न भारत के निर्माण में आप हमारे सहयोगी बनें। हम आप
          जैसे विचारशील और उदार मित्रों के सहयोग पर निर्भर हैं। आप समय, श्रम,
          आलेख, सूचना, विचार, कार्यालय उपकरण-यथा फर्नीचर, कंप्यूटर, वाहन,
          पुस्तकें, स्टेशनरी और कार्यकर्ताओं को मासिक मानदेय उपलब्ध करा सकते
          हैं। योग्य और सक्षम व्यक्तियों को सहयोग के लिए प्रेरित कर सकते हैं।
        </Typography>
        <br />
        <Typography>आपका किसी भी प्रकार का सहयोग स्वागत योग्य है।</Typography>
        <br />
        <Typography container="h4" variant="h4"></Typography>
        <Typography>
          Account Name - सत्यमेव जयते ट्रस्ट
          <br />
          Bank Name - Union Bank of India, Chetganj, Varanasi, UP
          <br />
          Account No - 408002011003502
          <br /> IFSC - UBIN0540803
        </Typography>
      </div>
    );
  }
}

export default Contribute;
