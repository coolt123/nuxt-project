<template>
    <a-float-button-group shape="square" :style="{ right: '94px' }">
      <a-float-button>
        <template #icon>
          <SyncOutlined />
        </template>
      </a-float-button>
      <a-back-top :visibility-height="0" />
    </a-float-button-group>
  </template>
  <script lang="ts" setup>
  import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons-vue';
  </script>
  
  