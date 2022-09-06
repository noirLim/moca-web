import {
  Container,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import gambar from "../images/blog/blog_banner.jpg";

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

const Products = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const coffeeList = [
    {
      name: "Cappucino",
      image: "cappucino.png",
    },
    {
      name: "Iced Coffee",
      image: "iced coffee.png",
    },
    {
      name: "Latte",
      image: "latte.png",
    },
    {
      name: "Mocha",
      image: "mocha.png",
    },
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
              Product
            </h1>
          </Grid>
        </Grid>
      </div>
      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#ede9e1", py: "50px" }}
      >
        <Grid container justifyContent="center" alignItems="center">
          {coffeeList.map((data, key) => {
            return (
              <Grid
                item
                md={4}
                sx={{ mb: isMatch ? "8vw" : "2vw" }}
              >
                <img
                  src={require("../images/products/" + data.image)}
                  className="w-auto h-[50vw] md:h-[15vw] mx-auto rounded-md"
                />
                <h5 className="mb-2 mt-[2vw] text-[7vw] md:text-[3vw] md:text-[2vw] font-bold tracking-tight text-center text-gray-900 dark:text-white">
                  {data.name}
                </h5>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
