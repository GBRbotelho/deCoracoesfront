import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import LoginAuthenticate from "./LoginAuthenticate";
import Register from "./Register";

function Login(props) {
  const [modal, setModal] = useState(true);

  return (
    <div className="fixed z-[100000] bg-black bg-opacity-30 top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div
        className="rounded-lg bg-white border bg-card text-card-foreground shadow-sm w-full mx-auto max-w-[400px]"
        data-v0-t="card"
      >
        {modal ? (
          <LoginAuthenticate props={props} modal={setModal} />
        ) : (
          <Register props={props} modal={setModal} />
        )}
      </div>
    </div>
  );
}

export default Login;
