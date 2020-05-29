import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Footer() {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          YStudio Work
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  return (
    <div>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Design by YStudio
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          The website provides information about The New York Times Best Sellers
          lists.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </div>
  );
}

export default Footer;
