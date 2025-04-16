<template>
  <div class="profile-wrapper">
    <!-- Sidebar -->
    <div class="profile-sidebar">
      <a-menu
        v-model:selectedKeys="state.selectedKeys"
        :open-keys="state.openKeys"
        mode="inline"
        :items="items"
        @openchange="onOpenChange"
        @select="onMenuSelect"
        style="height: 100%"
    
      />
    </div>

    <!-- Main Content -->
    <div class="profile-content">
      <component :is="currentComponent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, h, computed } from "vue";
import type { ItemType } from "ant-design-vue";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

// Giả định Profile.vue đã là component khác, tránh import vòng lặp
import profile from "~/pages/customer/profile.vue";
import resetpassword from "~/pages/auth/resetpassword.vue";
import { useRouter } from 'vue-router';
const router = useRouter();
// Tạo item menu
function getItem(
  label: string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = [
  getItem("Thông tin tài khoản", "sub1", () => h(MailOutlined), [
    getItem("Hồ sơ cá nhân", "1"),
    getItem("Đổi mật khẩu", "2"),
    getItem("Ưu đãi thành viên", "3"),
  ]),
  getItem("Đơn hàng của tôi", "sub2", () => h(AppstoreOutlined)),
  getItem("Ví voucher", "sub4", () => h(SettingOutlined)),
];

const state = reactive({
  rootSubmenuKeys: ["sub1", "sub2", "sub4"],
  openKeys: ["sub1"],
  selectedKeys: ["1"],
});

const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(
    (key) => !state.openKeys.includes(key)
  );
  state.openKeys = state.rootSubmenuKeys.includes(latestOpenKey!)
    ? [latestOpenKey!]
    : openKeys;
};

const componentMap: Record<string, any> = {
  "1": profile,
  "2": resetpassword,
};

const currentComponent = computed(() => {
  return componentMap[state.selectedKeys[0]] || null;
});

const onMenuSelect = ({ key }: { key: string }) => {
  state.selectedKeys = [key];
  // điều hướng tùy theo key
  if (key === "1") router.push("/customer/profile");
  if (key === "2") router.push("/auth/resetpassword");
};
const route = useRoute();
watch(
  () => route.path,
  (path) => {
    if (path === "/customer/profile") {
      state.selectedKeys = ["1"];
      state.openKeys = ["sub1"];
    } else if (path === "/customer/resetpassword") {
      state.selectedKeys = ["2"];
      state.openKeys = ["sub1"];
    } else {
      state.selectedKeys = [];
      state.openKeys = [];
    }
  },
  { immediate: true }
);
</script>
<style scoped>
.profile-wrapper {
  display: flex;
  gap: 24px;
  padding: 24px;
  background-color: #f3f4f6; /* tương đương bg-gray-100 */
  min-height: 100vh;
}

.profile-sidebar {
  width: 260px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.profile-content {
  flex: 1;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 300px;
}
</style>

