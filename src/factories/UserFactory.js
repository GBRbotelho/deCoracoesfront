export const UserFacotory = {
  baseUrl: "http://localhost:3000",

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
};
