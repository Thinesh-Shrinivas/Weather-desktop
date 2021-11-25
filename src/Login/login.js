import React, { Component } from "react";
import CardItem from "../assets/card";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  CardText,
  Row,
  Container,
  Col,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredential: {},
      pswd: "",
      usrName: "",
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem("USER_CREDENTIAL"));
    this.setState({ userCredential: data });
  }

  SubmitValue() {
    if (
      this.state.userCredential.userName === this.state.usrName &&
      this.state.userCredential.pswd === this.state.pswd
    ) {
      window.location.reload("/");
    }
  }

  render() {
    return (
      <Container fluid className="login_screen">
        <Container>
          <Row>
            <Col lg="5" className="mt-5 offset-3">
              <CardItem>
                <CardHeader>
                  <CardText tag="h5" className="text-center">
                    Login Screen
                  </CardText>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Input
                        placeholder="enter the user name"
                        type="text"
                        onChange={(e) =>
                          this.setState({ usrName: e.currentTarget.value })
                        }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        placeholder="enter the password"
                        type="password"
                        onChange={(e) =>
                          this.setState({ pswd: e.currentTarget.value })
                        }
                      />
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button
                    color="success"
                    size="sm"
                    className="login_btn"
                    onClick={() =>
                      this.SubmitValue(this.userName, this.passWord)
                    }
                  >
                    Login
                  </Button>
                </CardFooter>
              </CardItem>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default LoginScreen;
