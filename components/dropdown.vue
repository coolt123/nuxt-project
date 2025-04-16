<template>
  <a-dropdown >
    <a class="ant-dropdown-link" @click.prevent>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M4 5h13">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="14;0"
            />
          </path>
          <path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10h10">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.2s"
              dur="0.2s"
              values="12;0"
            />
          </path>
          <path stroke-dasharray="20" stroke-dashoffset="20" d="M4 15h16">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.4s"
              dur="0.2s"
              values="20;0"
            />
          </path>
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M4 20h13">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.6s"
              dur="0.2s"
              values="14;0"
            />
          </path>
        </g>
      </svg>
    </a>
    <template #overlay>
      <item/>
    </template>
  </a-dropdown>
</template>
<script lang="ts" setup>
import item from "./item.vue";
</script>
<style scoped>
.ant-dropdown-menu-item:hover {
  background-color: #d15252 !important; /* màu xám nhạt */
}
</style>
