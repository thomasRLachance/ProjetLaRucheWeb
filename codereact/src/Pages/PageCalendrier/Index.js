import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import React from "react";

export default function PageCalendrier() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}
