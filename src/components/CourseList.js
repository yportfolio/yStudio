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
      titles: [],
      abstracts: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=YW7v4jYO5anNGpDXSmDXZhswezl4w6yZ"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.response);
        let title = data.response.docs.map((article) => {
          return (
            <Typography variant={"h5"}>{article.headline.main}</Typography>
          );
        });
        let abstract = data.response.docs.map((article) => {
          return <Typography variant={"body1"}>{article.abstract} </Typography>;
        });
        this.setState({ titles: title });
        this.setState({ abstracts: abstract });
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
          <Grid container style={{ padding: "24px" }} space={2}>
            <Grid item xs={12} sm={6} lg={4}>
              <Course
                title={this.state.titles[0]}
                abstract={this.state.abstracts[0]}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}>
              <Course
                title={this.state.titles[1]}
                abstract={this.state.abstracts[1]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Course
                title={this.state.titles[2]}
                abstract={this.state.abstracts[2]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Course
                title={this.state.titles[3]}
                abstract={this.state.abstracts[3]}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <Course
                title={this.state.titles[4]}
                abstract={this.state.abstracts[4]}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CourseList;
