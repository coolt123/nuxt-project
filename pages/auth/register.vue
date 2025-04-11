<template>
  <div class="register-page">
    <div class="register-box">
      <h1 class="title">Đăng ký tài khoản</h1>
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        layout="vertical"
        @finish="handleFinish"
        @finishFailed="handleFinishFailed"
      >
        <a-form-item label="Email" name="username">
          <a-input
            v-model:value="formState.username"
            placeholder="Nhập email của bạn"
            size="large"
          />
        </a-form-item>

        <a-form-item label="Mật khẩu" name="pass">
          <a-input-password
            v-model:value="formState.pass"
            placeholder="Mật khẩu"
            size="large"
          />
        </a-form-item>

        <a-form-item label="Xác nhận mật khẩu" name="checkPass">
          <a-input-password
            v-model:value="formState.checkPass"
            placeholder="Nhập lại mật khẩu"
            size="large"
          />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit" block size="large">
            Đăng ký
          </a-button>
          <a-button
            style="margin-top: 12px"
            block
            @click="resetForm"
            size="large"
          >
            Làm lại
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
definePageMeta({ layout: "default" });

const formRef = ref();
const formState = reactive({
  username: "",
  pass: "",
  checkPass: "",
});

const validatePass = async (_rule, value) => {
  if (!value) return Promise.reject("Vui lòng nhập mật khẩu");
  if (formState.checkPass !== "") {
    formRef.value.validateFields("checkPass");
  }
  return Promise.resolve();
};

const validatePass2 = async (_rule, value) => {
  if (!value) return Promise.reject("Vui lòng nhập lại mật khẩu");
  if (value !== formState.pass) return Promise.reject("Mật khẩu không khớp");
  return Promise.resolve();
};

const rules = {
  username: [{ required: true, message: "Vui lòng nhập email" }],
  pass: [{ validator: validatePass, trigger: "change" }],
  checkPass: [{ validator: validatePass2, trigger: "change" }],
};

const resetForm = () => {
  formRef.value.resetFields();
};

const handleFinishFailed = (errorInfo) => {
  console.log("Thất bại:", errorInfo);
};

const handleFinish = async () => {
  try {
    const { data, error } = await useFetch("http://localhost:5278/api/Account/SignUp", {
      method: "POST",
      body: {
        firstName: "tes",
        lastName: "tgdd",
        email: formState.username,
        password: formState.pass,
        confirmPassword: formState.checkPass,
      },
    });

    if (error.value) {
      alert("Đăng ký thất bại! " + error.value?.message);
      return;
    }

    if (data.value) {
      navigateTo("/");
    } else {
      alert("Đăng ký thất bại!");
    }
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
  }
};
</script>

<style scoped>
.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f7fa;
  padding: 24px;
}

.register-box {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  color: #1890ff;
}
</style>
