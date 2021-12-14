//stay logged in on page load useeffect
export const getUser = async (setUser) => {
  try {
    const token = localStorage.getItem("MyToken"); //gets token
    const response = await fetch(`${process.env.REACT_APP_REST_API}token`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    const savedUser = data.user; // now JS object
    // console.log(savedUser);
    if (savedUser) {
      setUser(savedUser);
    }
  } catch (error) {
    console.log(error);
  }
};

//new log in from login button
export const login = async (
  email,
  pass,
  setUser,
  setAuth,
  setFail,
  setBoard
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });
    if (response.status === 401) {
      setFail(false);
      throw new Error();
    }
    const data = await response.json();

    setUser(data.user);
    setBoard(data.user.board);
    setAuth(true);
    setFail(true);
    localStorage.setItem("MyToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

//add user to database
export const fetchRequestAddUser = async (
  username,
  email,
  password,
  setUser,
  setAuth,
  setFail,
  setBoard
) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    // console.log(data);
    setUser(data.user); //saves data to user

    const newBoard = {
      ...data.user.board,
      jobs: {
        "job-1": {
          id: "job-1",
          company: "Code Nation",
          title: "Junior Developer",
          salary: 10,
          description: "Job description",
        },
      },
    };

    setBoard(newBoard);
    setAuth(true);
    console.log(`new board is`);
    console.log(newBoard);
    localStorage.setItem("MyToken", data.token);
  } catch (error) {
    setFail(false);
    console.log(error);
  }
};

// Update board after change
export const fetchRequestUpdateBoard = async (username, board) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        board: board,
        new: true,
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
