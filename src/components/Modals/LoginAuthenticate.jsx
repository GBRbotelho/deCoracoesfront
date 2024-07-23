import React, { useState } from "react";
import { UserFacotory } from "../../factories/UserFactory";
import { useAuth } from "../../contexts/AuthContext";

function LoginAuthenticate({ props, modal }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const { saveToken } = useAuth();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await UserFacotory.authenticate(user);
    if (response.success) {
      saveToken(response.token);
      props.setState(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col p-6 space-y-1">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
            Login
          </h3>
        </div>
        <button
          onClick={() => props.setState(false)}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-muted-foreground"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <form className="p-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
              id="email"
              placeholder="Entre com seu email"
              required=""
              type="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="password"
            >
              Senha
            </label>
            <input
              className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
              id="password"
              placeholder="Entre com sua senha"
              required=""
              type="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
          <div class="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <a
              className="underline cursor-pointer"
              onClick={() => modal(false)}
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginAuthenticate;
