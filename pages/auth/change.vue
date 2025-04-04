<template>
  <div class="container">
    <a-card v-if="!isDone" title="Change Password">
      <a-form
        ref="formRef"
        name="custom-validation"
        :model="formState"
        :rules="rules"
        layout="vertical"
        @finish="handleFinish"
        @validate="handleValidate"
        @finishFailed="handleFinishFailed"
      >
        <!-- Current Password -->
        <a-form-item label="Current Password" name="currentPass" has-feedback>
          <a-input-password v-model:value="formState.currentPass" autocomplete="off" />
        </a-form-item>

        <!-- New Password -->
        <a-form-item label="New Password" name="newPass" has-feedback>
          <a-input-password v-model:value="formState.newPass" autocomplete="off" />
        </a-form-item>

        <!-- Confirm New Password -->
        <a-form-item label="Confirm Password" name="checkNewPass" has-feedback>
          <a-input-password v-model:value="formState.checkNewPass" autocomplete="off" />
        </a-form-item>

        <!-- Submit and Reset buttons -->
        <a-form-item>
          <a-button type="primary" html-type="submit" block>Submit</a-button>
          <a-button style="margin-top: 10px" block @click="resetForm">Reset</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <!-- Success Message -->
    <a-card v-if="isDone" title="Done">
      <p>Success! Your password has been updated.</p>
      <a-button type="primary" @click="returnToLogin">Return to Login</a-button>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useAuth } from "~/composable/useAuth";
import { useRouter } from "vue-router";
const router = useRouter();
definePageMeta({ layout: false });
const {getEmail}=useAuth();
const email = getEmail();
if(!email){
router.push("/")
};
const formRef = ref();
const formState = reactive({
  currentPass: "",
  newPass: "",
  checkNewPass: "",
});
const isDone = ref(false);

const validateCurrentPass = async (_rule, value) => {
  if (!value) return Promise.reject("Please input your current password");
  return Promise.resolve();
};

const validateNewPass = async (_rule, value) => {
  if (!value) return Promise.reject("Please input your new password");
  if (value.length < 8) return Promise.reject("Password must be at least 8 characters");
  return Promise.resolve();
};

const validateConfirmNewPass = async (_rule, value) => {
  if (!value) return Promise.reject("Please confirm your new password");
  if (value !== formState.newPass) return Promise.reject("The new passwords do not match");
  return Promise.resolve();
};

const rules = {
  currentPass: [{ required: true, validator: validateCurrentPass, trigger: "blur" }],
  newPass: [{ required: true, validator: validateNewPass, trigger: "blur" }],
  checkNewPass: [{ required: true, validator: validateConfirmNewPass, trigger: "blur" }],
};

const handleFinish = async () => {
  try {
    const { data, error } = await useFetch("http://localhost:5278/api/Account/changepass", {
      method: "POST",
      credentials:'include',
      body: { currentPassword: formState.currentPass, newPassword: formState.newPass },
    });

    if (error.value) {
      alert("Password change failed! Please try again.");
      return;
    }

    if (data.value) {
      isDone.value = true;
    } else {
      alert("Password change failed!");
    }
  } catch (err) {
    console.error("Error during password change:", err);
    alert("An error occurred while changing your password.");
  }
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

const returnToLogin = () => {
  navigateTo("/home");
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.ant-card {
  width: 100%;
  max-width: 450px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.ant-btn {
  height: 40px;
  font-size: 16px;
}
</style>
