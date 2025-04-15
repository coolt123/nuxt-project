<template>
    <a-modal
      :visible="visible"
      title="Thông tin sách"
      @ok="handleSubmit"
      @cancel="handleClose"
    >
      <a-form :model="form">
        <a-form-item label="Tiêu đề">
          <a-input v-model:value="form.title" />
        </a-form-item>
        <a-form-item label="Tác giả">
          <a-input v-model:value="form.authorName" />
        </a-form-item>
        <a-form-item label="Thể loại">
          <a-input v-model:value="form.nameGenres" />
        </a-form-item>
        <a-form-item label="Tồn kho">
          <a-input-number v-model:value="form.quantityInStock" />
        </a-form-item>
        <a-form-item label="Giá thuê">
          <a-input-number v-model:value="form.rentalPrice" />
        </a-form-item>
      </a-form>
    </a-modal>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    visible: boolean;
    book: any;
  }>();
  const emit = defineEmits(["update:visible", "refresh"]);
  
  const form = ref({
    title: "",
    authorName: "",
    nameGenres: "",
    quantityInStock: 0,
    rentalPrice: 0,
  });
  
  watch(
    () => props.book,
    (val) => {
      if (val) form.value = { ...val };
      else form.value = {
        title: "",
        authorName: "",
        nameGenres: "",
        quantityInStock: 0,
        rentalPrice: 0,
      };
    },
    { immediate: true }
  );
  
  const handleSubmit = async () => {
    if (props.book?.id) {
      await $fetch(`/api/admin/books/${props.book.id}`, {
        method: "PUT",
        body: form.value,
      });
    } else {
      await $fetch("http://localhost:5278/api/Book/Create/Book", {
        method: "POST",
        body: form.value,
      });
    }
    emit("update:visible", false);
    emit("refresh");
  };
  
  const handleClose = () => emit("update:visible", false);
  </script>
  