import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  styled,
  Button,
  Typography,
} from "@mui/material";
import axios from "axios";
import gambar from "../images/services/banner_services.jpg";
import { useEffect } from "react";

const Banner = styled("div")`
  height: 50vh;
  background-position: 50% 50%;
  background-image: url(${gambar});
  background-size: cover;
  position: relative;
  backgound-repeat: no-repeat;
  z-index: -2;
  filter: brightness(50%);
`;

const BlogCard = styled("div")`
  width: 70vw;
  height: 50vh;
  background-color: white;
  background-size: cover;
  backgound-repeat: no-repeat;
  background-position: 50% 50%;
`;

const BlogCardMob = styled("div")`
  width: 80vw;
  height: 60vh;
  background-color: white;
  background-size: cover;
  backgound-repeat: no-repeat;
  background-position: 50% 50%;
  margin-left: auto;
  margin-right: auto;
`;



const Services = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [service,setService] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/service');
    setService(response.data);
  };

  console.log(service)

  const ServiceCard = (props) => {
    const value = props.val;
    return (
      <div>
        {service
          .filter((data) => data.inc == value)
          .map((dt, key) => {
            return (
              <>
                {dt.inc % 2 == 0 ? (
                  <BlogCard
                    key={key}
                    sx={{
                      backgroundImage: `url(${require("../images/services/" +
                        dt.serviceImage.substring(7))})`,
                      position: "relative",
                    }}
                  >
                    <div className=" h-auto w-[20vw] absolute inset-x-[5.5vw] top-[3vw]">
                      <h1 className="text-white text-3xl  font-title">
                        {dt.title}
                      </h1>
                      <span className="text-white text-left text-lg font-title">
                        $40.50
                      </span>
                      <p className="text-white text-lg font-title pt-5">
                        Select your favorite coffee blend from dozens of those
                        available at Coffee Shop. discover the world of Coffee
                        with us!
                      </p>
                    </div>
                  </BlogCard>
                ) : (
                  <BlogCard
                    sx={{
                      backgroundImage: `url(${require("../images/services/" +
                      dt.serviceImage.substring(7))})`,
                      position: "relative",
                    }}
                    key={key}
                  >
                    <div className=" h-auto w-[20vw] absolute inset-x-[45vw] top-[3vw]">
                      <h1 className="text-white text-3xl  font-title">
                        {dt.title}
                      </h1>
                      <span className="text-white text-left text-lg font-title">
                        {dt.price}
                      </span>
                      <p className="text-white text-lg font-title pt-5">
                        {dt.desc}
                      </p>
                    </div>
                  </BlogCard>
                )}
              </>
            );
          })}

      </div>
    );
  };

  const ServiceCardMob = (props) => {
    const val = props.val;
    return (
      <div>
        {service
          .filter((data) => data.inc == val)
          .map((dt, key) => {
            return dt.inc % 2 == 0 ? (
              <BlogCardMob
                key={key}
                sx={{
                  backgroundImage: `url(${require("../images/services/" +
                    dt.serviceImage.substring(7))})`,
                  position: "relative",
                }}
              >
                <div className=" h-auto w-[40vw] absolute inset-x-[8vw] top-[10vw]">
                  <h1 className="text-white text-md font-title">{dt.title}</h1>
                  <span className="text-white text-left text-sm font-title">
                    {dt.price}
                  </span>
                  <p className="text-white text-sm font-title pt-3">
                    {dt.desc}
                  </p>
                </div>
              </BlogCardMob>
            ) : (
              <BlogCardMob
              sx={{
                backgroundImage: `url(${require("../images/services/" +
                  dt.serviceImage.substring(7))})`,
                position: "relative",
              }}
                key={key}
              >
                <div className=" h-auto w-[40vw] absolute inset-x-[32vw] top-[10vw]">
                  <h1 className="text-white text-md font-title">{dt.title}</h1>
                  <span className="text-white text-left text-sm font-title">
                    {dt.price}
                  </span>
                  <p className="text-white text-sm font-title pt-3">
                    {dt.desc}
                  </p>
                </div>
              </BlogCardMob>
            );
          })}
      </div>
    );
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <Banner />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ position: "absolute", top: isMatch ? "35vw" : "10vw" }}
        >
          <Grid item xs={12} md={12}>
            <h1 className="text-4xl text-white text-center tracking-wider font-title font-bold">
              Services
            </h1>
          </Grid>
        </Grid>
      </div>

      <Container
        maxWidth="false"
        sx={{ py: "50px", backgroundColor: "#ede9e1" }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item md={6}>
            <h1 className="text-4xl text-black text-center tracking-wider font-title font-bold">
              Our Services
            </h1>
            <p
              className="text-[5vw] md:text-[1.5vw] text-center text-grey mt-5"
              style={{
                width: isMatch ? "80vw" : "40vw",
              }}
            >
              Coffee Shop offers world-class coffee drinks and a variety of
              coffee related services. Here are just some of them.
            </p>
          </Grid>
          <div style={{ marginTop: "5vw" }}>
            {service.map((data, key) => {
              return (
                <div key={key}>
                  {isMatch ? (
                    <Grid item xs={6}>
                      <ServiceCardMob val={data.inc} />
                    </Grid>
                  ) : (
                    <Grid item md={6}>
                      <ServiceCard val={data.inc} />
                    </Grid>
                  )}
                </div>
              );
            })}
          </div>
        </Grid>

      </Container>

    </div>
  );
};

export default Services;
