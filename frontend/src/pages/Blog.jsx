import React, { useEffect, useState } from "react";
import {
  Grid,
  useMediaQuery,
  useTheme,
  Container,
  styled,
  Button,
  Typography,
} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import gambar from "../images/blog/blog_banner.jpg";

const Content = styled("div")`
  height: 50vh;
  background-position: 50% 40%;
  background-image: url(${gambar});
  background-size: cover;
  position: relative;
  backgound-repeat: no-repeat;
  z-index: -2;
  filter: brightness(50%);
`;

const ImgComp = styled("img")`
  width:'auto;
  objectFit: "contain";                      
  display:block;
  margin-left:auto;
  margin-right:auto;
`;

const Blog = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const[posts,setPost] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData = async() =>{
    const response = await axios.get('http://localhost:5000/blog')
    setPost(response.data)
  }

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
              Blog
            </h1>
          </Grid>
        </Grid>
      </div>

      <Container
        maxWidth="false"
        sx={{ backgroundColor: "#ede9e1", py: "50px" }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={10}>
            <h1 className="text-4xl text-black text-center py-10 tracking-wider font-title font-bold ">
              Blog Posts
            </h1>
          </Grid>
          
          {posts.map((data,key)=>{
            return(
              <Grid item md={4} sx={{ border: "1px solid black" }} key={key}>
              <div className="w-[80vw] md:w-[300px] mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
               onClick={() =>{
                navigate(`/post/${data._id}`)
               }}
              >
                  <ImgComp
                    className="rounded-t-lg"
                    src={require("../images/blog/blog-1.jpg")}
                    style={{ height: isMatch ? "53vw" : "15vw" }}
                  />
                <div className="p-5">
                  <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.desc}
                  </p>
                </div>
              </div>
            </Grid>
            )
          })}
         
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;
