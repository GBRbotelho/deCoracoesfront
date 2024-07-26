import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 grid grid-cols-2 gap-8">
        <Link
          to={"/dashboard/clients"}
          className="flex flex-col items-center gap-4 transition duration-200 hover:cursor-pointer hover:scale-105"
        >
          <div className="bg-card rounded-md p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-card-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <a className="text-center" href="#">
            <h3 className="text-lg font-medium">Clientes</h3>
            <p className="text-muted-foreground text-sm">Veja seus clientes</p>
          </a>
        </Link>
        <Link
          to={"/dashboard/subscriptions"}
          className="flex flex-col items-center gap-4 transition duration-200 hover:cursor-pointer hover:scale-105"
        >
          <div className="bg-secondary rounded-md p-4 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-secondary-foreground"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
            </svg>
          </div>
          <a className="text-center" href="#">
            <h3 className="text-lg font-medium">Assinaturas</h3>
            <p className="text-muted-foreground text-sm">
              Veja suas assinaturas
            </p>
          </a>
        </Link>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-card rounded-md p-4 flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Index;
