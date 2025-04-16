import { useAuth } from "~/composable/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const {token} = useAuth();

    if (token) {
      return navigateTo("/"); // Redirect về trang chính nếu đã login
    }
  });
  