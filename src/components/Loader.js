import React from "react"

export default function Loader(){
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem", marginTop: "15%"}} role="status">
      </div>
    </div>
  )
}