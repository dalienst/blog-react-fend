import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro ex. Et. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     img: "https://images.unsplash.com/photo-1617447871614-ffddc87dd75c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro ex. Et. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     img: "https://images.unsplash.com/photo-1680890981209-4a42bc21326c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro ex. Et. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     img: "https://images.unsplash.com/photo-1680782378581-725b905ce915?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
