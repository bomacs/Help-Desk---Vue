<script setup>
    import { computed, toRefs } from 'vue';

    const emit = defineEmits(['update:bugFixRequest'])

    const props = defineProps({
        bugFixRequest: String,
        required: true
    },{
        
    })

    const { bugFixRequest } = toRefs(props)

    const bugFixRequestUpdated = computed({
        get: () => bugFixRequest.value,
        set: (val) => emit('update:bugFixRequest',val)
    });

</script>

<template>
    <div>
        <label class="" for="details-desc">Issue Details<span class="ml-2 text-red-500">*</span></label>
        <textarea 
        v-model="bugFixRequestUpdated"
        class="w-full rounded-lg border-gray-200 p-3 text-sm"
        placeholder="Additional details"
        rows="6"
        id="details-desc"
        ></textarea>
    </div>
</template>