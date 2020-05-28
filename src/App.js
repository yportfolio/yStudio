import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";

export class App extends Component {
  render() {
    return (
      <div>
        <CourseList />
        <Navbar />
      </div>
    );
  }
}

export default App;
