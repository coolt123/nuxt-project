<template>
  <div class="p-6">
    <h1 class="text-xl font-semibold mb-4">Danh sách sách</h1>
    <a-button
      type="primary"
      @click="
        () => {
          selectedBook = null;
          showAddModal = true;
        }
      "
    >
      Thêm sách
    </a-button>

    <a-input
      v-model:value="search"
      placeholder="Tìm kiếm sách..."
      style="width: 300px; margin-bottom: 16px; margin-left: 30px"
    />

    <a-table
      :columns="columns"
      :data-source="books"
      :pagination="pagination"
      rowKey="id"
      class="mt-4"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <a-space>
            <a-button @click="editBook(record as Book)">Sửa</a-button>
            <a-popconfirm
              title="Bạn có chắc chắn muốn xóa sách này?"
              @confirm="deleteBook(record.id)"
            >
              <a-button danger>Xóa</a-button>
            </a-popconfirm>
          </a-space>
        </template>
      </template>
    </a-table>

    <!-- Modal thêm/sửa sách -->
    <BookFormModal
      v-model:visible="showAddModal"
      :book="selectedBook"
      @refresh="fetchBooks"
    />
  </div>
</template>

<script setup lang="ts">
import { useCrudList } from "~/composable/useCrudList";
import BookFormModal from "~/components/BookFormModal.vue";

definePageMeta({
  layout: "admin",
  middleware: "adminauth",
});

interface Book {
  id: number;
  title: string;
  authorName: string;
  nameGenres: string;
  quantityInStock: number;
  rentalPrice: number;
  publishingYear: number;
}

const {
  items: books,
  selectedItem: selectedBook,
  showModal: showAddModal,
  fetchItems: fetchBooks,
  editItem: editBook,
  deleteItem: deleteBook,
  search,
  
} = useCrudList<Book>({
  fetchUrl: "http://localhost:5278/api/Book/getall",
  deleteUrl: (id) => `/api/admin/books/${id}`,
  filterFn: (book, keyword) => {
  const key = keyword.toLowerCase();
  return (
    book.title.toLowerCase().includes(key) ||
    book.authorName.toLowerCase().includes(key) ||
    book.nameGenres.toLowerCase().includes(key));
}});

const pagination = { pageSize: 10 };

const columns = [
  { title: "Tiêu đề", dataIndex: "title" },
  { title: "Tác giả", dataIndex: "authorName" },
  { title: "Thể loại", dataIndex: "nameGenres" },
  { title: "Tồn kho", dataIndex: "quantityInStock" },
  { title: "Giá thuê", dataIndex: "publishingYear" },
  { title: "Hành động", dataIndex: "action", key: "action" },
];
</script>
