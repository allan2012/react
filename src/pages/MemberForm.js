import React, {useEffect, useState} from "react"
import AppLayout from "../layouts/AppLayout"
import {client} from "../lib/axiosInstance";
import {useNavigate, useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

export default function MemberForm(){

  const [firstName, setFirstName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const {id} = useParams()
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let member = {
        firstName: firstName,
        surname: surname,
        email: email,
        address: address
      }
      await client.put(`/api/members/${id}`, member);
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error.response.data.errors)
    }
  }

  const renderErrors = (field) => (
    errors?.[field]?.map((error, index) => (
      <div key={index} className="invalid-feedback">
        {error}
      </div>
    ))
  )

  console.log(renderErrors('first_name'))

  useEffect(() => {
    if (typeof id !== 'undefined') {
      client.get(`/api/members/${id}`).then(response => {
        let formData = response.data.data;
        setFirstName(formData.first_name)
        setSurname(formData.surname)
        setEmail(formData.email)
        setAddress(formData.address)
      }).catch(error => { console.log(error) })
    }
  }, []);


  return(
    <AppLayout>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
            <input type="text" value={firstName}
                   onChange={e => setFirstName(e.target.value)}
                   className="form-control"
                   id="exampleFormControlInput1"
                   placeholder="" />
            <div className="invalid-feedback">
              {renderErrors('first_name')}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Surname</label>
            <input type="text"
                   onChange={e => setSurname(e.target.value)}
                   value={surname}
                   className="form-control"
                   id="exampleFormControlInput1"
                   placeholder="" />
            {renderErrors('surname')}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
            <input type="text" value={address} onSubmit={e => setAddress(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </div>
    </AppLayout>
  )
}
