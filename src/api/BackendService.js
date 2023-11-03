import {client} from "../lib/axiosInstance";

const BASE_URL = 'http://127.0.0.1:8000/api'
export const deletePicture = async (id) => {
  try {
    return await client.delete(`${BASE_URL}/pictures/${id}`)
  } catch(err) {
    console.log(err)
  }
}