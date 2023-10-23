import AppLayout from "../layouts/AppLayout";
import {useState} from "react";

export default function Forms() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleForm = () => {
    alert("about" + about)
  }

  return (
    <AppLayout>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Full names</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of birth</label>
            <input
              type="date"
              className="form-control"
              value={dateOfBirth}
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">About yourself</label>
            <textarea
              className="form-control"
              id="about"
              rows="3" value={about}
              onChange={e => setAbout(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <button className="btn btn-primary" onClick={() => handleForm()}>Submit</button>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
