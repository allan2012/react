import AppLayout from "../layouts/AppLayout";
import React from 'react';

const Dashboard = (props) => {
  return (
    <AppLayout title="Welcome To React JS 🚀">
      <div className="container">
        <div className="row">
          <div className="alert alert-light mt-20" role="alert">
            <p>This <b>codebase</b> demonstrates React implementation and basic examples in the following areas.</p>
          </div>
        </div>
        <div className="row mt-35">
          <div className="col-4">
            <div className="list-group">
              <ListItemTitle><i className="bi bi-arrow-left-right"></i> Routing</ListItemTitle>
              <ListItem>Page links & redirecting ✅</ListItem>
              <ListItem>Using page Layouts ✅</ListItem>
              <ListItem>Handling 404 errors ✅</ListItem>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <ListItemTitle><i className="bi bi-shield-lock"></i> Security</ListItemTitle>
              <ListItem>Authorization</ListItem>
              <ListItem>Authentication</ListItem>
              <ListItem>Handling JWT tokens</ListItem>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <ListItemTitle><i className="bi bi-columns-gap"></i> UI</ListItemTitle>
              <ListItem>Intergrating with Google charts ✅</ListItem>
              <ListItem>Alerts ✅</ListItem>
              <ListItem>Page loaders ✅</ListItem>
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <div className="col-4">
            <div className="list-group">
              <div className="list-group">
                <ListItemTitle><i className="bi bi-textarea-resize"></i> Forms</ListItemTitle>
                <ListItem>Handling different inputs ✅</ListItem>
                <ListItem>Form validation</ListItem>
                <ListItem>File upload ✅</ListItem>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="list-group">
              <ListItemTitle><i className="bi bi-code-slash"></i> Code & Refactoring</ListItemTitle>
              <ListItem>Project structure</ListItem>
              <ListItem>Unit Testing (Cypress)</ListItem>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

const ListItem = (props) => {
  return (
    <li className="list-group-item">
      <i className="bi bi-chevron-compact-right"></i> {props.children}
    </li>
  )
}

const ListItemTitle = (props) => {
  return (
    <li className="list-group-item list-group-item-light">
      <b>{props.children}</b>
    </li>
  )
}

export default Dashboard
