export default defineNuxtPlugin((nuxtApp) => {
    const auth = useAuthStore();
    const token = useCookie("authToken");
  
    if (token.value) {
      auth.setToken(token.value);
    }
  });
  