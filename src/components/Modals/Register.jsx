import React, { useState, useRef } from "react";
import { UserFactory } from "../../factories/UserFactory";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/LoadingContext";
import StepWizard from "react-step-wizard";
import { toast } from "react-toastify";
import { maskCpf, maskLetter, maskPhone } from "../../utils/masks";

function Register({ props, modal }) {
  const wizardRef = useRef(null);
  const { onLoading, offLoading } = useLoading();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    cpf: "",
    email: "",
    password: "",
  });
  const [confirmPassowrd, setConfirmPassowrd] = useState("");
  const { saveToken } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;

    let newValue = value;

    // Aplica a máscara apropriada com base no campo
    switch (id) {
      case "phone":
        newValue = maskPhone(value);
        break;
      case "cpf":
        newValue = maskCpf(value);
        break;
      case "name":
        newValue = maskLetter(value);
        break;
      case "surname":
        newValue = maskLetter(value);
        break;
      default:
        newValue = value;
    }

    // Atualiza o estado com o valor mascarado
    setUser({ ...user, [id]: newValue });
  };

  const handleNextStep = () => {
    if (wizardRef.current) {
      wizardRef.current.nextStep();
    }
  };

  const handlePreviousStep = () => {
    if (wizardRef.current) {
      wizardRef.current.previousStep();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onLoading();
    const response = await UserFactory.create(user);
    if (response.success) {
      toast.success("Criado com sucesso!");
      const login = await UserFactory.authenticate(user);
      if (login.success) {
        saveToken(login.token);
        offLoading();
        toast.success("Logado com sucesso!");
        props.setState(false);
      } else toast.error(login.message);
    } else {
      toast.error(response.error);
    }
    offLoading();
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col pt-4 px-4">
          <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
            Cadastro
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
      <div className="p-6 overflow-x-hidden overflow-y-hidden">
        <div className="space-y-4">
          <StepWizard ref={wizardRef}>
            <div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="name"
                >
                  Nome
                </label>
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
                  id="name"
                  placeholder="Entre com seu Nome"
                  required=""
                  type="text"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="surname"
                >
                  Sobrenome
                </label>
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
                  id="surname"
                  placeholder="Entre com seu Sobrenome"
                  required=""
                  type="text"
                  value={user.surname}
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-3 my-3">
                <div className="flex-1"></div>
                <button
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
                  type="submit"
                  onClick={handleNextStep}
                >
                  Próximo
                </button>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="phone"
                >
                  Telefone
                </label>
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
                  id="phone"
                  placeholder="Ex: 11911111111"
                  required=""
                  type="text"
                  value={user.phone}
                  onChange={handleChange}
                  maxLength={15}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="cpf"
                >
                  CPF
                </label>
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
                  id="cpf"
                  placeholder="Entre com seu CPF"
                  required=""
                  type="text"
                  value={user.cpf}
                  onChange={handleChange}
                  maxLength={14}
                />
              </div>

              <div className="flex gap-3 my-3">
                <button
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
                  type="submit"
                  onClick={handlePreviousStep}
                >
                  Voltar
                </button>
                <button
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
                  type="submit"
                  onClick={handleNextStep}
                >
                  Próximo
                </button>
              </div>
            </div>
            <div>
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
                  placeholder="Entre com seu Email"
                  required=""
                  type="text"
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
                  placeholder="Entre com sua Senha"
                  required=""
                  type="text"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="confirmPassowrd"
                >
                  Confirme a senha
                </label>
                <input
                  className="flex h-10 w-full bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-transparent focus:border-red-500"
                  id="confirmPassword"
                  placeholder="Confirme sua senha"
                  required=""
                  type="text"
                  value={user.confirmPassowrd}
                  onChange={(e) => setConfirmPassowrd(e.value)}
                />
              </div>
              <div className="flex gap-3 my-3">
                <button
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
                  type="submit"
                  onClick={handlePreviousStep}
                >
                  Voltar
                </button>
                <button
                  className="inline-flex flex-1 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-red-500 hover:bg-red-600 text-white"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </StepWizard>
        </div>
        <div class="mt-4 text-center text-sm">
          Ja tem conta?{" "}
          <a className="underline cursor-pointer" onClick={() => modal(true)}>
            Logar
          </a>
        </div>
      </div>
    </>
  );
}

export default Register;
