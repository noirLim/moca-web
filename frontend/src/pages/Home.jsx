import {
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  styled,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import gambar from "../images/home/banner_home.png";
import gambar_product from "../images/home/banner_product.png";
import product from "../images/home/americano.jpg";
import homeData from "../data/home.json";
import service from "../images/home/service_2.png";
import AOS from "aos";

const Content = styled("div")`
  height: 100vh;
  background-image: url(${gambar});
  background-size: cover;
  position: relative;
  backgound-repeat: no-repeat;
  z-index: -2;
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

const ImgComp = styled("img")`
  width:'auto;
  objectFit: "contain";                      
  display:block;
  margin-left:auto;
  margin-right:auto;
`;

const Home = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* Header */}
      <Content>
        {isMatch ? (
          <Grid
            container
            sx={{ position: "absolute", top: "25vh" }}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <h1 className="text-4xl px-4 font-title font-semibold mt-0 mb-2 text-left text-slate-100">
                Coffee Time
              </h1>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                padding: "18px",
                textAlign: "left",
              }}
            >
              <p className="text-xl font-body text-slate-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem explicabo accusamus minus unde in voluptas fugit
                dolor modi optio corporis repudiandae obcaecati, delectus
                tenetur temporibus ad, maiores aut dignissimos similique?
              </p>
            </Grid>
            <Grid item xs={12}>
              <button
                className="bg-coffee py-2 px-6 roundedhover:bg-indigo-400 
               duration-500 ml-5 font-body text-white"
                data-aos="fade-up"
              >
                Read More
              </button>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            sx={{ position: "absolute", top: "35vh" }}
            align="justify"
            paddingLeft={8}
          >
            <Grid item md={6}>
              <h1 className="text-6xl px-4 font-title  mt-0 mb-2 text-slate-100">
                Coffee Time
              </h1>
            </Grid>
            <Grid item md={3} />
            <Grid item md={6}>
              <p className="text-xl px-4 py-4 font-body text-slate-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem explicabo accusamus minus unde in voluptas fugit
                dolor modi optio corporis repudiandae obcaecati, delectus
                tenetur temporibus ad, maiores aut dignissimos similique?
              </p>
            </Grid>
            <Grid item md={3} />
            <Grid item md={6}>
              <button
                className="bg-coffee py-2 px-6 roundedhover:bg-indigo-400 
          duration-500 ml-5 font-body text-white"
                data-aos="fade-up"
              >
                Read More
              </button>
            </Grid>
          </Grid>
        )}
      </Content>

      {/* Section 2 */}
      <Container
        maxWidth="false"
        sx={{ py: "50px", backgroundColor: "#ede9e1" }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          {isMatch ? (
            <div>
              <Grid item xs={12}>
                <h1 className="text-4xl text-center py-7 tracking-wider font-title font-bold ">
                  Who We Are?
                </h1>
                <p className="text-xl text-center text-transparan px-10 font-body ">
                  We are a team of dedicated coffee fans who celebrate
                  exceptional coffee brands and roasters by providing our guests
                  the unique opportunity to try coffee drinks of the highest
                  quality.
                </p>
              </Grid>
              <Grid item xs={12} sx={{ mt: "30px" }}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {homeData.home_pic.map((data, key) => {
                    return (
                      <>
                        <Grid
                          key={key}
                          item
                          sx={{ mx: "auto" }}
                          sm={3}
                          data-aos="fade-up"
                        >
                          <ImgCoffeeMob
                            src={require("../images/home/" + data)}
                          />
                        </Grid>
                      </>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          ) : (
            <>
              <Grid item md={6}>
                {homeData.home_pic.map((data, key) => {
                  return (
                    <div key={key} className="float-left" data-aos="fade-up">
                      <ImgCoffee src={require("../images/home/" + data)} />
                    </div>
                  );
                })}
              </Grid>
              <Grid item md={6} sx={{ marginTop: "-60px" }}>
                <h1 className="text-4xl text-center py-10 tracking-wider font-title font-bold ">
                  Who We Are?
                </h1>
                <p className="text-xl text-transparan px-10 font-body">
                  We are a team of dedicated coffee fans who celebrate
                  exceptional coffee brands and roasters by providing our guests
                  the unique opportunity to try coffee drinks of the highest
                  quality.
                </p>
              </Grid>
            </>
          )}
        </Grid>
      </Container>

      {/* Section 3 */}
      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#aa6c31", py: "50px" }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          {isMatch ? (
            <div>
              <Grid item xs={12}>
                <h1 className="text-4xl text-white text-center px-10 py-10 tracking-wider font-title font-bold ">
                  Our Services
                </h1>
                <p className="text-[20px] text-white text-center text-body px-10">
                  We provide a variety of services both to our new and regular
                  customers. If you can think of anything connected with coffee,
                  then we can offer it at our Coffee Shop.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  backgroundColor: "black",
                  backgroundImage: `url(${gambar})`,
                  backgroundSize: "cover",
                  height: "auto",
                  marginTop: "30px",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  padding={5}
                >
                  {homeData.home_service.map((data, key) => {
                    return (
                      <Grid key={key} item xs={12} sx={{ height: "240px" }}>
                        <img src={service} className="mx-auto w-[60px]" />
                        <h1 className="text-center text-white font-title py-5">
                          {data.name}
                        </h1>
                        <p className="text-base text-center text-white  font-body">
                          {data.desc}
                        </p>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </div>
          ) : (
            <>
              <Grid
                item
                md={6}
                sx={{
                  marginTop: "-90px",
                }}
              >
                <h1 className="text-4xl text-white text-left px-10 py-10 tracking-wider font-title font-bold ">
                  Our Services
                </h1>
                <p className="text-[20px] text-white text-left text-body px-10">
                  We provide a variety of services both to our new and regular
                  customers. If you can think of anything connected with coffee,
                  then we can offer it at our Coffee Shop.
                </p>
              </Grid>
              <Grid
                item
                md={6}
                sx={{
                  backgroundColor: "black",
                  backgroundImage: `url(${gambar})`,
                  backgroundSize: "cover",
                  height: "65vh",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  padding={4}
                >
                  {homeData.home_service.map((data, key) => {
                    return (
                      <Grid key={key} item md={6} sx={{ height: "200px" }}>
                        <img src={service} className="mx-auto w-[60px] py-3" />
                        <h1 className="text-center text-white font-title py-3">
                          {data.name}
                        </h1>
                        <p className="text-base text-white px-10 font-body">
                          {data.desc}
                        </p>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>

      {/* Section 4 */}
      <Container
        maxWidth={false}
        sx={{
          backgroundImage: `url(${gambar_product})`,
          backgroundSize: "cover",
          height: "auto",
          paddingBottom: "80px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: "10vh" }}
        >
          <Grid item xs={12} md={12} sx={{ my: "20px" }}>
            <h1 className="text-4xl text-white text-center px-10 py-10 xs:py-3 tracking-wider font-title font-bold ">
              Our Products
            </h1>
            <p className="text-[20px] text-white text-center text-body px-[20vw] sm:px[-5vw] md:mb-[30px] ">
              We provide a variety of services both to our new and regular
              customers. If you can think of anything connected with coffee,
              then we can offer it at our Coffee Shop.
            </p>
          </Grid>
          {homeData.home_products.map((data, key) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                sx={{ mx: "auto", marginBottom: "20px" }}
                data-aos="fade-up"
                key={key}
              >
                {isMatch ? (
                  <div className="w-[250px] h-[auto] rounded  shadow-lg bg-white mx-auto">
                    <img
                      className="w-[auto] h-[400px] mx-auto"
                      src={require("../images/home/" + data.image)}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl text-center mb-2">
                        {data.name}
                      </div>
                      <p className="text-gray-700 text-base text-center">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-[20vw] h-[auto] rounded  shadow-lg bg-white mx-auto">
                    <img
                      className="w-[auto] h-[30vw] mx-auto"
                      src={require("../images/home/" + data.image)}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl text-center mb-2">
                        {data.name}
                      </div>
                      <p className="text-gray-700 text-base text-center">
                        {data.desc}
                      </p>
                    </div>
                  </div>
                )}
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Section 5 */}
      <Container maxWidth={false} sx={{ backgroundColor: "#ede9e1" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <h1 className="text-4xl text-black text-center py-10 tracking-wider font-title font-bold ">
              Latest Blog Posts
            </h1>
            <p className="text-[17px] text-black text-center text-body ] md:mb-[30px] ">
              Coffee Shop is not only a place where you can get a hot and tasty
              coffee. Our team members also write interesting articles on
              everything concerning coffee.
            </p>
          </Grid>
          <Grid item xs={12} md={10}>
            <Grid container justifyContent="center" alignItems="center">
              {homeData.home_blog.map((data, key) => {
                return (
                  <Grid item key={key} md={3} sx={{ mx: "auto", my: "10px" }}>
                    <div className="w-[80vw] md:w-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#">
                        <ImgComp
                          className="rounded-t-lg"
                          src={require("../images/blog/" + data.name)}
                          style={{ height: isMatch ? "53vw" : "15vw" }}
                        />
                      </a>
                      <div className="p-5">
                        <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
