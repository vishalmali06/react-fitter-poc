import Student from "../../models/Student";
import { SHOW_ALL_STUDENTS } from "./types";

export const students = [
  new Student(
    1,
    "Vishal",
    "vishalmali06@gmail.com",
    9503297677,
    "SRBVT School",
    "5th",
    "B",
    "MH",
    "IND"
  ),
  new Student(
    2,
    "Aaradhya",
    "aaradhyamali01@gmail.com",
    9503297688,
    "SRBVT School",
    "1th",
    "A",
    "MH",
    "IND"
  ),
];

const studentsReducer = (state = students, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default studentsReducer;