<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">Danh sách tác giả</h1>
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
      placeholder="Tìm kiếm tác giả..."
      style="width: 300px; margin-bottom: 16px; margin-left: 30px"
    />
    <a-table
      :columns="columns"
      :data-source="authors"
      :pagination="pagination"
      rowKey="id"
      class="mt-4"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a-button @click="edit(record as Author)">Sửa</a-button>
            <a-popconfirm
              title="Bạn có chắc chắn muốn xóa tác giả này?"
              @confirm="deleteAuthor(record.idAuthor)"
            >
              <a-button danger>Xóa</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>

    <!-- Modal thêm/sửa sách -->
    <AuthorForm
      v-model:visible="showAddModal"
      :author="selected"
      @refresh="fetch"
    />
  </div>
</template>

<script setup lang="ts">
import { useCrudList } from "~/composable/useCrudList";
import AuthorForm from "~/components/AuthorForm.vue";

definePageMeta({
  layout: "admin",
  middleware: "adminauth",
});

interface Author {
  idAuthor: number;
  nameAuthor: string;
}

const {
  items: authors,
  selectedItem: selected,
  showModal: showAddModal,
  fetchItems: fetch,
  editItem: edit,
  deleteItem: deleteAuthor,
  search
} = useCrudList<Author>({
  fetchUrl: "http://localhost:5278/api/Author/GetAll",
  deleteUrl: (id) => `http://localhost:5278/api/Author/Delete?id=${id}`,
  filterFn: (author, keyword) => author.nameAuthor.toLowerCase().includes(keyword.toLowerCase()),
});

const pagination = { pageSize: 10 };

const columns = [
  { title: "ID", dataIndex: "idAuthor" },
  { title: "Tác giả", dataIndex: "nameAuthor" },
  { title: "Hành động", dataIndex: "action", key: "action" },
];
</script>

