import { useAuth } from "~/composable/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { getRole } = useAuth();
    const role=getRole();
    if (!role ) {
      return navigateTo("/auth/login");
    }
  });
  