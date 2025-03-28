<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
      <span v-if="passwordError" class="error-text">
        {{ passwordError }}
      </span>
    </a-form-item>

    <a-form-item>
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      <a class="login-form-forgot" href="">Forgot password</a>
    </a-form-item>

    <a-form-item>
      <a-button
        :disabled="disabled"
        type="primary"
        html-type="submit"
        class="login-form-button"
      >
        Log in
      </a-button>
      Or <NuxtLink to="/auth/register"> register now!</NuxtLink>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, computed, ref } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useAuthStore } from "~/stores/auth";
import { navigateTo } from "#app";
definePageMeta({
  middleware:'auth'
});
// Không sử dụng layout mặc định
definePageMeta({ layout: false });

const authStore = useAuthStore();
const passwordError = ref("");

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});

const disabled = computed(() => {
  return !(formState.username && formState.password);
});

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const onFinish = async () => {
  try {
    if (!formState.password) {
      passwordError.value = "Vui lòng nhập mật khẩu";
      return;
    } else if (formState.password.length < 6) {
      passwordError.value = "Mật khẩu phải có ít nhất 6 ký tự";
      return;
    } else {
      passwordError.value = "";
    }

    const response = await $fetch<{ token?: string }>(
      "http://localhost:5278/api/Account/Signin",
      {
        method: "POST",
        body: {
          email: formState.username,
          password: formState.password,
        },
      }
    );

    if (response?.token) {
      authStore.setToken(response.token); // Lưu token vào store
      navigateTo("/"); // Chuyển hướng đến trang chính
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
.login-form {
  max-width: 300px;
}
.login-form-forgot {
  float: right;
}
.login-form-button {
  width: 100%;
}
.error-text {
  color: red;
}
</style>
