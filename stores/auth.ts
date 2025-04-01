import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useAuthStore = defineStore("auth", () => {
  const token = useCookie<string | null>("authToken", {
    default: () => null,
    httpOnly: false, // Không nên để `httpOnly` nếu muốn truy cập từ client-side
    secure: true,
    sameSite: "strict",
  });
  console.log("Token hiện tại:", token.value);
  const isAuthenticated = computed(() => !!token.value);

  const setToken = (newToken: string) => {
    console.log("Đang lưu token:", newToken); 
    token.value = newToken;
  };

  const clearToken = () => {
    token.value = null;
  };

  return { token, isAuthenticated, setToken, clearToken };
});
