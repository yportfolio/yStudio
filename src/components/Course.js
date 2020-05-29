import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Container,
} from "@material-ui/core";

export default function Course(props) {
  return (
    <div>
      <Container>
        <Grid container space={4}>
          {props.books.map((book) => {
            return (
              <Grid item key={book} xs={12} sm={6} md={4}>
                <Card style={{ margin: "20px" }}>
                  <CardMedia
                    style={{ paddingTop: "56.25%" }}
                    image={book.book_image}
                  />
                  <CardContent>
                    <Typography
                      variant={"h5"}
                      align="left"
                      color="textPrimary"
                      gutterBottom
                    >
                      {book.title}
                    </Typography>
                    <Typography
                      variant={"body1"}
                      align="left"
                      color="textPrimary"
                      gutterBottom
                    >
                      {book.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link color="primary" href={book.amazon_product_url}>
                      Learn More
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
