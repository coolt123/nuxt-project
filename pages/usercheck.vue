<template>
  <a-button  ref="tourButtonRef" @click="handleOpen(true)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="12" r="10"/><path d="M7.5 17c2.332-2.442 6.643-2.557 9 0m-2.005-7.5c0 1.38-1.12 2.5-2.503 2.5a2.5 2.5 0 0 1-2.504-2.5c0-1.38 1.12-2.5 2.504-2.5a2.5 2.5 0 0 1 2.503 2.5"/></g></svg></a-button>

  <a-tour :open="open" :steps="steps" @close="handleOpen(false)" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TourProps } from 'ant-design-vue';

const open = ref(false);
const tourButtonRef = ref(); // ref của nút "Begin Tour"

const steps: TourProps['steps'] = [
  {
    title: 'Welcome!',
    description: 'Click this button to begin your journey.',
    target: () => tourButtonRef.value?.$el, // trỏ vào DOM thật của nút
    placement: 'bottomRight', // hiển thị tooltip phía dưới nút
  },
];

const handleOpen = (val: boolean) => {
  open.value = val;
};
</script>
