import { useCookie } from "#app";
import { jwtDecode } from "jwt-decode";
import { CLAIMS } from "./constant";
// Định nghĩa interface của token (phụ thuộc vào backend của bạn)

interface DecodedToken {
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  exp: number; // Thời gian hết hạn (epoch timestamp)
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress":string;
}

export const useAuth = () => {
  const token = useCookie("auth_token", {
    maxAge: 60 * 60 * 24 * 7, // Lưu token trong 7 ngày
    secure: false,
    httpOnly: false,
    sameSite: "strict",
    path: "/",
  });

  const login = (newToken: string) => {
    token.value = newToken; // Lưu token vào cookie
  };

  const logout = () => {
    token.value = null; // Xóa token khi logout
  };

  const getRole = (): string | null => {
    if (!token.value) return null;

    try {
      const decoded: DecodedToken = jwtDecode(token.value);
      return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    } catch (error) {
      console.error("Lỗi khi giải mã token:", error);
      return null;
    }
  };
  const getEmail = (): string | null => {
    if (!token.value) return null;

    try {
      const decoded: DecodedToken = jwtDecode(token.value);
      return decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
    } catch (error) {
      console.error("Lỗi khi giải mã token:", error);
      return null;
    }
  };
  const isAuthenticated = computed(() => !!token.value); // Kiểm tra đã đăng nhập chưa

  return { token, login, logout, getRole , isAuthenticated ,getEmail};
};
