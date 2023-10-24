import AppLayout from "../layouts/AppLayout";
import React from 'react';
import { useEffect, useState } from "react";
import {fetchPosts, getPost} from "../api/JSONplaceholder";

function Dashboard(props) {

  const [post, setPost] = useState({body: "", id: null, title:"", userId:""})
  const [posts, setPosts] = useState([])

  useEffect(() => {

    (async() => {
      try {
        const post = await getPost(1);
        setPost(post.data)
      } catch (err) {
        console.log(err)
      }
    })();

    (async() => {
      try {
        const posts = await fetchPosts();
        setPosts(posts.data)
      } catch (err) {
        console.log(err)
      }
    })();

  }, []);

  const postsList = posts.map(post => <PostRow post={post} />)

  return (
    <AppLayout title="Dashboard">
      <table className="table table-hover">
        <tr>
          <th>ID</th>
          <th>TITLE</th>
        </tr>
        {postsList}
      </table>
    </AppLayout>
  )
}

function PostRow (props) {
  return (
    <tr>
      <td>{props.post.id}</td>
      <td>{props.post.title}</td>
    </tr>
  )
}
export default Dashboard
