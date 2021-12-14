import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Container,
  Left,
  Right,
  StyledInput,
  StyledButton,
  StyledLabel,
} from "../styles/container.styled";
import logo from "./JobHack.svg";
import { login, fetchRequestAddUser } from "../../utils";
export const Login = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  loginToggle,
  setLoginToggle,
  auth,
  setAuth,
  setUser,
  fail,
  setFail,
  check,
  setCheck,
  setBoard,
}) => {
  // let navigate = useNavigate();
  useEffect(() => {
    setAuth(false); // on load this renders while getUser does thing.
    setFail(true);
    setUsername();
    setPass();
    setEmail();
  }, []);

  useEffect(() => {
    if (auth && fail) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [auth, fail]); //checks for difference in auth and fail and runs above.

  const submitHandler = (e) => {
    e.preventDefault();
    if (username) {
      fetchRequestAddUser(
        username,
        email,
        pass,
        setUser,
        setAuth,
        setFail,
        setBoard
      );
    } else {
      login(email, pass, setUser, setAuth, setFail, setBoard);
    }
  };

  return (
    <div>
      {check && <Navigate to="/find" />}
      <Container>
        <Left>
          <h1 className="login-title">
            Welcome back to <span className="login-span">JobHack</span>
          </h1>
          <form id="formSignup" onSubmit={submitHandler}>
            {loginToggle && (
              <>
                <StyledLabel for="username">Username</StyledLabel>
                <StyledInput
                  className="inputSignup"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </>
            )}
            <StyledLabel for="email">Email</StyledLabel>
            <StyledInput
              className="inputSignup"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledLabel for="password">Password</StyledLabel>
            <StyledInput
              className="inputSignup"
              name="password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
            {!fail && (
              <p style={{ color: "red" }}>
                *Incorrect login details. Please re-enter.
              </p>
            )}

            <StyledButton type="submit">
              {loginToggle ? "Sign up" : "Log in"}{" "}
            </StyledButton>
          </form>
          <button
            className="link-item"
            onClick={(e) => {
              setLoginToggle(!loginToggle);
              setUsername();
            }}
          >
            {loginToggle ? "Already have an account?" : "Need to register?"}
          </button>
        </Left>
        <Right>
          <img style={{ width: "100%" }} src={logo} alt="logo" />
        </Right>
      </Container>
    </div>
  );
};
