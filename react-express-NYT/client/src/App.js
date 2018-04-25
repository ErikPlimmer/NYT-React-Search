import React from "react";
import "./App.css";
import SearchForm from "./components/Search";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <strong><p>hello squritle</p></strong>
      <SearchForm/>
      </div>
    );
  }
}

export default App;
