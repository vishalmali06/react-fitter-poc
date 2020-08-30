import React from "react";
import { Box } from "@material-ui/core";
import StudentList from "../../components/StudentsList/controller";
import StudentForm from "../../components/StudentForms/StudentForm";
// import ProductsGrid from "../../components/ProductsGrid/ProductsGrid.controller";

const Home = () => {
  return (
    <Box>
      <StudentForm />
      <hr />
      <StudentList />
    </Box>
  );
};

export default Home;