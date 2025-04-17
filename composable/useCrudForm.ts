// composables/useCrudForm.ts
import { ref, watch } from "vue";

export function useCrudForm<T>(options: {
  propsData: () => T;
  modelValue: () => T | null;
  apiUrl: string;
  idField?: keyof T;
  
}) {
  const form = ref<T>(options.propsData());

  watch(
    options.modelValue,
    (val) => {
      if (val) form.value = { ...val };
      else form.value = options.propsData();
    },
    { immediate: true }
  );

  const handleSubmit = async () => {
    const data = form.value;
    const idField = options.idField ?? "id";

    const hasId = (data as any)[idField];

    const method = hasId ? "PUT" : "POST";
    const url = hasId
      ? `${options.apiUrl}/${(data as any)[idField]}`
      : options.apiUrl;

    await $fetch(url, {
      method,
      body: data,
    });
  };

  return {
    form,
    handleSubmit,
  };
}
