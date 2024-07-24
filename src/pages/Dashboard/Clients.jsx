import React from "react";

function Clients() {
  return (
    <section className="container mx-auto p-6 font-mono">
      <h2 className="font-semibold text-xl text-gray-600">Clientes</h2>
      <div className="bg-white p-3.5 rounded-3xl shadow-lg">
        <div className="flex items-center py-1">
          <ul className="w-full flex flex-col lg:flex-row justify-between">
            <li className="flex border items-center mb-2 lg:mb-0">
              <div className="relative">
                <input
                  type="text"
                  className="px-2 text-gray-400 w-38 h-8 rounded pl-8 flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"
                  placeholder="Procurar"
                />
                <i className="ri-search-line absolute left-2 top-1 h-4"></i>
              </div>
            </li>
            <div className="flex">
              <li className="mr-1">
                <button
                  type="button"
                  className="text-black rounded bg-gray-200 w-28 h-9 hover:bg-gray-50 hover:text-gray-600"
                  onClick={() => setFilters(true)}
                >
                  <i className="ri-equalizer-line px-2"></i>Filtros
                </button>
              </li>
              <a
                to="/dashboard/clientes/add"
                className=" text-gray-400 w-8 h-8 rounded flex items-center justify-center hover:bg-gray-50 hover:text-green-600"
              >
                <i className="ri-user-add-fill"></i>
              </a>
            </div>
          </ul>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3 text-center">Nome</th>
                <th className="px-4 py-3 text-center"></th>
                <th className="px-4 py-3 text-center">Telefone</th>
                <th className="px-4 py-3 text-center"></th>
                <th className="px-4 py-3 text-center">Options</th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">
              {/* {FilteredData.length > 0 ? (
                FilteredData.map((client, index) => (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border" key={`name_${client._id}`}>
                      {client.name}
                    </td>
                    <td className="px-4 py-3 border" key={`date_${client._id}`}>
                      {selectMonth === "all"
                        ? new Date(
                            new Date(client.date).getTime() +
                              24 * 60 * 60 * 1000
                          ).toLocaleDateString("pt-BR")
                        : new Date(
                            new Date(client.date).getTime() +
                              24 * 60 * 60 * 1000
                          )
                            .toLocaleDateString("pt-BR")
                            .split("/")
                            .slice(0, 2)
                            .join("/")}
                    </td>
                    <td
                      className="px-4 py-3 text-ms font-semibold border relative"
                      key={`phone_${client._id}`}
                    >
                      <div className="flex">
                        <p className="">{useForm(client.phone, "telefone")}</p>
                        <a href={`https://wa.me/${client.phone}`}>
                          <i
                            className="ri-whatsapp-line absolute right-5 text-green-500 text-2xl scale-75 transition-transform"
                            onMouseOver={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                            onMouseOut={(e) =>
                              (e.currentTarget.style.transform = "scale(0.75)")
                            }
                          ></i>
                        </a>
                      </div>
                    </td>
                    <td
                      className="px-4 py-3 text-ms font-semibold border"
                      key={`lastConsultation_${client._id}`}
                    >
                      {selectTime === "all"
                        ? client.email
                        : obterDataUltimaConsulta(client._id)}
                    </td>
                    <td
                      className="px-2 py-3 border options-cell"
                      style={{ width: "50px" }}
                      key={`options_${client._id}`}
                    >
                      <div className="flex items-center space-x-2">
                        <Link
                          to={`/dashboard/clientes/view/${client._id}`}
                          className="w-8 h-8 text-green-500 transform hover:scale-110 transition-transform"
                        >
                          <i className="ri-eye-line text-3xl"></i>
                        </Link>
                        <button
                          className="w-8 h-8 text-red-500 transform hover:scale-110 transition-transform"
                          onClick={() => {
                            handleDeleteClient(client._id);
                          }}
                        >
                          <i className="ri-delete-bin-5-line text-3xl"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 text-gray-700 border" colSpan="5">
                    Não foram encontrados clientes.
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Clients;
