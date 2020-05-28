import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function Navbar() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant={"h5"} color={"inherit"}>
            Design by YStudio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
