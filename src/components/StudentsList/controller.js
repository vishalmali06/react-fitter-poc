import React from "react";
import StudentList from "./StudentList";
import { useSelector } from "react-redux";

export default function StudentsGridController() {
  const students = useSelector((state) => state.students);
  return <StudentList students={students} />;
}
