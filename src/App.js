import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
// import image from './img.jpg'

// import React from 'react'
// import { useHistory } from "react-router-dom";
import "./App.css";
// import { useState } from "react";

function App() {
  // const history = useHistory();
  // const homepage = () => {
  //   history.push("/homepage")
  // }
  const lipstick2 = () => {
    window.open('homepage','_blank')
  }
  return (
    <Container fluid className="d-flex bg">
      <div className="d-flex mt-5">
        <Row>
          <label><h1 className="h_deg">Photo Display</h1></label>
          {/* <img src= {image} alt="display pic" style={{height:'200px',width:'200px'}}/> */}
        </Row>
        <Row className="mt-5 pt-5">
          <div className="d-flex btn">
            <div className="vstack m-2">
              <button id="cl" className="btn btn-danger" onClick={lipstick2}>Lipstick 1</button>
              <Button className="btn btn-primary" onClick={lipstick2}>Lipstick 2</Button>
              <Button className="btn btn-warning" onClick={lipstick2}>Lipstick 3</Button>
            </div>
            <div className="vstack m-2">
              <Button>Foundation 1</Button>
              <Button>Foundation 2</Button>
              <Button>Foundation 3</Button>
            </div>
            <div className="vstack m-2">
              <Button>Eye Shadow 1</Button>
              <Button>Eye Shadow 2</Button>
              <Button>Eye Shadow 3</Button>
            </div>
          </div>
        </Row>
        <Row>
          <iframe title="This is a unique title" className="border" src={"./components/homepage.js"}/>
        </Row>
      </div>
    </Container>
  );
}
export default App;
