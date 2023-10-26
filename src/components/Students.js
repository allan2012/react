import React, { useState } from "react"
import { useEffect } from "react"
import { getPost } from "../api/JSONplaceholder"

const Students = props => {

    const [post, setPost] = useState({})
    const [currentID, setCurrentID] = useState(1)

    useEffect(() => {

        (async () => {
            try {
                const post = await getPost(props.search);
                setPost(post.data)
                setCurrentID(post.data.id)
            } catch (err) {
                console.log(err)
            }
        })();
    }, [props])

    const handleNext = async () => {
        const newID = currentID + 1
        setCurrentID(newID)
        try {
            const post = await getPost(currentID);
            setPost(post.data)
            setCurrentID(post.data.id)
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="row">
            <div className="col-6 mt-10">
                <table className="table">
                    <tr>
                        <td>ID</td>
                        <td>{post.id}</td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <td>Body</td>
                        <td>{post.body}</td>
                    </tr>
                </table>
                <button className="btn btn-primary" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default Students