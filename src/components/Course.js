import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

export default function Course(props) {
  return (
    <div>
      <Card>
        <CardMedia
          style={{ paddingTop: "56.25%" }}
          image="https://source.unsplash.com/random"
        />
        <CardContent>
          {props.title}
          {props.abstract}
        </CardContent>
        <CardActions>
          <Button variant={"contained"} size="small" color="primary">
            Go To The Article
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
