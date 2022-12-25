import { connect } from "react-redux";
import { useState } from "react";
import { handleUserLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { Footer } from "./Footer";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Container } from "react-bootstrap";
import Hhh from "../hhh.png"
import Uuu from "../uuu.png"
import Mmm from "../mmm.png"
import Bbb from "../abbakarravatar.jpg"

const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state } = useLocation();

  const handleSubmit = (e) => {
    props.dispatch(handleUserLogin(username, password));
    navigate(state?.path || "/");
  };
  return (
    <div>
      <NavigationBar />
      <section className="bg-grey text-dark p-5 text-center text-sm-start">
        <div className="Container">
          <div className="d-sm-flex justify-content-between">
            <div className="bg">
              <h1>
                Participate in<span className="text-warning"> Web poll</span>
              </h1>
              <p className="lead my-2">
                Impersonate any of the users below to participate in this web
                poll. Scroll below to choose the user and participate{" "}
              </p>
              <Button className="btn btn-primary btn-lg bg-dark">
                Participate in the poll
              </Button>
            </div>
            <div className="Auth-form-containe">
              <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="form-group mt-3">
                    <label>Username</label>
                    <input
                      type="text"
                      data-testid="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control mt-1"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                      type="password"
                      data-testid="password"
                      name="email"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <Button 
                      data-testid="submitButton"
                      type="submit"
                      className="btn btn-primary bg-dark"
                    >
                      Submit
                    </Button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="cards-section">
     <Container className="d-sm-flex justify-content-center">
     <Card style={{ width: '18rem', margin: '6px' }}>
      <Card.Img variant="top" src={Uuu} />
      <Card.Body>
        <Card.Title>Ummy Idris</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="bg-dark" variant="primary">Impersonate</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '6px'}}>
      <Card.Img variant="top" src={Bbb} />
      <Card.Body>
        <Card.Title>Idrisa Umaru</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="bg-dark" variant="primary">Impersonate</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '6px' }}>
      <Card.Img variant="top" src={Hhh} />
      <Card.Body>
        <Card.Title>Hasiya Muhammad</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="bg-dark" variant="primary">Impersonate</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', margin: '6px' }}>
      <Card.Img variant="top" src={Mmm} />
      <Card.Body>
        <Card.Title>Naeem Kabir</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className="bg-dark" variant="primary">Impersonate</Button>
      </Card.Body>
    </Card>
     </Container>
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ dispatch, authedUser }) => ({
  dispatch,
  authedUser,
});
export default connect(mapStateToProps)(Login);
