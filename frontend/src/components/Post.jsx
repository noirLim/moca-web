import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { id } = useParams();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:5000/blog/${id}`);
    setContents(response.data);
  };

  return (
    <div>
      
      
    </div>
  );
};

export default Post;
