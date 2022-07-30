import {
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  styled,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import gambar from "../images/about/about_banner.jpg";

const Content = styled("div")`
  height: 50vh;
  background-position: 50% 50%;
  background-image: url(${gambar});
  background-size: cover;
  position: relative;
  backgound-repeat: no-repeat;
  z-index: -2;
  filter: brightness(50%);
`;

const ImgCoffee = styled("img")`
  width: 220px;
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

const ImgCoffeeMob = styled("img")`
  width: 90px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const About = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const images = ["about-1.jpg", "about-2.jpg", "about-3.jpg"];
  const faq = [
    {
      id: 1,
      name: "Coffee-1",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam sint totam, ipsum corrupti porro voluptatum suscipit dolor",
    },
    {
      id: 2,
      name: "Coffee-2",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam sint totam, ipsum corrupti porro voluptatum suscipit dolor",
    },
    {
      id: 3,
      name: "Coffee-3",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam sint totam, ipsum corrupti porro voluptatum suscipit dolor",
    }
  ];
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Content />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ position: "absolute", top: isMatch ? "35vw" : "10vw" }}
        >
          <Grid item xs={12} md={12}>
            <h1 className="text-4xl text-white text-center tracking-wider font-title font-bold">
              About
            </h1>
          </Grid>
        </Grid>
      </div>

      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#ede9e1", py: "50px" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {isMatch ? (
            <>
              <Grid item xs={12}>
                <h1 className="text-4xl text-center py-7 tracking-wider font-title font-bold ">
                  About Us
                </h1>
                <p className="text-md text-justify text-transparan px-10 font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nam sint totam, ipsum corrupti porro voluptatum suscipit dolor
                  delectus, facilis incidunt alias veniam cupiditate esse odio
                  consectetur repellendus inventore quia! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quos nam sint totam, ipsum
                  corrupti porro voluptatum suscipit dolor delectus, facilis
                  incidunt alias veniam cupiditate esse odio consectetur
                  repellendus inventore quia!
                </p>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {images.map((data, key) => {
                    return (
                      <Grid key={key} item sx={{ mx: "auto" }} sm={3}>
                        <ImgCoffeeMob
                          src={require("../images/about/" + data)}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid item md={6}>
                <h1 className="text-4xl text-center py-7 tracking-wider font-title font-bold ">
                  About Us
                </h1>
                <p className="text-xl text-justify text-transparan px-10 font-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nam sint totam, ipsum corrupti porro voluptatum suscipit dolor
                  delectus, facilis incidunt alias veniam cupiditate esse odio
                  consectetur repellendus inventore quia! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quos nam sint totam, ipsum
                  corrupti porro voluptatum suscipit dolor delectus, facilis
                  incidunt alias veniam cupiditate esse odio consectetur
                  repellendus inventore quia!
                </p>
              </Grid>
              <Grid item md={6}>
                {images.map((data, key) => {
                  return (
                    <div key={key} className="float-left">
                      <ImgCoffee src={require("../images/about/" + data)} />
                    </div>
                  );
                })}
              </Grid>
            </>
          )}
        </Grid>
      </Container>

      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#e0d9d9", py: "50px" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <h1 className="text-4xl text-white text-center py-7 tracking-wider font-title font-bold ">
              FAQ
            </h1>
          </Grid>
          <Grid item xs={10} md={8} sx={{ marginTop: "30px" }}>
            {faq.map((data, key) => {
              return (
                <Accordion sx={{padding:'20px'}} key={key}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h1 className="text-xl font-title font-bold">{data.name}</h1>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="text-md font-body">
                      {data.desc}
                    </p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
