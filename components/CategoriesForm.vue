<template>
    <a-modal
      :visible="visible"
      title="Thông tin thể loại"
      @ok="handleSubmit"
      @cancel="handleClose"
    >
      <a-form :model="form">
        <a-form-item label="Id">
          <a-input v-model:value="form.idGenres" disabled />
        </a-form-item>
      </a-form>
      <a-form :model="form">
        <a-form-item label="Thể loại">
          <a-input v-model:value="form.nameGenres" />
        </a-form-item>
      </a-form>
    </a-modal>
  </template>
  
  <script setup lang="ts">
  import { useCrudForm } from '~/composable/useCrudForm';
  
  const props = defineProps<{
    visible: boolean;
    categori: any;
  }>();
  const emit = defineEmits(["update:visible", "refresh"]);
  
  const { form, handleSubmit: submit } = useCrudForm({
    propsData: () => ({
        idGenres: "",
        nameGenres: "",
    }),
    modelValue: () => props.categori,
    apiUrl: "http://localhost:5278/api/Genres/Create",
    idField: "idGenres",
  });
  
  const handleSubmit = async () => {
    await submit();
    emit("update:visible", false);
    emit("refresh");
  };
  
  const handleClose = () => emit("update:visible", false);
  </script>
  
  