export const UserFacotory = {
  baseUrl: "https://decoracoesapi.vercel.app",

  authenticate: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/users/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      throw error;
    }
  },

  create: async function (data) {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao autenticar:", error);
      throw error;
    }
  },

  tokenData: async function (token) {
    try {
      const response = await fetch(`${this.baseUrl}/users/token`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();

      return result;
    } catch (error) {
      console.error("Erro ao recuperar dados:", error);
      throw error;
    }
  },

  findAll: async function () {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao recuperar dados:", error);
      throw error;
    }
  },
  find: async function (id) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao recuperar dados:", error);
      throw error;
    }
  },
};
