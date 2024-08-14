import React, { useEffect, useState } from "react";
import { SubscriptionFactory } from "../../factories/SubscriptionFactory";
import { useNavigate } from "react-router-dom";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const navigate = useNavigate();

  const fetchSubscriptions = async () => {
    const response = await SubscriptionFactory.findAll();
    console.log(response.data);
    setSubscriptions(response.data);
  };

  useEffect(() => {
    fetchSubscriptions();
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
                <th className="px-4 py-3 text-center">Box</th>
                <th className="px-4 py-3 text-center">Valor</th>
                <th className="px-4 py-3 text-center">Assinado em</th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">
              {subscriptions.length > 0 ? (
                subscriptions.map((subscription, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 transition duration-200 hover:bg-gray-200 hover:cursor-pointer"
                    onClick={() =>
                      navigate(`/dashboard/clients/${subscription.user.id}`)
                    }
                  >
                    <td className="px-4 py-3" key={`${subscription.id}`}>
                      {subscription.user.name}
                    </td>
                    <td className="px-4 py-3" key={`${subscription.id}`}>
                      {subscription.planName}
                    </td>
                    <td className="px-4 py-3" key={`${subscription.id}`}>
                      {subscription.planPrice}
                    </td>
                    <td className="px-4 py-3" key={`${subscription.id}`}>
                      {new Date(
                        subscription.user.createdAt
                      ).toLocaleDateString()}
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

export default Subscriptions;
