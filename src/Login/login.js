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
  Toast,
  ToastBody,
} from "reactstrap";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCredential: {},
      pswd: "",
      usrName: "",
      toastFlaf: false,
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
      this.props.action.UpdateFlag(true);

      window.location.replace("/home");
      sessionStorage.setItem("LOGIN_FLAG", JSON.stringify({ lgoinFlag: true }));
    } else {
      this.setState({ toastFlaf: true });

      setTimeout(() => {
        this.setState({ toastFlaf: false });
      }, 2000);
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
                    onClick={() => this.SubmitValue()}
                  >
                    Login
                  </Button>
                </CardFooter>
              </CardItem>
              <div className="p-3 my-2 rounded">
                <Toast isOpen={this.state.toastFlaf} className="bg-danger">
                  <ToastBody className="text-light">
                    Incorrect Credential
                  </ToastBody>
                </Toast>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default LoginScreen;
