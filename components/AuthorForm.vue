<template>
    <a-modal
      :visible="visible"
      title="Thông tin tác giả"
      @ok="handleSubmit"
      @cancel="handleClose"
    >
    <a-form :model="form">
        <a-form-item label="Id">
          <a-input v-model:value="form.idAuthor"disabled  />
        </a-form-item>
      </a-form>
      <a-form :model="form">
        <a-form-item label="Tác giả">
          <a-input v-model:value="form.nameAuthor" />
        </a-form-item>
      </a-form>
    </a-modal>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    visible: boolean;
    author: any;
  }>();
  const emit = defineEmits(["update:visible", "refresh"]);
  
  const form = ref({
    idAuthor: "",
    nameAuthor: "",
  });
  
  watch(
    () => props.author,
    (val) => {
      if (val) form.value = { ...val };
      else form.value = {
        idAuthor: "",
        nameAuthor: "",
      };
    },
    { immediate: true }
  );
  
  const handleSubmit = async () => {
    if (props.author?.idAuthor) {
      await $fetch("http://localhost:5278/api/Author/update", {
        method: "PUT",
        body: form.value,
      });
    } else {
      await $fetch("http://localhost:5278/api/Author/Create", {
        method: "POST",
        body: form.value,
      });
    }
    emit("update:visible", false);
    emit("refresh");
  };
  
  const handleClose = () => emit("update:visible", false);
  </script>
  