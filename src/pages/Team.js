import React, { Component } from "react";
import sdtiwari from "../static/team/sdtiwari.jpg";
import ramanand from "../static/team/ramanand.jpeg";
import shukdev from "../static/team/shukdev.jpg";
import kbpandey from "../static/team/kbpandey.jpeg";
import naresh from "../static/team/naresh.jpg";
import ramdhiraj from "../static/team/ramdhiraj.jpg";
import pkmishr from "../static/team/pkmishr.jpg";
import rajavashishtha from "../static/team/rajavashishtha.jpg";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const TEAM = [
  {
    title: "Dr. Satyamev Jayate Bharat Lokmangal (Shyam Dhar Tiwari)",
    designation: "Deputy Commissioner",
    photo: sdtiwari,
    phone: "94523 02585",
  },
  {
    title: "Sanatani Ramanand",
    designation: "Publisher, Social Worker",
    photo: ramanand,
    phone: "96700 07733",
  },
  {
    title: "Prof. Krishna Bihari Pandey",
    designation: "पूर्व अध्यक्ष लोक सेवा आयोग उ.प्र.",
    photo: kbpandey,
    phone: "",
  },
  {
    title: "Naresh Kumar Vaidya",
    designation: "Director, Vaid's ICS",
    photo: naresh,
    phone: "93113 37737",
  },
  {
    title: "Bhai RaamDhiraj",
    designation: "",
    photo: ramdhiraj,
    phone: "94530 47097",
  },
  {
    title: "Prof. Raja Vashishtha Tripathi",
    designation: "",
    photo: rajavashishtha,
    phone: "90056 39276",
  },
  {
    title: "Prof. P. K. Mishra",
    designation: "Vice Chancellor (Kulpati)",
    photo: pkmishr,
    phone: "94153 01462",
  },
  {
    title: "Shukdev Mishra",
    designation: "Social Worker",
    photo: shukdev,
    phone: "94510 00551",
  },
];

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={1}>
          {TEAM.map(({ title, designation, photo, phone }) => (
            <Grid item xs={12} md={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={photo}
                  alt={title}
                />
                <CardContent>
                  <Typography variant="h6">{title}</Typography>
                  <Typography>{designation}</Typography>
                  <Typography>{phone}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Home;
