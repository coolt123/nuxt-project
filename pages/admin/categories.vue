<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">Danh sách thể loại</h1>
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
      :data-source="Categori"
      :pagination="pagination"
      rowKey="id"
      class="mt-4"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a-button @click="editBook(record as Categori)">Sửa</a-button>
            <a-popconfirm
              title="Bạn có chắc chắn muốn xóa sách này?"
              @confirm="deleteCategori(record.idGenres)"
            >
              <a-button danger>Xóa</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>

    <!-- Modal thêm/sửa sách -->
    <CategoriesForm
      v-model:visible="showAddModal"
      :categori="selected"
      @refresh="fetch"
    />
  </div>
</template>

<script setup lang="ts">
import { useCrudList } from "~/composable/useCrudList";
import CategoriesForm from "~/components/CategoriesForm.vue";

definePageMeta({
  layout: "admin",
  middleware: "adminauth",
});

interface Categori {
  idGenres: number;
  nameGenres: string;
}

const {
  items: Categori,
  selectedItem: selected,
  showModal: showAddModal,
  fetchItems: fetch,
  editItem: editBook,
  deleteItem: deleteCategori,
  search,
} = useCrudList<Categori>({
  fetchUrl: "http://localhost:5278/api/Genres/getall",
  deleteUrl: (id) => `http://localhost:5278/api/Author/Delete?id=${id}`,
  filterFn: (categori, keyword) =>
    categori.nameGenres.toLowerCase().includes(keyword.toLowerCase()),
});

const pagination = { pageSize: 10 };

const columns = [
  { title: "ID", dataIndex: "idGenres" },
  { title: "Thể loại", dataIndex: "nameGenres" },
  { title: "Hành động", dataIndex: "action", key: "action" },
];
</script>
