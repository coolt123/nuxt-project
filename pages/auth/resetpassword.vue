<template>
  <div class="container">
    <a-card v-if="!isDone" title="Reset Password">
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
        <a-form-item has-feedback label="Pass" name="pass">
          <a-input.Password
            v-model:value="formState.pass"
            autocomplete="off"
            :visibilityToggle="true"
          />
        </a-form-item>

        <a-form-item has-feedback label="Confirm" name="checkPass">
          <a-input.Password
            v-model:value="formState.checkPass"
            autocomplete="off"
            :visibilityToggle="true"
          />
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
          <a-button style="margin-left: 10px" @click="resetForm"
            >Reset</a-button
          >
        </a-form-item>
      </a-form>
    </a-card>

    <a-card v-if="isDone" title="Done">
      <p>Success! Your password has been updated.</p>
      <a-button type="primary" @click="returnToLogin">Return to Login</a-button>
    </a-card>
  </div>
</template>

<script setup >
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const token = ref("");
const email = ref("");
const formRef = ref();
definePageMeta({ layout: "customer" });
onMounted(() => {
  token.value = route.query.token || "";
  email.value = route.query.email || "";
  console.log(token.value);
});

const formState = reactive({
  pass: "",
  checkPass: "",
});

const isDone = ref(false); // Quản lý trạng thái khi hoàn thành

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
      "http://localhost:5278/api/Account/ResetPassword",
      {
        method: "POST",
        body: {
          email:email.value,
          token:token.value,
          password: formState.pass,
          confirmPassword: formState.checkPass,
        },
      }
      
    );
    console.log(data)
    if (error.value) {
      console.error("Reset password failed:", error.value);
      isDone.value=true
      return;
    }

    if (data.value) {
      // Đặt trạng thái thành done
      isDone.value = true;
    } else {
      alert("Password reset failed!");
      isDone.value=true
    }
  } catch (err) {
    console.error("Lỗi khi gửi request:", err);
    isDone.value=true
  }
};

// Chuyển hướng về trang login khi hoàn tất
const returnToLogin = () => {
  navigateTo("/auth/login");
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full screen height */
  background-color: #f7f7f7; /* Optional: Add background color */
}

.ant-card {
  width: 100%;
  max-width: 400px; /* You can adjust the max-width to fit your design */
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* White background for the card */
}


</style>
