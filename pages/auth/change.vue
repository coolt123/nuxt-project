<template>
    <div class="container">
      <a-card v-if="!isDone" title="Change Password">
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
          <!-- Current Password -->
          <a-form-item has-feedback label="Current Password" name="currentPass">
            <a-input.Password
              v-model:value="formState.currentPass"
              autocomplete="off"
              :visibilityToggle="true"
            />
          </a-form-item>
  
          <!-- New Password -->
          <a-form-item has-feedback label="New Password" name="newPass">
            <a-input.Password
              v-model:value="formState.newPass"
              autocomplete="off"
              :visibilityToggle="true"
            />
          </a-form-item>
  
          <!-- Confirm New Password -->
          <a-form-item has-feedback label="Confirm Password" name="checkNewPass">
            <a-input.Password
              v-model:value="formState.checkNewPass"
              autocomplete="off"
              :visibilityToggle="true"
            />
          </a-form-item>
  
          <!-- Submit and Reset buttons -->
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
            <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
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
  definePageMeta({layout:false})
  // State for form data
  const formRef = ref();
  const formState = reactive({
    currentPass: "",
    newPass: "",
    checkNewPass: "",
  });
  
  const isDone = ref(false); // Manage the completion state
  
  // Validation rules for form fields
  const validateCurrentPass = async (_rule, value) => {
    if (!value) {
      return Promise.reject("Please input your current password");
    }
    return Promise.resolve();
  };
  
  const validateNewPass = async (_rule, value) => {
    if (!value) {
      return Promise.reject("Please input your new password");
    } else if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters");
    }
    return Promise.resolve();
  };
  
  const validateConfirmNewPass = async (_rule, value) => {
    if (!value) {
      return Promise.reject("Please confirm your new password");
    } else if (value !== formState.newPass) {
      return Promise.reject("The new passwords do not match");
    }
    return Promise.resolve();
  };
  
  const rules = {
    currentPass: [
      {
        required: true,
        validator: validateCurrentPass,
        trigger: "blur",
      },
    ],
    newPass: [
      {
        required: true,
        validator: validateNewPass,
        trigger: "blur",
      },
    ],
    checkNewPass: [
      {
        required: true,
        validator: validateConfirmNewPass,
        trigger: "blur",
      },
    ],
  };
  
  // Layout configuration for form
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  // Handle form submission
  const handleFinish = async () => {
    try {
      const { data, error } = await useFetch("http://localhost:5278/api/Account/ChangePassword", {
        method: "POST",
        body: {
          currentPassword: formState.currentPass,
          newPassword: formState.newPass,
        },
      });
  
      if (error.value) {
        alert("Password change failed! Please try again.");
        return;
      }
  
      if (data.value) {
        isDone.value = true; // Update completion state
      } else {
        alert("Password change failed!");
        isDone.value = true;
      }
    } catch (err) {
      console.error("Error during password change:", err);
      alert("An error occurred while changing your password.");
      isDone.value = true;
    }
  };
  
  // Handle failed form submission
  const handleFinishFailed = (errors) => {
    console.log(errors);
  };
  
  // Reset form fields
  const resetForm = () => {
    formRef.value.resetFields();
  };
  
  // Handle form validation
  const handleValidate = (...args) => {
    console.log(args);
  };
  
  // Redirect to login page when password change is complete
  const returnToLogin = () => {
    navigateTo("/auth/login");
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
    width: 100%;
    height: 40px;
    font-size: 16px;
  }
  
  .ant-btn-primary {
    background-color: #1890ff;
    border-color: #1890ff;
    color: #fff;
  }
  
  .ant-btn-primary:hover {
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  
  .ant-btn-secondary {
    background-color: #f0f0f0;
    border-color: #d9d9d9;
  }
  
  .ant-btn-secondary:hover {
    background-color: #e6e6e6;
  }
  </style>
  