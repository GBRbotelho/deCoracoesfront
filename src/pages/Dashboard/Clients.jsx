import React, { useEffect, useState } from "react";
import { UserFacotory } from "../../factories/UserFactory";
import { useNavigate } from "react-router-dom";

function Clients() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const response = await UserFacotory.findAll();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="mx-auto p-6 font-mono">
      <h2 className="font-semibold text-xl text-gray-600">Clientes</h2>
      <div className="bg-white p-3.5 rounded-3xl shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full rounded-3xl">
            <thead className="">
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3 text-center">Nome</th>
                <th className="px-4 py-3 text-center">Sobrenome</th>
                <th className="px-4 py-3 text-center">Email</th>
                <th className="px-4 py-3 text-center">Telefone</th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 transition duration-200 hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() => navigate(`/dashboard/clients/${user.id}`)}
                  >
                    <td className="px-4 py-3 " key={`${user.id}`}>
                      {user.name}
                    </td>
                    <td className="px-4 py-3 " key={`${user.id}`}>
                      {user.surname}
                    </td>
                    <td className="px-4 py-3 " key={`${user.id}`}>
                      {user.email}
                    </td>
                    <td className="px-4 py-3 " key={`${user.id}`}>
                      {user.phone}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 text-gray-700 border" colSpan="4">
                    Não foram encontrados clientes.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Clients;
