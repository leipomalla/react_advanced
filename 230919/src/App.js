import React from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

function App() {
  return (
    <div>
      <h1>Material-UI testcase</h1>
      <Button size="large" color="secondary" variant="contained">
        Something
      </Button>
      <Button size="small" color="primary" variant="outlined">
        Something else
      </Button>
    </div>
  );
}

export default App;
