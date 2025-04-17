<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">Danh sách người dùng</h1>
    <a-button
      type="primary"
      @click="
        () => {
          selected = null;
          showAddModal = true;
        }
      "
    >
      Thêm
    </a-button>
    <a-input
      v-model:value="search"
      placeholder="Tìm kiếm thể loại..."
      style="width: 300px; margin-bottom: 16px; margin-left: 30px"
    />
    <a-table
      :columns="columns"
      :data-source="User"
      :pagination="pagination"
      rowKey="id"
      class="mt-4"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a-button @click="editBook(record as User)">Sửa</a-button>
            <a-popconfirm
              title="Bạn có chắc chắn muốn xóa sách này?"
              @confirm="deleteCategori(record.idUser)"
            >
              <a-button danger>Xóa</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>

    <!-- Modal thêm/sửa sách -->
  </div>
</template>

<script setup lang="ts">
import { useCrudList } from "~/composable/useCrudList";


definePageMeta({
  layout: "admin",
  middleware: "adminauth",
});

interface User {
  idUser: number;
  nameUser: string;
  email: string;
  role: string;
}

const {
  items: User,
  selectedItem: selected,
  showModal: showAddModal,
  fetchItems: fetch,
  editItem: editBook,
  deleteItem: deleteCategori,
  search,
} = useCrudList<User>({
  fetchUrl: "http://localhost:5278/api/Account/getall",
  deleteUrl: (id) => `http://localhost:5278/api/Author/Delete?id=${id}`,
});

const pagination = { pageSize: 10 };

const columns = [
  { title: "ID", dataIndex: "idUser" },
  { title: "Họ và tên", dataIndex: "nameUser" },
  { title: "Email", dataIndex: "email" },
  { title: "Vai trò", dataIndex: "role" },
  { title: "Hành động", dataIndex: "action", key: "action" },
];

</script>

