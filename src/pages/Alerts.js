import AppLayout from "../layouts/AppLayout";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alerts() {

  const infoExample = 'There will be app maintenance scheduled for 9:30AM EAT. Please note all our service' +
    'will be unavailable in until further notice'
  const notify = () => toast.info(infoExample);

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