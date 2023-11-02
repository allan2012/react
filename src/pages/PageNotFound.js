import React from 'react';
import notFoundImage from '../assets/images/404.png'

const logoStyle = {
  height: "128px",
  width: "auto",
  marginTop: "15%"
}

export default function PageNotFound() {
  return (
      <div className="container text-center">
        <img src={notFoundImage}  style={logoStyle} />
        <h2 className="mt-25">Oops!! Page not found</h2>
      </div>
  )
}