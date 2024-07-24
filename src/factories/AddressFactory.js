export const AddressFactory = {
  baseUrl: "http://localhost:5173/api",

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
      return result;
    } catch (error) {
      console.error("Erro ao resgatar:", error);
      throw error;
    }
  },
};
