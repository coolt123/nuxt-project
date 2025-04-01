<template>
  <div class="login-container" v-show="isAntdReady">
    <div class="login-box">
      <h2>Reset your password</h2>

      <!-- Hiển thị thông báo khi email đã được gửi -->
      <h3 v-if="isEmailSent">
        We’ve sent an email to {{ email }} with instructions.
      </h3>

      <!-- Hiển thị form nhập username khi chưa gửi email -->
      <Form
        v-if="!isEmailSent"
        @submit="onFinish"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
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

        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Reset password
          </a-button>
          Or
          <a><nuxt-link to="/auth/login"> Return to login</nuxt-link></a>
        </a-form-item>
      </Form>

      <!-- Button chỉ hiển thị sau khi gửi email -->
      <a-form-item v-if="isEmailSent">
        <a-button type="primary" class="login-form-button">
          <nuxt-link to="/auth/login">Return to login</nuxt-link>
        </a-button>
      </a-form-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { object, string } from "yup";
import { UserOutlined } from "@ant-design/icons-vue";
import { useAuthStore } from "~/stores/auth";
import { navigateTo } from "#app";

definePageMeta({
  layout: false,
});

const isAntdReady = ref(false);
const isEmailSent = ref(false); // Trạng thái gửi email
const email = ref(""); // Lưu trữ email đã nhập
onBeforeMount(() => {
  isAntdReady.value = true;
});

// Schema Validation
const schema = object({
  username: string().required("Vui lòng nhập tên đăng nhập").email(),
});

// Xử lý Submit
const onFinish = async (values: any) => {
  try {
    // Gửi request API để yêu cầu gửi email (dù không cần quan tâm đến phản hồi)
    const response = await $fetch<{ token?: string }>(
      "http://localhost:5278/api/Account/ResetPassword", // Địa chỉ API
      {
        method: "POST",
        body: {
          email: values.username,
        },
      }
    );

    // Lưu trữ email đã nhập và cập nhật trạng thái email đã gửi
    email.value = values.username;
    isEmailSent.value = true;

    // Bạn có thể kiểm tra `response` nếu cần, nhưng không cần thay đổi giao diện nếu không quan tâm đến kết quả.
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
    email.value = values.username,
    isEmailSent.value = true; // Đảm bảo hiển thị thông báo dù có lỗi trong việc gửi yêu cầu
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

h3 {
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  opacity: 0.6;
}
h2 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 26px;
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
