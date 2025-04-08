<template>
  <a-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    :rules="rules"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
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
    <a-form-item has-feedback label="Password" name="pass">
      <a-input
        v-model:value="formState.pass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input
        v-model:value="formState.checkPass"
        type="password"
        autocomplete="off"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive, ref } from "vue";
const formRef = ref();
definePageMeta({layout:"admin",middleware:'authentication'})
const formState = reactive({
  username: "",
  pass: "",
  checkPass: "",
});
const validatePass = async (_rule, value) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.checkPass !== "") {
      formRef.value.validateFields("checkPass");
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule, value) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.pass) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
const rules = {
  pass: [
    {
      required: true,
      validator: validatePass,
      trigger: "change",
    },
  ],
  checkPass: [
    {
      validator: validatePass2,
      trigger: "change",
    },
  ],
};
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 14,
  },
};
const handleFinishFailed = (errors) => {
  console.log(errors);
};
const resetForm = () => {
  formRef.value.resetFields();
};
const handleValidate = (...args) => {
  console.log(args);
};
const handleFinish = async () => {
  try {
    const { data, error } = await useFetch(
      "http://localhost:5278/api/Account/SignUp",
      {
        method: "POST",
        body: {
          firstName: "tes",
          lastName: "tgdd",
          email: formState.username,
          password: formState.pass,
          confirmPassword: formState.checkPass,
        },
      }
    );

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
      navigateTo("/");
    } else {
      alert("Đăng kí thất bại!");
    }
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
  }
};
</script>
