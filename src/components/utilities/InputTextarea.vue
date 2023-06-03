<script setup>
    import { computed, toRefs } from 'vue';

    const emit = defineEmits(['update:modelValue'])

    const props = defineProps({
        modelValue: String,
        default: '',
        required: true
    })

    const { modelValue } = toRefs(props)

    const inputUpdated = computed({
        get: () => modelValue.value,
        set: (val) => emit('update:modelValue',val)
    });

</script>

<template>
    <div>
        <label class="" for="details-desc">Issue Details<span class="ml-2 text-red-500">*</span></label>
        <textarea 
        v-model="inputUpdated"
        class="w-full rounded-lg border-gray-200 p-3 text-sm"
        placeholder="Additional details"
        rows="6"
        id="details-desc"
        ></textarea>
    </div>
</template>