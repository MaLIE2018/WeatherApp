import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Container fluid className='App'>
      <Route path='/' component={Home} />
    </Container>
  );
}

export default App;
