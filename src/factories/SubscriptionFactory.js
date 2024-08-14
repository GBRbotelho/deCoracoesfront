export const SubscriptionFactory = {
  baseUrl: "https://decoracoesapi.vercel.app",

  findAll: async function () {
    try {
      const response = await fetch(`${this.baseUrl}/subscriptions`, {
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
