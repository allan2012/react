import React from 'react';
import AppLayout from "../layouts/AppLayout";
import notFoundImage from '../assets/images/404.png'
export default function PageNotFound() {
  return (
    <AppLayout title="⚠️ 404 Error!">
      <div className="container text-center">
        <img src={notFoundImage}  style={{ height: "128px", width: "auto", marginTop: "15%"}} />
        <h2 className="mt-25">Oops!! Page not found</h2>
      </div>
    </AppLayout>
  )
}