export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore();
  
    const publicPages = ["/auth/login", "/auth/register","/auth/login1"];

    // Nếu chưa đăng nhập và không phải trang công khai, điều hướng về login
    if (!auth.isAuthenticated && !publicPages.includes(to.path)) {
      return navigateTo("/auth/login");
    }
  });
  