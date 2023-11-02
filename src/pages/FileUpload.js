import React, {useEffect, useState} from "react";
import AppLayout from "../layouts/AppLayout";
import {Button} from "semantic-ui-react";
import {client} from "../lib/axiosInstance";
import {toast, ToastContainer} from "react-toastify";

const fileInput = {
  padding: '12px'
}

const FileUpload = () => {

  const [file, setFile] = useState("")
  const [pictures, setPictures] = useState([])
  const [deletedPicture, setDeletedPicture] = useState(null)

  const handleChange = event => {
    setFile(event.target.files[0])
  }
  const handleSubmit = event => {
    event.preventDefault()
    const URL = `http://127.0.0.1:8000/api/pictures`
    const formData = new FormData()
    formData.append('file', file)

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }

    client.post(URL, formData, config).then((response) => {
      console.log(response.data)
      let data = response.data
      setFile("")
      toast.success(`Picture uploaded successfully!`)
    })
  }

  const handleDelete = (id) => {
    client.delete(`http://127.0.0.1:8000/api/pictures/${id}`).then(response => {
      setDeletedPicture(id)
      toast.success("Picture has been deleted successfully")
    }).catch(error => { console.log(error)})
  }

  useEffect(() => {
    client.get('http://127.0.0.1:8000/api/pictures').then(response => {
      setPictures(response.data)
    }).catch(error => { console.log(error)})
  }, [file, deletedPicture])

  let pictureList = pictures.map(picture => <
      PictureRow
      key={picture.id}
      url={picture.url}
      createdAt = {picture.created_at}
      path={picture.path}
      id={picture.id}
      handlePictureDelete={handleDelete}
    />)

  return (
    <AppLayout title="File upload">
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">Select a file</label>
              <input className="form-control" style={fileInput} onChange={handleChange} type="file" id="formFile" />
            </div>
            <div className="mb-3">
              <Button primary>Upload Picture</Button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
      <div className="row">
        <table className="table mt-40">
          <thead></thead>
          <tbody>
            {pictureList}
          </tbody>
        </table>
      </div>
    </AppLayout>
  )
}

const PictureRow = props => {
  return (
    <tr>
      <td><img src={props.url} className="rounded float-start" style={{ height: "100px", width: "auto"}} alt="Great pictures" /></td>
      <td>
        <code>
          Date: {props.createdAt}<br />
          Server path: {props.path}
        </code>
      </td>
      <td style={{ textAlign: "right"}}>
        <button className="btn btn mt-30 right" onClick={() => props.handlePictureDelete(props.id)}>
          <i className="bi bi-trash text-danger"></i>
        </button>
      </td>
    </tr>
  )
}

export default FileUpload