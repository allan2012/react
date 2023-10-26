import React, {useEffect} from "react"
import {useState} from "react"
import AppLayout from "../layouts/AppLayout"
import {client} from "../lib/axiosInstance";

const Search = () => {

  const [userId, setUserId] = useState("")
  const [members, setMembers] = useState({})
  const [data, setData] = useState([])

  const params = new URLSearchParams({
    page: members.current_page,
  });

  console.log(`http://127.0.0.1:8000/api/members?${params}`)

  useEffect(() => {
    client.get(`http://127.0.0.1:8000/api/members?${params}`)
      .then((response) => {
        setMembers(response.data)
        setData(response.data.data)
      }).then(error => {
        console.log(error)
      }).finally(() => {
        // Do something compulsory
      })
  }, [members.current_page])

  const handleSearchFormSubmission = (event) => {
    event.preventDefault()
  }

  const handleFirstPage = () => {
    setMembers(prevState => ({
      ...prevState,
      current_page: 1
    }));
  }

  const handlePreviousPage = () => {
    if (members.current_page > 1) {
      let currentPage = members.current_page
      let previousPage = currentPage - 1
      setMembers(prevState => ({
        ...prevState,
        current_page: previousPage
      }));
    }
  }

  const handleLastPage = () => {
    setMembers(prevState => ({
      ...prevState,
      current_page: members.last_page
    }));
  }

  const handleNextPage = () => {
    if (members.next_page !== null) {
      let currentPage = members.current_page
      let nextPage = currentPage + 1
      setMembers(prevState => ({
        ...prevState,
        current_page: nextPage
      }));
    }
  }

  return (
    <AppLayout>
      <form onSubmit={handleSearchFormSubmission}>
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              value={userId}
              className="form-control"
              placeholder="Enter user ID..."
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div className="col">
            <button className="btn btn-sm btn-primary" type="submit">Search</button>
          </div>
        </div>
      </form>

      <table className="table table-bordered mt-20">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>SURNAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {data.map(member => <PostRow key={member.id} member={member} />)}
        </tbody>
      </table>

      <Pagination
        members={members}
        navigateLastPage={handleLastPage}
        navigateNextPage = {handleNextPage}
        navigatePreviousPage = {handlePreviousPage}
        navigateFirstPage = {handleFirstPage}
      />

    </AppLayout>
  )
}

const Pagination = (props) => {

  return (
    <ul className="pagination">
      {props.members.current_page !== 1 ? <FirstPage navigateFirstPage={props.navigateFirstPage} /> : ''}
      {props.members.current_page > 1 ? <PreviousPage navigatePreviousPage={props.navigatePreviousPage} /> : ''}
      <li className="page-item active"><a className="page-link" href="#x">{props.members.current_page}</a></li>
      {props.members.current_page !== props.members.last_page ? <NextPage navigateLastPage={props.navigateNextPage} /> : ''}
      {props.members.current_page !== props.members.last_page ? <LastPage navigateLastPage={props.navigateLastPage} /> : ''}
    </ul>
  )
}

const FirstPage = (props) => {
  return (
    <li className="page-item" onClick={props.navigateFirstPage}>
      <button className="page-link">
        <i className="bi-chevron-left mb-5"></i>
        <i className="bi-chevron-left mb-5"></i>
      </button>
    </li>
  )
}

const PreviousPage = (props) => {
  return (
    <li className="page-item" onClick={props.navigatePreviousPage}>
      <button className="page-link">
        <i className="bi-chevron-left mb-5"></i>
      </button>
    </li>
  )
}

const LastPage = (props) => {
  return (
    <li className="page-item">
      <button className="page-link" onClick={props.navigateLastPage}>
        <i className="bi-chevron-right mb-5"></i>
        <i className="bi-chevron-right mb-5"></i>
      </button>
    </li>
  )
}

const NextPage = (props) => {
  return (
    <li className="page-item">
      <button className="page-link" onClick={props.navigateLastPage}>
        <i className="bi-chevron-right mb-5"></i>
      </button>
    </li>
  )
}

const PostRow = (props) => {
  return (
    <tr>
      <td>{props.member.id}</td>
      <td>{props.member.first_name}</td>
      <td>{props.member.surname}</td>
      <td>{props.member.email}</td>
      <td>{props.member.address}</td>
    </tr>
  )
}

export default Search