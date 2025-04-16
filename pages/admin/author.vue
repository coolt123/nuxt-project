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
              <a-button @click="editBook(record as Author)">Sửa</a-button>
              <a-popconfirm
                title="Bạn có chắc chắn muốn xóa sách này?"
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
  import { ref, onMounted } from "vue";
  import AuthorForm from "~/components/AuthorForm.vue";
  definePageMeta({
    layout: "admin",middleware:"adminauth"
  });

  interface Author {
    idAuthor: number;
    nameAuthor: string;
  }
  
  const authors = ref<Author[]>([]); 
  const showAddModal = ref(false);
  const selected = ref<Author | null>(null); 
  
  const pagination = {
    pageSize: 10,
  };
  
  const columns = [
    { title: "ID", dataIndex: "idAuthor" },
    { title: "Tác giả", dataIndex: "nameAuthor" },
    { title: "Hành động", dataIndex: "action", key: "action" },
  ];
  
  const fetch = async () => {
    try {
      const res = await $fetch("http://localhost:5278/api/Author/GetAll");
      authors.value = res as Author[]; // Ép kiểu rõ ràng cho dữ liệu trả về là mảng Book
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu sách", error);
    }
  };
  
  const editBook = (author: Author) => {
    // Định kiểu cho tham số book
    selected.value = author;
    showAddModal.value = true;
  };
  
  const deleteAuthor = async (idAuthor: number) => {
    await $fetch(`http://localhost:5278/api/Author/Delete?id=${idAuthor}`, { method: "DELETE" });
    fetch();
  };
  
  onMounted(() => {
    fetch();
  });
  </script>
  