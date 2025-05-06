export const baseURL = import.meta.env.VITE_BASE_URL;

const token = import.meta.env.VITE_API_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};
