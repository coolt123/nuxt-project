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
import { ref, onMounted } from "vue";
import BookFormModal from "../../components/BookFormModal.vue";
definePageMeta({
  layout: "admin",middleware:"adminauth"
});
// Định nghĩa interface cho Book để giúp TypeScript suy luận kiểu dữ liệu
interface Book {
  id: number;
  title: string;
  authorName: string;
  nameGenres: string;
  quantityInStock: number;
  rentalPrice: number;
  publishingYear: number;
}

const books = ref<Book[]>([]); // Định kiểu cho books là mảng các đối tượng Book
const showAddModal = ref(false);
const selectedBook = ref<Book | null>(null); // selectedBook có thể là một đối tượng Book hoặc null

const pagination = {
  pageSize: 10,
};

const columns = [
  { title: "Tiêu đề", dataIndex: "title" },
  { title: "Tác giả", dataIndex: "authorName" },
  { title: "Thể loại", dataIndex: "nameGenres" },
  { title: "Tồn kho", dataIndex: "quantityInStock" },
  { title: "Giá thuê", dataIndex: "publishingYear" },
  { title: "Hành động", dataIndex: "action", key: "action" },
];

const fetchBooks = async () => {
  try {
    const res = await $fetch("http://localhost:5278/api/Book/getall");
    books.value = res as Book[]; // Ép kiểu rõ ràng cho dữ liệu trả về là mảng Book
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu sách", error);
  }
};

const editBook = (book: Book) => {
  // Định kiểu cho tham số book
  selectedBook.value = book;
  showAddModal.value = true;
};

const deleteBook = async (id: number) => {
  await $fetch(`/api/admin/books/${id}`, { method: "DELETE" });
  fetchBooks();
};

onMounted(() => {
  fetchBooks();
});
</script>
