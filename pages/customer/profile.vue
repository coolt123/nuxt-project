<template>
  <div class="bg-white p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-6">Hồ sơ cá nhân</h2>

    <a-form
      :model="form"
      layout="vertical"
      autocomplete="off"
      @finish="handleSubmit"
    >
      <a-form-item
        label="Họ"
        name="lastName"
        :rules="[{ required: true, message: 'Vui lòng nhập họ' }]"
      >
        <a-input v-model:value="form.lastName" placeholder="Nhập họ" />
      </a-form-item>

      <a-form-item
        label="Tên"
        name="firstName"
        :rules="[{ required: true, message: 'Vui lòng nhập tên' }]"
      >
        <a-input v-model:value="form.firstName" placeholder="Nhập tên" />
      </a-form-item>

      <a-form-item label="Số điện thoại" name="phone">
        <div class="flex items-center gap-3">
          <a-input v-model:value="form.phone" disabled />
          <a-button type="link">Thay đổi</a-button>
        </div>
      </a-form-item>

      <a-form-item label="Email" name="email">
        <div class="flex items-center gap-3">
          <a-input
            v-model:value="form.email"
            disabled
            placeholder="Chưa có email"
          />
          <a-button type="link">Thêm mới</a-button>
        </div>
      </a-form-item>

      <a-form-item
        label="Giới tính"
        name="gender"
        :rules="[{ required: true, message: 'Chọn giới tính' }]"
      >
        <a-radio-group v-model:value="form.gender">
          <a-radio value="male">Nam</a-radio>
          <a-radio value="female">Nữ</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item
        label="Birthday"
        name="birthday"
        :rules="[{ required: true, message: 'Nhập ngày sinh' }]"
      >
        <div class="flex gap-3">
          <a-input-number
            v-model:value="form.birthDay"
            placeholder="Ngày"
            :min="1"
            :max="31"
            style="width: 80px"
          />
          <a-input-number
            v-model:value="form.birthMonth"
            placeholder="Tháng"
            :min="1"
            :max="12"
            style="width: 80px"
          />
          <a-input-number
            v-model:value="form.birthYear"
            placeholder="Năm"
            :min="1900"
            :max="new Date().getFullYear()"
            style="width: 100px"
          />
        </div>
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="bg-red-600 hover:bg-red-700 px-6"
        >
          Lưu thay đổi
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
definePageMeta({
  layout:"customer"
})
const form = reactive({
  lastName: "Thế",
  firstName: "Kim",
  phone: "0335723802",
  email: "",
  gender: "male",
  birthDay: 18,
  birthMonth: 11,
  birthYear: 2003,
});

const handleSubmit = () => {
  console.log("Thông tin người dùng:", form);
  // Gọi API lưu thông tin ở đây
};
</script>
