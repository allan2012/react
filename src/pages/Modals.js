import React, {useEffect, useState} from "react";
import AppLayout from "../layouts/AppLayout";
import {Button} from "semantic-ui-react";
import {toast, ToastContainer} from "react-toastify";
import ModalForm from "../components/ModalForm";


export default function Modals() {

  return (
    <AppLayout title="Modals">
      <EmailModal/>
      <ToastContainer/>
    </AppLayout>
  )
}

const EmailModal = () => {

  const [email, setEmail] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success(`Email: ${email} with content as ${body}`)
  }

  const resetForm = () => {
    setBody("")
    setEmail("")
  }

  return (
    <div className="container">
      <Button primary data-bs-toggle="modal" data-bs-target="#emailDemoModal" onClick={() => resetForm()}>
        Launch demo modal
      </Button>

      <ModalForm title="Email form" onSubmitHandler={handleSubmit} modalId="emailDemoModal">
        <div className="mb-3">
          <label htmlFor="email-text-input" className="form-label">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email-text-input"
            placeholder="Enter email..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body-input" className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="body-input"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="3"
          />
        </div>
      </ModalForm>
    </div>
  )
}