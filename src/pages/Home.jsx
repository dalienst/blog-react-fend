import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'

const Home = () => {

  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res= await axios.get(`/posts${cat}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err)
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
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro ex. Et. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //     img: "https://images.unsplash.com/photo-1680639279846-75504a5e9f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 5,
  //     title: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, porro ex. Et. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
  //     img: "https://images.unsplash.com/photo-1680624926202-29e190fc2bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home