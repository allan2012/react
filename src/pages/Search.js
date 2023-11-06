import React, {useEffect} from "react"
import {useState} from "react"
import AppLayout from "../layouts/AppLayout"
import {client} from "../lib/axiosInstance";
import Loader from "../components/Loader";
import {Button} from "semantic-ui-react";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";

const Search = () => {

  const [searchText, setSearchText] = useState("")
  const [searchParam, setSearchParam] = useState("")
  const [members, setMembers] = useState({})
  const [data, setData] = useState([])
  const [isLoading, setLoader] = useState(true)
  const [deletedId, setDeletedId] = useState(null)


  const params = new URLSearchParams({
    page: members.current_page,
    search: searchParam
  });

  useEffect(() => {
    client.get(`/api/members?${params}`)
      .then((response) => {
        setMembers(response.data)
        setLoader(false)
        setData(response.data.data)
      }).catch(error => {
        setLoader(false)
        toast.error("Error fetching members")
      })
  }, [members.current_page, searchParam, deletedId])

  const handleDelete = id => {
    setDeletedId(id)
    client.delete(`/api/members/${id}`).then(response => {
      toast.success("Member deleted successfully!")
    }).catch(error => {
      toast.danger("Error deleting member")
    })
  }

  const handleSearchFormSubmission = (event) => {
    event.preventDefault()
    setSearchParam(searchText);
    setMembers(prevState => ({
      ...prevState,
      current_page: 1
    }));
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

  const content = (isLoading) ? <Loader /> : <div>
    <form onSubmit={handleSearchFormSubmission}>
      <div className="row">
        <ToastContainer />
        <div className="col-3">
          <input
            type="text"
            value={searchText}
            className="form-control"
            placeholder="search..."
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col">
          <Button primary type="submit"><i className="bi bi-search"></i></Button>
        </div>
      </div>
    </form>

    <table className="table table-bordered mt-20">
      <thead>
        <tr className="bg-info-light">
          <th>ID</th>
          <th>FIRST NAME</th>
          <th>SURNAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          <th>DATE CREATED</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {data.map(member => <PostRow key={member.id} member={member} handleDelete={handleDelete} />)}
      </tbody>
    </table>

    <Pagination
      members={members}
      navigateLastPage={handleLastPage}
      navigateNextPage = {handleNextPage}
      navigatePreviousPage = {handlePreviousPage}
      navigateFirstPage = {handleFirstPage}
    />
  </div>

  return (
    <AppLayout title="Search & Pagination">
      {content}
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
        <i className="bi bi-chevron-double-left"></i>
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
        <i className="bi bi-chevron-double-right"></i>
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

const PostRow = ({member, handleDelete}) => {
  return (
    <tr>
      <td>{member.id}</td>
      <td>{member.first_name}</td>
      <td>{member.surname}</td>
      <td>{member.email}</td>
      <td>{member.address}</td>
      <td>{member.created_at}</td>
      <th>
        <Link to={`/member/${member.id}`}><i className="bi bi-pencil"></i></Link>
        <Link className="ml-10 text-danger" onClick={() => handleDelete(member.id)}><i className="bi bi-trash"></i></Link>
      </th>
    </tr>
  )
}

export default Search
