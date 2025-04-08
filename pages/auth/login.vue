<template>
  <div class="login-container" v-show="isAntdReady">
    <div class="login-box">
      <h2>Login</h2>
      <Form @submit="onFinish" :validation-schema="schema" v-slot="{ errors }">
        <a-form-item label="Username" name="username">
          <Field name="username" v-slot="{ field }">
            <a-input v-bind="field">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </Field>
          <span class="error-text">{{ errors.username }}</span>
        </a-form-item>

        <a-form-item label="Password" name="password">
          <Field name="password" v-slot="{ field }">
            <a-input-password v-bind="field">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </Field>
          <span class="error-text">{{ errors.password }}</span>
        </a-form-item>

        <a-form-item>
          <a class="login-form-forgot" href=""
            ><nuxt-link to="/auth/resetpass"> Forgot password</nuxt-link></a
          >
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <a><nuxt-link to="/auth/register"> register now!</nuxt-link></a>
        </a-form-item>
      </Form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { object, string } from "yup";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { navigateTo } from "#app";
import { useAuth } from "~/composable/useAuth";
import { useRouter } from "vue-router";
definePageMeta({
  layout: false,
  middleware: "authentication",
});
const isAntdReady = ref(false);
onBeforeMount(() => {
  isAntdReady.value = true;
  // Giả lập trễ 0.5s để kiểm tra
});
// Store Auth
const { login, isAuthenticated, token, getEmail, getRole } = useAuth();
// Schema Validation
const schema = object({
  username: string().required("Vui lòng nhập tên đăng nhập").email(),
  password: string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

// Xử lý Submit
const onFinish = async (values: any) => {
  try {
    const response = await $fetch<string>(
      "http://localhost:5278/api/Account/Signin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Thêm header này để đảm bảo API nhận dữ liệu dạng JSON
        },
        body: {
          email: values.username,
          password: values.password,
        },
      }
    );

    if (response) {
      await login(response);
      await nextTick;
      setTimeout(() => {
        const checkmail = getEmail();
        console.log("isAuthenticated after login:", isAuthenticated.value);
        console.log("geteamil", checkmail);
        const roles = getRole();
        console.log("getrole", roles);
        if (roles === 'Adminisrtator') {
          return navigateTo("/admin");
        }
        return navigateTo("/");
      }, 50);
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
    alert("Đăng nhập thất bại!");
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Chiều cao toàn màn hình */
  background-color: #f0f2f5; /* Màu nền nhẹ */
}

.login-box {
  width: 350px;
  padding: 30px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.error-text {
  color: red;
}

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}
</style>
