
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              My React Checkpoint
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <h1 className="text-center mb-4">
            Welcome to My First React App
          </h1>

          <div className="row">
            <div className="col-md-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    React helps us build interactive user interfaces
                    using reusable components.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>React-Bootstrap</Card.Title>
                  <Card.Text>
                    React-Bootstrap gives us reusable components
                    such as navbars, buttons, and cards.
                  </Card.Text>
                  <Button variant="success">Explore</Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-4 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>My First Project</Card.Title>
                  <Card.Text>
                    I am learning to build webpages with React
                    and improve my frontend development skills.
                  </Card.Text>
                  <Button variant="info">Get Started</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;

