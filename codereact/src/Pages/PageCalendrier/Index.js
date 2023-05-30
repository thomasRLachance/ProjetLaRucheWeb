import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React from "react";
import { Navigate } from "react-router";

export default function PageCalendrier() {
  const getLocation = (locationId) => {
    if (locationId === "1") {
      return "Bistro Boudreau";
    } else if (locationId === "2") {
      return "Caféteria Comme Chez nous";
    } else if (locationId === "3") {
      return "Administration";
    }
  };

  const user = {
    name: sessionStorage.getItem("name"),
    location: getLocation(sessionStorage.getItem("location")),
  };
  return (
    <>
      {user.location === undefined && <Navigate replace to="/Erreur" />}
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
}
