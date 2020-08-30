import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
        >
          <Grid item spacing={10}>
            <Typography variant="h6" component="h1">
              Student Grid
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;