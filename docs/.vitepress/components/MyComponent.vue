<template>
    <div class="tabRibbon">
        <template v-for="tab,i in tabs" :key="i">
            <span :class="{active: activeTab == i}" @click="activeTab = i">{{tab}}</span>
        </template>
    </div>

    <slot name="default" />
</template>

<script>
export default {
    name: "MyComponent"
}
</script>

<script setup>
import { computed, ref, useSlots, useAttrs } from 'vue'
const slots = useSlots();
const tabs = Object.keys(slots).filter(x => x != 'default')
console.log(slots)
// const tabsLabel = tabs.map(x => slots[x]().props.label != undefined ? slots[x].props.label : "Sin etiqueta")
const activeTab = ref(0)

const slotName = computed(() => {
    return 0
    //return slots.default()[activeTab].props.name
})
console.log(slots.default())
    // function clicked(id){
    //     console.log(slots.default()[id].props.label)
    // }

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