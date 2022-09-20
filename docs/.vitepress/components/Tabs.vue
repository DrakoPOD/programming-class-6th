<template>
    <div class="tabRibbon">
        <template v-for="tab,i in tabs" :key="i">
            <span :class="{active: activeTab == i}" @click="selectTab(i)">{{tab.label}}</span>
        </template>
    </div>
    <template ref="child">
        <slot></slot>
    </template>
</template>

<script>
export default {
    name: "Tabs"
}
</script>

<script setup>
import { onMounted, ref, useSlots } from "vue"
import Tab from "./Tab.vue"

const tabs = ref([])
const activeTab = ref(0)
const slots = useSlots()
const child = ref(null)
const tas = ref(null)

function selectTab(idx) {
    activeTab.value = idx;
    tabs.value = slots.default().filter(child => child.type === 'Tab')
    tabs.value.forEach((tab, i) => {
        console.log(1)
        // tab.isActive = (idx == i)
    });
}

onMounted(() => {
    tabs.value = slots.default().filter(child => child.type === 'Tab')
    console.log(child)
})
</script>

<style scoped>
.tabRibbon {
    display: flex;
    height: 40px
}

.tabRibbon span {
    display: inline-block;
    padding: 10px 10px;
    cursor: pointer;
}

.active {
    border-bottom: 4px solid green;
}
</style>