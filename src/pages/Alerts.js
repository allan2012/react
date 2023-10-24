import AppLayout from "../layouts/AppLayout";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alerts() {
  const notify = () => toast.info("Wow so easy!");

  return (
    <AppLayout title="Alerts & Toasts">
      <button className="btn btn-outline-info btn-sm" onClick={notify}>info</button> <br /><br />
      <button className="btn btn-outline-success btn-sm"
              onClick={() => toast.success("This is an success toast", {icon: "🚀", theme: "dark"})}>
        Success
      </button> <br /><br />
      <button className="btn btn-outline-danger btn-sm" onClick={() => toast.error("This is an danger toast")}>Error</button>
      <ToastContainer />
    </AppLayout>
  )
}