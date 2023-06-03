<script setup>
    import { RouterLink } from 'vue-router';

    const props = defineProps({
        link: String,
    });
</script>
<template>
    <li class="my-px">
        <router-link :to="{name:link}" active-class="bg-midBlue text-gray-700"
        class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-midBlue hover:text-gray-700"
        >
        <slot />
        </router-link>
    </li>
</template>