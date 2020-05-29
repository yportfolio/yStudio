import React, { Component } from "react";
import Course from "./Course";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

export class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      books: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YW7v4jYO5anNGpDXSmDXZhswezl4w6yZ"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let result = data.results.books;
        this.setState({ books: result });
      });
  }
  render() {
    return (
      <div>
        {this.state.isLoaded} ? <div>loading...</div> :
        <div>
          <TextField
            style={{ padding: "24px" }}
            id={"searchInput"}
            placeholder={"Search article..."}
            margin={"normal"}
          ></TextField>
          <Course books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default CourseList;
