import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import "./App.css";

function App() {
  const adminUser = {
    name: "Abdulkarim",
    password: "123",
  };

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);

    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        password: details.password,
      });
    } else {
      console.log("Details Do not Match");
      <div className="error"> {setError("Details Do not Match!!")}; </div>;
    }
    if (details.name === "" || details.password === "") {
      setError("All fields are required!!");
    }
  };

  const Logout = () => {
    setUser({ name: "", paassword: "" });
  };

  return (
    <div className="App">
      {user.name !== "" ? (
        <div className="login-form">
          <h2>
            Welcome
            <span>
              {user.name} <br />{" "}
              <span className="success"> You are logged in Successfully! </span>
            </span>
          </h2>
          <button onClick={Logout}> Logout </button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )}
    </div>
  );
}

export default App;
