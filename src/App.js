import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import "./design.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid className="App-haythem">
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label> Email Adress</Form.Label>
                  <Form.Control type="email" placeholder="Example@gmail.com" />
                  <Form.Text className="text-muted">
                    <br/>
                    Trust us, we'll never share ur adress email
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label> password </Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" variant="primary" size="lg">
              LOGIN
            </Button>
            <Button type="reset" variant="secondary" active type="reset" size="lg">
              go back
            </Button>
          </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;