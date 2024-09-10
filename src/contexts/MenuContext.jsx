import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import Pedido from "../components/Pedido";

const MenuContext = createContext({
  onMenu: () => {},
  offMenu: () => {},
});

export const MenuProvider = ({ children }) => {
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);

  const onMenu = () => {
    setMenu(true);
  };

  const offMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <MenuContext.Provider value={{ onMenu, offMenu }}>
      {children}
      {menu && (
        <div className="fixed bg-black bg-opacity-30 top-0 left-0 w-screen h-screen flex items-center justify-center p-5 z-[1000]">
          <div className="rounded-lg bg-white border bg-card shadow-sm w-full mx-auto max-w-[500px]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col pt-4 px-4">
                <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
                  Minhas assinaturas
                </h3>
              </div>
              <button
                onClick={() => offMenu()}
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
            <div className="p-8">
              {user && user.subscriptions && user.subscriptions.length > 0 ? (
                user.subscriptions.map((subscription) => (
                  <Pedido
                    name={subscription.planName}
                    date={subscription.createdAt}
                    price={subscription.planPrice}
                    city={subscription.city}
                    state={subscription.state}
                  />
                ))
              ) : (
                <p>Nenhuma assinatura realizada</p>
              )}
            </div>
          </div>
        </div>
      )}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
