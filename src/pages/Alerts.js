import AppLayout from "../layouts/AppLayout";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from "semantic-ui-react";

export default function Alerts() {

  const infoExample = 'There will be app maintenance scheduled for 9:30AM EAT. Please note all our service' +
    'will be unavailable in until further notice'
  const notify = () => toast.info(infoExample);

  return (
    <AppLayout title="Alerts & Toasts">
      <Button basic primary onClick={notify}>Info</Button>
      <Button basic positive onClick={() => toast.success("This is an success toast", {icon: "🚀", theme: "light"})}>Success</Button>
      <Button basic color='red' onClick={() => toast.error("This is an danger toast")}>Error</Button>
      <ToastContainer />
    </AppLayout>
  )
}