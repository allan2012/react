import {client} from "../lib/axiosInstance";

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getPost = async (postID) => {
  try {
    return await client.get(`${BASE_URL}/posts/${postID}`)
  } catch(err) {
    console.log(err)
  }
}

export const fetchPosts = async () => {
  try {
    return await client.get(`${BASE_URL}/posts`)
  } catch (err) {
    console.log(err)
  }
}