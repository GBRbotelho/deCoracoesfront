export const AddressFactory = {
  baseUrl: "https://decoracoesapi.vercel.app",

  create: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao criar:", error);
      throw error;
    }
  },

  update: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/address`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao atualizar:", error);
      throw error;
    }
  },

  delete: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/address`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao deletar:", error);
      throw error;
    }
  },

  findAll: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/address/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Erro ao resgatar:", error);
      throw error;
    }
  },
};
