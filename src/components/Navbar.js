import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography
            variant={"h5"}
            component={"h2"}
            color={"inherit"}
            gutterBottom
          >
            Best Frictions Picked by New York Times
          </Typography>
          <Typography
            variant={"h5"}
            color={"inherit"}
            gutterBottom
            style={{ marginLeft: "20px" }}
          >
            {new Date().getFullYear()}
            {"/"}
            {new Date().getMonth()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
