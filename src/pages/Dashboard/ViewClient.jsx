import React, { useEffect } from "react";
import { UserFacotory } from "../../factories/UserFactory";
import { useParams } from "react-router-dom";
import SubscriptionModal from "../../components/Modals/SubscriptionModal";

function ViewClient() {
  const [isEditable, setIsEditable] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [modalSubscription, setModalSubscription] = React.useState(null);
  const [subscriptions, setSubscriptions] = React.useState([]);
  const { id } = useParams();

  const fetchUser = async () => {
    const response = await UserFacotory.find(id);
    setUser(response.data.dataValues);
    setSubscriptions(response.data.subscriptions);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="p-6 bg-gray-100 flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Dados do Cliente
          </h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-3">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                  <div className="md:col-span-2">
                    <label htmlFor="full_name">Nome</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className={`h-10 border mt-1 rounded px-4 w-full bg-${
                        !isEditable ? "gray-100" : "white"
                      }`}
                      value={user?.name || ""}
                      placeholder="Preencha este campo"
                      disabled={!isEditable}
                      maxLength={90}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="surname">Sobrenome</label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      className={`h-10 border mt-1 rounded px-4 w-full bg-${
                        !isEditable ? "gray-100" : "white"
                      }`}
                      placeholder="Preencha este campo"
                      disabled={!isEditable}
                      maxLength={90}
                      value={user?.surname || ""}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="cpf">CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      id="cpf"
                      className={`h-10 border mt-1 rounded px-4 w-full bg-${
                        !isEditable ? "gray-100" : "white"
                      }`}
                      placeholder="Preencha este campo"
                      disabled={!isEditable}
                      maxLength={90}
                      value={user?.cpf || ""}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className={`h-10 border mt-1 rounded px-4 w-full bg-${
                        !isEditable ? "gray-100" : "white"
                      }`}
                      placeholder="Preencha este campo"
                      disabled={!isEditable}
                      value={user?.email || ""}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="phone">Telefone</label>
                    <div className="flex items-center">
                      <input
                        name="phone"
                        id="phone"
                        placeholder="Preencha este campo"
                        className={`h-10 border mt-1 rounded px-4 w-full bg-${
                          !isEditable ? "gray-100" : "white"
                        }`}
                        disabled={!isEditable}
                        maxLength={15}
                        value={user?.phone || ""}
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="createdAt">Criado em:</label>
                    <div className="flex items-center">
                      <input
                        name="createdAt"
                        id="createdAt"
                        placeholder="Preencha este campo"
                        className={`h-10 border mt-1 rounded px-4 w-full bg-${
                          !isEditable ? "gray-100" : "white"
                        }`}
                        disabled={!isEditable}
                        maxLength={15}
                        value={
                          new Date(user?.createdAt).toLocaleDateString() || ""
                        }
                      />
                    </div>
                  </div>

                  <div className="md:col-span-6 text-right">
                    <div className="inline-flex items-end gap-1">
                      {/* {isEditable ? (
                        <>
                          <button
                            className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <i className="ri-close-fill"></i>Cancelar
                          </button>
                          <button
                            className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          >
                            <i className="ri-save-line"></i>Salvar
                          </button>
                        </>
                      ) : (
                        <button
                          className=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                        >
                          <i className="ri-pencil-fill"> </i>Editar
                        </button>
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="md:w-full flex justify-between mt-3">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0">
                Deletar Cliente
              </button>
            </div> */}
            <div className="bg-gray-300 my-6 h-0.5"></div>
            <h2 className="font-semibold text-xl text-gray-600 mt-6">
              Assinaturas
            </h2>
            <div className="w-full overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                    <th className="px-4 py-3 text-center">Box</th>
                    <th className="px-4 py-3 text-center">Preço</th>
                    <th className="px-4 py-3 text-center">Assinado em</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {subscriptions.length > 0 ? (
                    subscriptions.map((subscription, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() => {
                            setModalSubscription(subscription);
                          }}
                          className="hover:bg-gray-200 hover:cursor-pointer"
                        >
                          <td className="px-4 py-3 text-gray-700 text-center">
                            {subscription?.planName || ""}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-center">
                            {subscription?.planPrice || ""}
                          </td>
                          <td className="px-4 py-3 text-gray-700 text-center">
                            {new Date(
                              subscription?.createdAt
                            ).toLocaleDateString() || ""}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        className="px-4 py-3 text-gray-700 text-center"
                        colSpan={3}
                      >
                        Nenhuma assinatura encontrada
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {modalSubscription && (
        <SubscriptionModal
          state={modalSubscription}
          setState={setModalSubscription}
        />
      )}
    </div>
  );
}

export default ViewClient;
