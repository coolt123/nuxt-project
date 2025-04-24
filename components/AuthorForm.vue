<template>
  <a-modal
    :visible="visible"
    title="Thông tin tác giả"
    @ok="handleSubmit"
    @cancel="handleClose"
  >
    <a-form :model="form">
      <a-form-item label="Id">
        <a-input v-model:value="form.idAuthor" disabled />
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
import { useCrudForm } from '~/composable/useCrudForm';

const props = defineProps<{
  visible: boolean;
  author: any;
}>();
const emit = defineEmits(["update:visible", "refresh"]);

const { form, handleSubmit: submit } = useCrudForm({
  propsData: () => ({
    idAuthor: "",
    nameAuthor: "",
  }),
  modelValue: () => props.author,
  apiUrl: "http://localhost:5278/api/Author/Create",
  idField: "idAuthor",
});

const handleSubmit = async () => {
  await submit();
  emit("update:visible", false);
  emit("refresh");
};

const handleClose = () => emit("update:visible", false);
</script>

