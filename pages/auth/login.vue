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
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>
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
      Or  <NuxtLink to="/auth/register"> register now!</NuxtLink>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
definePageMeta({layout : false})
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
console.log(formState.username + formState.password);
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};
const onFinish = async () => {
  try {
    const { data, error } = await useFetch<{ token?: string }>("http://localhost:5278/api/Account/Signin", {
      method: "POST",
      body: {
        email: formState.username,
        password: formState.password,
      },
    });

    if (error.value) {
      console.error("Đăng nhập thất bại:", error.value);
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
      return;
    }

    if (data.value) {
      // // Lưu token vào cookie
      // document.cookie = `authToken=${encodeURIComponent(
      //   data.value.token
      // )}; max-age=86400; path=/; secure; SameSite=Strict`;

      // Chuyển hướng đến trang quản trị
      router.push("/"); 
    } else {
      alert("Đăng nhập thất bại!");
    }
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
  }
};
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
