import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <CourseList />
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
