import "./App.css";
import { useState, useEffect } from "react";
import { Signup } from "./components/signup/signup";
import { getUser } from "./utils";
import { Find } from "./components/Find/Find";
import Home from "./components/Home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Manage } from "./components/Manage/Manage";
import { Login } from "./components/Login/Login";


function App() {
  //USER states
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loginToggle, setLoginToggle] = useState();
  const [auth, setAuth] = useState(false);
  const [fail, setFail] = useState(true);
  const [check, setCheck] = useState(false); // for navigation to find page

  // Board State
  const [board, setBoard] = useState();
  useEffect(() => {
    getUser(setUser); // on load this renders while getUser does thing.
  }, []);

  const logOutHandler = () => {
    setUser();
    setAuth(false);
    setFail(true);
    setUsername();
    setPass();
    setEmail();
    setCheck(false);
    setBoard();
    localStorage.removeItem("MyToken");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home user={user} logOutHandler={logOutHandler} />}
        />
        <Route
          path="/find"
          element={
            <Find
              board={board}
              setBoard={setBoard}
              user={user}
              logOutHandler={logOutHandler}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              loginToggle={loginToggle}
              setLoginToggle={setLoginToggle}
              auth={auth}
              setAuth={setAuth}
              setUser={setUser}
              fail={fail}
              setFail={setFail}
              check={check}
              setCheck={setCheck}
              setBoard={setBoard}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              loginToggle={loginToggle}
              setLoginToggle={setLoginToggle}
              auth={auth}
              setAuth={setAuth}
              setUser={setUser}
              fail={fail}
              setFail={setFail}
              check={check}
              setCheck={setCheck}
              setBoard={setBoard}
            />
          }
        />
        <Route
          path="/manage"
          element={
            <Manage
              board={board}
              setBoard={setBoard}
              user={user}
              logOutHandler={logOutHandler}
            />
          }
        />
        <Route path="*" element={<p>Page not found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
