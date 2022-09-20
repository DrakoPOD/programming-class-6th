<template>
    <div v-show="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Tab"
}
</script>
<script setup>
import { ref } from "vue";

const active = ref(false)
const label = defineProps(['label']).label
defineExpose({
    active,
    label
})
</script>
