<template>
    <h2>t {{ test }}</h2>
    <h3> {{ token }}</h3>
</template>
<script setup lang="ts">
import { useAuth } from '~/composable/useAuth';

const mst=ref('')
const {login,token}=useAuth();
const test=login('eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1c2VyMkBleGFtcGxlLmNvbSIsImp0aSI6IjNiOTA4YTU1LTdmZTgtNGU0Mi04ZWY4LTI2NjI4MGRmMzYzNSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiOTIyYzllMjctNzg5Mi00NTlhLTgwNjQtODlmN2VmZDhlMDM4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQ3VzdG9tZXIiLCJleHAiOjE3NDM2NzI2MDUsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTI3OCIsImF1ZCI6IlVzZXIifQ.YoO51wTTZZLvzO5FQ1oBMiaOgo6OVxnqEmMAIbTeWWYvZfTdziqR5Pd6ifDVREIMWbLQ-XC70MAvLllE3VyeYA');

</script>