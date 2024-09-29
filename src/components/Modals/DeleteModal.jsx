import React from "react";
import { useLoading } from "../../contexts/LoadingContext";

export default function DeleteModal(props) {
  const { onLoading, offLoading } = useLoading();
  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Deletar item?</h2>
        <p className="mb-4">Você tem certeza que quer deletar esse item?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2"
            onClick={async () => {
              onLoading();
              await props.handleDelete();
              offLoading();
              props.setState(null);
            }}
          >
            Deletar
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={() => props.setState(null)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
