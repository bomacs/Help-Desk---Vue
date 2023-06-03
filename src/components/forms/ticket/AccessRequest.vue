<script setup>
    import { computed, toRefs } from 'vue';

    const emit = defineEmits(['update:accessRequest'])

    const props = defineProps({
        accessRequest: Object,
        ticketType: Number,
        required: true
    });

    const modules = [
        {id: 1, name:'Super-Admin'},
        {id: 2,  name:"Admin"},
        {id: 3, name: "Standard"}
    ];

    const { accessRequest } = toRefs(props)

    const inputsUpdated = computed({
        get: () => accessRequest.value,
        set: (val) => emit('update:accessRequest',val)
    });
</script>

<template>
    <div v-if="ticketType === 2">
        <label class="" for="moduleType">Module Type<span class="ml-2 text-red-500">*</span></label>
        <select v-model="inputsUpdated.moduleType" id="moduleType" class="w-full rounded-lg border-gray-200 p-3 text-sm" required>
            <option v-for="mod in modules" :key="mod.id" :value="mod.name">{{ mod.name }} </option>
        </select>
    </div>
    <div>
        <label class="" for="details-desc">Description<span class="ml-2 text-red-500">*</span></label>
        <textarea 
        v-model="inputsUpdated.details_desc"
        class="w-full rounded-lg border-gray-200 p-3 text-sm"
        placeholder="Additional details"
        rows="6"
        id="details-desc"
        ></textarea>
    </div>
</template>