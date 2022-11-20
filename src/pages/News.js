import React, { Component } from "react";
import "./Home.css";
import { Typography } from "@mui/material";

import photo101 from "../static/news/1.jpeg";
import photo102 from "../static/news/2.jpeg";
import photo103 from "../static/news/3.jpeg";
import photo104 from "../static/news/4.jpeg";
import photo105 from "../static/news/5.jpeg";
import photo106 from "../static/news/6.jpeg";
import photo107 from "../static/news/7.jpeg";
import photo108 from "../static/news/8.jpeg";
import photo109 from "../static/news/9.jpeg";
import photo110 from "../static/news/10.jpeg";
import photo111 from "../static/news/11.jpeg";
import photo112 from "../static/news/12.jpeg";
import photo113 from "../static/news/13.jpeg";
import photo114 from "../static/news/14.jpeg";
import photo115 from "../static/news/15.jpeg";

class News extends Component {
  render() {
    return (
      <div className="App">
        <Typography container="h4" variant="h4">
          News articles on Satyamev Jayate's recent work
        </Typography>
        <Typography>
          <img
            src={photo101}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo102}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo103}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo104}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo105}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo106}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo107}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo108}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo109}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo110}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo111}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo112}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo113}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo114}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
          <br/>
          <img
            src={photo115}
            width="auto"
            height={500}
            style={{ padding: "0.5rem" }}
            alt="event"
          />
        </Typography>
      </div>
    );
  }
}

export default News;
