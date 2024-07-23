import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { AddressFactory } from "../../factories/AddressFactory";

function Address(props) {
  const { user } = useAuth();
  const [address, setAddress] = useState({
    street: "",
    district: "",
    number: "",
    city: "",
    state: "",
    cep: "",
    complement: "",
    userId: null,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAddress({ ...address, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await AddressFactory.create({
      ...address,
      userId: user.id,
    });

    if (response.success) {
      await props.fetch();
      props.setState(false);
    }
  };

  return (
    <div className="fixed bg-black bg-opacity-30 top-0 left-0 w-screen h-screen flex items-center justify-center">
      <div className="rounded-lg bg-white border bg-card text-card-foreground shadow-sm w-full mx-auto max-w-[500px]">
        <div class="flex flex-col space-y-1.5 p-6">
          <div className="w-full flex justify-between">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Adicionar novo endereço
            </h3>
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <p class="text-sm text-muted-foreground">
            Insira os detalhes do seu endereço abaixo.
          </p>
        </div>
        <div class="p-6 grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="street"
              >
                Rua
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="street"
                onChange={handleChange}
                value={address.street}
                placeholder="Nome da rua"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="number"
              >
                Numero
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="number"
                onChange={handleChange}
                value={address.number}
                placeholder="Numero da residencia"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="district"
              >
                Bairro
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="district"
                onChange={handleChange}
                value={address.district}
                placeholder="Entre com o bairro"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="cep"
              >
                Cep
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="cep"
                onChange={handleChange}
                value={address.cep}
                placeholder="Entre com o cep"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="city"
              >
                Cidade
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="city"
                onChange={handleChange}
                value={address.city}
                placeholder="Entre com a cidade"
              />
            </div>
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="state"
              >
                Estado
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="state"
                onChange={handleChange}
                value={address.state}
                placeholder="Ex: SP"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4">
            <div class="space-y-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="complement"
              >
                Complemento
              </label>
              <textarea
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="complement"
                onChange={handleChange}
                value={address.complement}
                placeholder="Ex: ao lado da padaria."
              />
            </div>
          </div>
        </div>
        <div class="items-center p-6 flex justify-end">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Salvar endereço
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
